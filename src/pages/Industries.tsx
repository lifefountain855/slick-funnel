import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export function Industries() {
  const industries = [
    "HVAC & AC Repair",
    "Plumbing Services",
    "Electrical Contractors",
    "Roofing Companies",
    "Landscaping & Lawn Care",
    "Pool Cleaning Services",
    "House Cleaning",
    "Pressure Washing"
  ]

  return (
    <div className="py-24 bg-white min-h-screen">
      <title>SlickFunnel - Who We Serve</title>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Who We Serve</h1>
        <p className="text-lg text-slate-600 mb-16">
          We specialize in helping home service providers and local contractors build a reliable engine for new customers.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {industries.map((industry, i) => (
            <div key={i} className="bg-secondary/20 p-6 rounded-2xl border border-secondary/50 font-medium text-navy hover:bg-secondary/40 transition-colors">
              {industry}
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Not on the list?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Our frameworks work for almost any local service-based business. Let's run a free audit to see if we're a good fit.
          </p>
          <Link to="/audit">
             <Button variant="accent" size="lg">Get a Free Audit</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
