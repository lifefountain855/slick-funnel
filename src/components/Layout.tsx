import React from 'react'
import { Link, Outlet, useLocation, useOutlet } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "./ui/button"
import Logo from "./ui/Logo"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a snappy enter
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    filter: "blur(10px)",
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet()
  const p = location.pathname

  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center space-x-2">
            {/* SlickFunnel Logo SVG / Text */}
            <span className="font-serif text-xl font-bold text-primary flex items-center gap-2">
              <Logo size={50}/>
              SlickFunnel
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center font-medium">
            <Link to="/" className={`hover:text-primary transition-colors ${p=='/'?'text-primary':''}`}>Home</Link>
            <Link to="/services" className={`hover:text-primary transition-colors ${p=='/services'?'text-primary':''}`}>Services</Link>
            <Link to="/pricing" className={`hover:text-primary transition-colors ${p=='/pricing'?'text-primary':''}`}>Pricing</Link>
            <Link to="/industries" className={`hover:text-primary transition-colors ${p=='/industries'?'text-primary':''}`}>Industries</Link>
            <Link to="/about" className={`hover:text-primary transition-colors ${p=='/about'?'text-primary':''}`}>About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/audit">
              <Button variant="default" className="hidden md:inline-flex">Get Free Audit</Button>
            </Link>
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {/* Keying the animated element directly ensures AnimatePresence captures the exit state */}
          <motion.div
            key={p}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full"
          >
            {outlet && React.cloneElement(outlet, { key: location.pathname })}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="font-serif text-xl font-bold flex items-center gap-2">
               <Logo size={50} stroke="#F4EAD4" fill="#F4EAD4"/>
               SlickFunnel
            </span>
            <p className="text-sm text-slate-300">Your entire online presence. Handled.<br/>We handle your online presence so you can run your business.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/services#get-found">Get Found</Link></li>
              <li><Link to="/services#get-leads">Get Leads</Link></li>
              <li><Link to="/services#convert">Convert Leads</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Ready to grow?</h4>
            <Link to="/audit">
              <Button variant="accent" className="w-full">Get Your Free Audit</Button>
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-700 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SlickFunnel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
