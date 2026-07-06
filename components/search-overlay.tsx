"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = inputRef.current?.value.trim()
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex flex-col" role="dialog" aria-modal="true" aria-label="खोज">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden="true" />
      {/* Search bar */}
      <div className="relative bg-white w-full shadow-lg">
        <form onSubmit={handleSubmit} className="max-w-[1280px] mx-auto flex items-center gap-3 px-4 py-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#757575" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="9" cy="9" r="6"/>
            <path d="M13.5 13.5l3.5 3.5"/>
          </svg>
          <input
            ref={inputRef}
            type="search"
            placeholder="समाचार खोज्नुहोस्..."
            className="flex-1 font-mukta text-[16px] outline-none text-[#141414] placeholder-[#999] bg-transparent"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="खोज बन्द गर्नुहोस्"
            className="p-1 text-[#757575] hover:text-[#141414]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
