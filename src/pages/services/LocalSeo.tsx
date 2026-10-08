import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Seo } from "../../components/Seo"
import { siteOrigin, siteRoutes } from "../../seo/site"

const focusAreas = [
  "Check that your real business name, contact details, services, and service areas are described consistently.",
  "Make sure key website pages explain what you do and how a customer can reach you.",
  "Review public business-profile information for accuracy and completeness.",
  "Choose practical measures to review, such as useful site visits and genuine inquiry activity.",
]

const faqs = [
  {
    question: "What is local SEO?",
    answer: "Local SEO is work that helps a business present accurate, relevant information for people looking for nearby services. It can include business-profile details and clear service information on the website; it cannot control where a search engine places a result.",
  },
  {
    question: "Who is SlickFunnel's local SEO support for?",
    answer: "It is intended for small businesses that serve customers in a real service area and need help making their public business details and website easier to understand. SlickFunnel works locally in South Florida and remotely in Eastern Idaho.",
  },
  {
    question: "What does the service include?",
    answer: "The exact work is agreed in the project scope. It may include checking the accuracy of business information, clarifying service and service-area pages, and identifying practical ways to review progress. No profile access or change should be made without the business owner's authorization.",
  },
  {
    question: "How much does local SEO cost?",
    answer: "The pricing page currently lists Basic SEO in the Foundation plan and shows Growth as Coming Soon. It does not publish a separate price for standalone local SEO, so ask for the exact deliverables and total before agreeing to work.",
  },
  {
    question: "How long does local SEO take, and what results are realistic?",
    answer: "No fixed timeline or ranking result is promised. Search visibility can depend on factors outside the business's control, including relevance, distance, and prominence. A reasonable first goal is accurate information and a clear, useful path from search to contact.",
  },
]

export function LocalSeo() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        route={siteRoutes.seo}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${siteOrigin}${siteRoutes.seo.path}#service`,
          name: "Local SEO support for small businesses",
          serviceType: "Local search optimization",
          description: "Practical support to help small businesses keep business information accurate and make their services and service areas clear online.",
          url: `${siteOrigin}${siteRoutes.seo.path}`,
          provider: { "@id": `${siteOrigin}/#organization` },
          areaServed: [
            { "@type": "AdministrativeArea", name: "South Florida" },
            { "@type": "AdministrativeArea", name: "Eastern Idaho", description: "Remote service" },
          ],
        }}
      />

      <section className="px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Local search support</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-navy md:text-7xl">
              Make your local business information clear and useful.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              SlickFunnel helps small businesses make their services, business details, and real service areas easier for customers to understand across their website and local-search presence.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact/">
              <Button size="lg" className="gap-2 rounded-full px-7">Discuss local search support <ArrowRight size={17} /></Button>
            </Link>
            <Link to="/resources/guides/local-search-checklist/" className="inline-flex items-center px-4 font-semibold text-primary underline underline-offset-4">
              Use the local-search checklist
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">Local service in South Florida; remote service in Eastern Idaho. No public walk-in address.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">What does local SEO solve?</h2>
            <p className="mt-4 leading-7 text-slate-600">
              People need reliable answers about what a business does, where it serves customers, and how to contact it. Incomplete or conflicting information can make that decision harder. Local SEO support works on the accuracy and usefulness of those public details.
            </p>
            <h2 className="mt-8 font-serif text-3xl font-semibold text-navy md:text-4xl">What does SlickFunnel provide?</h2>
            <p className="mt-4 leading-7 text-slate-600">
              The scope is specific to the business. Work may include reviewing its public profile and website information, clarifying service pages and service areas, and agreeing how to evaluate useful activity. Any profile changes require the business owner's authorization.
            </p>
          </div>
          <div className="rounded-3xl bg-[#eaf0e8] p-7 md:p-9">
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">A practical starting checklist</h2>
            <ul className="mt-6 space-y-4">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-6 text-slate-700">
                  <Check size={18} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">How the work proceeds</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Understand the service area", "Confirm where customers are actually served, how the business works, and which details need to be clear."],
              ["Review what customers see", "Look at the relevant site pages and public business information; agree any changes before making them."],
              ["Make and measure practical changes", "Prioritize accurate information and useful contact paths, then review available activity without treating it as a guaranteed ranking result."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-[#e9e2d5] bg-white p-7">
                <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-navy">Cost</h3>
              <p className="mt-2 leading-7 text-slate-600">Basic SEO appears in the Foundation plan; the Growth plan is marked Coming Soon. Standalone scope and pricing are not published. <Link to="/pricing/" className="font-semibold text-primary underline">Review the current plan details</Link> and request a written scope.</p>
            </article>
            <article className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-navy">Timing</h3>
              <p className="mt-2 leading-7 text-slate-600">The project schedule depends on the agreed work and required approvals. Search engines control crawling and ranking timelines, so no ranking date is promised.</p>
            </article>
            <article className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-navy">Expected result</h3>
              <p className="mt-2 leading-7 text-slate-600">The work can improve the accuracy and clarity of your information. Google says local results are mainly based on relevance, distance, and prominence; no provider can guarantee a placement.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">Local SEO FAQs</h2>
          <div className="mt-7 divide-y divide-slate-200">
            {faqs.map(({ question, answer }) => (
              <article key={question} className="py-5">
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/services/web-design/" className="font-semibold text-primary underline underline-offset-4">Related: custom web design</Link>
            <Link to="/resources/guides/local-search-checklist/" className="font-semibold text-primary underline underline-offset-4">Local search checklist</Link>
            <Link to="/contact/" className="font-semibold text-primary underline underline-offset-4">Ask about your business</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
