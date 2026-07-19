"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, BarChart3, Code2, Rocket, ShieldCheck } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { heroPillars } from "@/lib/data";
import { siteConfig } from "@/lib/constants";

function FloatingCard({
  icon: Icon,
  label,
  value,
  className,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute hidden lg:flex items-center gap-3 rounded-xl border border-border/60 bg-white/80 backdrop-blur-md px-4 py-3 shadow-sm ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-primary border border-border/50">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[11px] font-medium text-muted uppercase tracking-wider">{label}</p>
        <p className="text-sm font-semibold text-primary">{value}</p>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
      aria-label="Hero"
    >
      {/* Background - Clean White with subtle grid */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-surface/80 to-transparent" />
      </div>

      {/* Floating UI Cards - Minimalist */}
      <FloatingCard
        icon={Bot}
        label="Automation"
        value="100% Workflows"
        className="top-32 right-[10%]"
        delay={0}
      />
      <FloatingCard
        icon={BarChart3}
        label="Performance"
        value="Sub-second Load"
        className="top-1/2 left-[6%]"
        delay={1.5}
      />
      <FloatingCard
        icon={Code2}
        label="Engineering"
        value="Scalable Arch"
        className="bottom-40 right-[15%]"
        delay={0.8}
      />
      <FloatingCard
        icon={Rocket}
        label="Growth"
        value="40+ Campaigns"
        className="bottom-48 left-[10%]"
        delay={2}
      />

      {/* Content */}
      <div className="container-narrow px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="mx-auto max-w-[900px] text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {siteConfig.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-[76px] text-balance leading-[1.05]"
          >
            Engineering <span className="text-accent">Scalable</span> Products & AI Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-muted leading-relaxed sm:text-xl"
          >
            We help startups, SMEs and growing businesses build websites, mobile apps and business software, automate repetitive operations and accelerate growth through Google Ads, Meta Ads, SEO, ASO and AI-powered solutions.
                      {/* Service chips */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                "Websites",
                "Mobile Apps",
                "SaaS Products",
                "CRM Automation",
                "AI Automation",
                "Google Ads",
                "Meta Ads",
                "SEO",
                "ASO",
              ].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  ✓ {chip}
                </span>
              ))}
            </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton variant="accent" size="lg" href="#contact" className="h-14 px-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 shadow-md">
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 ml-2" />
            </MagneticButton>
            <Button variant="outline" size="lg" className="h-14 px-10 text-sm font-bold bg-white hover:bg-surface border-border shadow-sm text-primary" asChild>
              <Link href="#portfolio">View Case Studies</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted">Enterprise-Grade Standards</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] font-semibold text-muted/80 uppercase tracking-wider">
              {heroPillars.map((pillar, i) => (
                <motion.span
                  key={pillar}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.06 }}
                >
                  {pillar}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
