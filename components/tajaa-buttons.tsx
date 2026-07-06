"use client"

import { useState } from "react"
import { TajaaOverlay } from "@/components/tajaa-overlay"

export function TajaaButtons() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<"tajaa" | "popular">("tajaa")

  function openWith(t: "tajaa" | "popular") {
    setTab(t)
    setOpen(true)
  }

  return (
    <>
      <div className="flex items-center gap-3">
        {/* ताजा pill */}
        <button
          onClick={() => openWith("tajaa")}
          className="flex items-center gap-2 bg-[#B5121B] hover:bg-[#9a0f17] active:scale-95 text-white font-khand font-bold text-[15px] px-4 py-2.5 rounded-full transition-all shadow-sm"
          aria-label="ताजा समाचार हेर्नुहोस्"
        >
          {/* Flame icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C9.26 2 7 4.27 7 7c0 1.74.82 3.28 2.1 4.25C7.82 12.23 7 13.77 7 15.5 7 18.54 9.46 21 12.5 21S18 18.54 18 15.5c0-1.73-.82-3.27-2.1-4.25C17.18 10.28 18 8.74 18 7c0-2.73-2.26-5-6-5zm.5 15.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
          ताजा
        </button>

        {/* लोकप्रिय pill */}
        <button
          onClick={() => openWith("popular")}
          className="flex items-center gap-2 bg-[#B5121B] hover:bg-[#9a0f17] active:scale-95 text-white font-khand font-bold text-[15px] px-4 py-2.5 rounded-full transition-all shadow-sm"
          aria-label="लोकप्रिय समाचार हेर्नुहोस्"
        >
          {/* Trending arrow icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          लोकप्रिय
        </button>
      </div>

      <TajaaOverlay isOpen={open} defaultTab={tab} onClose={() => setOpen(false)} />
    </>
  )
}
