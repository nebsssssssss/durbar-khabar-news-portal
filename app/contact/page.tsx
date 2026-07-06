import { SiteLayout } from "@/components/site-layout"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "सम्पर्क | दरबार खबर",
}

export default function ContactPage() {
  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "होम", href: "/" }, { label: "सम्पर्क" }]} />
        <div className="max-w-[760px] mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-6 border-b-2 border-[#B5121B] pb-3 inline-block">
            सम्पर्क गर्नुहोस्
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
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

            {/* Info */}
            <div className="text-sm text-[#555] leading-[1.8] space-y-3">
              <div>
                <p className="font-semibold text-[#141414]">ठेगाना</p>
                <p>काठमाडौँ, नेपाल</p>
              </div>
              <div>
                <p className="font-semibold text-[#141414]">फोन</p>
                <a href="tel:+977-1-0000000" className="hover:text-[#B5121B] transition-colors">
                  +९७७-१-०००-००००
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#141414]">इमेल</p>
                <a href="mailto:info@durbarkhabar.com" className="hover:text-[#B5121B] transition-colors">
                  info@durbarkhabar.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#141414]">सम्पादकीय</p>
                <a href="mailto:editor@durbarkhabar.com" className="hover:text-[#B5121B] transition-colors">
                  editor@durbarkhabar.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
