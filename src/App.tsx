import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { Pricing } from "./pages/Pricing"
import { Industries } from "./pages/Industries"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Legal } from "./pages/Legal"
/*import { Audit } from "./pages/Audit"*/
import NotFound from "./pages/NotFound"
import { AdminLogin } from "./pages/admin/AdminLogin"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { ProtectedRoute } from "./components/auth/ProtectedRoute"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="industries" element={<Industries />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal" element={<Legal />} />
        <Route path="audit" element={<Navigate to="/contact" replace />} />
        {/*<Route path="audit" element={<Audit />} />*/}
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
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
