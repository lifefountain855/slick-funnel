import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { Seo } from "../components/Seo"
import { siteRoutes } from "../seo/site"

export function Pricing() {
  const plans = [
    {
      name: "Startup",
      price: "$30-$95",
      setup: "$0 setup",
      desc: "For startups who want to find their first few clients.",
      features: ["Professional website", "Google Business optimization", "Basic SEO and GEO", "Managed Hosting"],
      color: "bg-white",
      buttonVar: "outline",
      popular: false
    },
    {
      name: "Foundation",
      price: "$99",
      setup: "$150 setup",
      desc: "Perfect for establishing a professional online presence.",
      features: ["Everything in Startup", "SEO and GEO", "Monthly Updates", "Basic Analytics"],
      color: "bg-primary/70 text-white",
      buttonVar: "accent",
      popular: true
    },
    {
      name: "Growth",
      price: "$399+",
      setup: "$750+ setup",
      desc: "For businesses ready to actively generate more leads.",
      features: ["Everything in Foundation", "Local SEO Campaign", "Content Marketing", "Content delivery to major platforms", "Lead Tracking"],
      color: "bg-white text-navy",
      buttonVar: "outline",
      popular: false,
      unavailable: false,
    },
    {
      name: "Enterprise",
      price: "$800+",
      setup: "$1,200+ setup",
      desc: "A complete automated sales funnel for aggressive growth.",
      features: ["Everything in Growth and...", 
        // "Lead Automation", "SMS/Email Follow-up", "Booking Integration", "Conversion Tracking", "Ad Management"
      ],
      color: "bg-slate-100 text-slate-500",
      buttonVar: "ghost",
      unavailable: true
    }
  ]

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <Seo
        route={siteRoutes.pricing}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">Clear options. No pressure.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">These are the monthly plan prices and setup charges currently displayed by SlickFunnel. Ask Kevin to confirm the exact price, scope, and service inclusions in writing before you start.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`${plan.color} rounded-3xl p-8 shadow-lg border ${plan.unavailable ? 'border-slate-200 opacity-60 grayscale' : 'border-slate-100'} flex flex-col relative ${plan.unavailable ? 'pointer-events-none' : ''}`}>
              {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">Really, the best deal</div>}
              <h3 className={`font-serif text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : (plan.unavailable ? 'text-slate-400' : 'text-navy')}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-primary-foreground/90' : (plan.unavailable ? 'text-slate-400' : 'text-slate-500')}`}>{plan.desc}</p>
              <div className="mb-6">
                <span className={`text-4xl font-bold`}>{plan.price}</span>
                <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : (plan.unavailable ? 'text-slate-400' : 'text-slate-500')}`}>/month</span>
                {/* {(<div className={`text-sm mt-1 ${plan.popular ? 'text-primary-foreground/90' : (plan.unavailable ? 'text-slate-400' : 'text-slate-500')}`}>+ {plan.setup}</div>)} */}
                {plan.name=="Startup" ? (<div className={`text-md mt-1 font-bold text-accent`}>{plan.setup}</div>) : (<div className={`text-sm mt-1 ${plan.popular ? 'text-primary-foreground/90' : (plan.unavailable ? 'text-slate-400' : 'text-slate-500')}`}>+ {plan.setup}</div>)}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className="shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact/" className="mt-auto">
                {/* @ts-ignore */}
                <Button variant={plan.buttonVar} className={`w-full ${plan.popular ? 'border-none' : ''} ${plan.unavailable ? 'bg-slate-300 text-slate-500' : ''}`} disabled={plan.unavailable}>
                   {plan.unavailable ? 'Coming Soon' : 'Talk it through'}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <p className="rounded-2xl border border-slate-200 bg-white p-5 text-xs leading-5 mt-15 text-slate-600">
          Startup is listed at $30-$95 per month with no setup charge; confirm which monthly price applies. Foundation and Growth vary from $99 to $399+ per month plus a $150 to $750+ setup charge. Enterprise is marked “Coming Soon” and is not currently available. Plan prices do not guarantee a particular ranking, lead count, or business result.
        </p>
        <p className="mt-8 text-center text-sm leading-6 text-slate-600">
          Startup has a 3-month minimum commitment. Foundation and Growth are month-to-month; Enterprise is not currently available. Early cancellation of a service with a stated minimum commitment may incur a fee equal to one month of the agreed recurring price. See our <Link to="/legal/#terms" className="font-semibold text-primary underline underline-offset-4">Terms of Service</Link>.
        </p>
      </div>
    </div>
  )
}
