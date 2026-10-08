import { siteOrigin, siteRoutes, type SiteRoute } from "./site"

export function makeArticleSchema(route: SiteRoute) {
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteOrigin}${route.path}#article`,
    headline: route.title.replace(/ \| SlickFunnel$/, ""),
    description: route.description,
    mainEntityOfPage: { "@id": `${siteOrigin}${route.path}#webpage` },
    author: {
      "@type": "Person",
      name: "Kevin",
      url: `${siteOrigin}${siteRoutes.about.path}`,
    },
    publisher: { "@id": `${siteOrigin}/#organization` },
    inLanguage: "en-US",
  }

  if (route.lastModified) {
    article.datePublished = route.lastModified
    article.dateModified = route.lastModified
  }

  return article
}
