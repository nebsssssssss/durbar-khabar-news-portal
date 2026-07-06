import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "dark" | "white"
  /** desktop height in px, default 52 */
  height?: number
  href?: string
  className?: string
}

export function Logo({
  variant = "dark",
  height = 52,
  href = "/",
  className = "",
}: LogoProps) {
  const src = variant === "white" ? "/logo-white.svg" : "/logo.svg"
  // viewBox aspect ratio: 490.60 wide / 166.40 tall ≈ 2.948
  const aspectRatio = 490.6 / 166.4
  const width = Math.round(height * aspectRatio)

  const img = (
    <Image
      src={src}
      alt="दरबार खबर — Durbar Khabar"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto", maxHeight: height }}
    />
  )

  if (!href) return img

  return (
    <Link href={href} aria-label="दरबार खबर — गृहपृष्ठ">
      {img}
    </Link>
  )
}
