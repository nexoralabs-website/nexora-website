import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

interface LogoProps {
  /** "horizontal" = full wordmark (navbar), "mark" = icon only (footer) */
  variant?: "horizontal" | "mark";
  /** Only used for the mark variant */
  size?: number;
  className?: string;
}

export function Logo({ variant = "horizontal", size = 44, className }: LogoProps) {
  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label={`${siteConfig.name} home`}
        className={`inline-flex items-center flex-shrink-0${className ? ` ${className}` : ""}`}
      >
        <Image
          src="/brand/logo-mark.png"
          alt={`${siteConfig.name} logo mark`}
          width={size}
          height={size}
          priority
          style={{ width: size, height: size, objectFit: "contain" }}
        />
      </Link>
    );
  }

  // Horizontal logo — desktop 240px, mobile 170px, auto height to preserve aspect ratio
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`inline-flex items-center flex-shrink-0${className ? ` ${className}` : ""}`}
    >
      <Image
        src="/brand/logo-horizontal-light.png"
        alt={siteConfig.name}
        width={240}
        height={80}
        priority
        style={{
          width: "240px",
          height: "auto",
          objectFit: "contain",
        }}
        className="w-[170px] sm:w-[240px]"
      />
    </Link>
  );
}
