import React from 'react'
import { X } from 'lucide-react'

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm sticky top-24 transition-all">
      
      {/* Panel Header */}
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
        Your Stack
      </h3>

      {/* Subtitle / Counter */}
      <p className="text-slate-400 text-sm mt-1 mb-6">
        {count === 0
          ? 'No technologies selected yet.'
          : `${count} Technology Selected`}
      </p>

      {/* Content: Empty State vs Selected Items */}
      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 flex items-center justify-center text-center">
          <p className="text-slate-400 text-sm">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 bg-white hover:border-slate-300 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] animate-fadeIn"
              >
                {/* Tech Icon & Info */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-50 p-1.5 border border-slate-100">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Remove Item Button */}
                <button
                  type="button"
                  onClick={() => onRemove(item.id, item.name)}
                  className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition-colors flex-shrink-0"
                  aria-label={`Remove ${item.name} from stack`}
                >
                  <X className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <div className="pt-3">
            <button
              type="button"
              onClick={onRemoveAll}
              className="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-semibold text-sm transition-colors"
            >
              Remove All
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
