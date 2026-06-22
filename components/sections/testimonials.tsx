"use client";

import { Quote } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="section-padding" aria-label="Testimonials">
      <div className="container-narrow">
        <SectionHeader
          label="Testimonials"
          title="Trusted by Founders & Teams"
          description="Don't just take our word for it—hear from the people we've worked with."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-md hover:border-accent/20">
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <p className="flex-1 text-sm text-foreground/80 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <cite className="not-italic">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
