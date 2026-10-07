import React, { useState, useEffect } from 'react'
import { Link, useLocation, useOutlet } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { CircleDollarSign, BriefcaseBusiness, Home, CircleHelp, Info, X, Menu } from 'lucide-react'
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navigationItems = [
    { label: 'Home', to: '/', icon: Home },
    { label: 'Services', to: '/services', icon: BriefcaseBusiness },
    { label: 'Pricing', to: '/pricing', icon: CircleDollarSign },
    { label: 'About', to: '/about', icon: Info },
    { label: 'Industries', to: '/industries', icon: CircleHelp },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center space-x-2">
            {/* SlickFunnel Logo SVG / Text */}
            <span className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
              <Logo size={50}/>
              <span>Kevin <span className="font-sans text-xs font-medium text-slate-500">at</span> SlickFunnel</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center font-medium">
            {navigationItems.map(({ label, to }) => (
              <Link key={to} to={to} className={`hover:text-primary transition-colors ${p==to?'text-primary':''}`}>{label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/contact">
              <Button variant="default" className="hidden rounded-full md:inline-flex">Talk with Kevin</Button>
            </Link>
            {/* Mobile menu button */}
            <button
              type="button"
              className={`md:hidden p-2 border border-border-subtle bg-secondary/70 hover:bg-accent/90 hover:text-white transition-colors ${isMenuOpen ? 'relative z-60' : ''}`}
              aria-label={isMenuOpen ? 'close navigation menu' : 'open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        <AnimatePresence 
          mode="wait" 
          onExitComplete={() => {
            // Optional: resets scroll position the moment the previous page finishes exiting
            window.scrollTo(0, 0);
          }}
        >
          {/* Keying the animated element directly ensures AnimatePresence captures the exit state */}
          <motion.div
            key={p}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={(definition) => {
              // Trigger scroll-to-top once the enter animation ('animate') finishes
              if (definition === "animate") {
                window.scrollTo({ top: 0, behavior: "smooth" }); // Use "instant" or "auto" if you don't want smooth scrolling
              }
            }}
            className="w-full h-full"
          >
            <AnimatePresence>
              {isMenuOpen && (
                <>
                  <motion.button
                    type="button"
                    aria-label="close navigation menu"
                    className="md:hidden fixed inset-0 z-40 cursor-default bg-black/65 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeMenu}
                  />
                  <motion.div
                    id="mobile-navigation"
                    className="md:hidden fixed right-0 top-0 z-50 h-screen w-[min(88vw,380px)] overflow-y-auto border-l border-border-subtle bg-white px-2 pb-8 pt-10 shadow-2xl"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    <div className="flex flex-col gap-2 mt-1">
                      {navigationItems.map(({ label, to, icon: Icon }) => (
                        <Link
                          key={to}
                          to={to}
                          onClick={closeMenu}
                          className={`relative px-8 flex items-center shadow-sm gap-4 py-4 text-base transition-colors `+(to==p ? 'bg-primary/90 text-white hover:text-white/60' :' hover:text-black/60') }
                        >
                          <Icon size={18} aria-hidden="true" />
                          <span>{label}</span>
                          {p==to && (<span className='absolute right-8 font-bold text-secondary'>&lt;</span>)}
                        </Link>
                      ))}
                      <div className='h-[5vh] grow'></div>
                      <Link
                        to="/contact"
                        onClick={closeMenu}
                        className="mt-4 flex flex-row justify-center text-sm"
                      >
                        <Button variant='accent' className="rounded-full">Say hello to Kevin</Button>
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            {outlet && React.cloneElement(outlet, { key: p })}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold flex items-center gap-2">
               <Logo size={50} stroke="#F4EAD4" fill="#F4EAD4"/>
               <div className='flex flex-col'>
                <span>Kevin</span> 
                <div className='flex flex-row items-center gap-2'><span className="text-base font-sans font-medium italic text-slate-300">at</span> SlickFunnel</div>
               </div>
            </span>
            <p className="italic text-lg text-slate-300">A real person in your corner.</p>
            <p className="text-slate-300">Thoughtful online support for the business you’ve built.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-secondary mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/services#get-found">Get Found</Link></li>
              <li><Link to="/services#get-leads">Get Leads</Link></li>
              <li><Link to="/services#convert">Convert Leads</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-secondary mb-4">Company</h4>
            <ul className="space-y-2 underline text-slate-300">
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-secondary mb-4">Want to talk?</h4>
            <Link to="/contact">
              <Button variant="accent" className="w-full rounded-full">Say hello to Kevin</Button>
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-700 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Kevin at SlickFunnel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}