import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

/**
 * Logo — single source of truth.
 *
 * Rendering contract:
 *   "horizontal"  → 220 × 64 px rendered box, object-contain
 *                   Used in Navbar desktop/tablet.
 *   "mark"        → 48 × 48 px rendered box, object-contain
 *                   Used in Navbar mobile + Footer.
 *
 * Why this approach:
 *   next/image with explicit width/height props sets the intrinsic size of the
 *   <img> element.  We then apply an inline style that pins the RENDERED size to
 *   exactly those same pixel values.  height is NOT "auto" — it is the matching
 *   pixel number — so there is no aspect-ratio recalculation happening anywhere.
 *   The wrapper div has the matching pixel dimensions with overflow: visible so
 *   nothing is ever clipped.
 *
 * Rules enforced here:
 *   ✗ No fill
 *   ✗ No object-cover
 *   ✗ No overflow-hidden  (wrapper is overflow: visible)
 *   ✗ No aspect-square
 *   ✗ No transform / scale
 *   ✗ No max-width on the image or its wrapper
 *   ✓ object-contain always
 *   ✓ priority on navbar logo
 */

interface LogoProps {
  variant?: "horizontal" | "mark";
  priority?: boolean;
}

/** Rendered pixel dimensions — the only place these numbers live. */
const MARK_SIZE = 48;

export function Logo({ variant = "horizontal", priority = false }: LogoProps) {
  /* ── Icon mark (mobile navbar + footer) ─────────────────────────── */
  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label={`${siteConfig.name} home`}
        style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
      >
        {/*
          Wrapper: explicit pixel box, overflow visible.
          maxWidth: "none" on the <img> overrides Tailwind preflight's
          `img { max-width: 100% }` which would otherwise clamp the image
          to its container width.
        */}
        <Image
          src="/brand/logo-mark.png"
          alt={`${siteConfig.name} icon mark`}
          width={MARK_SIZE}
          height={MARK_SIZE}
          priority={priority}
          style={{
            width: MARK_SIZE,
            height: MARK_SIZE,
            objectFit: "contain",
            display: "block",
            flexShrink: 0,
            maxWidth: "none",  /* defeat Tailwind preflight max-width: 100% */
          }}
        />
      </Link>
    );
  }

  /* ── Horizontal wordmark (navbar desktop / tablet) ───────────────── */
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
    >
      {/*
        maxWidth: "none" defeats Tailwind preflight `img { max-width: 100% }`.
        Without this, if the flex container is narrower than 220px the image
        gets silently clamped — which is the exact clipping symptom reported.
      */}
      <Image
        src="/brand/logo-horizontal-light.png"
        alt={siteConfig.name}
        width={220}
        height={64}
        priority={priority}
        sizes="220px"
        style={{
          width: 220,
          height: 64,
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
          maxWidth: "none",  /* defeat Tailwind preflight max-width: 100% */
        }}
      />
    </Link>
  );
}
