"use client";

import { ArrowRight, MessageCircle, CalendarCheck, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

const agendaItems = [
  "Business & Goal Discussion",
  "Technical Architecture Consultation",
  "Strategic Project Roadmap",
  "Timeline & Resource Planning",
  "Transparent Budget Estimation"
];

export function DiscoveryCallSection() {
  return (
    <section className="section-padding bg-background" aria-label="Discovery Call">
      <div className="container-narrow">
        <AnimatedSection animation="scale">
          <div className="card-premium overflow-hidden relative">
            {/* Subtle split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Side: Content */}
              <div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border text-primary shadow-sm">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                
                <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl text-balance leading-tight tracking-tight mb-6">
                  Let&apos;s discuss your next product.
                </h2>
                
                <p className="text-base sm:text-lg text-muted leading-relaxed mb-10">
                  Schedule a complimentary 30-minute discovery call with our engineering leadership to discuss your vision and see if we are the right technical partner for you.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton variant="accent" size="lg" href="#contact" className="w-full sm:w-auto h-14 px-8 text-sm bg-primary text-white hover:bg-primary/90 border-transparent">
                    Book Discovery Call
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </MagneticButton>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-sm bg-white hover:bg-surface border-border text-primary" asChild>
                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2 text-[#25D366]" />
                      WhatsApp Chat
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side: Agenda */}
              <div className="bg-surface p-10 sm:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-8">
                  What happens during the call
                </h3>
                
                <ul className="space-y-6">
                  {agendaItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border border-border text-accent mt-0.5 shadow-sm">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-base font-medium text-primary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-border flex items-center justify-center text-xs font-bold text-muted">
                      NL
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Nexora Engineering Team</p>
                      <p className="text-xs text-muted">Technical Architects & Strategists</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
