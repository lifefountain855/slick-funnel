import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Seo } from "../components/Seo"
import { siteRoutes } from "../seo/site"

const examples = [
  "Contractors and home-service businesses",
  "HVAC, plumbing, and electrical services",
  "Landscaping, pool care, and pressure washing",
  "House-cleaning and other local service businesses",
]

export function Industries() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <Seo route={siteRoutes.industries} />
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who I work with</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-navy md:text-6xl">
            Online support for hands-on local businesses.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            If customers need to understand what you do, where you work, and how to reach you, a clear website and accurate local information can make that next step easier. I work locally in South Florida and remotely with businesses in Eastern Idaho.
          </p>
        </header>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-9" aria-labelledby="examples-heading">
          <h2 id="examples-heading" className="font-serif text-2xl font-semibold text-navy md:text-3xl">
            Types of businesses this work may fit
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            These are examples of businesses that may benefit from the services—not a client list or a claim of specialized results in each trade. Each project starts with your actual services, customers, and goals.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {examples.map((example) => (
              <li key={example} className="flex items-start gap-3 rounded-xl bg-white p-4 text-slate-700">
                <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2" aria-label="Relevant services">
          <article className="rounded-3xl border border-[#e9e2d5] p-7">
            <h2 className="font-serif text-2xl font-semibold text-navy">Make your services easier to understand</h2>
            <p className="mt-3 leading-7 text-slate-600">
              A custom website can explain what you offer, the areas you actually serve, and how a customer can request a quote or start a conversation.
            </p>
            <Link to="/services/web-design/" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
              See small-business web design <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
          <article className="rounded-3xl border border-[#e9e2d5] p-7">
            <h2 className="font-serif text-2xl font-semibold text-navy">Keep local information clear and accurate</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Local-search support focuses on making your business details and website useful to people deciding whether to contact you. It cannot promise a particular placement or number of leads.
            </p>
            <Link to="/services/seo/" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
              See local SEO support <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </section>

        <section className="mt-12" aria-labelledby="fit-heading">
          <h2 id="fit-heading" className="font-serif text-3xl font-semibold text-navy md:text-4xl">What working together looks like</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            First, we talk through your customers, services, and the problem you want to solve. Then we agree on the work, price, responsibilities, and schedule in writing. The available work includes websites, local-search support, lead capture, and practical online systems; the right mix depends on your needs.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-[#f5f1e8] p-6">
              <h3 className="font-semibold text-navy">Cost</h3>
              <p className="mt-2 leading-7 text-slate-600">The <Link to="/pricing/" className="font-semibold text-primary underline">pricing page</Link> lists current plans and setup charges. Confirm the exact price and included work before starting.</p>
            </article>
            <article className="rounded-2xl bg-[#f5f1e8] p-6">
              <h3 className="font-semibold text-navy">Timing</h3>
              <p className="mt-2 leading-7 text-slate-600">There is no fixed timeline for every business. Set the project schedule after the scope, materials, and approvals are understood.</p>
            </article>
            <article className="rounded-2xl bg-[#f5f1e8] p-6">
              <h3 className="font-semibold text-navy">Expected outcome</h3>
              <p className="mt-2 leading-7 text-slate-600">The work aims to make your online information and next steps clearer; it does not guarantee rankings, inquiries, or sales.</p>
            </article>
          </div>
        </section>

        <section className="mt-12 max-w-4xl" aria-labelledby="industry-faq-heading">
          <h2 id="industry-faq-heading" className="font-serif text-3xl font-semibold text-navy">Questions from local business owners</h2>
          <div className="mt-5 divide-y divide-slate-200">
            <article className="py-5">
              <h3 className="font-semibold text-navy">Does SlickFunnel have a separate page or proven case study for every trade?</h3>
              <p className="mt-2 leading-7 text-slate-600">No. The trades listed here are examples of businesses the work may fit, not a client roster or a claim of results in each industry. We will discuss your actual requirements before deciding on a scope.</p>
            </article>
            <article className="py-5">
              <h3 className="font-semibold text-navy">Can the website explain different services or service areas?</h3>
              <p className="mt-2 leading-7 text-slate-600">Yes, the agreed website scope can organize the real services and areas your business covers. Pages should add useful distinctions rather than repeat the same text with different town or trade names.</p>
            </article>
            <article className="py-5">
              <h3 className="font-semibold text-navy">Where does SlickFunnel provide support?</h3>
              <p className="mt-2 leading-7 text-slate-600">Service is local in South Florida and remote in Eastern Idaho. SlickFunnel does not advertise a public customer-facing office address.</p>
            </article>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-[#eaf0e8] p-7 md:p-10">
          <h2 className="font-serif text-3xl font-semibold text-navy">Start with the problem, not a preset package.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            A conversation can help work out whether a website, local-search support, or a simpler change is the right next step. Review the published plan details and ask for the project scope in writing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact/">
              <Button variant="accent" size="lg" className="rounded-full">Talk with Kevin</Button>
            </Link>
            <Link to="/resources/guides/" className="inline-flex items-center px-4 font-semibold text-primary underline underline-offset-4">
              Read practical guides
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
