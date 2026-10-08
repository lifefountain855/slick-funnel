import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Seo } from "../../components/Seo"
import { siteOrigin, siteRoutes } from "../../seo/site"

const deliverables = [
  "Page structure that reflects your real services and customers",
  "Mobile-friendly layouts with clear, readable information",
  "Contact, quote-request, or booking paths that fit your business",
  "Basic on-page titles, descriptions, and links between related pages",
  "A review-and-test process before the site is launched",
]

const faqs = [
  {
    question: "Who is this website service for?",
    answer: "It is intended for small-business owners who need a clear, custom website rather than a generic template or a large-agency process. Work is local in South Florida and remote in Eastern Idaho.",
  },
  {
    question: "What does a SlickFunnel website project include?",
    answer: "The scope is agreed for each project. It can include page planning, custom page layouts, mobile-friendly presentation, clear service information, and contact or quote-request paths. Confirm exact deliverables before work begins.",
  },
  {
    question: "How much does a website cost?",
    answer: "The pricing page lists current monthly plans and setup charges, but it does not define a separate one-time price for every custom project. Review the listed inclusions and ask Kevin to confirm the exact scope and total in writing.",
  },
  {
    question: "How long does a website take to build?",
    answer: "There is no fixed launch-time promise on this site. Timing depends on the agreed scope, access to content and accounts, feedback, and approvals; the schedule should be confirmed for your project.",
  },
  {
    question: "What results should I expect?",
    answer: "A useful outcome is a site that explains your real offer, service area, and next step clearly on mobile and desktop. A website alone cannot guarantee search rankings, traffic, inquiries, or sales.",
  },
]

export function WebDesign() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        route={siteRoutes.webDesign}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${siteOrigin}${siteRoutes.webDesign.path}#service`,
          name: "Custom small-business web design",
          serviceType: "Small-business website design",
          description: "Custom, mobile-friendly websites that help small businesses explain their services and make it easier for customers to get in touch.",
          url: `${siteOrigin}${siteRoutes.webDesign.path}`,
          provider: { "@id": `${siteOrigin}/#organization` },
          areaServed: [
            { "@type": "AdministrativeArea", name: "South Florida" },
            { "@type": "AdministrativeArea", name: "Eastern Idaho", description: "Remote service" },
          ],
        }}
      />

      <section className="px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Custom website design</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-navy md:text-7xl">
              A small-business website that makes the next step clear.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              SlickFunnel plans and builds custom, mobile-friendly websites for small businesses. The work is shaped around the services you actually offer, the customers you serve, and how people can contact you.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact/">
              <Button size="lg" className="gap-2 rounded-full px-7">Discuss a website project <ArrowRight size={17} /></Button>
            </Link>
            <Link to="/pricing/" className="inline-flex items-center px-4 font-semibold text-primary underline underline-offset-4">Review current pricing</Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">Local service in South Florida; remote service in Eastern Idaho. No public walk-in address.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">What is custom web design for a small business?</h2>
            <p className="mt-4 leading-7 text-slate-600">
              It is planning and building a website around one business's services, information, and customer journey—not publishing a page that only changes the business name. A visitor should be able to tell what the business does, where it works, and what to do next.
            </p>
            <h2 className="mt-8 font-serif text-3xl font-semibold text-navy md:text-4xl">Who is it for, and what problem does it solve?</h2>
            <p className="mt-4 leading-7 text-slate-600">
              It may fit an owner whose current site is unclear, difficult to use on a phone, or missing a straightforward way to ask a question or request a quote. It is not a promise of more leads or a substitute for the business's own accurate information.
            </p>
          </div>
          <div className="rounded-3xl bg-[#eaf0e8] p-7 md:p-9">
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">What the project can include</h2>
            <ul className="mt-6 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-6 text-slate-700">
                  <Check size={18} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-600">The written project scope determines which deliverables are included.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">How the process works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["1. Understand the business", "Talk through your customers, services, service area, existing site, and the action you want visitors to take."],
              ["2. Agree on the scope", "Set the pages, features, responsibilities, price, and project schedule in writing before work starts."],
              ["3. Build, review, and test", "Review the content and layout together, check the important links and forms, and confirm the launch plan."],
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
              <p className="mt-2 leading-7 text-slate-600">Current monthly plans and setup charges are on the <Link to="/pricing/" className="font-semibold text-primary underline">pricing page</Link>. Ask which offer covers your requirements and confirm the full scope and total in writing.</p>
            </article>
            <article className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-navy">Timing</h3>
              <p className="mt-2 leading-7 text-slate-600">No fixed delivery time is promised here. Agree on a schedule after the scope, content, and approval steps are clear.</p>
            </article>
            <article className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-navy">Expected result</h3>
              <p className="mt-2 leading-7 text-slate-600">The goal is a useful site that communicates your offer and next step clearly. Search, lead, and sales results are not guaranteed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">Small-business web design FAQs</h2>
          <div className="mt-7 divide-y divide-slate-200">
            {faqs.map(({ question, answer }) => (
              <article key={question} className="py-5">
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/services/seo/" className="font-semibold text-primary underline underline-offset-4">Related: local SEO support</Link>
            <Link to="/industries/" className="font-semibold text-primary underline underline-offset-4">Businesses this work may fit</Link>
            <Link to="/resources/guides/local-search-checklist/" className="font-semibold text-primary underline underline-offset-4">Local search checklist</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
