import Link from "next/link"
import type { Post } from "@/lib/mock-data"
import { PostCardLarge, PostListItem } from "@/components/post-cards"

interface CategorySectionProps {
  title: string
  slug: string
  posts: Post[]
}

export function CategorySection({ title, slug, posts }: CategorySectionProps) {
  const [featured, ...rest] = posts

  return (
    <section aria-labelledby={`cat-${slug}`} className="py-5 border-b border-[#E0E0E0] last:border-none">
      {/* Section header with red underline accent */}
      <div className="flex items-end justify-between mb-4">
        <div className="relative">
          <h2
            id={`cat-${slug}`}
            className="font-khand font-bold text-[18px] sm:text-[20px] uppercase tracking-wide text-[#141414] pb-2"
          >
            {title}
          </h2>
          {/* Red accent bar under title, full-width gray bar behind */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E0E0E0]" aria-hidden="true">
            <div className="h-full w-16 bg-[#B5121B]" />
          </div>
        </div>
        <Link
          href={`/category/${slug}`}
          className="font-mukta text-[12px] text-[#B5121B] font-semibold hover:underline underline-offset-2 whitespace-nowrap mb-2"
          aria-label={`${title} — थप हेर्नुहोस्`}
        >
          थप हेर्नुहोस् →
        </Link>
      </div>

      {featured && (
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] gap-4 lg:gap-5">
          {/* Featured card */}
          <div>
            <PostCardLarge post={featured} />
          </div>
          {/* Headline list */}
          {rest.length > 0 && (
            <div className="flex flex-col">
              {rest.slice(0, 5).map((post) => (
                <PostListItem key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
