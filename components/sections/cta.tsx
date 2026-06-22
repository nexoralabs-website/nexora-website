"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PricingCTASection() {
  return (
    <section className="section-padding" aria-label="Get Started">
      <div className="container-narrow">
        <AnimatedSection animation="scale">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl">
              <Sparkles className="mx-auto h-8 w-8 text-accent mb-6" />
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
                Ready to Build Your Next Product?
              </h2>
              <p className="mt-4 text-lg text-white/60 leading-relaxed">
                From MVP to enterprise scale, we help you ship faster with engineering
                excellence. Let&apos;s discuss your project.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton variant="accent" size="lg" href="#contact">
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="pb-20" aria-label="Newsletter">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-background p-8 sm:p-10">
            <div className="mx-auto max-w-xl text-center">
              <h3 className="text-xl font-semibold text-foreground">
                Stay Updated on Engineering Insights
              </h3>
              <p className="mt-2 text-sm text-muted">
                Get the latest on product engineering, tech trends, and case studies.
              </p>

              {submitted ? (
                <p className="mt-6 text-sm font-medium text-accent">
                  Thanks for subscribing! We&apos;ll be in touch.
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col sm:flex-row gap-3"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                    className="flex-1"
                  />
                  <Button type="submit" variant="default">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
