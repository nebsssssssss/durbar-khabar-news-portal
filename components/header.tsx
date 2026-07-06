"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { BreakingTicker } from "@/components/breaking-ticker"
import { SearchOverlay } from "@/components/search-overlay"
import { MobileNav, DesktopNav } from "@/components/nav-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10) }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      {/* ── Entire header is sticky ── */}
      <header className="sticky top-0 z-30 bg-white">

        {/* ── Top strip: big logo + live date/time ── */}
        <div
          className={`border-b border-[#E8E8E8] transition-all duration-200 overflow-hidden ${
            scrolled ? "max-h-0 py-0 border-none" : "max-h-40"
          }`}
          aria-hidden={scrolled}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col items-center py-3 sm:py-4 gap-1.5">
            {/* Logo — large */}
            <div className="h-14 sm:h-20 md:h-24">
              <Logo variant="dark" />
            </div>
            {/* Live date/time iframe */}
            <div className="w-full flex justify-center overflow-hidden" style={{ height: "26px" }}>
              <iframe
                src="https://calendar.softnep.tools/nepalitime/1?template=1&time=yes&second=yes&clock=yes&font_size=15px&hr=yes"
                title="Nepali Date and Time"
                className="border-0 w-full max-w-[600px]"
                style={{ height: "26px", overflow: "hidden" }}
                scrolling="no"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── Dark nav bar ── */}
        <div className={`bg-[#1a1a1a] ${scrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.3)]" : ""}`}>
          <div className="max-w-[1280px] mx-auto px-3 sm:px-4">
            <div className="flex items-center h-11 sm:h-12 gap-2">

              {/* LEFT: search icon */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="खोज खोल्नुहोस्"
                className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-sm flex-shrink-0"
              >
                <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="9" cy="9" r="5.5"/>
                  <path d="M13.5 13.5l3.5 3.5"/>
                </svg>
              </button>

              {/* CENTER: logo (compact, when scrolled) + desktop nav */}
              <nav
                className="hidden lg:flex flex-1 items-center justify-center overflow-hidden"
                aria-label="मुख्य नेभिगेसन"
              >
                {scrolled && (
                  <div className="h-5 mr-4 text-white flex-shrink-0">
                    <Logo variant="white" />
                  </div>
                )}
                <DesktopNav dark />
              </nav>

              {/* Spacer on mobile */}
              <div className="flex-1 lg:hidden" />

              {/* Compact logo center on mobile when scrolled */}
              {scrolled && (
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2 h-5 text-white pointer-events-none">
                  <Logo variant="white" />
                </div>
              )}

              {/* RIGHT: hamburger (mobile) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="मेनु खोल्नुहोस्"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-sm flex-shrink-0"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 5.5h16M3 11h16M3 16.5h16"/>
                </svg>
              </button>

              {/* Desktop right spacer to balance left search */}
              <div className="hidden lg:block w-10 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* ── Breaking news ticker — inside sticky header ── */}
        <BreakingTicker />
      </header>

      {/* Mobile drawer */}
      <MobileNav id="mobile-nav" isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
