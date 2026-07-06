"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const NAV_ITEMS = [
  { label: "गृहपृष्ठ", href: "/" },
  { label: "समाचार", href: "/category/samachar" },
  { label: "राजनीति", href: "/category/rajniti" },
  { label: "समाज", href: "/category/samaj" },
  { label: "कुटनीति", href: "/category/kutaniti" },
  {
    label: "छिमेक",
    href: "/category/chhimek",
    children: [
      { label: "चीन", href: "/category/china" },
      { label: "भारत", href: "/category/india" },
    ],
  },
  { label: "विश्व", href: "/category/vishwa" },
  { label: "विचार", href: "/category/bichar" },
  { label: "अन्तर्वार्ता", href: "/category/antarwarta" },
  { label: "विशेष", href: "/category/bishesh" },
]

// ─── Desktop horizontal nav ───────────────────────────────────────────────────
interface DesktopNavProps {
  dark?: boolean
}

export function DesktopNav({ dark = false }: DesktopNavProps) {
  const pathname = usePathname()

  return (
    <ul className="flex items-center" role="menubar">
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"))
        return (
          <li key={item.href} className="nav-item relative group" role="none">
            <Link
              href={item.href}
              role="menuitem"
              aria-haspopup={item.children ? "true" : undefined}
              className={[
                "inline-flex items-center gap-0.5 px-2.5 xl:px-3 py-3 font-khand font-semibold text-[15px] whitespace-nowrap transition-colors",
                dark
                  ? isActive
                    ? "text-[#ff4d4d] border-b-2 border-[#ff4d4d]"
                    : "text-white/85 hover:text-white"
                  : isActive
                    ? "text-[#B5121B] border-b-2 border-[#B5121B]"
                    : "text-[#141414] hover:text-[#B5121B]",
              ].join(" ")}
            >
              {item.label}
              {item.children && (
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 3.5l3 3 3-3"/>
                </svg>
              )}
            </Link>
            {item.children && (
              <ul
                role="menu"
                className="nav-dropdown absolute top-full left-0 z-50 bg-white border border-[#E0E0E0] shadow-lg min-w-[130px] py-1"
              >
                {item.children.map((child) => (
                  <li key={child.href} role="none">
                    <Link
                      href={child.href}
                      role="menuitem"
                      className="block px-4 py-2 font-mukta text-sm text-[#141414] hover:bg-[#F5F5F3] hover:text-[#B5121B] transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

// ─── Mobile full-screen drawer nav ────────────────────────────────────────────
interface MobileNavProps {
  id?: string
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ id, isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="मुख्य मेनु"
        className={`fixed top-0 left-0 z-50 h-full w-[280px] max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E0E0E0] bg-[#141414]">
          <div className="h-7 text-white">
            <Logo variant="white" />
          </div>
          <button
            onClick={onClose}
            aria-label="मेनु बन्द गर्नुहोस्"
            className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M2 2l14 14M16 2L2 16"/>
            </svg>
          </button>
        </div>

        {/* Nav list */}
        <nav className="flex-1 overflow-y-auto overscroll-contain" aria-label="मोबाइल नेभिगेसन">
          <ul>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const hasChildren = !!item.children
              const isExpanded = openDropdown === item.href

              return (
                <li key={item.href} className="border-b border-[#F0F0F0] last:border-none">
                  <div className="flex items-stretch">
                    <Link
                      href={item.href}
                      onClick={() => { if (!hasChildren) onClose() }}
                      className={[
                        "flex-1 px-4 py-3.5 font-khand font-semibold text-[16px] leading-none transition-colors",
                        isActive ? "text-[#B5121B]" : "text-[#141414]",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => setOpenDropdown(isExpanded ? null : item.href)}
                        aria-label={`${item.label} विस्तार`}
                        aria-expanded={isExpanded}
                        className="px-4 flex items-center text-[#757575] hover:text-[#B5121B] transition-colors border-l border-[#F0F0F0]"
                      >
                        <svg
                          width="12" height="12" viewBox="0 0 12 12" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >
                          <path d="M2 4l4 4 4-4"/>
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <ul className="bg-[#F8F8F6]">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="flex items-center gap-2 pl-7 pr-4 py-3 font-mukta text-sm text-[#444] hover:text-[#B5121B] transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#B5121B] flex-shrink-0" aria-hidden="true" />
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-3 border-t border-[#E0E0E0] text-xs text-[#aaa] font-mukta text-center">
          © २०२६ दरबार खबर
        </div>
      </aside>
    </>
  )
}

// Need to import Logo inside MobileNav
import { Logo } from "@/components/logo"
