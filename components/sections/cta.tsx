"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function PricingCTASection() {
  return (
    <section className="section-padding bg-surface border-y border-border/50" aria-label="Get Started">
      <div className="container-narrow">
        <AnimatedSection animation="scale">
          <div className="card-premium px-8 py-20 sm:px-16 sm:py-24 text-center overflow-hidden relative">
            
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl text-balance leading-tight tracking-tight">
                Ready to build your next digital product?
              </h2>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto">
                Partner with Nexora Labs to architect scalable software, automate critical workflows, and implement data-driven growth strategies.
              </p>
              
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton variant="accent" size="lg" href="#contact" className="w-full sm:w-auto h-14 px-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 border-transparent shadow-sm">
                  Need a Website?
                  <ArrowRight className="h-4 w-4 ml-2" />
                </MagneticButton>
                <MagneticButton variant="accent" size="lg" href="#contact" className="w-full sm:w-auto h-14 px-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 border-transparent shadow-sm">
                  Need an App?
                  <ArrowRight className="h-4 w-4 ml-2" />
                </MagneticButton>
                <MagneticButton variant="accent" size="lg" href="#contact" className="w-full sm:w-auto h-14 px-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 border-transparent shadow-sm">
                  Need Business Automation?
                  <ArrowRight className="h-4 w-4 ml-2" />
                </MagneticButton>
                <MagneticButton variant="accent" size="lg" href="#contact" className="w-full sm:w-auto h-14 px-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 border-transparent shadow-sm">
                  Need More Leads?
                  <ArrowRight className="h-4 w-4 ml-2" />
                </MagneticButton>
                <MagneticButton variant="accent" size="lg" href="#contact" className="w-full sm:w-auto h-14 px-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 border-transparent shadow-sm">
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4 ml-2" />
                </MagneticButton>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-muted tracking-wider uppercase">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Fixed-price contracts</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Long-term SLAs</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Source code ownership</span>
              </div>
            </div>
            
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
