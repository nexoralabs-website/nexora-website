"use client";

import { Code2, Layers, TrendingUp } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const cards = [
  {
    id: "engineering-first",
    icon: Code2,
    title: "Engineering First",
    description: "Clean systems and scalable foundations",
  },
  {
    id: "modern-stack",
    icon: Layers,
    title: "Modern Stack",
    description: "Using technologies we actively build with",
  },
  {
    id: "long-term-thinking",
    icon: TrendingUp,
    title: "Long-Term Thinking",
    description: "Built for maintainability and growth",
  },
];

export function PracticalEngineeringSection() {
  return (
    <section
      id="practical-engineering"
      className="section-padding bg-background"
      aria-label="Built with Practical Engineering"
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <SectionHeader
              label="Our Approach"
              title="Built with Practical Engineering"
              description=""
              align="left"
              className="mb-4"
            />
            <p className="text-muted text-sm leading-relaxed">
              We focus on building reliable digital products with clean architecture, modern
              technologies, and long-term maintainability.
            </p>
            <p className="mt-3 text-muted text-sm leading-relaxed">
              Instead of showcasing volume, we focus on delivering thoughtful solutions and
              continuous improvement.
            </p>
          </div>

          <StaggerContainer
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
            staggerDelay={0.08}
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.id}>
                  <div className="rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-sm hover:-translate-y-0.5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed">{card.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
