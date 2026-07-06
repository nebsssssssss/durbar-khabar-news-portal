import Link from "next/link"
import type { Post } from "@/lib/mock-data"

interface InterviewModuleProps {
  posts: Post[]
}

export function InterviewModule({ posts }: InterviewModuleProps) {
  return (
    <section aria-labelledby="antarwarta-heading" className="py-6">
      <div className="flex items-center justify-between mb-4 border-b-2 border-[#141414] pb-2">
        <h2
          id="antarwarta-heading"
          className="text-base font-bold uppercase tracking-wide text-[#141414] border-b-2 border-[#B5121B] pb-2 -mb-[10px]"
        >
          अन्तर्वार्ता
        </h2>
        <Link
          href="/category/antarwarta"
          className="text-xs text-[#B5121B] font-medium hover:underline"
        >
          थप हेर्नुहोस् →
        </Link>
      </div>
      <ol className="divide-y divide-[#E0E0E0]">
        {posts.slice(0, 5).map((post, i) => (
          <li key={post.id} className="flex items-start gap-3 py-3 group">
            <span
              className="flex-shrink-0 w-7 h-7 bg-[#B5121B] text-white text-sm font-bold flex items-center justify-center leading-none"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors">
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="flex items-center gap-2 text-xs text-[#757575] mt-1">
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
