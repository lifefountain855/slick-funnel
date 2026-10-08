import { Link } from "react-router-dom"
import { Seo } from "../../components/Seo"
import { makeArticleSchema } from "../../seo/articleSchema"
import { siteRoutes } from "../../seo/site"

export function AiSearchGuide() {
  return (
    <article className="min-h-screen bg-background">
      <Seo route={siteRoutes.aiSearchGuide} structuredData={makeArticleSchema(siteRoutes.aiSearchGuide)} />
      <header className="mx-auto max-w-4xl px-4 pb-10 pt-12 md:px-8 md:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">AI-powered search guide</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-6xl">
          AI search readiness: a practical guide for small businesses
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Short answer: make the important information on your site crawlable, clear, accurate, and genuinely useful. Google's current guidance says its AI search features use the same foundational SEO best practices; there is no special markup or guaranteed shortcut that secures an AI answer or citation.
        </p>
        <p className="mt-5 text-sm text-slate-500">
          By <Link to="/about/" className="font-medium text-primary underline">Kevin at SlickFunnel</Link>
          {" · "}Published October 8, 2026
        </p>
      </header>

      <div className="mx-auto max-w-4xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="space-y-10 rounded-3xl bg-white p-6 md:p-10">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">What does “GEO” mean?</h2>
            <p className="mt-3 leading-7 text-slate-600">
              GEO is a broad industry term for improving the chance that useful content can be found, understood, and cited in generative search experiences. It is not a separate technical standard or a promise that a page will appear in an AI-generated answer. Search products decide what to crawl, index, and show.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">1. Make important information available to crawlers</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Check that public service and resource pages load successfully, are not accidentally marked noindex, and are not blocked by robots rules, authentication, or host/CDN settings. Put essential explanations in visible page text rather than only in an image, a form, or content that never renders for a visitor. Submit and maintain a sitemap, then use Search Console to inspect representative URLs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">2. Answer a real question with a complete, direct response</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Start a page with a clear definition or answer, then give the context, steps, limits, and sources a reader needs. Use headings that describe the section, name the responsible author where appropriate, and update facts when the source changes. A concise answer is helpful; removing necessary caveats is not.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              For a service page, explain who the service is for, what is included, how to begin, what it costs or how it is scoped, and what outcomes are not guaranteed. For an educational page, show the method, cite primary sources, and distinguish evidence from opinion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">3. Use links, images, and structured data honestly</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Link related pages with descriptive anchor text so people and crawlers can follow the subject. Use useful images when they add context, with accurate alternative text. Add structured data only when it represents content a visitor can see; valid markup does not guarantee a rich result or AI citation.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Keep business name, contact information, service areas, authorship, and published claims consistent. Do not add fake reviews, unsupported results, hidden keyword text, or a city-page template to simulate local expertise.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">4. Measure what can actually be observed</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Use Search Console to review indexing and the available web-search query and page data. Google reports traffic from its AI features within the overall Web search type, rather than promising a separate citation dashboard. Track site visits and genuine inquiries with the analytics tools you use, and keep the measurement period clear.
            </p>
          </section>

          <section className="rounded-2xl bg-[#eaf0e8] p-6">
            <h2 className="font-serif text-2xl font-semibold text-navy">Primary source and practical next steps</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Google's current <a className="text-primary underline" href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noreferrer">AI features and your website guidance</a> recommends the same technical requirements and SEO fundamentals used for Search generally, including crawl access, discoverable links, useful visible text, and structured data that matches the page. The guidance can change; check it directly.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">This article describes practical site readiness. It does not promise placement in Google AI Overviews, AI Mode, ChatGPT, or another answer system.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link to="/resources/guides/local-search-checklist/" className="font-semibold text-primary underline underline-offset-4">Local search checklist</Link>
              <Link to="/services/seo/" className="font-semibold text-primary underline underline-offset-4">Local SEO support</Link>
              <Link to="/contact/" className="font-semibold text-primary underline underline-offset-4">Talk with Kevin</Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
