"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Mail, MessageCircle, Send, CheckCircle2, Phone, MapPin } from "lucide-react";
import { SectionHeader, AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { siteConfig } from "@/lib/constants";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message Us",
    href: siteConfig.links.whatsapp,
  },
  {
    icon: MapPin,
    label: "Location",
    value: `${siteConfig.address.city}, ${siteConfig.address.state}, ${siteConfig.address.country}`,
    href: "#map",
  },
];

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    startTransition(async () => {
      const result = await submitContactForm(data);
      setSubmitResult(result);
      if (result.success) {
        reset();
      }
    });
  };

  return (
    <section id="contact" className="section-padding bg-white" aria-label="Contact">
      <div className="container-narrow">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Great"
          description="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2 space-y-6">
            {contactMethods.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-border p-4 transition-all hover:border-accent/30 hover:shadow-sm group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </a>
            ))}

            {/* Quick Enquiry card */}
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-sm font-semibold text-foreground mb-1">Quick Enquiry</p>
              <p className="text-xs text-muted mb-4 leading-relaxed">
                Prefer to chat? Reach us directly on WhatsApp — we typically respond within minutes.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#22be5c]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Enquiry
                </a>
              </div>
            </div>

            <div id="map" className="rounded-2xl border border-border overflow-hidden h-48 bg-background">
              <iframe
                title="Nexora Labs Office Location"
                src="https://maps.google.com/maps?q=Dindigul+Tamil+Nadu+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-background p-6 sm:p-8 space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" {...register("company")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" {...register("phone")} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="service">Service *</Label>
                  <select
                    id="service"
                    className={cn(
                      "flex h-11 w-full rounded-xl border border-border bg-white px-4 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1",
                      errors.service && "border-red-500"
                    )}
                    aria-invalid={!!errors.service}
                    {...register("service")}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500" role="alert">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <select
                    id="budget"
                    className="flex h-11 w-full rounded-xl border border-border bg-white px-4 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                    {...register("budget")}
                  >
                    <option value="">Select budget</option>
                    <option value="< ₹5L">Less than ₹5L</option>
                    <option value="₹5L - ₹15L">₹5L - ₹15L</option>
                    <option value="₹15L - ₹50L">₹15L - ₹50L</option>
                    <option value="₹50L+">₹50L+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-red-500" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitResult && (
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-xl p-4 text-sm",
                    submitResult.success
                      ? "bg-accent/10 text-foreground"
                      : "bg-red-50 text-red-700"
                  )}
                  role="alert"
                >
                  {submitResult.success && <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />}
                  {submitResult.message}
                </div>
              )}

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isPending}
              >
                {isPending ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
