import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { supabase } from "../lib/supabase"
import { contactSchema } from "../lib/validation"
import { useState } from "react"

export function Contact() {
  const [sent,setSent] = useState(JSON.parse(localStorage.getItem("submittedContact")??'false') || false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(JSON.parse(localStorage.getItem("submittedContact")??'false') ? "You've already submitted this form. Thanks! We will reach out shortly.":"")

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
    setSent(true)
  }

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2">
          <h1 className="font-serif text-4xl font-bold text-navy mb-6">Let's talk growth.</h1>
          <p className="text-slate-600 mb-8 text-lg">
            Have a question about our services or pricing? Want to see if we're a good fit for your specific business? Drop us a line.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-navy mb-1">Email</h4>
              <a href='mailto:contact@slick.asappy.tech' className="font-bold text-primary hover:underline hover:text-accent">contact@slick.asappy.tech</a>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">Office Hours</h4>
              <p className="text-slate-600">Mon - Fri, 9am - 5pm EST</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
          {!sent && (<form className="space-y-4" onSubmit={handleSubmit}>
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
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                required 
              />
            </div>

            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-primary hover:bg-primary/90 mt-4">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>)}
            {message && <p role="status" className={`text-${sent ? 'lg' : 'sm'} text-slate-600`}>{message}</p>}
        </div>

      </div>
    </div>
  )
}
