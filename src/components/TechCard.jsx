import React from 'react'
import { Star, Check } from 'lucide-react'

export default function TechCard({ tech, isAdded, onAdd }) {
  const getBadgeStyle = (badgeColor) => {
    switch (badgeColor) {
      case 'green':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
      case 'orange':
        return 'bg-orange-50 text-orange-600 border-orange-200/80'
      case 'red':
        return 'bg-rose-50 text-rose-600 border-rose-200/80'
      case 'amber':
        return 'bg-amber-50 text-amber-600 border-amber-200/80'
      case 'teal':
        return 'bg-teal-50 text-teal-600 border-teal-200/80'
      case 'slate':
        return 'bg-slate-100 text-slate-700 border-slate-200'
      case 'blue':
      default:
        return 'bg-sky-50 text-sky-600 border-sky-200/80'
    }
  }

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      
      <div>
        {/* Top: Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-2 group-hover:scale-105 transition-transform">
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="w-8 h-8 object-contain"
              loading="lazy"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = 'none'
              }}
            />
          </div>

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${getBadgeStyle(
              tech.badgeColor
            )}`}
          >
            {tech.badge}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-950 transition-colors">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed min-h-[44px]">
          {tech.description}
        </p>

        {/* Metadata Chips: Category, Difficulty, Rating */}
        <div className="flex flex-wrap items-center gap-2.5 my-5 text-xs">
          <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md">
            {tech.category}
          </span>

          <span className="text-slate-500 font-medium">
            {tech.difficulty}
          </span>

          <div className="flex items-center gap-1 font-semibold text-slate-700 ml-auto">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{tech.rating}</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        {isAdded ? (
          <button
            type="button"
            disabled
            className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>✓ Added to Stack</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAdd(tech)}
            className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-[#0f172a] hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all duration-150 transform active:scale-[0.99] flex items-center justify-center gap-1.5"
          >
            Add to Stack
          </button>
        )}
      </div>

    </div>
  )
}
