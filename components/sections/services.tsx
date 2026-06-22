"use client";

import {
  Globe,
  Building2,
  Smartphone,
  ShoppingCart,
  Plug,
  Server,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { services } from "@/lib/data";
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Building2,
  Smartphone,
  ShoppingCart,
  Plug,
  Server,
  TrendingUp,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white" aria-label="Services">
      <div className="container-narrow">
        <SectionHeader
          label="Services"
          title="End-to-End Digital Product Engineering"
          description="From concept to scale, we deliver comprehensive engineering services tailored to your business needs."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <StaggerItem key={service.id}>
                <Card className="group h-full hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 border-border/80">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
