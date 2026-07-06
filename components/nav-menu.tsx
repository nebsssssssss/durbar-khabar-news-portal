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

// ---------- Desktop horizontal nav ----------
export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="मुख्य नेभिगेसन">
      <ul className="flex items-center gap-0">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <li key={item.href} className="nav-item relative group">
              <Link
                href={item.href}
                className={`inline-flex items-center gap-1 px-3 py-3 text-sm font-medium transition-colors hover:text-[#B5121B] whitespace-nowrap ${
                  isActive
                    ? "text-[#B5121B] border-b-2 border-[#B5121B]"
                    : "text-[#141414]"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              {item.children && (
                <ul className="nav-dropdown absolute top-full left-0 z-50 bg-white border border-[#E0E0E0] shadow-md min-w-[120px] py-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#141414] hover:bg-[#F5F5F3] hover:text-[#B5121B] transition-colors"
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
    </nav>
  )
}

// ---------- Mobile drawer nav ----------
interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="मुख्य मेनु"
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E0E0E0]">
          <span className="font-semibold text-[#141414]">मेनु</span>
          <button
            onClick={onClose}
            aria-label="मेनु बन्द गर्नुहोस्"
            className="p-2 text-[#141414] hover:text-[#B5121B]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16"/>
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const hasChildren = !!item.children
              const isExpanded = openDropdown === item.href

              return (
                <li key={item.href} className="border-b border-[#F0F0F0]">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => { if (!hasChildren) onClose() }}
                      className={`flex-1 px-4 py-3 text-sm font-medium ${
                        isActive ? "text-[#B5121B]" : "text-[#141414]"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => setOpenDropdown(isExpanded ? null : item.href)}
                        aria-label={`${item.label} विस्तार गर्नुहोस्`}
                        className="px-4 py-3 text-[#757575]"
                      >
                        <svg
                          width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >
                          <path d="M2 4l4 4 4-4"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasChildren && isExpanded && (
                    <ul className="bg-[#F5F5F3]">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block pl-8 pr-4 py-2.5 text-sm text-[#141414] hover:text-[#B5121B]"
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
        </nav>
      </aside>
    </>
  )
}
