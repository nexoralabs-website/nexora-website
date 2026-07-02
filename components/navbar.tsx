"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { navLinks, siteConfig } from "@/lib/constants";
import { services } from "@/lib/data";
import { useScrollPosition } from "@/hooks/use-animations";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollPosition(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "glass shadow-sm border-b border-border/50"
            : "bg-transparent"
        )}
        aria-label="Main navigation"
      >
        {/*
          Three-column desktop layout:
            [logo — fixed 196px] [nav — flex-1 centered] [cta — shrink-0]

          The logo column is flex-none with an explicit width so it can NEVER
          be compressed by flex pressure from the middle or right columns.
        */}
        <div className="container-narrow mx-auto flex items-center gap-10 px-4 sm:px-6 lg:px-8 min-h-[80px] md:min-h-[96px]">

          {/* ── LEFT: Logo ───────────────────────────────────────────────── */}
          {/*
            flex-none prevents this column from ever being compressed.
            overflow-visible ensures the image is never clipped.
            Width adapts: mark on mobile (40px), wordmark on md+ (up to 200px).
          */}
          <div className="flex-none overflow-visible flex items-center">
            {/* Mobile (<768px): icon mark only */}
            <span className="block md:hidden">
              <Logo variant="mark" markSize={40} priority />
            </span>
            {/* Tablet (768–1023px): slightly smaller wordmark */}
            <span className="hidden md:block lg:hidden">
              <Logo variant="horizontal" width={160} priority />
            </span>
            {/* Desktop (≥1024px): full wordmark */}
            <span className="hidden lg:block">
              <Logo variant="horizontal" width={200} priority />
            </span>
          </div>

          {/* ── MIDDLE: Nav links ─────────────────────────────────────────── */}
          {/*
            flex-1 = takes all remaining space after logo and CTA.
            justify-center = links sit in the middle of that space.
            Only visible on lg+; on smaller screens this is hidden.
          */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]"
                      >
                        <div className="rounded-2xl border border-border bg-white p-4 shadow-xl">
                          <div className="grid grid-cols-2 gap-1">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.id}
                                href="#services"
                                className="rounded-xl p-3 hover:bg-background transition-colors group"
                                onClick={() => setMegaOpen(false)}
                              >
                                <p className="text-sm font-medium text-foreground group-hover:text-primary">
                                  {service.title}
                                </p>
                                <p className="text-xs text-muted mt-0.5 line-clamp-1">
                                  {service.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-border">
                            <Link
                              href="#services"
                              className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 px-3 py-2"
                              onClick={() => setMegaOpen(false)}
                            >
                              View all services
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── RIGHT: CTAs + mobile hamburger ───────────────────────────── */}
          {/*
            shrink-0 = this column never shrinks.
            ml-auto pushes it to the far right when the middle nav is hidden
            (i.e. on tablet/mobile where the flex-1 nav div is display:none).
          */}
          <div className="shrink-0 ml-auto flex items-center gap-3">
            {/* Desktop CTAs */}
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#22be5c] hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <div className="hidden lg:block">
              <MagneticButton variant="accent" href="#contact">
                Start Your Project
              </MagneticButton>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown menu ───────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-white overflow-hidden"
            >
              <div className="container-narrow px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-background rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-border mt-3 flex flex-col gap-2">
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message on WhatsApp
                  </a>
                  <MagneticButton variant="accent" href="#contact" className="w-full">
                    Start Your Project
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
