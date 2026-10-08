import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import assert from "node:assert/strict"
import { createServer } from "vite"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outputDirectory = path.join(root, "dist")
const routes = ["/", "/services", "/pricing", "/industries", "/about", "/contact", "/legal"]
const indexableRoutes = ["/", "/services", "/pricing", "/industries", "/about", "/contact"]
const metadataTagPattern = /<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*\/?>/gi

let viteServer

try {
  const sitemap = await readFile(path.join(root, "public", "sitemap.xml"), "utf8")
  const robots = await readFile(path.join(root, "public", "robots.txt"), "utf8")
  const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(([, location]) => new URL(location).pathname)
  assert.deepEqual(sitemapRoutes, indexableRoutes, "Sitemap routes must match the indexable pre-rendered routes")
  assert.match(robots, /^Sitemap:\s+https:\/\/slick\.asappy\.tech\/sitemap\.xml$/m, "robots.txt must reference the canonical sitemap")

  viteServer = await createServer({
    configFile: path.join(root, "vite.config.ts"),
    mode: "production",
    appType: "custom",
    server: {
      middlewareMode: true,
    },
  })

  const { render } = await viteServer.ssrLoadModule("/src/entry-server.tsx")
  const template = await readFile(path.join(outputDirectory, "index.html"), "utf8")

  for (const route of routes) {
    const renderedMarkup = render(route)
    const headTags = []
    const structuredData = [...renderedMarkup.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    for (const [, json] of structuredData) JSON.parse(json)
    const bodyMarkup = renderedMarkup.replace(metadataTagPattern, (tag) => {
      headTags.push(tag)
      return ""
    })
    const titleTags = headTags.filter((tag) => /^<title\b/i.test(tag))
    const descriptionTags = headTags.filter((tag) => /^<meta\b(?=[^>]*name="description")/i.test(tag))
    const canonicalTags = headTags.filter((tag) => /^<link\b(?=[^>]*rel="canonical")/i.test(tag))
    assert.equal(titleTags.length, 1, `${route} must render exactly one title`)
    assert.equal(descriptionTags.length, 1, `${route} must render exactly one description`)
    assert.equal(canonicalTags.length, 1, `${route} must render exactly one canonical URL`)
    assert.equal(
      canonicalTags[0].match(/href="([^"]+)"/)?.[1],
      `https://slick.asappy.tech${route === "/" ? "/" : route}`,
      `${route} must use the canonical domain and route`,
    )
    assert.match(bodyMarkup, /<h1\b/, `${route} must pre-render its primary page heading`)
    assert.doesNotMatch(bodyMarkup, /style="[^"]*opacity:\s*0(?:[;"])/, `${route} must not pre-render hidden page content`)
    assert.ok(structuredData.length > 0, `${route} must include valid structured data`)

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
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1, `${route} must not duplicate canonical URLs`)
    assert.equal((html.match(/name="description"/g) ?? []).length, 1, `${route} must not duplicate descriptions`)
    if (route === "/legal") {
      assert.match(html, /name="robots" content="noindex, follow"/i, "The draft legal page must remain out of search results")
    }
    const routeDirectory = route === "/"
      ? outputDirectory
      : path.join(outputDirectory, route.slice(1))
    const routeHtmlPath = path.join(routeDirectory, "index.html")

    await mkdir(routeDirectory, { recursive: true })
    await writeFile(routeHtmlPath, html)
    if (route !== "/") {
      await writeFile(path.join(outputDirectory, `${route.slice(1)}.html`), html)
    }
    console.log(`Pre-rendered ${route}`)
  }
} catch (error) {
  console.error("SEO pre-rendering failed", error)
  process.exitCode = 1
} finally {
  await viteServer?.close()
}
