import { useEffect, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { supabase } from "@/lib/supabase"

export function ProtectedRoute() {
  const location = useLocation()
  const [state, setState] = useState<"loading" | "allowed" | "denied">("loading")

  useEffect(() => {
    let active = true
    async function checkAccess() {
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        if (active) setState("denied")
        return
      }
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single()
      if (active) setState(!error && profile?.role === "admin" ? "allowed" : "denied")
    }
    void checkAccess()
    return () => { active = false }
  }, [])

  if (state === "loading") return <div className="p-12 text-center">Checking access...</div>
  if (state === "denied") return <Navigate to="/admin/login" replace state={{ from: location }} />
  return <Outlet />
}
