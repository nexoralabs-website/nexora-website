"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader, AnimatedSection } from "@/components/ui/animated-section";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="section-padding bg-background" aria-label="FAQ">
      <div className="container-narrow max-w-3xl">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about partnering with Nexora Labs."
        />

        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-white p-2 sm:p-4 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-border px-4 last:border-0">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
