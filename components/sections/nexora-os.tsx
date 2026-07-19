"use client"

import { SectionHeader } from "@/components/ui/animated-section"

export function NexoraOSSection() {
  return (
    <section id="nexora-os" className="section-padding bg-background" aria-label="Powered by Nexora OS">
      <div className="container-narrow">
        <SectionHeader
          label="Powered by Nexora OS"
          title="Our Internal Engineering Platform"
          description=""
        />
        <p className="mt-6 max-w-2xl mx-auto text-center text-lg text-muted leading-relaxed">
          We built Nexora OS to standardize delivery, automate repetitive work and ensure every client receives faster, more consistent project execution.
        </p>
      </div>
    </section>
  )
}
