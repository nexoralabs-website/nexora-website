"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  CreditCard,
  Layout,
  Smartphone,
  Cloud,
  Wrench,
  Shield,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { technologyCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  Code2,
  Server,
  CreditCard,
  Layout,
  Smartphone,
  Cloud,
  Wrench,
  Shield,
  Layers,
};

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState(technologyCategories[0].id);
  const selected = technologyCategories.find((c) => c.id === activeCategory) ?? technologyCategories[0];
  const Icon = categoryIcons[selected.icon] ?? Code2;

  return (
    <section id="technologies" className="section-padding bg-white" aria-label="Technologies">
      <div className="container-narrow">
        <SectionHeader
          label="Technologies"
          title="Production Stack We Ship With"
          description="Interactive categories from the technologies our team uses in real client systems."
        />

        <StaggerContainer className="mt-12 flex flex-wrap gap-2">
          {technologyCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.icon] ?? Code2;
            const isActive = category.id === activeCategory;

            return (
              <StaggerItem key={category.id}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-border bg-background text-muted hover:border-accent/30 hover:text-foreground hover:-translate-y-0.5"
                  )}
                  aria-pressed={isActive}
                >
                  <CategoryIcon className="h-3.5 w-3.5" />
                  {category.name}
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{selected.name}</h3>
                  <p className="text-sm text-muted">{selected.items.length} capabilities</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {selected.items.map((tech, index) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-4 py-3.5 transition-all duration-300 hover:border-accent/30 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/70 transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
