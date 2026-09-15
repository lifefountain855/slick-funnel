import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { Pricing } from "./pages/Pricing"
import { Industries } from "./pages/Industries"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Audit } from "./pages/Audit"
import { AdminLogin } from "./pages/admin/AdminLogin"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { ProtectedRoute } from "./components/auth/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audit" element={<Contact />} />
          {/*<Route path="/audit" element={<Audit />} />*/}
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
