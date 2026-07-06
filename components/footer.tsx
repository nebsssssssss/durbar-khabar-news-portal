"use client"

import Link from "next/link"
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

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white mt-8" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Col 1: Logo + info */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <div className="h-9">
              <Logo variant="white" />
            </div>
            <p className="font-mukta text-[13px] text-white/65 leading-relaxed">
              नेपालको भरपर्दो अनलाइन समाचार पोर्टल — ताजा र विश्वसनीय सूचना।
            </p>
            <div className="font-mukta text-[12px] text-white/50 space-y-1">
              <p className="font-semibold text-white/65">हिमचुली मिडिया प्रा. लि.</p>
              <p><a href="tel:+977-1-0000000" className="hover:text-white transition-colors">फोन: +९७७-१-०००-००००</a></p>
              <p>काठमाडौँ, नेपाल</p>
              <p>दर्ता नं: ०००/०७९/०८०</p>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h3 className="font-khand font-bold text-[13px] uppercase tracking-widest text-white/45 mb-4 pb-2 border-b border-white/10">
              विभागहरू
            </h3>
            <ul className="space-y-2">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-mukta text-[13px] text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="font-khand font-bold text-[13px] uppercase tracking-widest text-white/45 mb-4 pb-2 border-b border-white/10">
              कम्पनी
            </h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-mukta text-[13px] text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social + Newsletter */}
          <div>
            <h3 className="font-khand font-bold text-[13px] uppercase tracking-widest text-white/45 mb-4 pb-2 border-b border-white/10">
              सामाजिक सञ्जाल
            </h3>
            <div className="flex items-center gap-4 mb-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/55 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="font-mukta text-[12px] text-white/45 mb-2">न्युजलेटर सदस्यता लिनुहोस्</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="तपाईँको इमेल"
                aria-label="इमेल ठेगाना"
                className="flex-1 min-w-0 bg-white/10 text-white font-mukta text-[13px] px-3 py-2 placeholder-white/35 outline-none focus:bg-white/15 focus:ring-1 focus:ring-[#B5121B] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#B5121B] text-white font-mukta text-[12px] font-semibold px-3 py-2 hover:bg-[#9a0f17] transition-colors whitespace-nowrap flex-shrink-0"
              >
                सदस्य बन्नुस्
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 font-mukta text-[12px] text-white/35">
          <span>© २०२६ दरबार खबर। सर्वाधिकार सुरक्षित।</span>
          <span>Developed by <a href="#" className="hover:text-white/60 transition-colors">Your Agency</a></span>
        </div>
      </div>
    </footer>
  )
}
