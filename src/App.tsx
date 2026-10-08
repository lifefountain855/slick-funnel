import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import type { ComponentType } from "react"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { Pricing } from "./pages/Pricing"
import { Industries } from "./pages/Industries"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Legal } from "./pages/Legal"
import { WebDesign } from "./pages/services/WebDesign"
import { LocalSeo } from "./pages/services/LocalSeo"
import { GuideIndex } from "./pages/resources/GuideIndex"
import { Resources } from "./pages/resources/Resources"
import { LocalSearchGuide } from "./pages/resources/LocalSearchGuide"
import { AiSearchGuide } from "./pages/resources/AiSearchGuide"
import NotFound from "./pages/NotFound"
import { ProtectedRoute } from "./components/auth/ProtectedRoute"
import { publicRoutes, siteRoutes, type PublicRoutePath } from "./seo/site"

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin").then(({ AdminLogin }) => ({ default: AdminLogin })))
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard").then(({ AdminDashboard }) => ({ default: AdminDashboard })))

const pageComponents: Record<PublicRoutePath, ComponentType> = {
  [siteRoutes.home.path]: Home,
  [siteRoutes.services.path]: Services,
  [siteRoutes.webDesign.path]: WebDesign,
  [siteRoutes.seo.path]: LocalSeo,
  [siteRoutes.industries.path]: Industries,
  [siteRoutes.pricing.path]: Pricing,
  [siteRoutes.about.path]: About,
  [siteRoutes.contact.path]: Contact,
  [siteRoutes.resources.path]: Resources,
  [siteRoutes.guides.path]: GuideIndex,
  [siteRoutes.localSearchGuide.path]: LocalSearchGuide,
  [siteRoutes.aiSearchGuide.path]: AiSearchGuide,
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRoutes.map((route) => {
          const Page = pageComponents[route.path]
          return route.path === "/"
            ? <Route key={route.path} index element={<Page />} />
            : <Route key={route.path} path={route.path.slice(1, -1)} element={<Page />} />
        })}
        <Route path={siteRoutes.legal.path.slice(1, -1)} element={<Legal />} />
        <Route path="audit" element={<Navigate to="/contact/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route
        path="/admin/login"
        element={<Suspense fallback={<div className="p-12 text-center">Loading sign-in…</div>}><AdminLogin /></Suspense>}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/admin"
          element={<Suspense fallback={<div className="p-12 text-center">Loading leads…</div>}><AdminDashboard /></Suspense>}
        />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
