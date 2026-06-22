"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { heroPillars } from "@/lib/data";
import { siteConfig } from "@/lib/constants";

function FloatingShape({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-white" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <FloatingShape
          className="absolute top-32 right-[15%] h-16 w-16 rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm"
          delay={0}
        />
        <FloatingShape
          className="absolute top-1/2 left-[10%] h-12 w-12 rounded-full border border-accent/20 bg-accent/5"
          delay={2}
        />
        <FloatingShape
          className="absolute bottom-32 right-[25%] h-20 w-20 rounded-3xl border border-border/50 bg-white/30 backdrop-blur-sm"
          delay={1}
        />
      </div>

      <div className="container-narrow section-padding w-full">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {siteConfig.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]"
          >
            Engineering the Next Generation of{" "}
            <span className="relative">
              Digital Products
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed sm:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton variant="accent" size="lg" href="#contact">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">View Our Work</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-muted">
              {heroPillars.map((pillar, i) => (
                <motion.span
                  key={pillar}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.06 }}
                  className="inline-flex items-center gap-3"
                >
                  {i > 0 && (
                    <span className="text-border select-none" aria-hidden>
                      •
                    </span>
                  )}
                  <span className="hover:text-foreground transition-colors">{pillar}</span>
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mx-auto mt-5 max-w-xl text-sm text-muted/80 leading-relaxed"
            >
              Built using production-grade technologies we use in real client systems.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
