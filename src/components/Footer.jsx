import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-100 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block group">
              <img
                src="/assets/logo-text.png"
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
            
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Columns (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-8">
            
            {/* PRODUCT */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Product
              </h5>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="hover:text-slate-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-slate-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Company
              </h5>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li>
                  <a href="#about" className="hover:text-slate-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-slate-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Legal
              </h5>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
