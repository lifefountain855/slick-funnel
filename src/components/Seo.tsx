type SeoProps = {
  title: string
  description: string
  path: string
  noIndex?: boolean
  structuredData?: Record<string, unknown>
  breadcrumbLabel?: string
}

const siteUrl = "https://slick.asappy.tech"
const defaultImage = `${siteUrl}/kevin-laptop.jpg`

function makeBreadcrumbData(path: string, label: string) {
  if (path === "/") return null

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${siteUrl}${path}`,
      },
    ],
  }
}

export function Seo({
  title,
  description,
  path,
  noIndex = false,
  structuredData,
  breadcrumbLabel,
}: SeoProps) {
  const canonicalUrl = `${siteUrl}${path}`
  const breadcrumbData = makeBreadcrumbData(path, breadcrumbLabel ?? title.split("|")[0].trim())

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SlickFunnel" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content="Kevin at SlickFunnel helping small businesses with their online presence" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      )}
    </>
  )
}
