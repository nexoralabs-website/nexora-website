"use client";

import { SectionHeader, AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { coreValues } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white" aria-label="About Us">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <SectionHeader
              label="About Us"
              title="We solve business problems through technology."
              description=""
              align="left"
              className="mb-6"
            />

            <AnimatedSection animation="fadeIn" className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                Nexora Labs started with a simple observation: most businesses don&apos;t need just another piece of software. They need <strong className="text-foreground font-semibold">solutions that drive revenue and efficiency.</strong>
              </p>
              <p>
                That&apos;s why we evolved beyond a traditional development shop. Today, we are a full-service digital agency that combines <span className="text-accent font-medium">software engineering, AI automation, and performance marketing.</span>
              </p>
              <p>
                We don&apos;t just hand over a codebase. We build scalable platforms, implement AI agents to automate your operations, and run targeted campaigns to grow your customer base. One unified team, aligned with your business goals.
              </p>
            </AnimatedSection>
          </div>

          <div>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
              {coreValues.map((value) => (
                <StaggerItem key={value.id}>
                  <div className="rounded-2xl border border-border bg-background p-6 h-full transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:-translate-y-1 group">
                    <div className="h-1 w-8 bg-accent rounded-full mb-4 transition-all duration-300 group-hover:w-12" />
                    <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
