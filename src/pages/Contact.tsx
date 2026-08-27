import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

export function Contact() {
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
              <p className="text-slate-600">hello@slickfunnel.com</p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">Office Hours</h4>
              <p className="text-slate-600">Mon - Fri, 9am - 5pm EST</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We'll be in touch.") }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business">Business</Label>
                <Input id="business" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea 
                id="message" 
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                required 
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 mt-4">Send Message</Button>
          </form>
        </div>

      </div>
    </div>
  )
}
