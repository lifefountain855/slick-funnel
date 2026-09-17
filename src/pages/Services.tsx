export function Services() {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <title>SlickFunnel - Services</title>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We focus on outcomes, not just technical jargon. Here is how we help your local business grow.</p>
        </div>
        
        <div className="grid gap-12">
          {/* Get Found */}
          <div id="get-found" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">Get Found</h2>
              <p className="text-slate-600 mb-6">If customers can't find you on Google, you don't exist. We optimize your local search presence.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">✅ High-Performance Website</li>
                <li className="flex items-center gap-3 text-slate-700">✅ Google Business Profile Optimization</li>
                <li className="flex items-center gap-3 text-slate-700">✅ Local SEO Strategy</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-secondary/30 rounded-2xl aspect-video flex items-center justify-center text-6xl">🔍</div>
          </div>

          {/* Get Leads */}
          <div id="get-leads" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">Get Leads</h2>
              <p className="text-slate-600 mb-6">Traffic is useless if it doesn't convert. We turn your visitors into qualified quote requests.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">✅ High-Converting Landing Pages</li>
                <li className="flex items-center gap-3 text-slate-700">✅ Smart Contact Forms</li>
                <li className="flex items-center gap-3 text-slate-700">✅ Meta Ads</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-primary/10 rounded-2xl aspect-video flex items-center justify-center text-6xl">🎯</div>
          </div>
          
          {/* Convert Leads */}
          <div id="convert" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">Convert Leads</h2>
              <p className="text-slate-600 mb-6">Never let a lead slip through the cracks again with our automated follow-up systems.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">✅ Automated Email/SMS Follow-ups</li>
                {/* <li className="flex items-center gap-3 text-slate-700">✅ Simple CRM to Track Pipeline</li> */}
                <li className="flex items-center gap-3 text-slate-700">✅ Appointment Scheduling</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-accent/10 rounded-2xl aspect-video flex items-center justify-center text-6xl">💬</div>
          </div>
        </div>
      </div>
    </div>
  )
}
