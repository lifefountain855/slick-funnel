import { useEffect, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export function ProtectedRoute() {
  const location = useLocation()
  const [state, setState] = useState<"loading" | "allowed" | "denied" | "error">("loading")

  useEffect(() => {
    let active = true
    async function checkAccess() {
      try {
        const { supabase } = await import("@/lib/supabase")
        const { data, error: authError } = await supabase.auth.getUser()
        if (authError) throw authError
        if (!data.user) {
          if (active) setState("denied")
          return
        }
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single()
        if (error) throw error
        if (active) setState(profile?.role === "admin" ? "allowed" : "denied")
      } catch (error) {
        console.error("Admin access verification failed", error)
        if (active) setState("error")
      }
    }
    void checkAccess()
    return () => { active = false }
  }, [])

  if (state === "loading") return <div className="p-12 text-center">Checking access...</div>
  if (state === "error") return <div role="alert" className="p-12 text-center">Unable to verify access. Check your connection and reload this page.</div>
  if (state === "denied") return <Navigate to="/admin/login" replace state={{ from: location }} />
  return <Outlet />
}
