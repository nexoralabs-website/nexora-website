import Link from "next/link";
import { siteConfig } from "@/lib/constants";

/**
 * Logo component.
 *
 * Navbar desktop : horizontal wordmark  (196 × 46 px natural size, shown at ~196 px wide)
 * Navbar mobile  : icon mark only       (40 × 40 px)
 * Footer         : icon mark only       (44 × 44 px)
 *
 * Rules:
 *  - No Next/Image — avoids intrinsic-size constraints & aspect-ratio interference.
 *  - No fill, no sizes, no clamp(), no maxWidth, no transforms, no scale.
 *  - Width is set via an explicit pixel value in the style prop. Height is always "auto".
 *  - The <img> sits inside a plain flex wrapper so it never gets squished.
 */

interface LogoProps {
  /** "horizontal" = full wordmark for navbar; "mark" = icon only for footer */
  variant?: "horizontal" | "mark";
  /** Pixel size for the mark variant (renders as a square) */
  markSize?: number;
}

export function Logo({ variant = "horizontal", markSize = 44 }: LogoProps) {
  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label={`${siteConfig.name} home`}
        style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-mark.png"
          alt={`${siteConfig.name} logo mark`}
          width={markSize}
          height={markSize}
          style={{ width: markSize, height: markSize, display: "block" }}
        />
      </Link>
    );
  }

  /**
   * Horizontal wordmark.
   * Natural image size: 196 × 46 px.
   * We render it at exactly 196 px wide on desktop.
   * On mobile (< 768 px) we hide this and show the mark instead — handled in Navbar.
   */
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-horizontal-light.png"
        alt={siteConfig.name}
        width={196}
        height={46}
        style={{ width: 196, height: "auto", display: "block" }}
      />
    </Link>
  );
}
