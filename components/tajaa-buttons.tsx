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
      {/* Fixed FABs — bottom-right corner */}
      <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">

        {/* ताजा — flame icon */}
        <button
          onClick={() => openWith("tajaa")}
          aria-label="ताजा समाचार"
          className="w-14 h-14 rounded-full bg-[#B5121B] hover:bg-[#9a0f17] active:scale-95 text-white flex items-center justify-center shadow-lg transition-all"
        >
          {/* Flame SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 6.53 4 9.12 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.65-2.33-8.77-6.5-11.33zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
          </svg>
        </button>

        {/* लोकप्रिय — trending icon */}
        <button
          onClick={() => openWith("popular")}
          aria-label="लोकप्रिय समाचार"
          className="w-14 h-14 rounded-full bg-[#B5121B] hover:bg-[#9a0f17] active:scale-95 text-white flex items-center justify-center shadow-lg transition-all"
        >
          {/* Trending up arrow SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </button>
      </div>

      <TajaaOverlay isOpen={open} defaultTab={tab} onClose={() => setOpen(false)} />
    </>
  )
}
