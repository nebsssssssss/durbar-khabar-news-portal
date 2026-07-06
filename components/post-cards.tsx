import Image from "next/image"
import Link from "next/link"
import type { Post } from "@/lib/mock-data"

// ---- Category tag pill ----
export function CategoryTag({ label, slug }: { label: string; slug: string }) {
  return (
    <Link
      href={`/category/${slug}`}
      className="inline-block bg-[#B5121B] text-white text-xs font-semibold px-2 py-0.5 uppercase tracking-wide hover:bg-[#9a0f17] transition-colors"
    >
      {label}
    </Link>
  )
}

// ---- PostCardLarge: image + tag + title + excerpt + meta ----
export function PostCardLarge({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/${post.slug}`} className="block overflow-hidden">
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="pt-3">
        <div className="mb-2">
          <CategoryTag label={post.category} slug={post.categorySlug} />
        </div>
        <h2 className="text-lg font-bold leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors mb-2">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-sm text-[#555] leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-[#757575]">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time>{post.date}</time>
        </div>
      </div>
    </article>
  )
}

// ---- PostCardSmall: thumbnail (left) + title only ----
export function PostCardSmall({ post }: { post: Post }) {
  return (
    <article className="group flex gap-3">
      <Link href={`/${post.slug}`} className="flex-shrink-0">
        <div className="relative w-20 h-16 sm:w-24 sm:h-18 overflow-hidden bg-[#F5F5F3]">
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
        <h3 className="text-sm font-semibold leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors line-clamp-3">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h3>
        <time className="text-xs text-[#757575] mt-1 block">{post.date}</time>
      </div>
    </article>
  )
}

// ---- PostListItem: numbered or plain headline row ----
export function PostListItem({
  post,
  number,
}: {
  post: Post
  number?: number
}) {
  return (
    <article className="group flex items-start gap-3 py-2.5 border-b border-[#E0E0E0] last:border-none">
      {number !== undefined && (
        <span
          className="flex-shrink-0 w-6 h-6 bg-[#B5121B] text-white text-xs font-bold flex items-center justify-center leading-none"
          aria-hidden="true"
        >
          {number}
        </span>
      )}
      <h3 className="text-sm font-medium leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors">
        <Link href={`/${post.slug}`}>{post.title}</Link>
      </h3>
    </article>
  )
}

// ---- PostCardArchive: archive grid card ----
export function PostCardArchive({ post }: { post: Post }) {
  return (
    <article className="group border border-[#E0E0E0] bg-white overflow-hidden hover:border-[#B5121B] transition-colors">
      <Link href={`/${post.slug}`} className="block overflow-hidden">
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-3">
        <div className="mb-2">
          <CategoryTag label={post.category} slug={post.categorySlug} />
        </div>
        <h2 className="text-sm font-bold leading-snug text-[#141414] group-hover:text-[#B5121B] transition-colors mb-2 line-clamp-2">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-xs text-[#555] leading-relaxed line-clamp-2 mb-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-[#757575]">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time>{post.date}</time>
        </div>
      </div>
    </article>
  )
}
