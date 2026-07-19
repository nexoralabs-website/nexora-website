"use client";

import { BookOpen, FileText, Lock } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const resources = [
  { type: "Article", title: "Why Next.js is the Standard for Enterprise React Apps", icon: BookOpen },
  { type: "Guide", title: "The Ultimate Guide to Automating B2B Lead Generation", icon: FileText },
  { type: "Case Study", title: "Scaling a Fintech MVP to 10k Daily Active Users", icon: FileText },
];

export function ResourcesSection() {
  return (
    <section className="section-padding bg-surface" aria-label="Resources & Insights">
      <div className="container-narrow">
        <SectionHeader
          label="Insights"
          title="Engineering & Growth Resources"
          description="Actionable insights, technical guides, and in-depth case studies from our engineering team."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {resources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="card-premium h-full relative overflow-hidden group">
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Lock className="h-6 w-6 text-muted mb-2" />
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">
                      Coming Soon
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Icon className="h-4 w-4 text-accent" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Visual placeholder bottom area */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 border-t border-border/50 bg-surface group-hover:bg-accent transition-colors duration-300" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
