"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
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
        <div className="container-narrow mx-auto flex min-h-[84px] items-center justify-between px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex items-center shrink-0 gap-3">
            <Logo variant="horizontal" size="sm" />
          </div>

          <div className="hidden lg:flex items-center gap-1">
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
              ) : link.label === "Home" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </Link>
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

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href={`mailto:${siteConfig.links.email}`}>Email Us</Link>
            </Button>
            <MagneticButton variant="accent" href="#contact">
              Start Your Project
            </MagneticButton>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

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
                <div className="pt-3 border-t border-border mt-3">
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
