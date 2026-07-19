"use client";

import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { howWeWorkSteps } from "@/lib/data";
import { Phone, ClipboardList, FileText, Receipt, FileSignature, CalendarDays, PencilRuler, Code2, Bug, Rocket, LifeBuoy } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  ClipboardList,
  FileText,
  Receipt,
  FileSignature,
  CalendarDays,
  PencilRuler,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
};

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="section-padding bg-background" aria-label="How We Work">
      <div className="container-narrow">
        <SectionHeader
          label="Process"
          title="Our End‑to‑End Workflow"
          description="From the first discovery call to continuous improvements, every step is transparent and outcome‑driven."
        />
        <StaggerContainer className="flex flex-col space-y-8 mt-12">
          {howWeWorkSteps.map((step) => {
            const Icon = iconMap[step.icon] ?? Phone;
            return (
              <StaggerItem key={step.title}>
                <div className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-border text-primary transition-colors group-hover:border-accent/40 group-hover:text-accent shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary">{step.title}</h3>
                    <p className="text-sm text-muted">{step.description}</p>
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
