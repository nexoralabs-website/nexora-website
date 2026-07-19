"use client";

import {
  Briefcase,
  Layers,
  Bot,
  Zap,
  HeartHandshake,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { whyUsItems } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Layers,
  Bot,
  Zap,
  HeartHandshake,
  GitBranch,
};

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding bg-background" aria-label="Why Choose Us">
      <div className="container-narrow">
        <SectionHeader
          label="Why Choose Us"
          title="Engineered for Impact"
          description="We are not just a development shop. We are strategic technical partners."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {whyUsItems.map((item) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <StaggerItem key={item.id}>
                <div className="card-premium h-full p-6 sm:p-8 flex gap-4 items-start group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-primary transition-colors group-hover:border-accent/40 group-hover:text-accent shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
