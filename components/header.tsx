"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { TopBar } from "@/components/top-bar"
import { DesktopNav, MobileNav } from "@/components/nav-menu"
import { BreakingTicker } from "@/components/breaking-ticker"
import { SearchOverlay } from "@/components/search-overlay"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8) }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      <div className={`sticky top-0 z-30 bg-white transition-shadow duration-200 ${scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.10)]" : "border-b border-[#E0E0E0]"}`}>
        {/* Top bar */}
        <TopBar />

        {/* Main header row */}
        <div className="max-w-[1280px] mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between gap-3 py-2 sm:py-2.5">

            {/* Logo — scales on scroll */}
            <div className={`flex-shrink-0 transition-all duration-200 ${scrolled ? "h-7 sm:h-8" : "h-9 sm:h-11"}`}>
              <Logo variant="dark" />
            </div>

            {/* Desktop nav — hidden on mobile */}
            <nav className="hidden lg:flex items-center flex-1 justify-end" aria-label="मुख्य नेभिगेसन">
              <DesktopNav />
            </nav>

            {/* Right action buttons */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="खोज खोल्नुहोस्"
                className="w-9 h-9 flex items-center justify-center text-[#141414] hover:text-[#B5121B] transition-colors rounded-sm"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="9" cy="9" r="5.5"/>
                  <path d="M13.5 13.5l3.5 3.5"/>
                </svg>
              </button>

              {/* Hamburger — mobile / tablet only */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="मेनु खोल्नुहोस्"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
                className="lg:hidden w-9 h-9 flex items-center justify-center text-[#141414] hover:text-[#B5121B] transition-colors rounded-sm"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Breaking news ticker */}
        <BreakingTicker />
      </div>

      {/* Mobile drawer */}
      <MobileNav id="mobile-nav" isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
