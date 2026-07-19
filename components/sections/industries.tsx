"use client";

import {
  Activity, Building, GraduationCap, ShoppingBag, 
  ShoppingCart, Rocket, Factory, Briefcase,
  type LucideIcon
} from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { industries } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Building,
  GraduationCap,
  ShoppingBag,
  ShoppingCart,
  Rocket,
  Factory,
  Briefcase
};

export function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-surface" aria-label="Industries We Serve">
      <div className="container-narrow">
        <SectionHeader
          label="Industries"
          title="Engineering Solutions Across Domains"
          description="We bring deep technical expertise to solve complex challenges in various sectors."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Briefcase;
            
            return (
              <StaggerItem key={industry.id}>
                <div className="card-premium h-full p-6 group flex flex-col items-start hover:border-accent/30">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border text-primary transition-colors group-hover:text-accent shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
