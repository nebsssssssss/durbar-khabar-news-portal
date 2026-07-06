import Link from "next/link"
import { Logo } from "@/components/logo"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141414]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        <Logo variant="dark" height={52} href="/" />
        <p className="text-6xl font-bold text-[#B5121B] mt-8 mb-2">४०४</p>
        <h1 className="text-xl font-bold text-[#141414] mb-4">पेज फेला परेन</h1>
        <p className="text-sm text-[#757575] mb-8 max-w-sm">
          तपाईँले खोज्नुभएको पेज हटाइएको वा सारिएको हुन सक्छ।
          गृहपृष्ठमा फर्केर समाचार हेर्नुहोस्।
        </p>
        <form method="GET" action="/search" className="flex gap-2 w-full max-w-sm mb-6">
          <input
            type="search"
            name="q"
            placeholder="समाचार खोज्नुहोस्..."
            aria-label="खोज"
            className="flex-1 border-2 border-[#141414] px-4 py-2 text-sm outline-none focus:border-[#B5121B] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#B5121B] text-white px-4 py-2 text-sm font-semibold hover:bg-[#9a0f17] transition-colors"
          >
            खोज्नुहोस्
          </button>
        </form>
        <Link
          href="/"
          className="text-sm text-[#B5121B] font-semibold hover:underline"
        >
          ← गृहपृष्ठमा फर्कनुहोस्
        </Link>
      </main>
      <Footer />
    </div>
  )
}
