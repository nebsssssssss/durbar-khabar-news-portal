import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141414]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
