"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

/**
 * Premium floating contact actions — bottom-right stack.
 *
 * Desktop: labelled pill buttons stacked vertically, bottom-right.
 * Mobile: icon-only circles, respects device safe-area insets.
 *
 * Design principles:
 *  - Smooth hover lift — no blink, no pulse, no distraction.
 *  - High-contrast focus rings for keyboard users.
 *  - Safe-area aware so nothing hides behind home indicators on mobile.
 */
export function FloatingContact() {
  return (
    <div
      className="
        fixed z-40
        bottom-6 right-4 sm:right-6
        flex flex-col items-end gap-3
        /* respect device safe-area on iOS / Android */
        pb-[env(safe-area-inset-bottom,0px)]
        pr-[env(safe-area-inset-right,0px)]
      "
      aria-label="Quick contact actions"
    >
      {/* ── Call Now ───────────────────────────────────────────────── */}
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label={`Call Nexora Labs at ${siteConfig.phoneDisplay}`}
        className="
          group
          flex items-center gap-2.5
          /* Mobile: circle icon-only; sm+: pill with label */
          h-12 w-12 justify-center
          sm:h-auto sm:w-auto sm:px-5 sm:py-3 sm:justify-start
          rounded-full sm:rounded-2xl
          bg-primary text-white
          shadow-lg shadow-primary/25
          transition-all duration-200 ease-out
          hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35
          active:translate-y-0 active:shadow-md
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
          {siteConfig.phoneDisplay}
        </span>
      </a>

      {/* ── WhatsApp Enquiry ───────────────────────────────────────── */}
      <a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry — opens in new tab"
        className="
          group
          flex items-center gap-2.5
          /* Mobile: circle icon-only; sm+: pill with label */
          h-12 w-12 justify-center
          sm:h-auto sm:w-auto sm:px-5 sm:py-3 sm:justify-start
          rounded-full sm:rounded-2xl
          bg-[#25D366] text-white
          shadow-lg shadow-[#25D366]/25
          transition-all duration-200 ease-out
          hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/35
          active:translate-y-0 active:shadow-md
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
        "
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
