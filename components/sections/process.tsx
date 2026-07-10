"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageSquare,
  FileText,
  Receipt,
  FileCheck,
  Code2,
  CheckCircle,
  Rocket,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeader, AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { processSteps } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  FileText,
  Receipt,
  FileCheck,
  Code2,
  CheckCircle,
  Rocket,
  HeartHandshake,
};

function ProposalPreview() {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-foreground">Project Proposal</div>
        <div className="text-xs text-muted bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">Draft</div>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-muted">Client</span>
          <span className="text-foreground font-medium">[Client Name]</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Date</span>
          <span className="text-foreground font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="border-t border-border mt-3 pt-3">
          <div className="font-medium text-foreground mb-2">Estimated Timeline</div>
          <div className="w-full bg-accent/10 rounded-full h-2">
            <div className="bg-accent h-2 rounded-full" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuotationPreview() {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-foreground">Quotation</div>
        <div className="text-xs text-muted">#QUO-001</div>
      </div>
      <div className="space-y-3 text-xs">
        <div className="flex justify-between">
          <span className="text-muted">Scope of Work</span>
        </div>
        <div className="border-t border-border mt-2 pt-2">
          <div className="flex justify-between items-end">
            <span className="text-muted">Total</span>
            <span className="text-foreground text-lg font-bold">$XX,XXX</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContractPreview() {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-5 shadow-sm">
      <div className="text-center mb-4">
        <div className="text-sm font-semibold text-foreground">Project Agreement</div>
        <div className="text-xs text-muted mt-1">Nexora Labs & Client</div>
      </div>
      <div className="border-t border-b border-border py-3 text-xs text-muted">
        <p className="text-center">By signing, both parties agree to the terms and scope of work.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center">
          <div className="border-b border-border pb-2 mb-2"></div>
          <div className="text-xs text-muted">Nexora Labs</div>
        </div>
        <div className="text-center">
          <div className="border-b border-border pb-2 mb-2"></div>
          <div className="text-xs text-muted">Client</div>
        </div>
      </div>
    </div>
  );
}

function InvoicePreview() {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm font-semibold text-foreground">Invoice</div>
          <div className="text-xs text-muted">#INV-001</div>
        </div>
        <div className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded border border-accent/20">Due in 14 days</div>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-muted">Services</span>
          <span className="text-foreground font-medium">$XX,XXX</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Tax</span>
          <span className="text-foreground font-medium">$XXX</span>
        </div>
        <div className="border-t border-border mt-2 pt-2 flex justify-between items-end">
          <span className="text-muted font-medium">Total Due</span>
          <span className="text-foreground text-xl font-bold">$XX,XXX</span>
        </div>
      </div>
    </div>
  );
}

function TechStackMini() {
  const techCategories = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { name: "Backend", items: ["Laravel", "Node.js"] },
    { name: "Database", items: ["PostgreSQL", "MySQL", "Supabase"] },
    { name: "Cloud", items: ["Docker", "Vercel", "Redis"] },
    { name: "AI", items: ["OpenAI", "Google Gemini"] }
  ];
  
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {techCategories.map((cat, idx) => (
        <div key={idx} className="bg-accent/5 border border-accent/10 rounded-lg p-3">
          <div className="text-xs font-semibold text-muted mb-1">{cat.name}</div>
          <div className="flex flex-wrap gap-1">
            {cat.items.map((item, i) => (
              <span key={i} className="text-[11px] text-foreground bg-white border border-border px-2 py-0.5 rounded-full shadow-sm">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProcessCard({ step }: { step: typeof processSteps[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = iconMap[step.icon] || MessageSquare;
  
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -2 }}
        className="mb-4 sm:mb-6"
      >
        <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left p-5 sm:p-6 flex items-start gap-4 sm:gap-5"
          >
            {/* Step number & icon */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10 text-primary">
                <IconComponent className="h-6 w-6" />
              </div>
              <div className="text-[10px] font-bold text-accent uppercase tracking-wider">
                Step {String(step.step).padStart(2, '0')}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{step.title}</h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-muted shrink-0"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          </button>
          
          {/* Accordion Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <CardContent className="pt-0 border-t border-border">
                  <div className="mt-4">
                    {step.previewType === "proposal" && <ProposalPreview />}
                    {step.previewType === "quotation" && <QuotationPreview />}
                    {step.previewType === "contract" && <ContractPreview />}
                    {step.previewType === "invoice" && <InvoicePreview />}
                    
                    {step.accordionDetails && !step.previewType && (
                      <ul className="space-y-2">
                        {step.accordionDetails.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted">
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {step.showTechStack && (
                      <>
                        {step.accordionDetails && (
                          <ul className="space-y-2 mb-4">
                            {step.accordionDetails.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <TechStackMini />
                      </>
                    )}
                  </div>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </StaggerItem>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-padding" aria-label="Process">
      <div className="container-narrow">
        <SectionHeader
          label="Our Process"
          title="Our Client Success Journey"
          description="Every successful digital product follows a structured process. From understanding your business to long-term support, we ensure complete transparency at every stage."
        />
        
        <StaggerContainer className="mt-12 mx-auto max-w-3xl">
          {processSteps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </StaggerContainer>
        
        <div className="mt-16">
          <AnimatedSection animation="scale">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-10 sm:py-16 text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent blur-3xl" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent blur-3xl" />
              </div>
              
              <div className="relative z-10 mx-auto max-w-2xl">
                <Sparkles className="mx-auto h-8 w-8 text-accent mb-6" />
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance">
                  Ready to build your next digital product?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
                  Let&apos;s transform your idea into a scalable, high-quality digital product with a structured development process.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticButton variant="accent" size="lg" href="#contact">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" asChild>
                    <a href="mailto:aravindansingaram56@gmail.com">Schedule a Discovery Call</a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
