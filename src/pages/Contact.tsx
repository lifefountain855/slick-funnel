import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { supabase } from "../lib/supabase"
import { contactSchema } from "../lib/validation"
import { useState, useSyncExternalStore } from "react"
import { Seo } from "../components/Seo"

function hasPreviouslySubmittedContactForm() {
  if (typeof window === "undefined") return false
  const value = localStorage.getItem("submittedContact")
  return value === "true" || value === JSON.stringify("true")
}

function subscribeToContactSubmission(onChange: () => void) {
  window.addEventListener("storage", onChange)
  return () => window.removeEventListener("storage", onChange)
}

export function Contact() {
  const previouslySubmitted = useSyncExternalStore(
    subscribeToContactSubmission,
    hasPreviouslySubmittedContactForm,
    () => false,
  )
  const [submittedThisSession, setSubmittedThisSession] = useState(false)
  const sent = previouslySubmitted || submittedThisSession
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const statusMessage = message || (
    previouslySubmitted ? "You've already submitted this form. Thanks! I will reach out shortly." : ""
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")
    const values = Object.fromEntries(new FormData(e.currentTarget).entries())
    const parsed = contactSchema.safeParse(values)
    if (!parsed.success) {
      console.log(parsed.error.issues)
      setMessage(parsed.error.issues[0]?.message ?? "Please check the form")
      setIsSubmitting(false)
      return
    }

    const { error } = await supabase.from("leads").insert([{
      id: crypto.randomUUID(),
      business_name: parsed.data.businessName,
      contact_name: parsed.data.contactName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      website: parsed.data.website,
      industry: parsed.data.industry,
      preferred_contact_method: parsed.data.preferredContactMethod,
      notes: parsed.data.message,
      source: "Contact Form",
      status: "New",
    }])
    setIsSubmitting(false)
    if (error) {
      console.error("Contact submission failed", error)
      setMessage("We couldn't send your message. Please try again.")
      return
    }
    // e.currentTarget.reset()
    setMessage("Thanks for reaching out! We'll be in touch.")
    localStorage.setItem("submittedContact",JSON.stringify('true'))
    setSubmittedThisSession(true)
  }

  return (
    <div className="py-24 bg-white min-h-screen">
      <Seo
        title="Contact SlickFunnel | Website Help for Small Businesses"
        description="Talk with Kevin about a small-business website, local visibility, or online system in Pembroke Pines and nearby South Florida."
        path="/contact"
        breadcrumbLabel="Contact"
      />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">A good place to start</p>
          <h1 className="font-serif text-4xl font-bold text-navy mb-6 md:text-5xl">Tell me what's on your mind.</h1>
          <p className="text-slate-600 mb-8 text-lg leading-8">
            I'm Kevin. Share a little about your business and what you're trying to figure out. I'll get back to you personally—no pitch, just a conversation.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-navy mb-1">Email</h4>
              <a href='mailto:contact@slick.asappy.tech' className="font-bold text-primary hover:underline hover:text-accent">contact@slick.asappy.tech</a>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">What happens next?</h4>
              <p className="text-slate-600">I'll read your note and follow up using the contact method you prefer.</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-16 mx-auto w-full max-w-xs">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-accent/50" />
            <div className="relative overflow-hidden rounded-[1.7rem] p-3">
              <img
                src="/kevin-headshot.jpg"
                alt="Kevin, the person behind SlickFunnel"
                className="aspect-3/4 w-full object-cover rounded-[1.7rem]"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
          {!sent && (<form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-5">
              <h2 className="font-serif text-2xl font-semibold text-navy">A few details, then we can talk.</h2>
              <p className="mt-2 text-sm text-slate-600">Share only what you're comfortable sharing. I'll take it from here.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="contactName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business">Business</Label>
                <Input id="business" name="businessName" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" name="website" type="url" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" name="industry" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredContactMethod">Preferred contact method</Label>
              <select id="preferredContactMethod" name="preferredContactMethod" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Text">Text</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea 
                id="message"
                name="message"
                className="flex min-h-30 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                placeholder="What would you like a hand with?"
                required 
              />
            </div>

            <p className="text-xs leading-5 text-slate-500">
              See our <Link to="/legal#privacy" className="font-medium text-primary underline">Privacy Policy</Link> for how we handle the information you submit.
            </p>
            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 mt-4">
              {isSubmitting ? "Sending..." : "Send a note to Kevin"}
            </Button>
          </form>)}
            {statusMessage && <p role="status" className={`text-${sent ? 'lg' : 'sm'} text-slate-600`}>{statusMessage}</p>}
        </div>

      </div>
    </div>
  )
}
