import { SiteLayout } from "@/components/site-layout"
import { HeroBlock } from "@/components/hero-block"
import { CategorySection } from "@/components/category-section"
import { InterviewModule } from "@/components/interview-module"
import { AdSlot } from "@/components/ad-slot"
import { TajaaButtons } from "@/components/tajaa-buttons"
import { POSTS } from "@/lib/mock-data"

export default function HomePage() {
  const [hero, ...rest] = POSTS

  const rajnitiPosts  = [POSTS[1], POSTS[7], POSTS[0], POSTS[2], POSTS[4]]
  const samajPosts    = [POSTS[2], POSTS[4], POSTS[6], POSTS[1], POSTS[5]]
  const kutanitiPosts = [POSTS[3], POSTS[5], POSTS[7], POSTS[0]]
  const chhimekPosts  = [POSTS[5], POSTS[3], POSTS[6], POSTS[1]]
  const bicharPosts   = [POSTS[8], POSTS[9], POSTS[0], POSTS[7]]
  const interviewPosts = [POSTS[10], POSTS[11], POSTS[12]]

  return (
    <SiteLayout>
      <main className="max-w-[1280px] mx-auto px-3 sm:px-4 py-4">

        {/* Hero block */}
        <HeroBlock featured={hero} secondary={rest.slice(0, 4)} />

        {/* ताजा / लोकप्रिय pill buttons */}
        <div className="py-3">
          <TajaaButtons />
        </div>

        {/* Ad — leaderboard desktop, banner mobile */}
        <div className="py-4">
          <AdSlot size="leaderboard" />
        </div>

        {/* 2/3 main + 1/3 sidebar layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <CategorySection title="राजनीति" slug="rajniti" posts={rajnitiPosts} />
            <CategorySection title="समाज"    slug="samaj"   posts={samajPosts} />

            <div className="py-4">
              <AdSlot size="leaderboard" />
            </div>

            <CategorySection title="कुटनीति" slug="kutaniti" posts={kutanitiPosts} />
            <CategorySection title="छिमेक"   slug="chhimek"  posts={chhimekPosts} />
            <CategorySection title="विचार"   slug="bichar"   posts={bicharPosts} />
          </div>

          {/* Sidebar — desktop only */}
          <aside className="hidden lg:flex flex-col gap-6 w-[300px] flex-shrink-0" aria-label="साइडबार">
            <div className="sticky top-[80px]">
              <InterviewModule posts={interviewPosts} />
              <div className="mt-5">
                <AdSlot size="sidebar" />
              </div>
            </div>
          </aside>
        </div>

        {/* Interview module — mobile only, below main content */}
        <div className="lg:hidden mt-4">
          <InterviewModule posts={interviewPosts} />
        </div>
      </main>
    </SiteLayout>
  )
}
