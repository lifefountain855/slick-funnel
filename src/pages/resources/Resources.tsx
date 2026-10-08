import { ArrowRight, BookOpenText } from "lucide-react"
import { Link } from "react-router-dom"
import { Seo } from "../../components/Seo"
import { siteRoutes } from "../../seo/site"

export function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Seo route={siteRoutes.resources} />
      <section className="px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Resources</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-tight text-navy md:text-7xl">
            Useful answers for the online side of small business.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            These guides turn search and website questions into practical checks you can do yourself. They cite the relevant platform guidance, distinguish advice from guarantees, and avoid shortcuts such as duplicate city pages or invented reviews.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#e9e2d5] bg-[#fbfaf6] p-7 md:p-9">
            <BookOpenText size={23} className="text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-2xl font-semibold text-navy">Local search and service-area businesses</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Check business-profile accuracy, service-area details, useful website information, and what to measure—without promising a particular map position.
            </p>
            <Link to="/resources/guides/" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
              Browse practical guides <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
          <article className="rounded-3xl border border-[#e9e2d5] bg-[#fbfaf6] p-7 md:p-9">
            <BookOpenText size={23} className="text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-2xl font-semibold text-navy">AI-powered search visibility</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Understand what current search-platform guidance says about crawlability, helpful content, structured data, and the limits of “GEO” claims.
            </p>
            <Link to="/resources/guides/ai-search-readiness/" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
              Read the AI search guide <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-sm leading-6 text-slate-500">
          Written by Kevin at SlickFunnel. Platform documentation can change; check the cited guidance when you act on it.
        </p>
      </section>
    </div>
  )
}
