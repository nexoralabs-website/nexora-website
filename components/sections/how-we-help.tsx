"use client";

import { SectionHeader } from "@/components/ui/animated-section";
import { ArrowRight, Search, Map, Palette, Code2, Bot, Rocket, TrendingUp } from "lucide-react";

export function HowWeHelpSection() {
  const steps = [
    { icon: Search, label: "Business Problem" },
    { icon: Map, label: "Business Discovery" },
    { icon: Palette, label: "Engineering Solution" },
    { icon: Code2, label: "Automate" },
    { icon: Bot, label: "Marketing & Growth" },
    { icon: Rocket, label: "Continuous Support" },
  ];

  return (
    <section id="how-we-help" className="section-padding bg-background" aria-label="How We Help Businesses">
      <div className="container-narrow">
        <SectionHeader
          label="How We Help Businesses"
          title="Our Simple Process"
          description=""
        />
        <div className="flex flex-col items-center space-y-6 mt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full max-w-3xl">
              <step.icon className="h-6 w-6 text-primary" />
              <span className="text-lg font-medium text-primary">{step.label}</span>
              {idx < steps.length - 1 && <ArrowRight className="h-5 w-5 text-muted" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
