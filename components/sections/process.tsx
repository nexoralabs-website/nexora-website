"use client";

import { Search, Map, Palette, Code2, Rocket, TrendingUp, Bot } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { processSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Search, Map, Palette, Code2, Bot, Rocket, TrendingUp
};

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-background border-t border-border/50" aria-label="Development Process">
      <div className="container-narrow">
        <SectionHeader
          label="The Client Journey"
          title="A Proven Engineering Lifecycle"
          description="We eliminate ambiguity. From day one, you have full transparency into our strategic roadmap and delivery milestones."
        />

        <div className="mt-20 relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border/60 z-0" />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Code2;
              
              return (
                <StaggerItem key={step.id}>
                  <div className="flex flex-col items-start lg:items-center relative group">
                    
                    {/* Icon Circle */}
                    <div className="h-24 w-24 rounded-full bg-surface border border-border/80 flex items-center justify-center text-primary group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_20px_rgba(132,204,22,0.15)] transition-all duration-300 mb-6 relative">
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                      <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-primary mb-2 lg:text-center">
                      {titleCase(step.title)}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed lg:text-center">
                      {step.description}
                    </p>
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

function titleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
