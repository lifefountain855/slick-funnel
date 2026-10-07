import { ArrowRight, Bot, Check, Search, Workflow, Wrench } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

const services = [
  {
    id: "get-found",
    number: "01",
    icon: Search,
    title: "A better first impression",
    description: "A clear, welcoming online home that helps the right people find you, understand what you do, and feel good about reaching out.",
    examples: ["Custom-built websites", "Local search and Google Business Profile", "Useful, easy-to-navigate service pages"],
    tint: "bg-[#eaf0e8]",
  },
  {
    id: "get-leads",
    number: "02",
    icon: ArrowRight,
    title: "An easier next step",
    description: "Thoughtful pages and simple customer journeys, built around how people actually choose and contact a business like yours.",
    examples: ["Landing pages and contact forms", "Quote requests and booking flows", "Campaigns that point people to the right place"],
    tint: "bg-[#f4eadb]",
  },
  {
    id: "convert",
    number: "03",
    icon: Workflow,
    title: "Systems that keep things moving",
    description: "I can connect the tools you already use—or help choose the right ones—so new inquiries have a clear path and fewer things slip through the cracks.",
    examples: ["Email and text follow-up", "Appointment reminders and routing", "Simple connections between your business tools"],
    tint: "bg-[#f5e8e3]",
  },
  {
    id: "ai-systems",
    number: "04",
    icon: Bot,
    title: "Useful AI, put to work",
    description: "AI can take care of repetitive admin without taking the human out of your business. I’ll help identify sensible uses, then build and test a system around your real workflow.",
    examples: ["Sort and summarize new inquiries", "Draft responses for you to review", "Answer routine questions and hand off when a person is needed"],
    tint: "bg-[#e8edf0]",
  },
]

export function Services() {
  return (
    <div className="min-h-screen bg-[#fbf8f1]">
      <title>Hand-built websites, systems & AI help | SlickFunnel</title>
      <section className="px-4 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0b6e4f]">How I can help</p>
          <div className="mt-5 grid gap-7 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[#1a2e40] md:text-7xl">
              Thoughtfully built.
              <span className="block italic text-[#0b6e4f]">Made to work for you.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              I don’t drop a generic package on your desk and disappear. I learn how your business works, hand-build the right pieces, and stay involved as we make them work in real life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {services.map(({ id, number, icon: Icon, title, description, examples, tint }) => (
            <article id={id} key={id} className="scroll-mt-24 rounded-[1.75rem] border border-[#e9e2d5] bg-white p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className={`rounded-2xl p-3 ${tint} text-[#315f4c]`}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="font-serif text-lg italic text-[#c47b63]">{number}</span>
              </div>
              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#1a2e40] md:text-3xl">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <ul className="mt-6 space-y-3">
                {examples.map((example) => (
                  <li key={example} className="flex items-start gap-3 text-sm text-[#3e5148]">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#0b6e4f]" aria-hidden="true" />
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eaf0e8] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0b6e4f]">A hands-on process</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#1a2e40] md:text-5xl">Built with you, not just delivered to you.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">The details matter. I work directly with you from the first conversation through launch and the adjustments that follow.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "First, listen", text: "We talk through your day-to-day, what’s getting in the way, and what a useful result would look like." },
              { title: "Build it by hand", text: "I shape the site or system around your business, keep you in the loop, and refine it with your input." },
              { title: "Make it work in real life", text: "We test the details together, make adjustments, and make sure you know how to use what we’ve built." },
            ].map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-white/70 bg-white/75 p-7">
                <span className="font-serif text-sm italic text-[#c47b63]">STEP 0{index + 1}</span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#1a2e40]">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#d5e1d4] bg-white/70 p-5 text-sm leading-6 text-[#435b4c]">
            <Wrench size={19} className="mt-0.5 shrink-0 text-[#0b6e4f]" aria-hidden="true" />
            <p><strong className="text-[#1a2e40]">Custom doesn’t have to mean complicated.</strong> We’ll build only what you need, explain how it works, and keep it manageable for you and your team.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-[#173c31] p-8 text-white md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9e8d9]">Start with a conversation</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">We can find the right next step together.</h2>
            <p className="mt-3 text-lg leading-7 text-white/75">Tell me what takes up your time or what you wish worked a little better. I’ll listen first.</p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button size="lg" variant="accent" className="gap-2 rounded-full px-7">
              Talk with Kevin <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
