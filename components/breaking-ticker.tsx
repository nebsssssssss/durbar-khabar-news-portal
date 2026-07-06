import Link from "next/link"

const TICKER_HEADLINES = [
  "सरकारले नयाँ बजेट प्रस्तुत गर्दै, स्वास्थ्य र शिक्षामा ठूलो वृद्धि",
  "काठमाडौँमा ठूलो आगलागी, दमकल कार्यरत",
  "नेपाल र भारतबीच नयाँ व्यापार सम्झौतामा हस्ताक्षर",
  "मनसुन अपडेट: पश्चिम नेपालमा भारी वर्षाको चेतावनी",
  "संसद् बैठकमा विपक्षी दलको व्यापक विरोध",
]

export function BreakingTicker() {
  const items = [...TICKER_HEADLINES, ...TICKER_HEADLINES]

  return (
    <div className="bg-[#B5121B] text-white overflow-hidden" role="marquee" aria-label="ताजा समाचार">
      <div className="flex items-stretch">
        {/* "ताजा" badge */}
        <div className="flex-shrink-0 flex items-center px-2.5 sm:px-3 bg-[#141414] font-khand font-bold text-[11px] sm:text-xs tracking-widest uppercase">
          ताजा
        </div>
        {/* Scrolling track */}
        <div className="flex-1 overflow-hidden relative" style={{ minWidth: 0 }}>
          <div className="ticker-track py-1 sm:py-1.5">
            {items.map((headline, i) => (
              <span key={i} className="inline-flex items-center">
                <Link
                  href="/"
                  className="font-mukta text-[12px] sm:text-[13px] hover:underline underline-offset-2 px-2 sm:px-3 whitespace-nowrap"
                  tabIndex={i < TICKER_HEADLINES.length ? 0 : -1}
                >
                  {headline}
                </Link>
                <span className="text-white/40 select-none" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
