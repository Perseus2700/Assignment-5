import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onAuthClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('Home')

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (linkName, href) => {
    setActiveNav(linkName)
    setMobileMenuOpen(false)
    if (href.startsWith('#') && href.length > 1) {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Mobile Left: Hamburger Icon */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500/20"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center justify-center lg:justify-start flex-1 lg:flex-initial">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('Home', '#')
              }}
              className="flex items-center gap-2 group transition-transform hover:scale-102"
            >
              <img
                src="/assets/logo-text.png"
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Center: Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.name, link.href)
                  }}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-pink-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gradient rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => onAuthClick?.('Sign In')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onAuthClick?.('Sign Up')}
              className="text-sm font-medium text-white bg-brand-gradient hover:opacity-95 px-4 sm:px-6 py-2 rounded-full shadow-sm hover:shadow transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Menu Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md animate-fadeIn px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeNav === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.name, link.href)
                }}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-pink-50 text-pink-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
