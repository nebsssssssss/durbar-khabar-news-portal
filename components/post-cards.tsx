import Image from "next/image"
import Link from "next/link"
import type { Post } from "@/lib/mock-data"

// ── Category tag pill ──────────────────────────────────────────────────────────
export function CategoryTag({ label, slug }: { label: string; slug: string }) {
  return (
    <Link
      href={`/category/${slug}`}
      className="inline-block bg-[#B5121B] text-white font-mukta text-[11px] font-semibold px-2 py-0.5 uppercase tracking-wide hover:bg-[#9a0f17] transition-colors"
    >
      {label}
    </Link>
  )
}

// ── Large card: image + tag + title + excerpt + meta ──────────────────────────
export function PostCardLarge({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/${post.slug}`} className="block overflow-hidden rounded-sm">
        <div className="relative w-full aspect-video overflow-hidden bg-[#F5F5F3]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="pt-2.5">
        <CategoryTag label={post.category} slug={post.categorySlug} />
        <h2 className="font-khand font-bold text-[18px] sm:text-[20px] leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors mt-2 mb-1.5">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="font-mukta text-[13px] text-[#555] leading-relaxed line-clamp-2 mb-2 hidden sm:block">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 font-mukta text-[12px] text-[#888]">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time>{post.date}</time>
        </div>
      </div>
    </article>
  )
}

// ── Small card: thumbnail left + title + date ─────────────────────────────────
export function PostCardSmall({ post }: { post: Post }) {
  return (
    <article className="group flex gap-3 items-start">
      <Link href={`/${post.slug}`} className="flex-shrink-0 rounded-sm overflow-hidden">
        <div className="relative w-[84px] h-[60px] sm:w-[96px] sm:h-[68px] overflow-hidden bg-[#F5F5F3]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex-1 min-w-0">
        <h3 className="font-khand font-semibold text-[15px] sm:text-[16px] leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors line-clamp-3">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h3>
        <time className="font-mukta text-[11px] text-[#999] mt-1 block">{post.date}</time>
      </div>
    </article>
  )
}

// ── List item: headline row (optional numbered) ────────────────────────────────
export function PostListItem({ post, number }: { post: Post; number?: number }) {
  return (
    <article className="group flex items-start gap-2.5 py-2.5 border-b border-[#EBEBEB] last:border-none">
      {number !== undefined && (
        <span
          className="flex-shrink-0 w-5 h-5 bg-[#B5121B] text-white font-khand text-[11px] font-bold flex items-center justify-center leading-none"
          aria-hidden="true"
        >
          {number}
        </span>
      )}
      <h3 className="font-khand font-semibold text-[15px] sm:text-[16px] leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors">
        <Link href={`/${post.slug}`}>{post.title}</Link>
      </h3>
    </article>
  )
}

// ── Archive grid card ─────────────────────────────────────────────────────────
export function PostCardArchive({ post }: { post: Post }) {
  return (
    <article className="group border border-[#E0E0E0] bg-white overflow-hidden hover:border-[#B5121B] transition-colors rounded-sm">
      <Link href={`/${post.slug}`} className="block overflow-hidden">
        <div className="relative w-full aspect-video overflow-hidden bg-[#F5F5F3]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-3">
        <CategoryTag label={post.category} slug={post.categorySlug} />
        <h2 className="font-khand font-bold text-[16px] sm:text-[17px] leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors mt-2 mb-1.5 line-clamp-2">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="font-mukta text-[12px] text-[#666] leading-relaxed line-clamp-2 mb-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 font-mukta text-[11px] text-[#999]">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time>{post.date}</time>
        </div>
      </div>
    </article>
  )
}
