import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import assert from "node:assert/strict"
import { createServer } from "vite"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicDirectory = path.join(root, "public")
const outputDirectory = path.join(root, "dist")
const metadataTagPattern = /<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*\/?>/gi
const sitemapPath = "/sitemap.xml"

let viteServer

try {
  viteServer = await createServer({
    configFile: path.join(root, "vite.config.ts"),
    mode: "production",
    appType: "custom",
    server: {
      middlewareMode: true,
    },
  })

  const { render } = await viteServer.ssrLoadModule("/src/entry-server.tsx")
  const { publicRoutes, siteRoutes, siteOrigin } = await viteServer.ssrLoadModule("/src/seo/site.ts")
  const indexableRoutes = publicRoutes.filter((route) => route.indexable)
  const sitemapRoutePaths = new Set(indexableRoutes.map((route) => route.path))
  assert.equal(sitemapRoutePaths.size, indexableRoutes.length, "Public routes must not contain duplicate paths")

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexableRoutes.flatMap((route) => {
      assert.match(route.path, /^\/$|^\/(?:[^/]+\/)+$/, `Indexable route must use a trailing slash: ${route.path}`)
      const entries = [`  <url><loc>${siteOrigin}${route.path}</loc>`]
      if (route.lastModified) {
        assert.match(route.lastModified, /^\d{4}-\d{2}-\d{2}$/, `Invalid lastmod for ${route.path}`)
        entries[0] += `<lastmod>${route.lastModified}</lastmod>`
      }
      entries[0] += "</url>"
      return entries
    }),
    "</urlset>",
    "",
  ].join("\n")
  await writeFile(path.join(publicDirectory, "sitemap.xml"), sitemap)
  await writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap)

  const robots = await readFile(path.join(publicDirectory, "robots.txt"), "utf8")
  const redirects = await readFile(path.join(publicDirectory, "_redirects"), "utf8")
  assert.match(robots, new RegExp(`^Sitemap:\\s+${siteOrigin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}${sitemapPath}$`, "m"), "robots.txt must reference the generated canonical sitemap")
  const oaiSearchBotGroup = robots
    .split(/^(?=User-agent:|Sitemap:)/im)
    .find((group) => /^User-agent:\s*OAI-SearchBot\s*$/im.test(group)) ?? ""
  assert.match(oaiSearchBotGroup, /^Allow:\s*\/\s*$/im, "OAI-SearchBot must be explicitly allowed")
  assert.doesNotMatch(oaiSearchBotGroup, /^Disallow:\s*\/\s*$/im, "OAI-SearchBot must not be blocked from the full site")
  for (const route of ["/services", "/pricing", "/industries", "/about", "/contact", "/audit"]) {
    assert.match(redirects, new RegExp(`^${route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+\\S+\\s+301$`, "m"), `${route} must have a permanent redirect`)
  }
  assert.match(redirects, /^\/\*\s+\/404\.html\s+404$/m, "Unknown URLs must return a real 404 on supported static hosts")

  const routesToRender = [...publicRoutes, siteRoutes.legal, siteRoutes.notFound]
  const template = await readFile(path.join(outputDirectory, "index.html"), "utf8")
  const routesWithIncomingLinks = new Set()

  for (const route of routesToRender) {
    const renderedMarkup = render(route.path)
    const headTags = []
    const structuredData = [...renderedMarkup.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    for (const [, json] of structuredData) JSON.parse(json)
    const bodyMarkup = renderedMarkup.replace(metadataTagPattern, (tag) => {
      headTags.push(tag)
      return ""
    })
    for (const [, href] of bodyMarkup.matchAll(/\bhref="(\/[^"]*)"/g)) {
      const targetPath = href.split(/[?#]/, 1)[0]
      const canonicalTarget = targetPath === "/"
        ? "/"
        : `/${targetPath.replace(/^\/+|\/+$/g, "")}/`
      if (sitemapRoutePaths.has(canonicalTarget)) routesWithIncomingLinks.add(canonicalTarget)
    }
    const countHeadTag = (pattern) => headTags.filter((tag) => pattern.test(tag)).length
    assert.equal(countHeadTag(/^<title\b/i), 1, `${route.path} must render exactly one title`)
    assert.equal(countHeadTag(/^<meta\b(?=[^>]*name="description")/i), 1, `${route.path} must render exactly one description`)
    const canonicalTags = headTags.filter((tag) => /^<link\b(?=[^>]*rel="canonical")/i.test(tag))
    if (route.canonical === false) {
      assert.equal(canonicalTags.length, 0, `${route.path} must not claim a canonical URL for an arbitrary missing page`)
    } else {
      assert.equal(canonicalTags.length, 1, `${route.path} must render exactly one canonical URL`)
      assert.equal(
        canonicalTags[0].match(/href="([^"]+)"/)?.[1],
        `${siteOrigin}${route.path}`,
        `${route.path} must use its canonical trailing-slash URL`,
      )
    }
    for (const property of ["og:type", "og:site_name", "og:title", "og:description", "og:url", "og:image"]) {
      assert.equal(countHeadTag(new RegExp(`^<meta\\b(?=[^>]*property="${property}")`, "i")), 1, `${route.path} must render exactly one ${property}`)
    }
    for (const name of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
      assert.equal(countHeadTag(new RegExp(`^<meta\\b(?=[^>]*name="${name}")`, "i")), 1, `${route.path} must render exactly one ${name}`)
    }
    assert.match(bodyMarkup, /<h1\b/, `${route.path} must pre-render its primary page heading`)
    assert.ok(structuredData.length >= 1, `${route.path} must include structured data`)
    if (route.path !== siteRoutes.notFound.path) {
      assert.ok(structuredData.length >= 2, `${route.path} must include WebPage and page-specific or breadcrumb structured data`)
    }
    assert.match(renderedMarkup, /"@type":"WebPage"/, `${route.path} must include WebPage structured data`)
    if (route.indexable) {
      assert.doesNotMatch(headTags.join("\n"), /name="robots"\s+content="noindex/i, `${route.path} must not be noindex`)
    } else {
      assert.match(headTags.join("\n"), /name="robots"\s+content="noindex, follow"/i, `${route.path} must remain out of search results`)
    }

    const templateWithoutDefaultMetadata = template
      .replace(/\s*<title\b[^>]*>[\s\S]*?<\/title>/i, "")
      .replace(/\s*<meta\b(?=[^>]*(?:name="description"|name="robots"|name="twitter:|property="og:))[^>]*\/?>/gi, "")
      .replace(/\s*<link\b(?=[^>]*rel="canonical")[^>]*\/?>/gi, "")

    if (!templateWithoutDefaultMetadata.includes('<div id="root"></div>')) {
      throw new Error("Could not find the app root in dist/index.html")
    }

    const html = templateWithoutDefaultMetadata
      .replace("</head>", `${headTags.join("\n    ")}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${bodyMarkup}</div>`)
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, route.canonical === false ? 0 : 1, `${route.path} must have the expected canonical URL count`)
    assert.equal((html.match(/name="description"/g) ?? []).length, 1, `${route.path} must not duplicate descriptions`)

    const routeHtmlPath = route.path === siteRoutes.notFound.path
      ? path.join(outputDirectory, "404.html")
      : route.path === "/"
        ? path.join(outputDirectory, "index.html")
        : path.join(outputDirectory, route.path.slice(1), "index.html")
    await mkdir(path.dirname(routeHtmlPath), { recursive: true })
    await writeFile(routeHtmlPath, html)
    console.log(`Pre-rendered ${route.path}`)
  }

  const generatedSitemap = await readFile(path.join(outputDirectory, "sitemap.xml"), "utf8")
  const generatedRoutes = [...generatedSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(([, location]) => new URL(location).pathname)
  assert.deepEqual(generatedRoutes, indexableRoutes.map((route) => route.path), "Sitemap routes must match the indexable pre-rendered routes")
  assert.ok(generatedRoutes.every((route) => sitemapRoutePaths.has(route)), "Sitemap must not include non-indexable routes")
  for (const route of indexableRoutes) {
    assert.ok(routesWithIncomingLinks.has(route.path), `${route.path} must be reachable through an internal link`)
  }
} catch (error) {
  console.error("SEO pre-rendering failed", error)
  process.exitCode = 1
} finally {
  await viteServer?.close()
}
