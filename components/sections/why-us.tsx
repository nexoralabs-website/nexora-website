"use client";

import {
  Code2,
  Layers,
  Zap,
  FileCode2,
  HeartHandshake,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { whyUsItems } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Zap,
  FileCode2,
  HeartHandshake,
  MessageSquare,
};

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding bg-white" aria-label="Why Nexora Labs">
      <div className="container-narrow">
        <SectionHeader
          label="Why Nexora Labs"
          title="Engineering Excellence You Can Trust"
          description="We combine technical expertise with business understanding to deliver products that matter."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <StaggerItem key={item.id}>
                <div className="group rounded-2xl border border-border p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
