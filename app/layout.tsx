import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Khand, Mukta } from "next/font/google"
import "./globals.css"

const khand = Khand({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khand",
  display: "swap",
})

const mukta = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "दरबार खबर | Durbar Khabar",
  description:
    "दरबार खबर — नेपालको भरपर्दो अनलाइन समाचार पोर्टल। ताजा समाचार, राजनीति, समाज, कूटनीति र विश्व।",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ne"
      className={`${khand.variable} ${mukta.variable} bg-white`}
    >
      <body className="font-mukta antialiased text-[#141414]">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
