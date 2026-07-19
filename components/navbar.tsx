"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MessageCircle, ArrowRight, Bot, Code2, Megaphone, Search, Smartphone, Palette } from "lucide-react";
import { Logo } from "@/components/logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { navLinks, siteConfig } from "@/lib/constants";
import { serviceCategories } from "@/lib/data";
import { useScrollPosition } from "@/hooks/use-animations";
import { cn } from "@/lib/utils";

const catIconMap: Record<string, React.ElementType> = {
  "ai-automation": Bot,
  "software-dev": Code2,
  "digital-marketing": Megaphone,
  "seo": Search,
  "aso": Smartphone,
  "brand-strategy": Palette,
};

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
        <div className="container-narrow mx-auto flex items-center gap-8 px-4 sm:px-6 lg:px-8 min-h-[88px]">
          
          <div style={{ flexShrink: 0, overflow: "visible", display: "flex", alignItems: "center" }}>
            <span className="block md:hidden">
              <Logo variant="mark" priority />
            </span>
            <span className="hidden md:block">
              <Logo variant="horizontal" priority />
            </span>
          </div>

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
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px]"
                      >
                        <div className="rounded-2xl border border-border bg-white p-6 shadow-xl">
                          <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                            {serviceCategories.map((cat) => {
                              const Icon = catIconMap[cat.id] || Code2;
                              return (
                                <Link
                                  key={cat.id}
                                  href="#services"
                                  className="group flex flex-col gap-2 rounded-xl p-3 hover:bg-background transition-colors"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {cat.label}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          
                          <div className="mt-6 pt-4 border-t border-border flex justify-between items-center bg-background -mx-6 -mb-6 px-6 py-4 rounded-b-2xl">
                            <div>
                              <p className="text-sm font-medium text-foreground">Not sure what you need?</p>
                              <p className="text-xs text-muted">Book a discovery call to discuss your goals.</p>
                            </div>
                            <Link
                              href="#contact"
                              className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors bg-accent/10 px-4 py-2 rounded-lg"
                              onClick={() => setMegaOpen(false)}
                            >
                              Get a Consultation
                              <ArrowRight className="h-4 w-4" />
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

          <div className="shrink-0 ml-auto flex items-center gap-3">
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

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-white overflow-hidden shadow-lg"
            >
              <div className="container-narrow px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-foreground hover:bg-background rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-border mt-4 flex flex-col gap-3">
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white shadow-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message on WhatsApp
                  </a>
                  <Link 
                    href="#contact" 
                    className="flex items-center justify-center w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
