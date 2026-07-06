import { SiteLayout } from "@/components/site-layout"
import { Breadcrumb } from "@/components/breadcrumb"
import { PostCardArchive } from "@/components/post-cards"
import { AdSlot } from "@/components/ad-slot"
import { PostListItem } from "@/components/post-cards"
import { POSTS } from "@/lib/mock-data"
import type { Metadata } from "next"

const CATEGORY_META: Record<string, { name: string; description: string }> = {
  samachar: { name: "समाचार", description: "नेपालका ताजा र महत्त्वपूर्ण समाचारहरू" },
  rajniti: { name: "राजनीति", description: "नेपालको राजनीतिक गतिविधिहरू र विश्लेषण" },
  samaj: { name: "समाज", description: "सामाजिक मुद्दाहरू र समुदायका कथाहरू" },
  kutaniti: { name: "कुटनीति", description: "नेपालको विदेश नीति र कूटनीतिक सम्बन्धहरू" },
  chhimek: { name: "छिमेक", description: "छिमेकी देशहरूसँगको सम्बन्ध र समाचार" },
  china: { name: "चीन", description: "नेपाल–चीन सम्बन्ध र समाचार" },
  india: { name: "भारत", description: "नेपाल–भारत सम्बन्ध र समाचार" },
  vishwa: { name: "विश्व", description: "विश्वका प्रमुख समाचारहरू" },
  bichar: { name: "विचार", description: "विचार, विश्लेषण र सम्पादकीय" },
  antarwarta: { name: "अन्तर्वार्ता", description: "प्रमुख व्यक्तित्वहरूसँग विशेष अन्तर्वार्ता" },
  bishesh: { name: "विशेष", description: "विशेष रिपोर्ट र अनुसन्धान पत्रकारिता" },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = CATEGORY_META[slug] ?? { name: slug, description: "" }
  return {
    title: `${meta.name} | दरबार खबर`,
    description: meta.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const meta = CATEGORY_META[slug] ?? { name: slug, description: "" }
  // For demo: show all posts (in production, filter by categorySlug)
  const posts = POSTS.slice(0, 9)

  // Sidebar popular posts
  const popular = POSTS.slice(0, 5)

  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "होम", href: "/" }, { label: meta.name }]} />

        {/* Category heading */}
        <div className="mb-6 border-b-2 border-[#141414] pb-3">
          <h1 className="text-2xl font-bold text-[#141414] border-b-2 border-[#B5121B] pb-3 inline-block -mb-[14px]">
            {meta.name}
          </h1>
          {meta.description && (
            <p className="text-sm text-[#757575] mt-5">{meta.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <PostCardArchive key={post.id} post={post} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="px-6 py-2.5 border-2 border-[#141414] text-sm font-semibold text-[#141414] hover:bg-[#141414] hover:text-white transition-colors">
                थप लोड गर्नुहोस्
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block" aria-label="साइडबार">
            <div className="mb-4 border-b-2 border-[#141414] pb-2">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#141414] border-b-2 border-[#B5121B] pb-2 inline-block -mb-[10px]">
                लोकप्रिय
              </h2>
            </div>
            <ol>
              {popular.map((post, i) => (
                <PostListItem key={post.id} post={post} number={i + 1} />
              ))}
            </ol>
            <div className="mt-6">
              <AdSlot size="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  )
}
