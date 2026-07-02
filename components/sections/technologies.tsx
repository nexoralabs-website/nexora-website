"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ExternalLink,
  BookOpen,
  Github,
  Zap,
  Code2,
  Server,
  Cloud,
  Wrench,
  Layers,
  Database,
  Plug,
  Palette,
  Lock,
  Globe,
  Webhook,
  Cpu,
  ShieldCheck,
  Network,
  Gauge,
  Package,
  FileText,
  UploadCloud,
  Image as ImageIcon,
  Bug,
  Activity,
  Shield,
  FileCode2,
  Sparkles,
  HelpCircle,
  LayoutGrid
} from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { categories } from "@/lib/categories";
import { technologies } from "@/lib/technologies";
import { cn } from "@/lib/utils";
import type { Technology } from "@/types";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  Cloud,
  Wrench,
  Layers,
  Database,
  Search,
  Plug,
  Palette,
  Lock,
};

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  webhook: Webhook,
  cpu: Cpu,
  "shield-check": ShieldCheck,
  network: Network,
  gauge: Gauge,
  package: Package,
  "file-text": FileText,
  "upload-cloud": UploadCloud,
  image: ImageIcon,
  bug: Bug,
  activity: Activity,
  shield: Shield,
  layout: FileCode2,
  palette: Palette,
  lock: Lock,
  zap: Zap,
};

const getExperienceBadgeStyles = (level: Technology["experienceLevel"]) => {
  switch (level) {
    case "Primary":
      return "bg-lime-50 text-lime-700 border-lime-200/60";
    case "Core":
      return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
    case "Advanced":
      return "bg-blue-50 text-blue-700 border-blue-200/60";
    case "Supporting":
      return "bg-slate-50 text-slate-700 border-slate-200/60";
    case "Learning":
      return "bg-purple-50 text-purple-700 border-purple-200/60";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200/60";
  }
};

const getDifficultyBadgeStyles = (diff: Technology["difficulty"]) => {
  switch (diff) {
    case "Beginner":
      return "bg-green-50 text-green-700 border-green-200/50";
    case "Intermediate":
      return "bg-amber-50 text-amber-700 border-amber-200/50";
    case "Advanced":
      return "bg-purple-50 text-purple-700 border-purple-200/50";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200/50";
  }
};

const getStatusBadgeStyles = (status: Technology["status"]) => {
  switch (status) {
    case "Stable":
      return "bg-emerald-50 text-emerald-700 border-emerald-100";
    case "Beta":
      return "bg-amber-50 text-amber-700 border-amber-100";
    case "Deprecated":
      return "bg-red-50 text-red-700 border-red-100";
    default:
      return "bg-slate-50 text-slate-700 border-slate-100";
  }
};

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null);
  const [pinnedTech, setPinnedTech] = useState<Technology | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Esc key closes/unpins the details panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinnedTech(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter categories
  const categoriesList = useMemo(() => {
    return categories.sort((a, b) => a.displayOrder - b.displayOrder);
  }, []);

  // Dynamic Technology Count calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: technologies.length };
    categories.forEach((cat) => {
      counts[cat.id] = technologies.filter((t) => t.categoryId === cat.id).length;
    });
    return counts;
  }, []);

  // Filtered technologies based on Category & Search Query
  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => {
      const category = categories.find((c) => c.id === tech.categoryId);
      const categoryName = category ? category.name.toLowerCase() : "";
      const query = searchQuery.toLowerCase().trim();

      if (!query) {
        if (activeCategory === "all") return true;
        return tech.categoryId === activeCategory;
      }

      const matchesQuery =
        tech.name.toLowerCase().includes(query) ||
        tech.fullName.toLowerCase().includes(query) ||
        tech.description.toLowerCase().includes(query) ||
        tech.creator.toLowerCase().includes(query) ||
        categoryName.includes(query) ||
        tech.bestFor.some((bf) => bf.toLowerCase().includes(query)) ||
        tech.whyWeUseIt.some((w) => w.toLowerCase().includes(query)) ||
        tech.experienceLevel.toLowerCase().includes(query);

      if (activeCategory === "all") return matchesQuery;
      return tech.categoryId === activeCategory && matchesQuery;
    });
  }, [searchQuery, activeCategory]);

  const selectedTech = pinnedTech || hoveredTech || null;

  // Handles clicking a related technology in the details panel
  const handleSelectRelated = (relatedId: string) => {
    const target = technologies.find((t) => t.id === relatedId);
    if (target) {
      setPinnedTech(target);
      // Auto scroll details panel to top on change
      if (panelRef.current) {
        panelRef.current.scrollTop = 0;
      }
    }
  };

  // Safe Image/Lucide logo rendering
  const TechLogo = ({ tech, className }: { tech: Technology; className?: string }) => {
    const [imgError, setImgError] = useState(false);

    if (tech.iconType === "lucide" || imgError) {
      const IconComponent = techIcons[tech.logo] || techIcons[tech.id] || HelpCircle;
      return <IconComponent className={className} />;
    }

    return (
      <img
        src={tech.logo}
        alt={`${tech.name} logo`}
        className={cn("object-contain", className)}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  };

  return (
    <section id="technologies" className="section-padding bg-white" aria-label="Technologies">
      <div className="container-narrow">
        <SectionHeader
          label="Technologies"
          title="Engineering Capabilities"
          description="The technologies, frameworks, tools and architectural patterns we use to build scalable digital products."
        />

        {/* Search Bar */}
        <div className="relative mt-12 max-w-md">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted/65" />
          <input
            type="text"
            placeholder="Search technologies, tags, use cases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary/20"
            aria-label="Search Technologies"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-1 text-muted/60 hover:bg-slate-100 hover:text-foreground"
              aria-label="Clear Search"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>

        {/* Dynamic Category Filters */}
        <StaggerContainer className="mt-6 flex flex-wrap gap-2">
          <StaggerItem>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === "all"
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-border bg-background text-muted hover:border-accent/30 hover:text-foreground hover:-translate-y-0.5"
              )}
              aria-pressed={activeCategory === "all"}
            >
              All ({categoryCounts.all})
            </button>
          </StaggerItem>
          {categoriesList.map((category) => {
            const CategoryIcon = categoryIcons[category.icon] || Code2;
            const isActive = category.id === activeCategory;
            const count = categoryCounts[category.id] || 0;

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
                  {category.name} ({count})
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Split Grid Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Main List Column */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" role="grid">
              {filteredTechnologies.map((tech) => {
                const isPinned = pinnedTech?.id === tech.id;
                const category = categories.find((c) => c.id === tech.categoryId);

                return (
                  <motion.div
                    key={tech.id}
                    layoutId={`tech-card-${tech.id}`}
                    className={cn(
                      "group relative flex flex-col justify-between rounded-2xl border bg-white p-5 cursor-pointer outline-none transition-all duration-300",
                      isPinned
                        ? "border-primary ring-1 ring-primary/20 shadow-sm"
                        : "border-border/80 hover:border-primary hover:shadow-sm hover:-translate-y-1 hover:scale-[1.02]"
                    )}
                    onClick={() => setPinnedTech(tech)}
                    onMouseEnter={() => {
                      if (!pinnedTech) setHoveredTech(tech);
                    }}
                    onMouseLeave={() => {
                      if (!pinnedTech) setHoveredTech(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setPinnedTech(tech);
                      }
                    }}
                    tabIndex={0}
                    role="gridcell"
                    aria-label={`View details for ${tech.name}`}
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2.5 transition-colors group-hover:bg-primary/5">
                          <TechLogo tech={tech} className="h-full w-full text-slate-700 transition-colors group-hover:text-primary" />
                        </div>
                        {tech.isCore && (
                          <span className="rounded-full bg-lime-50 px-2 py-0.5 text-[10px] font-semibold text-lime-700 border border-lime-100">
                            Core
                          </span>
                        )}
                      </div>

                      <h4 className="mt-4 font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-xs text-muted/80 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3">
                      <span className="text-[11px] font-medium text-slate-500">
                        {category ? category.name : ""}
                      </span>
                      <span className="text-[10px] font-semibold text-muted/60">
                        {tech.experienceLevel}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredTechnologies.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <LayoutGrid className="h-10 w-10 text-muted/40 animate-pulse" />
                <h4 className="mt-4 font-display text-base font-medium text-foreground">No Technologies Found</h4>
                <p className="mt-1 text-sm text-muted">Try updating your filters or search query.</p>
              </div>
            )}
          </div>

          {/* Sticky Details Sidebar Column (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 max-h-[82vh] overflow-y-auto rounded-3xl border border-border bg-white p-6 shadow-sm" ref={panelRef}>
              <AnimatePresence mode="wait">
                {selectedTech ? (
                  <motion.div
                    key={selectedTech.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Header */}
                    <div className="relative border-b border-border pb-5">
                      {pinnedTech && (
                        <button
                          onClick={() => setPinnedTech(null)}
                          className="absolute -top-1 -right-1 rounded-full p-1.5 text-muted hover:bg-slate-100 hover:text-foreground transition-colors"
                          aria-label="Unpin Details"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}

                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 p-3">
                          <TechLogo tech={selectedTech} className="h-full w-full text-slate-700" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-foreground">
                            {selectedTech.name}
                          </h3>
                          <p className="text-xs text-muted font-medium">
                            {selectedTech.fullName}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-muted/90 leading-relaxed">
                        {selectedTech.description}
                      </p>
                    </div>

                    {/* Meta Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", getExperienceBadgeStyles(selectedTech.experienceLevel))}>
                        {selectedTech.experienceLevel}
                      </span>
                      <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", getDifficultyBadgeStyles(selectedTech.difficulty))}>
                        {selectedTech.difficulty}
                      </span>
                      <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", getStatusBadgeStyles(selectedTech.status))}>
                        {selectedTech.status}
                      </span>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 border-y border-slate-50 py-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-medium">Created By</span>
                        <p className="font-semibold text-foreground mt-0.5">{selectedTech.creator}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Release Year</span>
                        <p className="font-semibold text-foreground mt-0.5">{selectedTech.releaseYear}</p>
                      </div>
                    </div>

                    {/* Why We Use It */}
                    <div className="rounded-2xl border border-lime-100 bg-lime-50/50 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-lime-800 font-semibold text-xs">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Why Nexora Labs Chose This</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700 list-inside list-disc pl-1 leading-relaxed">
                        {selectedTech.whyWeUseIt.map((reason, i) => (
                          <li key={i}>{reason}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Best For</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTech.bestFor.map((item, i) => (
                          <span key={i} className="rounded-lg bg-slate-50 px-2 py-1 text-xs text-slate-700 font-medium border border-slate-100">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Used In Projects */}
                    {selectedTech.usedInProjects.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Used In</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedTech.usedInProjects.map((proj, i) => (
                            <span key={i} className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs text-slate-600 border border-slate-100/60 font-medium">
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popularity */}
                    <div className="space-y-1.5 border-t border-slate-50 pt-4">
                      <div className="flex justify-between text-xs text-slate-400 font-medium">
                        <span>Popularity Index</span>
                        <span className="font-semibold text-foreground">{selectedTech.popularity}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500 ease-out"
                          style={{ width: `${selectedTech.popularity}%` }}
                        />
                      </div>
                    </div>

                    {/* Related Technologies */}
                    {selectedTech.relatedTechnologies.length > 0 && (
                      <div className="space-y-2 border-t border-slate-50 pt-4">
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Works Well With</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedTech.relatedTechnologies.map((relatedId) => {
                            const related = technologies.find((t) => t.id === relatedId);
                            if (!related) return null;
                            return (
                              <button
                                key={relatedId}
                                onClick={() => handleSelectRelated(relatedId)}
                                className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium text-muted hover:border-primary hover:text-primary transition-all cursor-pointer"
                              >
                                {related.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Links / Resources */}
                    <div className="flex flex-col gap-2 border-t border-slate-50 pt-4">
                      <div className="flex gap-2">
                        <a
                          href={selectedTech.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-primary/95 hover:shadow-md transition-all duration-300"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Website
                        </a>
                        <a
                          href={selectedTech.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-muted hover:border-primary hover:text-primary hover:bg-slate-50 transition-all duration-300"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          Documentation
                        </a>
                      </div>
                      {selectedTech.githubUrl && (
                        <a
                          href={selectedTech.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-muted hover:border-primary hover:text-primary hover:bg-slate-50 transition-all duration-300"
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub Repository
                        </a>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-20">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary mb-4 animate-bounce">
                      <Sparkles className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      Engineering Stack Details
                    </h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed max-w-[200px]">
                      Hover a technology to preview details, or click a card to lock the details panel.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet Overlay & Drawer */}
      <AnimatePresence>
        {pinnedTech && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPinnedTech(null)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />

            {/* Bottom Sheet Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label={`${pinnedTech.name} details`}
            >
              {/* Drag Handle Indicator */}
              <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-200" onClick={() => setPinnedTech(null)} />

              <div className="relative pb-5">
                <button
                  onClick={() => setPinnedTech(null)}
                  className="absolute -top-2 right-0 rounded-full p-2 bg-slate-50 text-muted hover:bg-slate-100 hover:text-foreground transition-colors"
                  aria-label="Close panel"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 p-3">
                    <TechLogo tech={pinnedTech} className="h-full w-full text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {pinnedTech.name}
                    </h3>
                    <p className="text-xs text-muted font-medium">
                      {pinnedTech.fullName}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted/90 leading-relaxed">
                  {pinnedTech.description}
                </p>
              </div>

              {/* Meta Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", getExperienceBadgeStyles(pinnedTech.experienceLevel))}>
                  {pinnedTech.experienceLevel}
                </span>
                <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", getDifficultyBadgeStyles(pinnedTech.difficulty))}>
                  {pinnedTech.difficulty}
                </span>
                <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", getStatusBadgeStyles(pinnedTech.status))}>
                  {pinnedTech.status}
                </span>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 border-y border-slate-50 py-4 text-xs mb-5">
                <div>
                  <span className="text-slate-400 font-medium">Created By</span>
                  <p className="font-semibold text-foreground mt-0.5">{pinnedTech.creator}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">Release Year</span>
                  <p className="font-semibold text-foreground mt-0.5">{pinnedTech.releaseYear}</p>
                </div>
              </div>

              {/* Why We Use It */}
              <div className="rounded-2xl border border-lime-100 bg-lime-50/50 p-4 space-y-3 mb-5">
                <div className="flex items-center gap-2 text-lime-800 font-semibold text-xs">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Why Nexora Labs Chose This</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700 list-inside list-disc pl-1 leading-relaxed">
                  {pinnedTech.whyWeUseIt.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="space-y-2 mb-5">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Best For</h4>
                <div className="flex flex-wrap gap-1.5">
                  {pinnedTech.bestFor.map((item, i) => (
                    <span key={i} className="rounded-lg bg-slate-50 px-2 py-1 text-xs text-slate-700 font-medium border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Used In Projects */}
              {pinnedTech.usedInProjects.length > 0 && (
                <div className="space-y-2 mb-5">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Used In</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {pinnedTech.usedInProjects.map((proj, i) => (
                      <span key={i} className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs text-slate-600 border border-slate-100/60 font-medium">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Popularity */}
              <div className="space-y-1.5 border-t border-slate-50 pt-4 mb-5">
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>Popularity Index</span>
                  <span className="font-semibold text-foreground">{pinnedTech.popularity}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${pinnedTech.popularity}%` }}
                  />
                </div>
              </div>

              {/* Related Technologies */}
              {pinnedTech.relatedTechnologies.length > 0 && (
                <div className="space-y-2 border-t border-slate-50 pt-4 mb-5">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Works Well With</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {pinnedTech.relatedTechnologies.map((relatedId) => {
                      const related = technologies.find((t) => t.id === relatedId);
                      if (!related) return null;
                      return (
                        <button
                          key={relatedId}
                          onClick={() => handleSelectRelated(relatedId)}
                          className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium text-muted hover:border-primary hover:text-primary transition-all"
                        >
                          {related.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Links / Resources */}
              <div className="flex flex-col gap-2 border-t border-slate-50 pt-4">
                <div className="flex gap-2">
                  <a
                    href={pinnedTech.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-sm"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Website
                  </a>
                  <a
                    href={pinnedTech.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-muted"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    Documentation
                  </a>
                </div>
                {pinnedTech.githubUrl && (
                  <a
                    href={pinnedTech.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-muted"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Repository
                  </a>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
