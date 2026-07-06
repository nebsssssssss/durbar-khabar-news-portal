import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteLayout } from "@/components/site-layout"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryTag } from "@/components/post-cards"
import { ShareBar } from "@/components/share-bar"
import { PostCardArchive } from "@/components/post-cards"
import { PostListItem } from "@/components/post-cards"
import { AdSlot } from "@/components/ad-slot"
import { POSTS, getPostBySlug } from "@/lib/mock-data"
import { CommentForm } from "@/components/comment-form"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | दरबार खबर`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = POSTS.filter(
    (p) => p.categorySlug === post.categorySlug && p.id !== post.id
  ).slice(0, 3)
  const popular = POSTS.slice(0, 5)

  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "होम", href: "/" },
            { label: post.category, href: `/category/${post.categorySlug}` },
            { label: post.title.slice(0, 40) + "…" },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article */}
          <article className="lg:col-span-3">
            <div className="mb-3">
              <CategoryTag label={post.category} slug={post.categorySlug} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-[#141414] mb-3">
              {post.title}
            </h1>

            {/* Byline + share */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 border-t border-b border-[#E0E0E0] mb-4">
              <div className="flex items-center gap-3 text-sm text-[#757575]">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#E0E0E0] flex-shrink-0">
                  <Image
                    src="/images/author-1.png"
                    alt={post.author}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <Link
                    href={`/author/${post.authorSlug}`}
                    className="font-semibold text-[#141414] hover:text-[#B5121B] transition-colors"
                  >
                    {post.author}
                  </Link>
                  <time className="block text-xs">{post.date}</time>
                </div>
              </div>
              <ShareBar title={post.title} />
            </div>

            {/* Featured image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-2">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 840px"
                priority
                className="object-cover"
              />
            </div>
            <p className="text-xs text-[#757575] italic mb-6">{post.imageAlt}</p>

            {/* Article body (demo content) */}
            <div className="prose prose-sm max-w-none text-[#141414] leading-[1.8] text-[15px] sm:text-base">
              <p>{post.excerpt}</p>
              <p>
                नेपालमा यस विषयमा व्यापक छलफल भइरहेको छ। विभिन्न राजनीतिक दल तथा नागरिक समाजका
                प्रतिनिधिहरूले यो मुद्दालाई गम्भीरतापूर्वक लिएका छन्। विशेषज्ञहरूका अनुसार यो
                निर्णयले आगामी दिनहरूमा महत्त्वपूर्ण परिणाम दिनेछ।
              </p>
              <blockquote className="pull-quote">
                "यो निर्णय नेपालको भविष्यका लागि एक महत्त्वपूर्ण कदम हो। हामी सबैले मिलेर अगाडि
                बढ्नु पर्छ।"
              </blockquote>
              <p>
                सम्बन्धित पक्षहरूले आफ्नो प्रतिक्रिया जनाउँदै भनेका छन् कि यो प्रक्रियामा पारदर्शिता
                अत्यन्त आवश्यक छ। आगामी दिनहरूमा थप जानकारी सार्वजनिक हुने बताइएको छ।
              </p>
              <h2>पृष्ठभूमि</h2>
              <p>
                यस विषयको पृष्ठभूमि बुझ्न हामीले केही वर्ष पछाडि फर्कनु पर्छ। त्यस बेलादेखि नै
                यो मुद्दा विभिन्न रूपमा उठ्दै आएको छ। सरकार र सरोकारवाला पक्षहरूबीच लामो
                छलफलपछि यस निर्णयमा पुगिएको हो।
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["नेपाल", post.category, "ताजा समाचार"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#F5F5F3] text-xs text-[#555] border border-[#E0E0E0]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author bio */}
            <div className="mt-8 p-4 bg-[#F5F5F3] border border-[#E0E0E0] flex gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#E0E0E0]">
                <Image
                  src="/images/author-1.png"
                  alt={post.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <Link
                  href={`/author/${post.authorSlug}`}
                  className="font-bold text-[#141414] hover:text-[#B5121B] transition-colors"
                >
                  {post.author}
                </Link>
                <p className="text-sm text-[#757575] mt-1">
                  वरिष्ठ पत्रकार, दरबार खबर। राजनीति, कूटनी���ि र सामाजिक मुद्दाहरूमा विशेषज्ञता।
                </p>
              </div>
            </div>

            {/* Related news */}
            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="text-base font-bold uppercase tracking-wide text-[#141414] border-b-2 border-[#B5121B] pb-2 inline-block mb-4">
                  सम्बन्धित समाचार
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((p) => (
                    <PostCardArchive key={p.id} post={p} />
                  ))}
                </div>
              </div>
            )}

            {/* Comment form */}
            <div className="mt-10">
              <h2 className="text-base font-bold uppercase tracking-wide text-[#141414] border-b-2 border-[#B5121B] pb-2 inline-block mb-6">
                टिप्पणी
              </h2>
              <CommentForm />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block" aria-label="साइडबार">
            <div className="mb-4 border-b-2 border-[#141414] pb-2">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#141414] border-b-2 border-[#B5121B] pb-2 inline-block -mb-[10px]">
                लोकप्रिय
              </h2>
            </div>
            <ol>
              {popular.map((p, i) => (
                <PostListItem key={p.id} post={p} number={i + 1} />
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
