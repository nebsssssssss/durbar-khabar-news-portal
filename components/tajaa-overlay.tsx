"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { POSTS } from "@/lib/mock-data"

type Tab = "tajaa" | "popular"

interface TajaaOverlayProps {
  isOpen: boolean
  defaultTab?: Tab
  onClose: () => void
}

// Use first 10 posts as "ताजा", reversed order as "लोकप्रिय"
const TAJAA_POSTS = POSTS.slice(0, 10)
const POPULAR_POSTS = [...POSTS].slice(0, 10).reverse()

export function TajaaOverlay({ isOpen, defaultTab = "tajaa", onClose }: TajaaOverlayProps) {
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab)
  const panelRef = useRef<HTMLDivElement>(null)

  // Sync tab when opened with a specific defaultTab
  useEffect(() => {
    if (isOpen) setActiveTab(defaultTab)
  }, [isOpen, defaultTab])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  const posts = activeTab === "tajaa" ? TAJAA_POSTS : POPULAR_POSTS

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-up panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={activeTab === "tajaa" ? "ताजा समाचार" : "लोकप्रिय समाचार"}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "82vh" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-2.5 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-[#E0E0E0]" />
        </div>

        {/* Tabs + Close */}
        <div className="flex items-center px-4 pb-0 border-b border-[#F0F0F0] flex-shrink-0">
          <div className="flex gap-0 flex-1">
            <button
              onClick={() => setActiveTab("tajaa")}
              className={`relative py-3 px-1 mr-5 font-khand font-bold text-[17px] transition-colors ${
                activeTab === "tajaa" ? "text-[#B5121B]" : "text-[#888]"
              }`}
            >
              ताजा
              {activeTab === "tajaa" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5121B] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`relative py-3 px-1 font-khand font-bold text-[17px] transition-colors ${
                activeTab === "popular" ? "text-[#B5121B]" : "text-[#888]"
              }`}
            >
              लोकप्रिय
              {activeTab === "popular" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5121B] rounded-full" />
              )}
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="बन्द गर्नुहोस्"
            className="w-8 h-8 rounded-full bg-[#B5121B] flex items-center justify-center text-white flex-shrink-0 hover:bg-[#9a0f17] transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13"/>
            </svg>
          </button>
        </div>

        {/* News list */}
        <ul className="flex-1 overflow-y-auto overscroll-contain px-4">
          {posts.map((post, i) => (
            <li key={post.id}>
              <Link
                href={`/${post.slug}`}
                onClick={onClose}
                className="flex items-start gap-3 py-3.5 border-b border-[#F3F3F3] last:border-none group"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B5121B] flex-shrink-0" aria-hidden="true" />
                <span className="font-mukta text-[15px] leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="px-4 pt-2 pb-4 border-t border-[#F0F0F0] flex-shrink-0">
          <Link
            href="/category/samachar"
            onClick={onClose}
            className="block w-full py-3 rounded-full border-2 border-[#B5121B] text-[#B5121B] font-khand font-bold text-[16px] text-center hover:bg-[#B5121B] hover:text-white transition-colors"
          >
            २४ घन्टाका ताजा अपडेट
          </Link>
        </div>
      </div>
    </>
  )
}
