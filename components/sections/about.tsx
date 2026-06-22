"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionHeader, AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { coreValues, stats } from "@/lib/data";
import { useAnimatedCounter } from "@/hooks/use-animations";

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useAnimatedCounter(value, 1600, isInView);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-foreground font-display sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1.5 text-sm text-muted leading-snug">{label}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-label="About">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          <div>
            <SectionHeader
              label="About"
              title="Small team. Practical engineering."
              description=""
              align="left"
              className="mb-6"
            />

            <AnimatedSection animation="fadeIn" className="space-y-4 text-muted leading-relaxed">
              <p>
                Nexora Labs builds scalable digital products with a focus on clean engineering,
                practical execution, and long-term maintainability.
              </p>
              <p>
                We work with modern technologies to create websites, SaaS platforms, APIs,
                mobile apps, and business systems — built to actually ship and scale.
              </p>
              <p>
                We&apos;re a small, focused team. That means direct communication, no hand-offs,
                and engineers who stay accountable from the first line of code to launch.
              </p>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection animation="scale">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-5">
                  How we work
                </h3>
                <div className="space-y-3.5">
                  {[
                    "Code reviews on every change",
                    "Clean, documented codebases",
                    "Direct communication — no account managers",
                    "Regular progress updates",
                    "Post-launch support included",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <StaggerContainer className="mt-5 grid grid-cols-2 gap-3" staggerDelay={0.06}>
              {coreValues.map((value) => (
                <StaggerItem key={value.id}>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <h4 className="text-sm font-semibold text-foreground">{value.title}</h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 rounded-2xl border border-border bg-white p-8 sm:p-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
