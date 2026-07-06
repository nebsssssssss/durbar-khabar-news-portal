interface AdSlotProps {
  size?: "leaderboard" | "mobile-banner" | "sidebar"
  className?: string
}

export function AdSlot({ size = "leaderboard", className = "" }: AdSlotProps) {
  const dims = {
    leaderboard: { label: "728 × 90 — Leaderboard Ad", minH: "90px" },
    "mobile-banner": { label: "320 × 100 — Mobile Banner Ad", minH: "100px" },
    sidebar: { label: "300 × 250 — Sidebar Ad", minH: "250px" },
  }[size]

  return (
    <div
      role="complementary"
      aria-label="विज्ञापन स्थान"
      className={`flex items-center justify-center border-2 border-dashed border-[#BDBDBD] bg-[#F5F5F3] text-[#9E9E9E] font-mukta text-[11px] font-medium w-full overflow-hidden ${className}`}
      style={{ minHeight: dims.minH }}
    >
      {dims.label}
    </div>
  )
}
