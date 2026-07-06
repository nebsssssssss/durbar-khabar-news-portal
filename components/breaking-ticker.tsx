import Link from "next/link"

const TICKER_HEADLINES = [
  "सरकारले नयाँ बजेट प्रस्तुत गर्दै, स्वास्थ्य र शिक्षामा ठूलो वृद्धि",
  "काठमाडौँमा ठूलो आगलागी, दमकल कार्यरत",
  "नेपाल र भारतबीच नयाँ व्यापार सम्झौतामा हस्ताक्षर",
  "मनसुन अपडेट: पश्चिम नेपालमा भारी वर्षाको चेतावनी",
  "संसद् बैठकमा विपक्षी दलको व्यापक विरोध",
]

export function BreakingTicker() {
  // Duplicate items so the scroll looks seamless
  const items = [...TICKER_HEADLINES, ...TICKER_HEADLINES]

  return (
    <div className="bg-[#B5121B] text-white text-sm overflow-hidden" role="marquee" aria-label="ताजा समाचार">
      <div className="max-w-[1280px] mx-auto flex items-stretch">
        {/* Badge */}
        <div className="flex-shrink-0 flex items-center px-3 bg-[#141414] font-bold text-xs tracking-wide z-10">
          ताजा
        </div>
        {/* Ticker track */}
        <div className="flex-1 overflow-hidden py-1.5 relative">
          <div className="ticker-track">
            {items.map((headline, i) => (
              <span key={i} className="inline-flex items-center">
                <Link
                  href="/"
                  className="hover:underline px-2"
                  tabIndex={i < TICKER_HEADLINES.length ? 0 : -1}
                >
                  {headline}
                </Link>
                <span className="text-white/40 mx-1" aria-hidden="true">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
