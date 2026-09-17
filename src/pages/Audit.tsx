import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { supabase } from "../lib/supabase"
import { leadSchema } from "../lib/validation"

export function Audit() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    website: "",
    industry: "",
    city: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [showResult, setShowResult] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => setStep(step + 1)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      leadSchema.parse(formData)
      const leadId = crypto.randomUUID()
      const { error: leadError } = await supabase.from('leads').insert([{
        id: leadId,
        business_name: formData.businessName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        industry: formData.industry,
        city: formData.city,
        source: 'Free Audit',
        status: 'New',
      }])
      if (leadError) throw leadError

      const reportId = crypto.randomUUID()
      const { error: reportError } = await supabase.from('audit_reports').insert([{
        id: reportId,
        lead_id: leadId,
        overall_score: 67,
        recommendation: 'Focus on SEO & Social',
      }])
      if (reportError) throw reportError

      const { error: itemsError } = await supabase.from('audit_items').insert([
        { audit_report_id: reportId, category: 'Website', score: 82, sort_order: 0 },
        { audit_report_id: reportId, category: 'Google', score: 64, sort_order: 1 },
        { audit_report_id: reportId, category: 'SEO', score: 51, sort_order: 2 },
        { audit_report_id: reportId, category: 'Reviews', score: 72, sort_order: 3 },
        { audit_report_id: reportId, category: 'Social', score: 43, sort_order: 4 },
      ])
      if (itemsError) throw itemsError
    } catch (err) {
      console.error("Audit submission failed", err)
      setIsSubmitting(false)
      setSubmitError("We couldn't generate your audit. Please try again.")
      return
    }

    setTimeout(() => {
      setIsSubmitting(false)
      setShowResult(true)
    }, 1500) // fake processing time
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-secondary/30 py-24 px-4">
        <title>SlickFunnel - Audit</title>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-2">Your Digital Presence Score</h2>
          <p className="text-slate-600 mb-12">We've generated an initial assessment for {formData.businessName}</p>
          
          <div className="relative w-48 h-48 mx-auto mb-12 flex items-center justify-center bg-secondary rounded-full border-8 border-white shadow-inner">
             <span className="font-serif text-6xl font-bold text-primary">67</span>
             <span className="absolute bottom-6 text-sm text-primary/80 font-bold">/ 100</span>
             {/* Decorative ring */}
             <svg className="absolute inset-0 w-full h-full -rotate-90">
               <circle cx="50%" cy="50%" r="48%" stroke="var(--color-primary)" strokeWidth="8" fill="none" strokeDasharray="300" strokeDashoffset="100" className="opacity-80" />
             </svg>
          </div>

          <div className="space-y-6 text-left max-w-sm mx-auto mb-12">
            {[
              { label: "Website", score: 82 },
              { label: "Google", score: 64 },
              { label: "SEO", score: 51 },
              { label: "Reviews", score: 72 },
              { label: "Social", score: 43 },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{item.label}</span>
                  <span className="text-navy">{item.score}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl mb-8 text-left">
            <h3 className="font-bold text-navy mb-2">Recommendation: Focus on SEO & Social</h3>
            <p className="text-sm text-slate-600">Your website is solid, but local competitors are outranking you on Google. You are missing out on an estimated 15-20 leads per month.</p>
          </div>

          <Button size="lg" className="w-full text-lg h-14 bg-accent hover:bg-accent/90 shadow-lg text-white rounded-xl">Book a Growth Consultation</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
        {/* Beach vibe decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
        
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4 relative z-10">Free Digital Growth Audit</h1>
        <p className="text-slate-600 mb-8 relative z-10">Find out exactly where your business is losing customers online and how to fix it.</p>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" name="businessName" value={formData.businessName} onChange={handleInputChange} required placeholder="e.g. ABC Plumbing" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input id="website" name="website" value={formData.website} onChange={handleInputChange} placeholder="e.g. abcplumbing.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" name="industry" value={formData.industry} onChange={handleInputChange} required placeholder="e.g. HVAC, Roofing..." />
              </div>
              <Button type="button" onClick={handleNext} className="w-full bg-primary" size="lg">Next Step</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <div className="space-y-2">
                <Label htmlFor="contactName">Your Name</Label>
                <Input id="contactName" name="contactName" value={formData.contactName} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City / Service Area</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>
              <div className="flex gap-4 pt-2">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3">Back</Button>
                <Button type="submit" disabled={isSubmitting} className="w-2/3 bg-accent text-white" size="lg">
                  {isSubmitting ? "Generating Audit..." : "Get My Score"}
                </Button>
              </div>
              {submitError && <p role="alert" className="text-sm text-red-600">{submitError}</p>}
            </div>
          )}
        </form>
        
        <div className="mt-8 flex justify-center gap-2">
           <div className={`h-2 w-8 rounded-full ${step === 1 ? 'bg-primary' : 'bg-slate-200'}`}></div>
           <div className={`h-2 w-8 rounded-full ${step === 2 ? 'bg-primary' : 'bg-slate-200'}`}></div>
        </div>
      </div>
    </div>
  )
}
