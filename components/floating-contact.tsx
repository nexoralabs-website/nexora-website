"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function FloatingContact() {
  return (
    <div
      className="
        fixed z-40
        bottom-6 right-6
        flex flex-col items-end gap-3
        pb-[env(safe-area-inset-bottom)]
      "
      aria-label="Quick contact actions"
    >
      {/* Call Now */}
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call Nexora Labs"
        className="
          group flex items-center gap-2
          rounded-xl bg-primary px-4 py-3
          text-white text-sm font-medium
          shadow-lg shadow-primary/20
          transition-all duration-300
          hover:shadow-xl hover:shadow-primary/30 hover:scale-105
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
      >
        <Phone className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">Call Now</span>
      </a>

      {/* WhatsApp Enquiry */}
      <a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry"
        className="
          group flex items-center gap-2
          rounded-xl bg-[#25D366] px-4 py-3
          text-white text-sm font-medium
          shadow-lg shadow-[#25D366]/20
          transition-all duration-300
          hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
        "
      >
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}
