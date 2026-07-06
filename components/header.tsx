"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { BreakingTicker } from "@/components/breaking-ticker"
import { SearchOverlay } from "@/components/search-overlay"
import { MobileNav, DesktopNav } from "@/components/nav-menu"

// Social icon links shown in the dark nav bar
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com/durbarkhabar",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/durbarkhabar",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@durbarkhabar",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@durbarkhabar",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Trending",
    href: "/category/trending",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 60) }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-30 bg-white">

        {/* ── Top strip: big logo + live date/time ── */}
        {!scrolled && (
          <div className="border-b border-[#E8E8E8]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col items-center py-3 sm:py-4 gap-1.5">
              {/* Logo — large */}
              <div className="h-14 sm:h-20 md:h-24">
                <Logo variant="dark" />
              </div>
              {/* Live date/time iframe from softnep */}
              <div className="w-full flex justify-center overflow-hidden" style={{ height: "28px" }}>
                <iframe
                  src="https://calendar.softnep.tools/nepalitime/1?template=1&time=yes&second=yes&clock=yes&font_size=15px&hr=yes"
                  title="Nepali Date and Time"
                  className="border-0 w-full max-w-[600px]"
                  style={{ height: "28px", overflow: "hidden" }}
                  scrolling="no"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Dark nav bar ── */}
        <div className={`bg-[#1a1a1a] ${scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.25)]" : ""}`}>
          <div className="max-w-[1280px] mx-auto px-3 sm:px-4">
            <div className="flex items-center h-11 sm:h-12 gap-2">

              {/* LEFT: social icons */}
              <div className="flex items-center gap-0.5 flex-shrink-0">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* CENTER: desktop nav — hidden on mobile/tablet */}
              <nav
                className="hidden lg:flex flex-1 items-center justify-center overflow-hidden"
                aria-label="मुख्य नेभिगेसन"
              >
                <DesktopNav dark />
              </nav>

              {/* Spacer on mobile so right buttons align right */}
              <div className="flex-1 lg:hidden" />

              {/* RIGHT: search + hamburger */}
              <div className="flex items-center gap-0.5 flex-shrink-0">
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="खोज खोल्नुहोस्"
                  className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-sm"
                >
                  <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="9" cy="9" r="5.5"/>
                    <path d="M13.5 13.5l3.5 3.5"/>
                  </svg>
                </button>

                {/* Compact logo shown in nav bar when scrolled */}
                {scrolled && (
                  <div className="hidden lg:block h-6 mx-2 text-white">
                    <Logo variant="white" />
                  </div>
                )}

                <button
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="मेनु खोल्नुहोस्"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-nav"
                  className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-sm"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M3 5.5h16M3 11h16M3 16.5h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Breaking news ticker ── */}
        <BreakingTicker />
      </header>

      {/* Mobile drawer */}
      <MobileNav id="mobile-nav" isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
