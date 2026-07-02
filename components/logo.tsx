import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

/**
 * Logo component — single source of truth for all logo usage.
 *
 * Variants:
 *   "horizontal"  → full horizontal wordmark (navbar desktop)
 *   "mark"        → icon mark only (navbar mobile, footer)
 *
 * Rules:
 *  - Always uses next/image for optimisation and priority loading.
 *  - Always object-contain — never cropped, stretched, or recoloured.
 *  - Width is explicit; height is always proportional (via aspect-ratio / auto).
 *  - The wrapper is overflow-visible + flex-shrink-0 to prevent clipping.
 */

interface LogoProps {
  /** "horizontal" = full wordmark; "mark" = icon only */
  variant?: "horizontal" | "mark";
  /**
   * Pixel width for the horizontal variant.
   * Defaults responsive: 190 desktop → controlled in Navbar via CSS.
   */
  width?: number;
  /**
   * Pixel size (width & height) for the square mark variant.
   * Defaults to 44.
   */
  markSize?: number;
  /** Whether to use priority loading (true for above-the-fold, i.e. navbar) */
  priority?: boolean;
}

export function Logo({
  variant = "horizontal",
  width = 190,
  markSize = 44,
  priority = false,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label={`${siteConfig.name} home`}
        className="inline-flex items-center shrink-0 overflow-visible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
      >
        <Image
          src="/brand/logo-mark.png"
          alt={`${siteConfig.name} icon mark`}
          width={markSize}
          height={markSize}
          priority={priority}
          style={{
            width: markSize,
            height: markSize,
            objectFit: "contain",
            display: "block",
          }}
        />
      </Link>
    );
  }

  /**
   * Horizontal wordmark.
   * The image file is logo-horizontal-light.png — white/light background version.
   * We pass explicit width; height is derived from the natural aspect ratio.
   * Natural dims are ~600 × 140 px (approx 4.28 : 1 ratio).
   */
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="inline-flex items-center shrink-0 overflow-visible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
    >
      <Image
        src="/brand/logo-horizontal-light.png"
        alt={siteConfig.name}
        width={600}
        height={140}
        priority={priority}
        style={{
          width,
          height: "auto",
          objectFit: "contain",
          display: "block",
          maxWidth: "100%",
        }}
      />
    </Link>
  );
}
