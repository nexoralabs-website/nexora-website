"use client";

import { SectionHeader } from "@/components/ui/animated-section";
import { Users, Briefcase, TrendingUp } from "lucide-react";

export function WhoWeWorkWithSection() {
  const cards = [
    {
      title: "Startups",
      icon: Users,
      problem: "Limited resources and tight timelines.",
      how: "We build MVPs fast, validate ideas and set a scalable foundation.",
      outcome: "Launch product quickly and scale confidently.",
    },
    {
      title: "SMEs",
      icon: Briefcase,
      problem: "Manual, repetitive processes waste time.",
      how: "We automate operations and digitize workflows.",
      outcome: "Increase efficiency and reduce costs.",
    },
    {
      title: "Growing Businesses",
      icon: TrendingUp,
      problem: "Systems can’t keep up with rapid growth.",
      how: "We scale software, generate leads and optimise performance.",
      outcome: "Accelerate revenue and sustain growth.",
    },
  ];

  return (
    <section id="who-we-work-with" className="section-padding bg-background" aria-label="Who We Work With">
      <div className="container-narrow">
        <SectionHeader
          label="Who We Work With"
          title="We partner with businesses at every stage"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((c) => (
            <div key={c.title} className="card-premium h-full flex flex-col p-6 sm:p-8 group gradient-border-top">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{c.title}</h3>
              <p className="text-sm text-muted mb-2"><strong>Problem:</strong> {c.problem}</p>
              <p className="text-sm text-muted mb-2"><strong>How Nexora Helps:</strong> {c.how}</p>
              <p className="text-sm text-muted"><strong>Outcome:</strong> {c.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
