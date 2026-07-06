"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { BreakingTicker } from "@/components/breaking-ticker"
import { SearchOverlay } from "@/components/search-overlay"
import { MobileNav, DesktopNav } from "@/components/nav-menu"
import { TajaaOverlay } from "@/components/tajaa-overlay"

// Social icon SVGs
function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.01 3.01 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.01 3.01 0 0 0 2.12-2.13A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.54V8.46L15.82 12l-6.07 3.54z"/>
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z"/>
    </svg>
  )
}
function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2h3.37L14.5 9.72 23 22h-7.14l-4.9-6.45L5.44 22H2.07l7.62-8.23L1 2h7.32l4.43 5.83L18.24 2zM17.1 20h1.87L7.04 3.92H5.04L17.1 20z"/>
    </svg>
  )
}
function IconTikTok() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.23 8.23 0 0 0 4.81 1.54V6.78a4.85 4.85 0 0 1-1.04-.09z"/>
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [overlayTab, setOverlayTab] = useState<"tajaa" | "popular">("tajaa")

  function openOverlay(tab: "tajaa" | "popular") {
    setOverlayTab(tab)
    setOverlayOpen(true)
  }

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
      <header className="sticky top-0 z-30 bg-white shadow-sm">

        {/* ── DESKTOP TOP STRIP: large logo + date/time + social icons ── */}
        <div
          className={`hidden lg:block border-b border-[#EBEBEB] transition-all duration-300 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0 border-none" : "max-h-48 opacity-100"
          }`}
          aria-hidden={scrolled}
        >
          <div className="max-w-[1280px] mx-auto px-6">
            {/* Logo row — big and centered */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="h-14 xl:h-16">
                <Logo variant="dark" />
              </div>
            </div>

            {/* Date + time + social row */}
            <div className="flex items-center justify-center gap-5 pb-3 flex-wrap">
              {/* Live date/time iframe */}
              <div className="overflow-hidden flex-shrink-0" style={{ height: "22px" }}>
                <iframe
                  src="https://calendar.softnep.tools/nepalitime/1?template=1&time=yes&second=yes&clock=yes&font_size=14px&hr=yes"
                  title="Nepali Date and Time"
                  className="border-0"
                  style={{ height: "22px", width: "420px", overflow: "hidden" }}
                  scrolling="no"
                  loading="lazy"
                />
              </div>

              {/* Divider */}
              <span className="w-px h-4 bg-[#DCDCDC] flex-shrink-0" aria-hidden="true" />

              {/* Social icons */}
              <nav aria-label="सामाजिक सञ्जाल">
                <ul className="flex items-center gap-2.5">
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity">
                      <IconYouTube />
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity">
                      <IconFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#141414] text-white hover:opacity-90 transition-opacity">
                      <IconX />
                    </a>
                  </li>
                  <li>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#010101] text-white hover:opacity-90 transition-opacity">
                      <IconTikTok />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* ── DESKTOP NAV BAR (white with border) + MOBILE full header ── */}
        <div className={`bg-white border-b border-[#DCDCDC] ${scrolled ? "shadow-md" : ""}`}>
          <div className="max-w-[1280px] mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center h-12 lg:h-12 gap-2 lg:gap-0">

              {/* ── MOBILE: search left, logo center, hamburger right ── */}
              {/* DESKTOP: home icon left, nav center, search right */}

              {/* LEFT: search (mobile) / home icon (desktop) */}
              <div className="flex items-center flex-shrink-0">
                {/* Mobile search */}
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="खोज खोल्नुहोस्"
                  className="lg:hidden w-10 h-10 flex items-center justify-center text-[#444] hover:text-[#B5121B] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="9" cy="9" r="5.5"/>
                    <path d="M13.5 13.5l3.5 3.5"/>
                  </svg>
                </button>

                {/* Desktop: home icon */}
                <Link
                  href="/"
                  aria-label="गृहपृष्ठ"
                  className="hidden lg:flex w-10 h-10 items-center justify-center text-[#141414] hover:text-[#B5121B] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
                    <path d="M9 21V12h6v9"/>
                  </svg>
                </Link>
              </div>

              {/* CENTER: logo (mobile compact scrolled) + desktop nav */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                {/* Mobile: compact logo in nav bar */}
                <div className="lg:hidden h-7">
                  <Logo variant="dark" />
                </div>

                {/* Desktop: nav links + compact logo when scrolled */}
                <nav className="hidden lg:flex items-center justify-center gap-0 overflow-x-auto" aria-label="मुख्य नेभिगेसन">
                  {scrolled && (
                    <div className="h-7 mr-5 flex-shrink-0 border-r border-[#DCDCDC] pr-5">
                      <Logo variant="dark" />
                    </div>
                  )}
                  <DesktopNav />
                </nav>
              </div>

              {/* RIGHT: search (desktop) / hamburger (mobile) */}
              <div className="flex items-center flex-shrink-0 gap-1">
                {/* Desktop search */}
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="खोज खोल्नुहोस्"
                  className="hidden lg:flex w-10 h-10 items-center justify-center text-[#141414] hover:text-[#B5121B] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="9" cy="9" r="5.5"/>
                    <path d="M13.5 13.5l3.5 3.5"/>
                  </svg>
                </button>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="मेनु खोल्नुहोस्"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-nav"
                  className="lg:hidden w-10 h-10 flex items-center justify-center text-[#444] hover:text-[#B5121B] transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M3 5.5h16M3 11h16M3 16.5h16"/>
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ── Breaking ticker — still inside sticky header ── */}
        <BreakingTicker />
      </header>

      {/* Mobile drawer */}
      <MobileNav id="mobile-nav" isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
