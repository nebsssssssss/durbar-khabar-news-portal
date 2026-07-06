import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TajaaButtons } from "@/components/tajaa-buttons"

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141414]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Fixed circular FABs — ताजा & लोकप्रिय */}
      <TajaaButtons />
    </div>
  )
}
