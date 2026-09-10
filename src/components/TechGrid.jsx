import React, { useState } from 'react'
import TechCard from './TechCard'

export default function TechGrid({ technologies, selectedStack, onAddTech }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Language',
    'Styling',
    'DevOps',
  ]

  const filteredTechnologies =
    activeCategory === 'All'
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory)

  // Quick lookup set for added technologies
  const addedIds = new Set(selectedStack.map((item) => item.id))

  return (
    <div className="space-y-6">
      {/* Section Heading & Subtitle */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore the{' '}
          <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Grid of Cards: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTechnologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            isAdded={addedIds.has(tech.id)}
            onAdd={onAddTech}
          />
        ))}
      </div>

      {filteredTechnologies.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 font-medium">
            No technologies found in the "{activeCategory}" category.
          </p>
        </div>
      )}
    </div>
  )
}
