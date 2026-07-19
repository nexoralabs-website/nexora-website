"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Send, Users, MessageSquare, Layers, Bot, type LucideIcon } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { metrics } from "@/lib/data";
import { useAnimatedCounter } from "@/hooks/use-animations";

const iconMap: Record<string, LucideIcon> = {
  Send,
  Users,
  MessageSquare,
  Layers,
  Bot,
};

function StatCounter({
  value,
  label,
  description,
  icon: IconStr,
}: {
  value: string;
  label: string;
  description: string;
  icon: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  const num = match ? parseInt(match[2], 10) : 0;
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";

  const count = useAnimatedCounter(num, 1600, isInView);
  const Icon = iconMap[IconStr] || Layers;

  return (
    <StaggerItem>
      <div ref={ref} className="card-premium h-full p-8 flex flex-col group">
        <div className="flex items-center gap-4 mb-6 border-b border-border/50 pb-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-primary transition-colors group-hover:border-accent/40 group-hover:text-accent">
            <Icon className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold text-primary">{label}</p>
        </div>
        
        <div className="mt-auto">
          <div className="text-4xl font-bold font-display text-primary tracking-tight mb-2">
            {prefix}{count}{suffix}
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-[200px]">{description}</p>
        </div>
      </div>
    </StaggerItem>
  );
}

export function MetricsSection() {
  return (
    <section className="section-padding bg-surface" aria-label="Metrics">
      <div className="container-narrow">
        <SectionHeader
          label="Real Results"
          title="Metrics That Matter"
          description="We focus on delivering measurable impact, not just lines of code."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
          {metrics.map((metric) => (
            <StatCounter
              key={metric.id}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              icon={metric.icon}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
