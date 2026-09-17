import Logo from '../components/ui/Logo'

export function About() {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <title>SlickFunnel - About</title>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="font-serif text-4xl md:text-5xl font-bold text-navy mb-8 text-center flex flex-row items-center justify-center gap-2"><span>About SlickFunnel</span> <span className="absoloute inset-0 r-0"><Logo size={50} fill="#1A2E40" stroke="#1A2E40"/></span></div>
        
        <div className="prose prose-lg mx-auto text-slate-700">
          <p className="lead text-xl mb-6 font-medium text-navy">
            We believe that small business owners shouldn't have to be digital marketing experts to succeed.
          </p>
          <p className="mb-6">
            SlickFunnel was built to solve a specific problem: local businesses and startups are tired of paying thousands of dollars for generic websites that don't generate any real phone calls or leads.
          </p>
          <p className="mb-6">
            We are an affordable digital growth partner, not just a web-design agency. We focus on what actually matters—getting you found online, capturing interest, and building trust through reviews.
          </p>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 my-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Practical Approach</h3>
            <ul className="space-y-4">
              <li><strong>No jargon.</strong> We speak your language and focus on ROI.</li>
              <li><strong>All-in-one.</strong> Stop juggling 5 different subscriptions for web hosting, forms, social media, and ads.</li>
              <li><strong>Partnership.</strong> When you grow, we grow. We handle the web so you can handle the work.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
