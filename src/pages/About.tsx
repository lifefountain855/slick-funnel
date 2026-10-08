import { ArrowRight, Handshake, Lightbulb, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export function About() {
  return (
    <div className="min-h-screen bg-background">
      <title>About Kevin | SlickFunnel</title>
      <section className="px-4 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-primary/50" />
            <div className="relative overflow-hidden m-0 md:m-6 rounded-[1.7rem] bg-[#e8e1d5]">
              <img
                src="kevin-handshake.jpg"
                alt="Small-business team working together around a table"
                className="aspect-3/4 w-50% object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#132c24]/80 to-transparent p-6 pt-20">
                <p className="font-serif text-xl text-white">Good work starts with a good conversation.</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A little about me</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[#1a2e40] md:text-7xl">
              Hi, I'm Kevin.
              <span className="mt-2 block italic text-primary">Let's make this feel doable.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              I started SlickFunnel to give small-business owners a more human kind of help with their online presence: someone to talk things through with, make a clear plan, and take care of the details together.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              There's no one-size-fits-all package I'm trying to squeeze you into. The right starting point might be a simple website, a better way to follow up, or getting the pieces you already have to work together.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e9e2d5] bg-white/70 px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-[#1a2e40] md:text-4xl">I want working together to feel like working together.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { icon: MessageCircle, title: "Talk like people", text: "Clear answers, honest conversations, and no pressure to buy something you don't need." },
              { icon: Lightbulb, title: "Make a thoughtful plan", text: "We'll start with your goals and choose the next step that makes sense for your business." },
              { icon: Handshake, title: "Stay in it together", text: "You'll know who's doing the work and have a person to reach when questions come up." },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl bg-[#f5f1e8] p-7">
                <Icon size={24} className="text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#1a2e40]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#173c31] p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-mono text-4xl text-white font-semibold md:text-4xl">Want to talk it through?</h2>
            <p className="mt-3 text-lg text-white/75">A few words about your business is a great place to begin.</p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button size="lg" variant="accent" className="gap-2 rounded-full px-7">
              Get in touch <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
