"use client";

import Image from "next/image";
import { SectionHeader, AnimatedSection } from "@/components/ui/animated-section";
import { techStack } from "@/lib/data";
import { cn } from "@/lib/utils";

const techIcons: Record<string, string> = {
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  gcloud: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
};

// Fallbacks for AI/Automation logos if devicons doesn't have them
const customIcons: Record<string, string> = {
  openai: "/brand/icon-32.png", // Placeholder
  claude: "/brand/icon-32.png", // Placeholder
  gemini: "/brand/icon-32.png", // Placeholder
  n8n: "/brand/icon-32.png", // Placeholder
  vercel: "/brand/icon-32.png", // Placeholder
};

export function TechStackSection() {
  const categories = Array.from(new Set(techStack.map(t => t.category)));

  return (
    <section id="tech-stack" className="section-padding bg-white" aria-label="Technology Stack">
      <div className="container-narrow">
        <SectionHeader
          label="Our Stack"
          title="Technologies We Work With"
          description="We use modern, battle-tested technologies to build scalable, high-performance applications and intelligent automation systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {categories.map((category, idx) => (
            <AnimatedSection key={category} delay={idx * 0.1}>
              <div className="rounded-2xl border border-border bg-background p-6 h-full transition-shadow hover:shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack
                    .filter((t) => t.category === category)
                    .map((tech) => {
                      const iconUrl = techIcons[tech.icon] || customIcons[tech.icon];
                      const hasRealIcon = !!techIcons[tech.icon];

                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 shadow-sm transition-colors hover:border-accent/40"
                          title={tech.name}
                        >
                          {iconUrl && hasRealIcon ? (
                            <Image src={iconUrl} alt={tech.name} width={16} height={16} className={cn("w-4 h-4 object-contain", tech.icon === 'nextjs' ? 'dark:invert' : '')} />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-accent" />
                          )}
                          <span className="text-xs font-medium text-foreground">{tech.name}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
