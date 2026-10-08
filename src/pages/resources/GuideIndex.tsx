import { ArrowRight, BookOpenText } from "lucide-react"
import { Link } from "react-router-dom"
import { Seo } from "../../components/Seo"
import { siteRoutes } from "../../seo/site"

const guides = [
  {
    path: siteRoutes.localSearchGuide.path,
    title: "Local search checklist for service-area businesses",
    description: "A step-by-step review of accurate profile information, real service areas, useful website pages, customer trust, and measurement.",
    topic: "Local search",
  },
  {
    path: siteRoutes.aiSearchGuide.path,
    title: "AI search readiness: a practical guide for small businesses",
    description: "What to prioritize for AI-powered search visibility—and what current Google guidance does not promise.",
    topic: "AI-powered search",
  },
]

export function GuideIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Seo route={siteRoutes.guides} />
      <section className="px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Practical guides</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-tight text-navy md:text-7xl">
            Clear checklists, grounded in real guidance.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Start with a direct answer, follow the steps that apply to your business, and use the linked primary sources to verify platform-specific requirements. None of these guides promises rankings, citations, or a specific number of leads.
          </p>
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <article key={guide.path} className="rounded-3xl border border-[#e9e2d5] p-7 md:p-9">
              <BookOpenText size={22} className="text-primary" aria-hidden="true" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#52705d]">{guide.topic}</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-navy">{guide.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
              <Link to={guide.path} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
                Read this guide <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
