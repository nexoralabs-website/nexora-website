"use client";

import { SectionHeader } from "@/components/ui/animated-section";

export function GrowthMarketingSection() {
  return (
    <section id="growth-marketing" className="section-padding bg-background" aria-label="Growth & Marketing">
      <div className="container-narrow">
        <SectionHeader
          label="Growth & Marketing"
          title="Accelerate Your Business"
          description="Data‑driven campaigns, SEO, and AI‑powered automation that fuel sustainable growth."
        />
        {/* Add concise benefit cards or list as needed */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">Performance Marketing</h3>
            <p className="text-sm text-muted">Targeted ad spend, higher ROI, and measurable results.</p>
          </div>
          <div className="p-6 bg-surface rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">SEO & Content Strategy</h3>
            <p className="text-sm text-muted">Organic traffic growth with technical SEO and compelling content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
