import { ArrowUpRight, ArrowRight, HeartHandshake, MessageCircle, Sprout } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export function Home() {
  return (
    <div className="bg-background">
      <title>Kevin at SlickFunnel | A real partner for your business</title>

      <section className="relative overflow-hidden px-4 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9dfd1] bg-white/70 px-4 py-2 text-sm font-medium text-[#315f4c]">
              <span className="h-2 w-2 rounded-full bg-primary" />
              A little less agency. A lot more partnership.
            </p>
            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-navy md:text-7xl">
              Your business is personal.
              <span className="mt-2 block italic text-primary">Your marketing should be, too.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              I'm Kevin. I work alongside small-business owners to make the online side of business feel simpler, more thoughtful, and more like them.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="w-full gap-2 rounded-full px-7 sm:w-auto">
                  Have a conversation <ArrowRight size={17} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full rounded-full border-[#b9c8bd] bg-transparent px-7 text-navy hover:bg-white sm:w-auto">
                  Get to know Kevin
                </Button>
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-500">No pitch deck. No pressure. Just a good place to start.</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-primary/50 blur-2xl" />
            <div className="absolute -bottom-7 -right-5 h-36 w-36 rounded-full bg-navy/50 blur-2xl" />
            <div className="relative rounded-4xl bg-accent/50 p-3 shadow-[0_24px_80px_-35px_rgba(26,46,64,0.4)] md:rotate-1">
              <img
                src="kevin-laptop.jpg"
                alt="Small-business owners sharing ideas around a table"
                className="aspect-3/4 w-full rounded-[1.55rem] object-cover"
              />
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-secondary/90 p-4 shadow-lg md:left-8 md:right-8 md:p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-primary p-2 text-white">
                    <MessageCircle size={19} />
                  </span>
                  <div>
                    <p className="font-serif text-lg font-semibold text-navy">A real person, in your corner.</p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">Your goals, your pace, and a plan we figure out together.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center text-xs text-slate-500">A good partnership starts with listening.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e9e2d5] bg-white/70 px-4 py-7 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-sm font-medium text-[#4a5f56] md:justify-between">
          <span className="inline-flex items-center gap-2"><HeartHandshake size={18} className="text-primary" /> Work with a person, not a pipeline</span>
          <span className="inline-flex items-center gap-2"><MessageCircle size={18} className="text-primary" /> Straight answers, plain language</span>
          <span className="inline-flex items-center gap-2"><Sprout size={18} className="text-primary" /> Built around your kind of growth</span>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A note from Kevin</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              You don't need another sales call.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              You need someone who'll understand your business before suggesting what to do next.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3">
              More about how I work <ArrowRight size={17} />
            </Link>
          </div>
          <div className="rounded-4xl bg-background p-8 md:p-12">
            <p className="font-serif text-2xl leading-relaxed text-navy md:text-3xl">
              “Some businesses need a website. Some need help connecting all the pieces. We can start with what makes sense for you.”
            </p>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#52705d]">Kevin · SlickFunnel</p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0e8] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Practical help, shaped around you</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-navy md:text-5xl">A steady hand with the online stuff.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">I build the right pieces by hand around your business—not plug you into a generic package or add more for the sake of it.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { n: "01", title: "Help people find you", desc: "A carefully built website and local presence that make it easier for the right customers to discover your business." },
              { n: "02", title: "Make the next step easy", desc: "Useful pages and simple ways for interested people to ask a question, book, or request a quote." },
              { n: "03", title: "Make room for your best work", desc: "Hand-built workflows and practical AI automation can take repetitive admin off your plate—while you stay in control." },
            ].map((item) => (
              <div key={item.n} className="rounded-3xl border border-white/80 bg-white/80 p-7 md:p-8">
                <span className="font-serif text-lg italic text-[#d18568]">{item.n}</span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary">
              See the ways I can help <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-4xl bg-primary-dark px-8 py-10 text-white md:flex-row md:items-center md:px-14 md:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-200">No big pitch. Just a first hello.</p>
            <h2 className="mt-4 font-mono text-3xl text-white font-semibold leading-tight md:text-5xl">Tell me a little about what you're working on.</h2>
            <p className="mt-4 text-md md:text-lg leading-8 text-white/75">I'll listen, ask a few questions, and we can see if there's a way I can help.</p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button size="lg" variant="accent" className="gap-2 rounded-full px-7">
              Say hello to Kevin <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
