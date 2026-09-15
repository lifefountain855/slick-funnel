import { useState } from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"

export function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    setIsSubmitting(false)
    if (signInError) {
      setError("Invalid email or password.")
      return
    }
    navigate("/admin")
  }

  return (
    <div className="min-h-screen bg-navy-800 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-navy-600 p-8 rounded-3xl shadow-lg space-y-5 text-navy-200">
        <div>
          <h1 className="font-serif text-3xl font-bold text-navy-100">Admin sign in</h1>
          <p className=" mt-2">Manage your SlickFunnel leads.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="admin-email">Email</Label>
          <Input id="admin-email" className="bg-navy-200 text-black" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="admin-password">Password</Label>
          <Input id="admin-password" className="bg-navy-200 text-black" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? "Signing in..." : "Sign in"}</Button>
      </form>
    </div>
  )
}
