import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Devanagari } from "next/font/google"
import "./globals.css"

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "दरबार खबर | Durbar Khabar",
  description:
    "दरबार खबर — नेपालको भरपर्दो अनलाइन समाचार पोर्टल। ताजा समाचार, राजनीति, समाज, कूटनीति र विश्व।",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ne"
      className={`${notoDevanagari.variable} ${inter.variable} bg-white`}
    >
      <body className="font-sans antialiased">{children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
