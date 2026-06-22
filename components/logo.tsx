import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "compact" | "mark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, variant = "horizontal", size = "md" }: LogoProps) {
  if (variant === "horizontal") {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center shrink-0 pl-2", className)}
        aria-label={`${siteConfig.name} home`}
      >
        <Image
          src="/brand/logo-horizontal-light.png"
          alt={siteConfig.name}
          width={220}
          height={64}
          priority
          className="object-contain"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "clamp(160px, 20vw, 220px)",
            maxHeight: "52px",
          }}
        />
      </Link>
    );
  }

  // mark / compact variant — icon only
  const markPx = size === "lg" ? 48 : size === "sm" ? 36 : 44;

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center shrink-0", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/brand/logo-mark.png"
        alt={`${siteConfig.name} logo mark`}
        width={markPx}
        height={markPx}
        priority={variant === "compact"}
        className="object-contain"
        style={{ width: markPx, height: markPx }}
      />
    </Link>
  );
}
