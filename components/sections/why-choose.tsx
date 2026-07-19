"use client"

import { SectionHeader } from "@/components/ui/animated-section"

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-padding bg-background" aria-label="Why Businesses Choose Nexora">
      <div className="container-narrow">
        <SectionHeader
          label="Why Choose Nexora"
          title="Traditional Agency vs. Nexora Labs"
          description=""
        />
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full table-auto border border-border text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="px-4 py-2 text-left"></th>
                <th className="px-4 py-2 text-left">Traditional Agency</th>
                <th className="px-4 py-2 text-left">Nexora Labs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              <tr>
                <td className="px-4 py-2 font-medium">Approach</td>
                <td className="px-4 py-2">Only builds software</td>
                <td className="px-4 py-2">Builds + Automates + Grows</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Automation</td>
                <td className="px-4 py-2">Manual work</td>
                <td className="px-4 py-2">Automation‑first</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Vendor Model</td>
                <td className="px-4 py-2">Separate vendors</td>
                <td className="px-4 py-2">Single technology partner</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Delivery</td>
                <td className="px-4 py-2">One‑time delivery</td>
                <td className="px-4 py-2">Continuous improvements</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Performance</td>
                <td className="px-4 py-2">Little optimization</td>
                <td className="px-4 py-2">Performance‑driven</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
