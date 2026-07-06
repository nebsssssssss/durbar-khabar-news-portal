import Image from "next/image"
import Link from "next/link"
import type { Post } from "@/lib/mock-data"
import { CategoryTag } from "@/components/post-cards"
import { PostCardSmall } from "@/components/post-cards"

interface HeroBlockProps {
  featured: Post
  secondary: Post[]
}

export function HeroBlock({ featured, secondary }: HeroBlockProps) {
  return (
    <section aria-label="मुख्य समाचार" className="border-b border-[#E0E0E0] py-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        {/* Large featured story — 3/5 on desktop */}
        <article className="lg:col-span-3 group">
          <Link href={`/${featured.slug}`} className="block overflow-hidden">
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 740px"
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="pt-3">
            <div className="mb-2">
              <CategoryTag label={featured.category} slug={featured.categorySlug} />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-[1.6rem] font-bold leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors mb-2">
              <Link href={`/${featured.slug}`}>{featured.title}</Link>
            </h1>
            <p className="text-sm text-[#555] leading-relaxed line-clamp-2 mb-3 hidden sm:block">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#757575]">
              <span>{featured.author}</span>
              <span aria-hidden="true">·</span>
              <time>{featured.date}</time>
            </div>
          </div>
        </article>

        {/* Secondary stories — 2/5 on desktop */}
        <div className="lg:col-span-2 flex flex-col gap-3 divide-y divide-[#E0E0E0]">
          {secondary.slice(0, 4).map((post) => (
            <div key={post.id} className="pt-3 first:pt-0">
              <PostCardSmall post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
