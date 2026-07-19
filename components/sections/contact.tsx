"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { SectionHeader, AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { siteConfig } from "@/lib/constants";
import { serviceCategories, services } from "@/lib/data";
import { cn } from "@/lib/utils";

const WHATSAPP_BASE = siteConfig.links.whatsappBase;

function buildWhatsAppUrl(data: ContactFormValues): string {
  const lines = [
    `Hello Nexora Labs, I want to discuss a project.`,
    ``,
    `Name: ${data.name}`,
    `Company: ${data.company || "Not provided"}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Service Area: ${data.service}`,
    `Budget: ${data.budget || "Not provided"}`,
    `Timeline: ${data.timeline || "Not provided"}`,
    `Message: ${data.message}`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(lines)}`;
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const url = buildWhatsAppUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-surface" aria-label="Contact">
      <div className="container-narrow">
        <SectionHeader
          label="Project Enquiry"
          title="Tell Us About Your Project"
          description="Fill out the form below and we will get back to you within a few hours to schedule a discovery call."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="card-premium p-6 sm:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Request Received</h3>
                  <p className="text-muted max-w-md mx-auto">
                    Thank you for reaching out. A WhatsApp chat should have opened with your details. Our engineering team will review your requirements and respond shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8 border-border text-primary hover:bg-surface"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="h-12 bg-background border-border/80 focus:border-primary focus:ring-primary shadow-sm"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-primary font-semibold">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Acme Corp"
                        className="h-12 bg-background border-border/80 focus:border-primary focus:ring-primary shadow-sm"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-semibold">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@acmecorp.com"
                        className="h-12 bg-background border-border/80 focus:border-primary focus:ring-primary shadow-sm"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-primary font-semibold">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="h-12 bg-background border-border/80 focus:border-primary focus:ring-primary shadow-sm"
                        {...register("phone")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-primary font-semibold">Service Required *</Label>
                      <select
                        id="service"
                        className={cn(
                          "flex h-12 w-full rounded-md border border-border/80 bg-background px-3 py-2 text-sm text-primary shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
                          errors.service && "border-red-500"
                        )}
                        aria-invalid={!!errors.service}
                        {...register("service")}
                      >
                        <option value="">Select service...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-primary font-semibold">Estimated Budget</Label>
                      <select
                        id="budget"
                        className="flex h-12 w-full rounded-md border border-border/80 bg-background px-3 py-2 text-sm text-primary shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        {...register("budget")}
                      >
                        <option value="">Select budget...</option>
                        <option value="Less than ₹5L">Less than ₹5L</option>
                        <option value="₹5L – ₹15L">₹5L – ₹15L</option>
                        <option value="₹15L – ₹50L">₹15L – ₹50L</option>
                        <option value="₹50L+">₹50L+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-primary font-semibold">Project Timeline</Label>
                      <select
                        id="timeline"
                        className="flex h-12 w-full rounded-md border border-border/80 bg-background px-3 py-2 text-sm text-primary shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        {...register("timeline")}
                      >
                        <option value="">Select timeline...</option>
                        <option value="ASAP">ASAP (Within 2 weeks)</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="Just Exploring">Just Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-semibold">Project Description *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your business goals, current challenges, and any technical requirements..."
                      className="min-h-[150px] bg-background border-border/80 focus:border-primary focus:ring-primary shadow-sm resize-y"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-border/50">
                    <p className="text-xs text-muted max-w-xs">
                      Submitting this form will securely open WhatsApp to send your enquiry directly to our team.
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white shadow-md text-sm font-semibold"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Submit Project Enquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
