import React from 'react'

export default function Hero({ onExploreClick, onLearnMoreClick }) {
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick()
    } else {
      const el = document.getElementById('technologies')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal{' '}
              <span className="block sm:inline text-brand-gradient">
                Development Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={handleExplore}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-white bg-brand-gradient hover:opacity-95 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Technologies
              </button>

              <button
                type="button"
                onClick={onLearnMoreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: 3D Stack Banner Image */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none flex justify-center">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
              
              <img
                src="/assets/banner-stack.png"
                alt="Dev Stack Layers 3D Illustration"
                className="w-full max-w-[420px] h-auto object-contain drop-shadow-xl hover:scale-102 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
