"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
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
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  User,
  Calendar,
  Tag,
  Star,
  MousePointer2,
} from "lucide-react";
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
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ overview: true });
  const panelRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const toggleSection = (key: string) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  // Keyboard: ESC, ⌘K, arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinnedTech(null);
        setFocusedIndex(-1);
        return;
      }
      // ⌘K or Ctrl+K focuses search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
        return;
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
        {/* Hero */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
            <Sparkles className="h-3 w-3" /> Engineering Stack
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Engineering Capabilities
          </h2>
          <p className="mt-4 text-base text-muted leading-relaxed max-w-2xl">
            The technologies, frameworks and engineering practices we use to build scalable, reliable and production-ready digital products.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { value: "58+", label: "Technologies", icon: <LayoutGrid className="h-4 w-4" /> },
            { value: "11+", label: "Categories", icon: <Layers className="h-4 w-4" /> },
            { value: "100%", label: "Performance First", icon: <Zap className="h-4 w-4" /> },
            { value: "∞", label: "Production Ready", icon: <ShieldCheck className="h-4 w-4" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col gap-2 rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5"
            >
              <span className="text-primary/70 transition-colors group-hover:text-primary">{stat.icon}</span>
              <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted font-medium leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mt-10 max-w-lg">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted/60" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search technologies, frameworks, tools or use cases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 w-full rounded-2xl border border-border bg-white pl-11 pr-24 text-sm outline-none shadow-sm transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:shadow-md"
            aria-label="Search Technologies"
          />
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center gap-2">
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="rounded-lg p-1 text-muted/60 hover:bg-slate-100 hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : (
              <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-border bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-muted/70">
                ⌘K
              </kbd>
            )}
          </div>
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
          <div className="lg:col-span-8" ref={gridRef}>
            <AnimatePresence mode="popLayout">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" role="grid">
                {filteredTechnologies.map((tech, index) => {
                  const isPinned = pinnedTech?.id === tech.id;
                  const category = categories.find((c) => c.id === tech.categoryId);

                  return (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className={cn(
                        "group relative flex flex-col justify-between rounded-2xl border bg-white p-5 cursor-pointer outline-none",
                        "transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-1",
                        isPinned
                          ? "border-primary ring-1 ring-primary/20 shadow-md -translate-y-1"
                          : "border-border/80 hover:border-primary/60 hover:shadow-md hover:-translate-y-1.5"
                      )}
                      onClick={() => { setPinnedTech(tech); setOpenSections({ overview: true }); }}
                      onMouseEnter={() => { if (!pinnedTech) setHoveredTech(tech); }}
                      onMouseLeave={() => { if (!pinnedTech) setHoveredTech(null); }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setPinnedTech(tech);
                          setOpenSections({ overview: true });
                        }
                        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                          e.preventDefault();
                          const next = gridRef.current?.querySelectorAll<HTMLElement>("[role=gridcell]");
                          if (next) next[Math.min(index + 1, next.length - 1)]?.focus();
                        }
                        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                          e.preventDefault();
                          const prev = gridRef.current?.querySelectorAll<HTMLElement>("[role=gridcell]");
                          if (prev) prev[Math.max(index - 1, 0)]?.focus();
                        }
                      }}
                      tabIndex={0}
                      role="gridcell"
                      aria-label={`${tech.name} — ${tech.experienceLevel}. Press Enter to view details.`}
                      aria-pressed={isPinned}
                    >
                      {/* Logo + Core badge */}
                      <div>
                        <div className="flex items-start justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 p-3 transition-all duration-300 group-hover:bg-primary/5 group-hover:scale-105">
                            <TechLogo tech={tech} className="h-full w-full text-slate-600 transition-colors group-hover:text-primary" />
                          </div>
                          {tech.isCore && (
                            <span className="rounded-full bg-lime-50 px-2 py-0.5 text-[10px] font-semibold text-lime-700 border border-lime-100">
                              Core
                            </span>
                          )}
                        </div>

                        <h4 className="mt-4 font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {tech.name}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-xs text-muted/75 leading-relaxed">
                          {tech.description}
                        </p>
                      </div>

                      {/* Footer row */}
                      <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3">
                        <span className={cn(
                          "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                          getExperienceBadgeStyles(tech.experienceLevel)
                        )}>
                          {tech.experienceLevel}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">
                          {category ? category.name : ""}
                        </span>
                      </div>

                      {/* Hover hint */}
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary">
                          <MousePointer2 className="h-2.5 w-2.5" /> Click to explore
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredTechnologies.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-dashed border-border bg-slate-50 mb-5">
                  <Search className="h-8 w-8 text-muted/40" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">No matching technologies found.</h4>
                <p className="mt-2 text-sm text-muted max-w-xs leading-relaxed">
                  Try another keyword or browse by category using the filters above.
                </p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted hover:border-primary hover:text-primary transition-all"
                >
                  <X className="h-3.5 w-3.5" /> Clear filters
                </button>
              </motion.div>
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
                    className="space-y-0 divide-y divide-slate-100"
                  >
                    {/* ── Panel Header ── */}
                    <div className="relative pb-5">
                      {pinnedTech && (
                        <button
                          onClick={() => setPinnedTech(null)}
                          className="absolute -top-1 -right-1 rounded-full p-1.5 text-muted hover:bg-slate-100 hover:text-foreground transition-colors"
                          aria-label="Close panel"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 p-3 flex-shrink-0">
                          <TechLogo tech={selectedTech} className="h-full w-full text-slate-700" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-bold text-foreground leading-tight">{selectedTech.name}</h3>
                          <p className="text-xs text-muted font-medium mt-0.5 truncate">{selectedTech.fullName}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold", getExperienceBadgeStyles(selectedTech.experienceLevel))}>{selectedTech.experienceLevel}</span>
                            <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold", getDifficultyBadgeStyles(selectedTech.difficulty))}>{selectedTech.difficulty}</span>
                            <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold", getStatusBadgeStyles(selectedTech.status))}>{selectedTech.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Accordion: Overview ── */}
                    <AccordionSection title="Overview" sectionKey="overview" openSections={openSections} toggle={toggleSection}>
                      <p className="text-sm text-muted/90 leading-relaxed">{selectedTech.description}</p>
                      {/* Metadata cards with icons */}
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {[
                          { icon: <User className="h-3.5 w-3.5" />, label: "Created by", value: selectedTech.creator },
                          { icon: <Calendar className="h-3.5 w-3.5" />, label: "Released", value: String(selectedTech.releaseYear) },
                          { icon: <Tag className="h-3.5 w-3.5" />, label: "Category", value: categories.find(c => c.id === selectedTech.categoryId)?.name ?? "" },
                          { icon: <Star className="h-3.5 w-3.5" />, label: "Popularity", value: `${selectedTech.popularity}%` },
                        ].map(meta => (
                          <div key={meta.label} className="flex items-start gap-2 rounded-xl bg-slate-50 border border-slate-100 p-2.5">
                            <span className="text-primary/70 mt-0.5">{meta.icon}</span>
                            <div>
                              <p className="text-[10px] text-slate-400 font-medium">{meta.label}</p>
                              <p className="text-xs font-semibold text-foreground mt-0.5">{meta.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Popularity bar */}
                      <div className="mt-3 space-y-1">
                        <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-700 ease-out" style={{ width: `${selectedTech.popularity}%` }} />
                        </div>
                      </div>
                    </AccordionSection>

                    {/* ── Accordion: Why We Use It ── */}
                    <AccordionSection title="Why Nexora Labs Chose This" sectionKey="why" openSections={openSections} toggle={toggleSection} accent>
                      <ul className="space-y-2">
                        {selectedTech.whyWeUseIt.map((reason, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                            <Sparkles className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                      {/* Why It Matters (business context) */}
                      {selectedTech.whyItMatters && (
                        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-3">
                          <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-1">Why It Matters for Businesses</p>
                          <p className="text-xs text-blue-900/80 leading-relaxed">{selectedTech.whyItMatters}</p>
                        </div>
                      )}
                    </AccordionSection>

                    {/* ── Accordion: Use Cases ── */}
                    <AccordionSection title="Use Cases" sectionKey="usecases" openSections={openSections} toggle={toggleSection}>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTech.bestFor.map((item, i) => (
                          <span key={i} className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs text-slate-700 font-medium border border-slate-100">
                            {item}
                          </span>
                        ))}
                      </div>
                      {selectedTech.usedInProjects.length > 0 && (
                        <>
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-3 mb-1.5">Used in Our Projects</p>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedTech.usedInProjects.map((proj, i) => (
                              <span key={i} className="rounded-lg bg-primary/5 border border-primary/10 px-2.5 py-1 text-xs text-primary/80 font-medium">
                                {proj}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </AccordionSection>

                    {/* ── Accordion: Related Technologies ── */}
                    {selectedTech.relatedTechnologies.length > 0 && (
                      <AccordionSection title="Works Well With" sectionKey="related" openSections={openSections} toggle={toggleSection}>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedTech.relatedTechnologies.map((relatedId) => {
                            const related = technologies.find((t) => t.id === relatedId);
                            if (!related) return null;
                            return (
                              <button
                                key={relatedId}
                                onClick={() => handleSelectRelated(relatedId)}
                                className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                              >
                                {related.name}
                              </button>
                            );
                          })}
                        </div>
                      </AccordionSection>
                    )}

                    {/* ── Accordion: Resources ── */}
                    <AccordionSection title="Resources" sectionKey="resources" openSections={openSections} toggle={toggleSection}>
                      <div className="flex flex-col gap-2">
                        <a
                          href={selectedTech.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-primary/90 hover:shadow-md transition-all duration-200"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Official Website
                        </a>
                        <a
                          href={selectedTech.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-muted hover:border-primary hover:text-primary hover:bg-slate-50 transition-all duration-200"
                        >
                          <BookOpen className="h-3.5 w-3.5" /> Documentation
                        </a>
                        {selectedTech.githubUrl && (
                          <a
                            href={selectedTech.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-muted hover:border-primary hover:text-primary hover:bg-slate-50 transition-all duration-200"
                          >
                            <Github className="h-3.5 w-3.5" /> GitHub Repository
                          </a>
                        )}
                      </div>
                    </AccordionSection>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary mb-4">
                      <Sparkles className="h-7 w-7 animate-pulse" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">Engineering Stack Details</h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed max-w-[200px]">
                      Hover a card to preview, or click to pin the details panel.
                    </p>
                    <kbd className="mt-4 inline-flex items-center gap-1 rounded-md border border-border bg-slate-50 px-2 py-1 text-[10px] font-medium text-muted">
                      ← → Arrow keys navigate cards
                    </kbd>
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
