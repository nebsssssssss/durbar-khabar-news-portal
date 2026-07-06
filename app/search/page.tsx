import { SiteLayout } from "@/components/site-layout"
import { PostCardArchive } from "@/components/post-cards"
import { searchPosts } from "@/lib/mock-data"
import type { Metadata } from "next"

interface Props {
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams
  return { title: q ? `"${q}" खोज परिणाम | दरबार खबर` : "खोज | दरबार खबर" }
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams
  const query = q ?? ""
  const results = query ? searchPosts(query) : []

  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        {/* Search bar */}
        <form method="GET" action="/search" className="flex gap-2 mb-6 max-w-xl">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="समाचार खोज्नुहोस्..."
            aria-label="खोज"
            className="flex-1 border-2 border-[#141414] px-4 py-2.5 text-sm outline-none focus:border-[#B5121B] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#B5121B] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#9a0f17] transition-colors"
          >
            खोज्नुहोस्
          </button>
        </form>

        {query && (
          <p className="text-sm text-[#757575] mb-6">
            &ldquo;{query}&rdquo; को लागि{" "}
            <strong className="text-[#141414]">{results.length}</strong> परिणाम फेला पर्यो
          </p>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((post) => (
              <PostCardArchive key={post.id} post={post} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-[#141414] mb-2">
              कुनै नतिजा फेला परेन
            </p>
            <p className="text-sm text-[#757575] mb-6">
              अर्को खोज शब्द प्रयास गर्नुहोस् वा विभागहरू हेर्नुहोस्।
            </p>
            <a
              href="/"
              className="inline-block bg-[#B5121B] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#9a0f17] transition-colors"
            >
              गृहपृष्ठमा जानुहोस्
            </a>
          </div>
        ) : (
          <p className="text-sm text-[#757575]">
            माथिको बाकसमा खोज शब्द टाइप गर्नुहोस्।
          </p>
        )}
      </div>
    </SiteLayout>
  )
}
