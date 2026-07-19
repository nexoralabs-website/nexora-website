"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const proofItems = [
  "Multiple industries served",
  "Startup Friendly",
  "MSME Focus",
  "Product Engineering",
  "AI Automation",
  "Performance Marketing"
];

export function SocialProofSection() {
  return (
    <section className="py-12 border-y border-border/50 bg-surface/50" aria-label="Social Proof">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="flex flex-col items-center">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-8 text-center">
            Trusted By Growing Businesses
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {proofItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
