import { Link } from "react-router-dom"
const legalContent = {
  pageTitle: "Terms of Service & Privacy Policy | SlickFunnel",
  eyebrow: "Legal",
  title: "Terms & Privacy",
  lastUpdatedLabel: "Last updated",
  lastUpdated: "October 8, 2026",
  draftNotice: "This page is a starting draft for Slick Funnel, not legal advice. Confirm it matches your signed client agreement before relying on it.",
  termsNavLabel: "Terms of Service",
  privacyNavLabel: "Privacy Policy",
  terms: {
    title: "Terms of Service",
    introduction: "These terms apply to your use of the SlickFunnel website and, where a separate signed proposal or service agreement does not say otherwise, services provided by Slick Funnel (“SlickFunnel,” “we,” “us,” or “our”). By using this website or engaging our services, you agree to these terms. If you do not agree, do not use the website or services.",
    sections: {
      servicesAndScope: {
        title: "Services and project scope",
        paragraphs: [
          "We provide custom website, online presence, marketing, workflow, and related digital services. The work, deliverables, schedule, price, and any client responsibilities will be described in a proposal, order, or other written agreement. That written agreement controls if it conflicts with these general terms. Work outside the agreed scope may require a separate quote and approval."
        ]
      },
      billingAndMinimumCommitments: {
        title: "Monthly billing and minimum commitments",
        paragraphs: [
          "The plan, recurring price, setup charges, billing frequency, and any minimum commitment will be disclosed in your written proposal or checkout before you agree to pay. By starting a recurring service, you authorize the agreed recurring charges to your selected payment method on the stated billing schedule.",
          "Foundation and Growth subscriptions are month-to-month unless your written agreement says otherwise. The Startup plan has a three-month minimum commitment. Other services may also have a minimum commitment of three months or longer only when that commitment is expressly stated in the written agreement (for example, an annual plan).",
          "If a service with a stated minimum commitment is canceled before that commitment is complete, an early-termination fee equal to one month of the agreed recurring price applies, in addition to charges already due for services provided through the cancellation date. No early-termination fee applies to a month-to-month service with no stated minimum commitment. We will not treat a plan as having a minimum commitment unless it was disclosed in writing before you agreed to it."
        ]
      },
      cancellationAndRenewal: {
        title: "Cancellation and renewal",
        paragraphs: [
          "You may request cancellation through your client portal, if available, or by emailing contact@slick.asappy.tech. Unless your written agreement provides a different notice period or end date, cancellation takes effect at the end of the then-current paid billing period. Charges that became due before cancellation, including any applicable early-termination fee, remain payable. We do not prorate a partial billing period unless your written agreement or applicable law requires it.",
          "A recurring subscription continues on its stated billing schedule until canceled. Please keep your contact and payment details current. If a payment fails or is overdue, we may pause work or access after giving notice, to the extent permitted by law and your written agreement."
        ]
      },
      clientResponsibilities: {
        title: "Client responsibilities and approvals",
        paragraphs: [
          "You are responsible for providing accurate information, content, materials, approvals, access, and instructions needed for the work, and for having the rights and permissions to provide them. You are responsible for reviewing deliverables and checking that claims, contact details, offers, and other business information are accurate before publication. Delays in receiving materials or approvals may affect delivery dates."
        ]
      },
      resultsAndThirdParties: {
        title: "Results, third-party tools, and AI",
        paragraphs: [
          "We will perform agreed services with reasonable care, but search rankings, traffic, leads, sales, ad performance, and other business outcomes depend on factors outside our control and are not guaranteed. Websites and workflows may rely on third-party platforms, hosting, domains, software, or integrations. Those providers have their own terms, fees, availability, and privacy practices; we are not responsible for their independent acts or outages.",
          "If AI tools are included in a project, their outputs may be incomplete or inaccurate and should be reviewed by a person before use. The applicable proposal will describe any project-specific tools or data handling."
        ]
      },
      ownershipAndUse: {
        title: "Ownership and permitted use",
        paragraphs: [
          "Ownership, licenses, and access to project deliverables, source files, domains, accounts, and third-party assets will be set out in the applicable written agreement. Each party retains its pre-existing materials and intellectual property. You grant us permission to use materials you provide only as needed to perform the agreed work."
        ]
      },
      websiteUseAndLiability: {
        title: "Website use and liability",
        paragraphs: [
          "Do not misuse this website, interfere with its operation, attempt unauthorized access, or use it in violation of law or another person’s rights. The website is provided “as is” to the extent permitted by law. Nothing in these terms limits a right or remedy that cannot lawfully be limited. Any service-specific warranties, liability limits, or remedies must be stated in the written agreement for that service."
        ]
      },
      governingLawAndUpdates: {
        title: "Governing law and updates",
        paragraphs: [
          "Florida law governs these terms, without regard to conflict-of-law rules, except where another law must apply. We may update this page by posting a revised version and date. Changes apply prospectively; material changes to a paid service or its price will be communicated and handled as required by your agreement and applicable law."
        ]
      }
    }
  },
  privacy: {
    title: "Privacy Policy",
    introduction: "This policy explains how Slick Funnel collects, uses, and shares information when you visit this website, contact us, or use a SlickFunnel account or service.",
    sections: {
      informationWeCollect: {
        title: "Information we collect",
        paragraphs: [
          "When you submit our contact form, we collect the information you provide, which may include your name, business name, email address, phone number, website, industry, preferred contact method, and message. If you create or use an account, we and our service providers process account and authentication information. We may also receive information you choose to provide when discussing or receiving services."
        ]
      },
      cookiesAndLocalStorage: {
        title: "Cookies and local storage",
        paragraphs: [
          "This site uses browser storage technologies, including cookies and local storage, for essential operation such as sign-in/session state and remembering that a contact form was submitted on the same browser. Your browser settings can control or clear stored data, but doing so may affect sign-in or site functionality. Our hosting or service providers may also process basic technical information needed to deliver and secure the site."
        ]
      },
      howWeUseInformation: {
        title: "How we use information",
        paragraphs: [
          "We use information to respond to inquiries, communicate about requested services, provide and maintain services and accounts, process requests, protect the site and our business, and meet legal obligations. If you separately sign up for marketing communications, we may send you promotional messages. You can withdraw that permission through your portal, if available, or by emailing contact@slick.asappy.tech. We will honor legally required opt-out methods for the communication channel used."
        ]
      },
      howWeShareInformation: {
        title: "How we share information",
        paragraphs: [
          "We share information with service providers that help operate this site or deliver services, such as Supabase for database and authentication functions, and with other providers when needed for a project you request. We may also disclose information when required by law, to protect rights or safety, or as part of a business transfer. We do not sell personal information for money."
        ]
      },
      retentionAndSecurity: {
        title: "Retention and security",
        paragraphs: [
          "We keep information for as long as reasonably needed to respond to you, provide services, maintain records, resolve disputes, and meet legal obligations. We use reasonable safeguards, but no website or electronic storage system can be guaranteed completely secure."
        ]
      },
      privacyChoices: {
        title: "Your choices and privacy rights",
        paragraphs: [
          "You can ask us to access, correct, or delete personal information we hold about you, or withdraw consent where processing is based on consent, by emailing contact@slick.asappy.tech. We may need to verify your request and may retain information where the law allows or requires it. Depending on where you live and whether applicable legal thresholds are met, you may have additional privacy rights."
        ]
      },
      childrenAndExternalLinks: {
        title: "Children and external links",
        paragraphs: [
          "This website and our services are intended for businesses and adults, not children under 13. The site may link to third-party websites or services; their privacy practices are governed by their own policies."
        ]
      },
      privacyContactAndUpdates: {
        title: "Contact and policy updates",
        paragraphs: [
          "For questions or privacy requests, email contact@slick.asappy.tech. We may update this policy by posting a revised version here with a new “Last updated” date."
        ],
        contactLink: {
          label: "Contact us through the contact page.",
          path: "/contact"
        }
      }
    }
  }
} as const

const contactEmail = "contact@slick.asappy.tech"

function renderParagraph(text: string) {
  const parts = text.split(contactEmail)

  return parts.flatMap((part, index) => [
    part,
    ...(index < parts.length - 1
      ? [<a key={`email-${index}`} className="font-medium text-primary underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>]
      : []),
  ])
}

export function Legal() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16 md:px-8 md:py-24">
      <title>{legalContent.pageTitle}</title>
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{legalContent.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-navy md:text-5xl">{legalContent.title}</h1>
          <p className="mt-4 text-slate-600">{legalContent.lastUpdatedLabel} {legalContent.lastUpdated}</p>
          <div className="mt-6 rounded-2xl border border-[#e9dfc9] bg-[#fbf5e8] p-5 text-sm leading-6 text-[#594c36]">
            {legalContent.draftNotice}
          </div>
          <nav aria-label="Legal page sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-primary">
            <a className="underline underline-offset-4" href="#terms">{legalContent.termsNavLabel}</a>
            <a className="underline underline-offset-4" href="#privacy">{legalContent.privacyNavLabel}</a>
          </nav>
        </header>

        <div className="space-y-8">
          <section id="terms" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-navy">{legalContent.terms.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{renderParagraph(legalContent.terms.introduction)}</p>

            <div className="mt-8 space-y-7">
              {Object.entries(legalContent.terms.sections).map(([key, section], index) => (
                <article key={key}>
                  <h3 className="font-serif text-xl font-semibold text-navy">{index + 1}. {section.title}</h3>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className={`${paragraphIndex === 0 ? "mt-2" : "mt-3"} leading-7 text-slate-600`}>
                      {renderParagraph(paragraph)}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </section>

          <section id="privacy" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-navy">{legalContent.privacy.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{renderParagraph(legalContent.privacy.introduction)}</p>

            <div className="mt-8 space-y-7">
              {Object.entries(legalContent.privacy.sections).map(([key, section], index) => (
                <article key={key}>
                  <h3 className="font-serif text-xl font-semibold text-navy">{index + 1}. {section.title}</h3>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className={`${paragraphIndex === 0 ? "mt-2" : "mt-3"} leading-7 text-slate-600`}>
                      {renderParagraph(paragraph)}
                    </p>
                  ))}
                  {"contactLink" in section && (
                    <p className="mt-3 leading-7 text-slate-600">
                      <Link className="font-medium text-primary underline" to={section.contactLink.path}>{section.contactLink.label}</Link>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
