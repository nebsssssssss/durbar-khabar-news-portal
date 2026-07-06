"use client"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-3 py-8 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="mx-auto text-[#B5121B]"
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" />
          <path d="M12 20l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="font-semibold text-[#141414]">सन्देश पठाइयो!</p>
        <p className="text-sm text-[#757575]">हामी चाँडै जवाफ दिनेछौँ।</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-[#B5121B] underline self-center mt-1"
        >
          अर्को सन्देश पठाउनुहोस्
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="नाम *"
        required
        aria-label="नाम"
        className="border border-[#E0E0E0] px-3 py-2.5 text-sm outline-none focus:border-[#B5121B] transition-colors"
      />
      <input
        type="email"
        placeholder="इमेल *"
        required
        aria-label="इमेल"
        className="border border-[#E0E0E0] px-3 py-2.5 text-sm outline-none focus:border-[#B5121B] transition-colors"
      />
      <input
        type="text"
        placeholder="विषय"
        aria-label="विषय"
        className="border border-[#E0E0E0] px-3 py-2.5 text-sm outline-none focus:border-[#B5121B] transition-colors"
      />
      <textarea
        placeholder="सन्देश *"
        rows={5}
        required
        aria-label="सन्देश"
        className="border border-[#E0E0E0] px-3 py-2.5 text-sm outline-none focus:border-[#B5121B] transition-colors resize-none"
      />
      <button
        type="submit"
        className="bg-[#B5121B] text-white text-sm font-semibold px-6 py-2.5 hover:bg-[#9a0f17] transition-colors self-start"
      >
        पठाउनुहोस्
      </button>
    </form>
  )
}
