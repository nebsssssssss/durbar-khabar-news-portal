"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "@/components/logo"

const CATEGORY_LINKS = [
  { label: "समाचार", href: "/category/samachar" },
  { label: "राजनीति", href: "/category/rajniti" },
  { label: "समाज", href: "/category/samaj" },
  { label: "कुटनीति", href: "/category/kutaniti" },
  { label: "विश्व", href: "/category/vishwa" },
  { label: "विचार", href: "/category/bichar" },
  { label: "अन्तर्वार्ता", href: "/category/antarwarta" },
]

const COMPANY_LINKS = [
  { label: "हाम्रोबारे", href: "/about" },
  { label: "सम्पर्क", href: "/contact" },
  { label: "गोपनीयता नीति", href: "/privacy" },
  { label: "सेवाका सर्तहरू", href: "/terms" },
  { label: "विज्ञापन", href: "/advertise" },
  { label: "सम्पादकीय नीति", href: "/editorial-policy" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <footer className="bg-[#141414] text-white" role="contentinfo">

      {/* Main footer body */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Column 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            {/* Logo wrapper — fixed height so SVG scales correctly */}
            <div className="h-10 flex items-center">
              <Logo variant="white" href="/" />
            </div>

            <p className="font-mukta text-[13.5px] leading-relaxed text-white/60">
              नेपालको भरपर्दो अनलाइन समाचार पोर्टल — ताजा, तथ्यपरक र विश्वसनीय सूचना।
            </p>

            <div className="space-y-1 font-mukta text-[13px] text-white/50">
              <p className="font-semibold text-white/70 text-[13.5px]">हिमचुली मिडिया प्रा. लि.</p>
              <p>काठमाडौँ, नेपाल</p>
              <p>
                <a href="tel:+97710000000" className="hover:text-white/90 transition-colors duration-150">
                  फोन: +९७७-१-०००-००००
                </a>
              </p>
              <p>
                <a href="mailto:info@durbarkhabar.com" className="hover:text-white/90 transition-colors duration-150">
                  info@durbarkhabar.com
                </a>
              </p>
              <p className="text-[12px] text-white/35 pt-0.5">दर्ता नं: ०००/०७९/०८०</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1 pt-1">
              {[
                {
                  label: "Facebook",
                  href: "https://facebook.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  label: "X (Twitter)",
                  href: "https://x.com",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com",
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm text-white/45 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Categories ── */}
          <div>
            <h3 className="font-khand font-bold text-[11px] uppercase tracking-[0.12em] text-white/40 mb-4 pb-2.5 border-b border-white/10">
              विभागहरू
            </h3>
            <ul className="space-y-2.5">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mukta text-[13.5px] text-white/60 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B5121B] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Company ── */}
          <div>
            <h3 className="font-khand font-bold text-[11px] uppercase tracking-[0.12em] text-white/40 mb-4 pb-2.5 border-b border-white/10">
              कम्पनी
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mukta text-[13.5px] text-white/60 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B5121B] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Newsletter ── */}
          <div>
            <h3 className="font-khand font-bold text-[11px] uppercase tracking-[0.12em] text-white/40 mb-4 pb-2.5 border-b border-white/10">
              न्युजलेटर
            </h3>
            <p className="font-mukta text-[13px] text-white/55 mb-4 leading-relaxed">
              ताजा समाचार सिधै आफ्नो इमेलमा पाउनुहोस्।
            </p>

            {submitted ? (
              <div className="bg-white/10 border border-white/20 px-4 py-3 font-mukta text-[13px] text-white/80">
                धन्यवाद! तपाईँलाई सदस्यता दिइएको छ।
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="तपाईँको इमेल ठेगाना"
                  required
                  aria-label="इमेल ठेगाना"
                  className="w-full bg-white/8 border border-white/15 text-white font-mukta text-[13px] px-3.5 py-2.5 placeholder-white/30 outline-none focus:border-[#B5121B] focus:bg-white/12 transition-all duration-150"
                />
                <button
                  type="submit"
                  className="w-full bg-[#B5121B] text-white font-khand font-bold tracking-wide text-[14px] px-4 py-2.5 hover:bg-[#9a0f17] active:bg-[#7f0d15] transition-colors duration-150"
                >
                  सदस्य बन्नुस्
                </button>
              </form>
            )}

            {/* App / RSS */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="font-khand font-bold text-[11px] uppercase tracking-[0.12em] text-white/40 mb-3">
                थप माध्यम
              </p>
              <div className="flex flex-col gap-2">
                <a href="#" className="font-mukta text-[13px] text-white/55 hover:text-white transition-colors duration-150 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
                  </svg>
                  RSS फिड
                </a>
                <a href="#" className="font-mukta text-[13px] text-white/55 hover:text-white transition-colors duration-150 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.35.81 3.17.82.96-.02 2.06-.86 3.53-.73 1.61.16 2.8.84 3.53 2.12-3.11 1.87-2.47 5.53.32 6.97-.79 1.64-1.56 3.21-2.55 4.5zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  iOS App
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mukta text-[12px] text-white/30 text-center sm:text-left">
            &copy; २०२६ दरबार खबर — हिमचुली मिडिया प्रा. लि। सर्वाधिकार सुरक्षित।
          </p>
          <p className="font-mukta text-[12px] text-white/25">
            Developed with care in Nepal
          </p>
        </div>
      </div>

    </footer>
  )
}
