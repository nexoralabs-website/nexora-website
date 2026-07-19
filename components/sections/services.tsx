"use client";

import {
  Bot, Code2, Megaphone, Search, Smartphone, Palette,
  Globe, Users, GitBranch, Download, ArrowRight
} from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Bot, Code2, Megaphone, Search, Smartphone, Palette,
  Globe, Users, GitBranch, Download
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background" aria-label="Services">
      <div className="container-narrow">
        <SectionHeader
          label="What We Do"
          title="End-to-End Product Engineering"
          description="From robust backend architectures to AI-driven workflows and growth marketing. We deliver complete solutions."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            
            return (
              <StaggerItem key={service.id}>
                <div className="card-premium h-full flex flex-col p-6 sm:p-8 group gradient-border-top">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border text-primary transition-all duration-300 group-hover:scale-105 group-hover:text-accent group-hover:border-accent/30 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-border/50">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-xs font-medium text-primary">
                        <div className="h-1 w-1 rounded-full bg-accent shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors mt-auto group/cta"
                  >
                    {service.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
