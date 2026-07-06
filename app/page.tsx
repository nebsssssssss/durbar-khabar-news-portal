import { Logo } from "@/components/logo"

export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Header preview — light bg */}
      <section className="border-b border-gray-200 px-6 py-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
          Header (light bg) — desktop 52 px / mobile 32 px
        </p>
        <div className="flex items-center gap-8">
          <Logo variant="dark" height={52} />
          <Logo variant="dark" height={32} />
        </div>
      </section>

      {/* Footer preview — dark bg */}
      <section className="bg-[#141414] px-6 py-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
          Footer (dark bg) — 32 px white variant
        </p>
        <Logo variant="white" height={32} />
      </section>

      {/* Full-size reference */}
      <section className="px-6 py-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
          Full-width SVG reference (native viewBox)
        </p>
        <div className="max-w-lg border border-dashed border-gray-300 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="दरबार खबर logo full size" className="w-full" />
        </div>
      </section>
    </main>
  )
}
