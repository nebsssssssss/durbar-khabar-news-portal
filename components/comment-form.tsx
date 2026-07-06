"use client"

import { useState } from "react"

export function CommentForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-6 text-center border border-[#E0E0E0]">
        <p className="font-semibold text-[#141414] mb-1">टिप्पणी पठाइयो!</p>
        <p className="text-sm text-[#757575]">समीक्षापछि प्रकाशित गरिनेछ।</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-[#B5121B] underline mt-2"
        >
          अर्को टिप्पणी थप्नुहोस्
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <input
        type="text"
        placeholder="नाम *"
        required
        aria-label="नाम"
        className="border border-[#E0E0E0] px-3 py-2 text-sm outline-none focus:border-[#B5121B] transition-colors"
      />
      <input
        type="email"
        placeholder="इमेल *"
        required
        aria-label="इमेल"
        className="border border-[#E0E0E0] px-3 py-2 text-sm outline-none focus:border-[#B5121B] transition-colors"
      />
      <textarea
        placeholder="तपाईँको टिप्पणी..."
        rows={4}
        required
        aria-label="टिप्पणी"
        className="sm:col-span-2 border border-[#E0E0E0] px-3 py-2 text-sm outline-none focus:border-[#B5121B] transition-colors resize-none"
      />
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-[#B5121B] text-white text-sm font-semibold px-6 py-2.5 hover:bg-[#9a0f17] transition-colors"
        >
          टिप्पणी पठाउनुहोस्
        </button>
      </div>
    </form>
  )
}
