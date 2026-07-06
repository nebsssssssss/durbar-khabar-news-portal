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
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-drawer-open", "overflow-hidden")
    } else {
      document.body.classList.remove("mobile-drawer-open", "overflow-hidden")
    }
    return () => {
      document.body.classList.remove("mobile-drawer-open", "overflow-hidden")
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Sticky wrapper */}
      <div className={`sticky top-0 z-30 bg-white ${scrolled ? "shadow-md" : "border-b border-[#E0E0E0]"}`}>
        {/* Topbar */}
        <TopBar />

        {/* Main header row */}
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center justify-between py-2 gap-4">
            {/* Logo */}
            <div className={`transition-transform duration-200 ${scrolled ? "scale-[0.87]" : ""} origin-left`}>
              <Logo variant="dark" height={52} className="hidden lg:block" />
              <Logo variant="dark" height={38} className="block lg:hidden" />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center flex-1 justify-end">
              <DesktopNav />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="खोज खोल्नुहोस्"
                className="p-2 text-[#141414] hover:text-[#B5121B] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="9" cy="9" r="6"/>
                  <path d="M13.5 13.5l3.5 3.5"/>
                </svg>
              </button>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="मेनु खोल्नुहोस्"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 text-[#141414] hover:text-[#B5121B] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 6h16M3 11h16M3 16h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Breaking ticker */}
        <BreakingTicker />
      </div>

      {/* Mobile drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
