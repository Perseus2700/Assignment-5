import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center space-y-4">
      {/* Animated gradient spinner */}
      <div className="relative w-14 h-14">
        <div className="w-14 h-14 rounded-full border-4 border-slate-100 border-t-pink-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-brand-gradient animate-pulse" />
        </div>
      </div>
      <p className="text-sm font-medium text-slate-500 animate-pulse">
        Loading technologies...
      </p>

      {/* Skeleton placeholders */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm animate-pulse space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 bg-slate-200 rounded-xl" />
              <div className="w-16 h-6 bg-slate-100 rounded-full" />
            </div>
            <div className="w-2/3 h-6 bg-slate-200 rounded" />
            <div className="space-y-2">
              <div className="w-full h-4 bg-slate-100 rounded" />
              <div className="w-4/5 h-4 bg-slate-100 rounded" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-16 h-5 bg-slate-100 rounded" />
              <div className="w-20 h-5 bg-slate-100 rounded" />
              <div className="w-12 h-5 bg-slate-100 rounded" />
            </div>
            <div className="w-full h-10 bg-slate-200 rounded-xl pt-2" />
          </div>
        ))}
      </div>
    </div>
  )
}
