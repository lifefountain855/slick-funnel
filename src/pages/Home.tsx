import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground py-24 md:py-32">
        {/* Beach Vibe Wave Background */}
        <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
          <div className="absolute bottom-0 w-[200vw] flex animate-wave">
            <svg viewBox="0 0 1440 320" className="w-[100vw] h-auto flex-shrink-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path fill="#0B6E4F" fillOpacity="0.1" d="M0 120 Q360 20 720 120 T1440 120 V320 H0 Z"></path>
            </svg>
            <svg viewBox="0 0 1440 320" className="w-[100vw] h-auto flex-shrink-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path fill="#0B6E4F" fillOpacity="0.1" d="M0 120 Q360 20 720 120 T1440 120 V320 H0 Z"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 w-[200vw] flex animate-wave-slow">
            <svg viewBox="0 0 1440 320" className="w-[100vw] h-auto flex-shrink-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path fill="#0B6E4F" fillOpacity="0.15" d="M0 180 Q360 100 720 180 T1440 180 V320 H0 Z"></path>
            </svg>
            <svg viewBox="0 0 1440 320" className="w-[100vw] h-auto flex-shrink-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path fill="#0B6E4F" fillOpacity="0.15" d="M0 180 Q360 100 720 180 T1440 180 V320 H0 Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-navy">
            Your entire online presence.<span className="text-primary italic"> Handled.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-slate-700 max-w-2xl mx-auto">
            SlickFunnel empowers your local business with easy-to-use digital tools that help you get found, capture leads, and convert effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/audit">
              <Button size="lg" variant="accent" className="w-full sm:w-auto shadow-lg hover:-translate-y-1 transition-transform">
                Get Your Free Online Growth Audit
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">Everything you need to grow</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Stop worrying about your website, SEO, and lead follow-up. We provide a complete foundation for local business growth in a relaxed, stress-free way.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Get Found", desc: "Dominate local search and Google Business Profile to attract customers searching for your services.", icon: "🌴" },
              { title: "Get Leads", desc: "High-converting websites and landing pages that turn casual visitors into quoted requests.", icon: "🌊" },
              { title: "Build Trust", desc: "Automated review generation that builds your 5-star reputation while you sleep.", icon: "☀️" },
            ].map((feature, i) => (
              <div key={i} className="bg-secondary/20 rounded-[2rem] p-8 border border-secondary/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-secondary rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-4xl mb-6 relative z-10">{feature.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-navy relative z-10">{feature.title}</h3>
                <p className="text-slate-700 relative z-10">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-accent font-serif text-4xl md:text-5xl font-bold mb-6">Ready to see where you stand?</h2>
          <p className="text-primary-foreground/90 mb-10 text-lg">
            Take our free Digital Growth Audit and discover the exact steps you need to take to generate more leads this month.
          </p>
          <Link to="/audit">
            <Button size="lg" variant="accent" className="shadow-xl hover:-translate-y-1 transition-transform">
              Start My Free Audit
            </Button>
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
      </section>
    </div>
  )
}
