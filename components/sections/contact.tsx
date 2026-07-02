"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";
import { SectionHeader, AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { siteConfig } from "@/lib/constants";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const WHATSAPP_BASE = "https://wa.me/917339559072";

function buildWhatsAppUrl(data: ContactFormValues): string {
  const lines = [
    `Hello Nexora Labs, I want to discuss a project.`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    `Project: ${data.service}`,
    data.budget ? `Budget: ${data.budget}` : null,
    `Message: ${data.message}`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(lines)}`;
}

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message Us",
    href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello Nexora Labs, I want to discuss a project.")}`,
    external: true,
    highlight: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    external: false,
    highlight: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    external: false,
    highlight: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: `${siteConfig.address.city}, ${siteConfig.address.state}, ${siteConfig.address.country}`,
    href: "#map",
    external: false,
    highlight: false,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat, 9 AM – 7 PM IST",
    href: null,
    external: false,
    highlight: false,
  },
];

export function ContactSection() {
  const {
    register,
    handleSubmit,
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
    const url = buildWhatsAppUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-padding bg-white" aria-label="Contact">
      <div className="container-narrow">
        <SectionHeader
          label="Contact"
          title="Let's Talk About Your Project"
          description="Send us a quick message on WhatsApp."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Left column — contact methods + quick CTA */}
          <AnimatedSection className="lg:col-span-2 space-y-4">
            {contactMethods.map(({ icon: Icon, label, value, href, external, highlight }) => {
              const inner = (
                <>
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                      highlight
                        ? "bg-[#25D366]/10 text-[#25D366]"
                        : "bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-medium text-foreground truncate">{value}</p>
                  </div>
                </>
              );

              if (!href) {
                return (
                  <div
                    key={label}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl border p-4",
                      "border-border"
                    )}
                  >
                    {inner}
                  </div>
                );
              }

              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border p-4 transition-all hover:shadow-sm group",
                    highlight
                      ? "border-[#25D366]/40 bg-[#25D366]/5 hover:border-[#25D366]/60"
                      : "border-border hover:border-accent/30"
                  )}
                >
                  {inner}
                </a>
              );
            })}

            {/* Primary WhatsApp CTA card */}
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-sm font-semibold text-foreground mb-1">Quick Enquiry</p>
              <p className="text-xs text-muted mb-4 leading-relaxed">
                Prefer to chat? We typically respond on WhatsApp within minutes.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello Nexora Labs, I want to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#22be5c]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Map */}
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

          {/* Right column — form that sends via WhatsApp */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-background p-6 sm:p-8 space-y-5"
              noValidate
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <p className="text-xs text-muted">
                  Submitting this form will open WhatsApp with your details pre-filled.
                </p>
              </div>

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
                  <Label htmlFor="service">Project Type *</Label>
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
                    <option value="Less than ₹5L">Less than ₹5L</option>
                    <option value="₹5L – ₹15L">₹5L – ₹15L</option>
                    <option value="₹15L – ₹50L">₹15L – ₹50L</option>
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

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#22be5c] text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Send via WhatsApp
              </Button>

              <p className="text-xs text-muted">
                Clicking the button opens WhatsApp with your message pre-filled. No data is stored.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
