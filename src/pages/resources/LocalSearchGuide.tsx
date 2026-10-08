import { Link } from "react-router-dom"
import { Seo } from "../../components/Seo"
import { makeArticleSchema } from "../../seo/articleSchema"
import { siteRoutes } from "../../seo/site"

const checklistRows = [
  ["What do you do?", "A concise service description on your profile and matching website service pages."],
  ["Where do you serve?", "Only the real service area; do not imply a staffed office or create city pages with repeated copy."],
  ["How can someone contact you?", "A working phone, form, or booking path that is easy to find on mobile."],
  ["Why should someone trust the details?", "Accurate first-party information, current photos where relevant, and genuine customer feedback."],
]

export function LocalSearchGuide() {
  return (
    <article className="min-h-screen bg-background">
      <Seo route={siteRoutes.localSearchGuide} structuredData={makeArticleSchema(siteRoutes.localSearchGuide)} />
      <header className="mx-auto max-w-4xl px-4 pb-10 pt-12 md:px-8 md:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Local search guide</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-6xl">
          A local search checklist for service-area businesses
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Short answer: keep your real business information accurate, explain the services and areas you actually cover, and make the next step easy. A complete profile and website can help customers understand your business; neither guarantees a particular search position.
        </p>
        <p className="mt-5 text-sm text-slate-500">
          By <Link to="/about/" className="font-medium text-primary underline">Kevin at SlickFunnel</Link>
          {" · "}Published October 8, 2026
        </p>
      </header>

      <div className="mx-auto max-w-4xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="space-y-10 rounded-3xl bg-white p-6 md:p-10">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">1. Confirm the business details are real and consistent</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Start with the name customers know, the contact information they can use, and a plain description of the work. Compare the website, business profile, and any listings you control. Correct old phone numbers, outdated services, and locations the business no longer serves.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              If customers are not served at the business address, Google says to remove that address from the Business Profile and specify the actual service area instead. Do not use a borrowed address or describe remote availability as a local office.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">2. Describe what you do and where you work</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Use the most accurate business category and describe the services customers can actually book. For service areas, choose places the business genuinely serves; Google's profile guidance says to be specific and accurate. A wider list of towns is not a substitute for actually serving those places.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              On your website, give important services their own useful explanation where appropriate. Explain what the service includes, who it is for, how to ask for it, and any real limits. Do not publish interchangeable city pages that only swap place names.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">3. Check whether a customer can act on the information</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-navy">
                    <th scope="col" className="py-3 pr-5 font-semibold">Customer question</th>
                    <th scope="col" className="py-3 font-semibold">Where the answer should be clear</th>
                  </tr>
                </thead>
                <tbody>
                  {checklistRows.map(([question, answer]) => (
                    <tr key={question} className="border-b border-slate-100 align-top text-slate-600">
                      <th scope="row" className="py-4 pr-5 font-medium text-slate-800">{question}</th>
                      <td className="py-4 leading-6">{answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              Test the key pages and contact path on a phone. Check that the buttons work, the form submits, and the page answers the question that brought the visitor there.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">4. Build trust with evidence, not shortcuts</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Keep service descriptions, photos, credentials, and examples factual. Invite honest customer feedback through a normal process, but do not invent reviews, write testimonials for customers, or claim outcomes without records and permission. Google's published local-ranking overview describes relevance, distance, and prominence; no one can pay or request a guaranteed better local position.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">5. Measure useful progress before changing everything</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Save a baseline, then review the business-profile and website activity that is available to you. Look for useful search queries, relevant page visits, contact-form submissions, calls, or quote requests. Record the time period and what changed. A rise or fall in one metric does not by itself prove that a specific edit caused it.
            </p>
          </section>

          <section className="rounded-2xl bg-[#eaf0e8] p-6">
            <h2 className="font-serif text-2xl font-semibold text-navy">Sources and next steps</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li><a className="text-primary underline" href="https://support.google.com/business/answer/9157481?hl=en" target="_blank" rel="noreferrer">Google Business Profile: Manage your service areas</a></li>
              <li><a className="text-primary underline" href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noreferrer">Google Business Profile: Improve your local ranking</a></li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate-600">Platform guidance may change. Check the current source before changing a profile. This checklist is practical guidance, not a ranking guarantee.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link to="/services/seo/" className="font-semibold text-primary underline underline-offset-4">SlickFunnel local SEO support</Link>
              <Link to="/services/web-design/" className="font-semibold text-primary underline underline-offset-4">Small-business web design</Link>
              <Link to="/contact/" className="font-semibold text-primary underline underline-offset-4">Ask Kevin a question</Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
