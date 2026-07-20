"use client";

import { SectionHeader } from "@/components/ui/animated-section";

export function WhatWeDoSection() {
  const buildItems = [
    "Business Websites",
    "Mobile Applications",
    "SaaS Platforms",
    "Internal Business Software",
    "Customer Portals",
    "AI-powered Applications",
  ];
  const automateItems = [
    "CRM",
    "Proposal Generation",
    "Quotations",
    "Invoices",
    "Workflows",
    "WhatsApp",
    "Email",
    "Google Workspace",
    "AI Agents",
  ];
  const growItems = [
    "Google Ads",
    "Meta Ads",
    "SEO",
    "ASO",
    "Analytics",
    "Conversion Tracking",
    "Performance Optimization",
    "Growth Strategy",
  ];

  return (
    <section id="services" className="section-padding bg-background" aria-label="What We Actually Do">
      <div className="container-narrow">
        <SectionHeader
          label="What We Actually Do"
          title="How We Deliver Value"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Build Card */}
          <div className="card-premium h-full flex flex-col p-6 sm:p-8 group gradient-border-top">
            <h3 className="text-lg font-bold text-primary mb-4">Build</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted flex-1">
              {buildItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Automate Card */}
          <div className="card-premium h-full flex flex-col p-6 sm:p-8 group gradient-border-top">
            <h3 className="text-lg font-bold text-primary mb-4">Automate</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted flex-1">
              {automateItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Grow Card */}
          <div className="card-premium h-full flex flex-col p-6 sm:p-8 group gradient-border-top">
            <h3 className="text-lg font-bold text-primary mb-4">Grow</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted flex-1">
              {growItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
