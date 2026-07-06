import { SiteLayout } from "@/components/site-layout"
import { HeroBlock } from "@/components/hero-block"
import { CategorySection } from "@/components/category-section"
import { InterviewModule } from "@/components/interview-module"
import { AdSlot } from "@/components/ad-slot"
import { POSTS, getPostsByCategory } from "@/lib/mock-data"

export default function HomePage() {
  const [hero, ...heroSecondary] = POSTS
  const rajnitiPosts = [POSTS[1], POSTS[7], POSTS[0], POSTS[2], POSTS[4]]
  const samajPosts = [POSTS[2], POSTS[4], POSTS[6], POSTS[1], POSTS[5]]
  const kutanitiPosts = [POSTS[3], POSTS[5], POSTS[7], POSTS[0]]
  const chhimekPosts = [POSTS[5], POSTS[3], POSTS[6], POSTS[1]]
  const bicharPosts = [POSTS[8], POSTS[9], POSTS[0], POSTS[7]]
  const interviewPosts = [POSTS[10], POSTS[11], POSTS[12]]

  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-4">
        {/* Hero */}
        <HeroBlock featured={hero} secondary={heroSecondary.slice(0, 4)} />

        {/* Ad slot — leaderboard after hero */}
        <div className="py-4 hidden sm:block">
          <AdSlot size="leaderboard" />
        </div>
        <div className="py-3 block sm:hidden">
          <AdSlot size="mobile-banner" />
        </div>

        {/* Category sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
          {/* Main content — 2/3 */}
          <div className="lg:col-span-2">
            <CategorySection title="राजनीति" slug="rajniti" posts={rajnitiPosts} />
            <CategorySection title="समाज" slug="samaj" posts={samajPosts} />

            {/* Second ad break */}
            <div className="py-4 hidden sm:block">
              <AdSlot size="leaderboard" />
            </div>
            <div className="py-3 block sm:hidden">
              <AdSlot size="mobile-banner" />
            </div>

            <CategorySection title="कुटनीति" slug="kutaniti" posts={kutanitiPosts} />
            <CategorySection title="छिमेक" slug="chhimek" posts={chhimekPosts} />
            <CategorySection title="विचार" slug="bichar" posts={bicharPosts} />
          </div>

          {/* Sidebar — 1/3, desktop only */}
          <aside className="hidden lg:block" aria-label="साइडबार">
            <InterviewModule posts={interviewPosts} />
            <div className="mt-6">
              <AdSlot size="sidebar" />
            </div>
          </aside>
        </div>

        {/* Interview module — mobile (below main content) */}
        <div className="lg:hidden mt-4">
          <InterviewModule posts={interviewPosts} />
        </div>
      </div>
    </SiteLayout>
  )
}
