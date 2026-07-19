"use client";

import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { engineeringEcosystem } from "@/lib/data";
import { Monitor, Server, Smartphone, BrainCircuit, Bot, Cloud, BarChart3, Database, GitBranch } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Smartphone,
  BrainCircuit,
  Bot,
  Cloud,
  BarChart3,
  Database,
  GitBranch,
};

export function EngineeringEcosystemSection() {
  return (
    <section id="engineering-ecosystem" className="section-padding bg-background" aria-label="Engineering Ecosystem">
      <div className="container-narrow">
        <SectionHeader
          label="Engineering Ecosystem"
          title="Our Technology Toolbox"
          description="We choose the right stack based on business goals, scalability, maintainability and long‑term growth."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {engineeringEcosystem.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Monitor;
            return (
              <StaggerItem key={cat.category}>
                <div className="card-premium h-full p-6 flex flex-col gap-4 group">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="text-base font-bold text-primary">{cat.category}</h3>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted">
                    {cat.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <p className="mt-8 text-center text-sm text-muted">
          188+ technologies, frameworks, APIs and engineering tools.
        </p>
      </div>
    </section>
  );
}
