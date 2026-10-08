import { Link } from "react-router-dom"
import { canonicalPath, siteOrigin, type SiteRoute } from "../seo/site"

type SeoProps = {
  route: SiteRoute
  structuredData?: Record<string, unknown>
}

const defaultImage = `${siteOrigin}/images/kevin-laptop.jpg`

function safeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

function makeBreadcrumbData(path: string, labels: string[]) {
  if (labels.length === 0) return null

  const pathSegments = path.split("/").filter(Boolean)
  const breadcrumbLabels = ["Home", ...labels]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbLabels.map((name, index) => {
      const itemPath = index === 0
        ? "/"
        : `/${pathSegments.slice(0, index).join("/")}/`
      return {
        "@type": "ListItem",
        position: index + 1,
        name,
        item: `${siteOrigin}${itemPath}`,
      }
    }),
  }
}

export function Seo({ route, structuredData }: SeoProps) {
  const path = canonicalPath(route.path)
  const canonicalUrl = `${siteOrigin}${path}`
  const breadcrumbData = makeBreadcrumbData(path, route.breadcrumbs)
  const webpageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": `${siteOrigin}/#website` },
  }

  return (
    <>
      <title>{route.title}</title>
      <meta name="description" content={route.description} />
      {route.canonical !== false && <link rel="canonical" href={canonicalUrl} />}
      {!route.indexable && <meta name="robots" content="noindex, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SlickFunnel" />
      <meta property="og:title" content={route.title} />
      <meta property="og:description" content={route.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content="Kevin at SlickFunnel helping small businesses with their online presence" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={route.title} />
      <meta name="twitter:description" content={route.description} />
      <meta name="twitter:image" content={defaultImage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageData) }}
      />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }}
        />
      )}
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbData) }}
        />
      )}
      {route.breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-5 text-sm text-slate-500 md:px-8">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link className="underline-offset-4 hover:underline" to="/">Home</Link></li>
            {route.breadcrumbs.map((label, index) => {
              const itemPath = `/${path.split("/").filter(Boolean).slice(0, index + 1).join("/")}/`
              const current = index === route.breadcrumbs.length - 1
              return (
                <li key={itemPath} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {current
                    ? <span aria-current="page">{label}</span>
                    : <Link className="underline-offset-4 hover:underline" to={itemPath}>{label}</Link>}
                </li>
              )
            })}
          </ol>
        </nav>
      )}
    </>
  )
}
