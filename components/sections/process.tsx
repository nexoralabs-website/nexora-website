"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/animated-section";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="section-padding" aria-label="Process">
      <div className="container-narrow">
        <SectionHeader
          label="Process"
          title="How We Build"
          description="A straightforward process focused on delivering working software quickly."
        />

        {/* Timeline */}
        <div className="relative mt-12 mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]" />

          <ol className="space-y-0">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {/* Step dot */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white shadow-sm sm:h-12 sm:w-12">
                  <span className="text-xs font-bold text-accent sm:text-sm">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1.5 pb-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-accent/80 bg-accent/8 rounded-full px-2.5 py-0.5 border border-accent/20">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
