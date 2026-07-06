import Link from "next/link"
import type { Post } from "@/lib/mock-data"

interface InterviewModuleProps {
  posts: Post[]
}

export function InterviewModule({ posts }: InterviewModuleProps) {
  return (
    <section
      aria-labelledby="antarwarta-heading"
      className="border border-[#E0E0E0] bg-[#FAFAF8] p-4"
    >
      {/* Section header */}
      <div className="flex items-end justify-between mb-3">
        <div className="relative">
          <h2
            id="antarwarta-heading"
            className="font-khand font-bold text-[17px] uppercase tracking-wide text-[#141414] pb-2"
          >
            अन्तर्वार्ता
          </h2>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E0E0E0]" aria-hidden="true">
            <div className="h-full w-14 bg-[#B5121B]" />
          </div>
        </div>
        <Link
          href="/category/antarwarta"
          className="font-mukta text-[12px] text-[#B5121B] font-semibold hover:underline underline-offset-2 mb-2"
        >
          थप →
        </Link>
      </div>

      <ol className="divide-y divide-[#E8E8E8]">
        {posts.slice(0, 5).map((post, i) => (
          <li key={post.id} className="flex items-start gap-3 py-3 group">
            <span
              className="flex-shrink-0 w-6 h-6 bg-[#B5121B] text-white font-khand text-[12px] font-bold flex items-center justify-center leading-none"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <h3 className="font-khand font-semibold text-[15px] leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors">
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="flex items-center gap-1.5 font-mukta text-[11px] text-[#999] mt-1">
                <span>{post.author}</span>
                <span aria-hidden="true">·</span>
                <time>{post.date}</time>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
