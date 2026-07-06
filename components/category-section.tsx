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
    <section aria-labelledby={`cat-${slug}`} className="py-6 border-b border-[#E0E0E0] last:border-none">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4 border-b-2 border-[#141414] pb-2">
        <h2
          id={`cat-${slug}`}
          className="text-base font-bold uppercase tracking-wide text-[#141414] border-b-2 border-[#B5121B] pb-2 -mb-[10px]"
        >
          {title}
        </h2>
        <Link
          href={`/category/${slug}`}
          className="text-xs text-[#B5121B] font-medium hover:underline whitespace-nowrap"
          aria-label={`${title} — थप हेर्नुहोस्`}
        >
          थप हेर्नुहोस् →
        </Link>
      </div>

      {featured && (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Featured card — 2/5 */}
          <div className="lg:col-span-2">
            <PostCardLarge post={featured} />
          </div>
          {/* Text list — 3/5 */}
          {rest.length > 0 && (
            <div className="lg:col-span-3 flex flex-col divide-y divide-[#E0E0E0]">
              {rest.slice(0, 5).map((post, i) => (
                <PostListItem key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
