import Image from "next/image"
import Link from "next/link"
import type { Post } from "@/lib/mock-data"
import { CategoryTag, PostCardSmall } from "@/components/post-cards"

interface HeroBlockProps {
  featured: Post
  secondary: Post[]
}

export function HeroBlock({ featured, secondary }: HeroBlockProps) {
  return (
    <section aria-label="मुख्य समाचार" className="border-b border-[#E0E0E0] pb-5">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-6">

        {/* Large featured story */}
        <article className="group">
          <Link href={`/${featured.slug}`} className="block overflow-hidden rounded-sm">
            <div className="relative w-full aspect-video overflow-hidden bg-[#F5F5F3]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="pt-3">
            <CategoryTag label={featured.category} slug={featured.categorySlug} />
            <h1 className="font-khand font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors mt-2 mb-2">
              <Link href={`/${featured.slug}`}>{featured.title}</Link>
            </h1>
            <p className="font-mukta text-[13px] sm:text-[14px] text-[#555] leading-relaxed line-clamp-2 mb-3">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-2 font-mukta text-[12px] text-[#888]">
              <span>{featured.author}</span>
              <span aria-hidden="true">·</span>
              <time>{featured.date}</time>
            </div>
          </div>
        </article>

        {/* Secondary stories */}
        <div className="flex flex-col gap-0 divide-y divide-[#EBEBEB] lg:border-l lg:border-[#E0E0E0] lg:pl-5">
          {secondary.slice(0, 4).map((post) => (
            <div key={post.id} className="py-3 first:pt-0 last:pb-0">
              <PostCardSmall post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
