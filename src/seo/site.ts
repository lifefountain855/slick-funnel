export const siteOrigin = "https://slick.asappy.tech"

export type SiteRoute = {
  path: string
  title: string
  description: string
  breadcrumbs: string[]
  indexable: boolean
  canonical?: boolean
  lastModified?: string
}

const contentUpdated = "2026-10-08"

export const siteRoutes = {
  home: {
    path: "/",
    title: "Small-Business Websites & Local SEO | SlickFunnel",
    description:
      "Custom websites and local SEO for small businesses. Kevin at SlickFunnel serves South Florida locally and Eastern Idaho remotely.",
    breadcrumbs: [],
    indexable: true,
    lastModified: contentUpdated,
  },
  services: {
    path: "/services/",
    title: "Small-Business Website & Digital Services | SlickFunnel",
    description:
      "Explore custom websites, local search, lead capture, workflow automation, and practical AI help from Kevin at SlickFunnel.",
    breadcrumbs: ["Services"],
    indexable: true,
    lastModified: contentUpdated,
  },
  webDesign: {
    path: "/services/web-design/",
    title: "Custom Small-Business Web Design | SlickFunnel",
    description:
      "Plan a useful, mobile-friendly small-business website with Kevin at SlickFunnel. See the process, scope, and how to discuss project pricing.",
    breadcrumbs: ["Services", "Web Design"],
    indexable: true,
    lastModified: contentUpdated,
  },
  seo: {
    path: "/services/seo/",
    title: "Local SEO for Small Businesses | SlickFunnel",
    description:
      "Practical local search and Google Business Profile support for small businesses, with clear expectations and no promised rankings.",
    breadcrumbs: ["Services", "Local SEO"],
    indexable: true,
    lastModified: contentUpdated,
  },
  industries: {
    path: "/industries/",
    title: "Website Support for Local & Home-Service Businesses | SlickFunnel",
    description:
      "Custom websites and practical online support help local and home-service businesses explain their work and make it easier for customers to get in touch.",
    breadcrumbs: ["Industries"],
    indexable: true,
    lastModified: contentUpdated,
  },
  pricing: {
    path: "/pricing/",
    title: "Small-Business Website & Support Pricing | SlickFunnel",
    description:
      "Review SlickFunnel's published monthly plans, setup charges, included services, and commitments before starting a conversation.",
    breadcrumbs: ["Pricing"],
    indexable: true,
    lastModified: contentUpdated,
  },
  about: {
    path: "/about/",
    title: "About Kevin at SlickFunnel | Small-Business Website Partner",
    description:
      "Meet Kevin at SlickFunnel, offering custom websites and practical online support in South Florida and remotely in Eastern Idaho.",
    breadcrumbs: ["About Kevin"],
    indexable: true,
    lastModified: contentUpdated,
  },
  contact: {
    path: "/contact/",
    title: "Contact Kevin at SlickFunnel | Small-Business Website Help",
    description:
      "Talk with Kevin about a website, local SEO, or online system. Local service in South Florida; remote support in Eastern Idaho.",
    breadcrumbs: ["Contact"],
    indexable: true,
    lastModified: contentUpdated,
  },
  resources: {
    path: "/resources/",
    title: "Small-Business Search & Marketing Resources | SlickFunnel",
    description:
      "Browse practical resources from Kevin at SlickFunnel on websites, local search, and AI-powered search visibility.",
    breadcrumbs: ["Resources"],
    indexable: true,
    lastModified: contentUpdated,
  },
  guides: {
    path: "/resources/guides/",
    title: "Practical Guides for Small Businesses | SlickFunnel",
    description:
      "Use SlickFunnel's practical guides to check local search basics and prepare a website for search and AI-powered discovery.",
    breadcrumbs: ["Resources", "Guides"],
    indexable: true,
    lastModified: contentUpdated,
  },
  localSearchGuide: {
    path: "/resources/guides/local-search-checklist/",
    title: "Local Search Checklist for Service-Area Businesses | SlickFunnel",
    description:
      "A practical checklist for accurate Google Business Profile details, useful service pages, trust signals, and measuring local-search progress.",
    breadcrumbs: ["Resources", "Guides", "Local Search Checklist"],
    indexable: true,
    lastModified: contentUpdated,
  },
  aiSearchGuide: {
    path: "/resources/guides/ai-search-readiness/",
    title: "AI Search Readiness: A Practical Guide for Small Businesses | SlickFunnel",
    description:
      "A grounded guide to making small-business website content crawlable, clear, useful, and eligible for AI-powered search features—with no ranking tricks.",
    breadcrumbs: ["Resources", "Guides", "AI Search Readiness"],
    indexable: true,
    lastModified: contentUpdated,
  },
  legal: {
    path: "/legal/",
    title: "Terms of Service & Privacy Policy | SlickFunnel",
    description: "SlickFunnel's terms of service and privacy policy.",
    breadcrumbs: ["Terms and Privacy"],
    indexable: false,
  },
  notFound: {
    path: "/404/",
    title: "Page Not Found | SlickFunnel",
    description: "The page you are looking for could not be found.",
    breadcrumbs: [],
    indexable: false,
    canonical: false,
  },
} satisfies Record<string, SiteRoute>

export const publicRoutes = [
  siteRoutes.home,
  siteRoutes.services,
  siteRoutes.webDesign,
  siteRoutes.seo,
  siteRoutes.industries,
  siteRoutes.pricing,
  siteRoutes.about,
  siteRoutes.contact,
  siteRoutes.resources,
  siteRoutes.guides,
  siteRoutes.localSearchGuide,
  siteRoutes.aiSearchGuide,
] as const

export type PublicRoutePath = (typeof publicRoutes)[number]["path"]

export function canonicalPath(path: string) {
  const normalized = path.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, "")
  return normalized ? `/${normalized}/` : "/"
}
