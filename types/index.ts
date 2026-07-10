export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  accordionDetails?: string[];
  previewType?: "proposal" | "quotation" | "contract" | "invoice";
  showTechStack?: boolean;
}

export interface Technology {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  categoryId: string;
  logo: string;
  iconType: 'image' | 'lucide';
  creator: string;
  releaseYear: number;
  description: string;
  shortDescription?: string;
  keywords?: string[];
  aliases?: string[];
  whyWeUseIt: string[];
  bestFor: string[];
  officialWebsite: string;
  documentationUrl: string;
  githubUrl?: string;
  relatedTechnologies: string[];
  experienceLevel: 'Primary' | 'Core' | 'Advanced' | 'Supporting' | 'Learning';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  usedInProjects: string[];
  isCore: boolean;
  status: 'Stable' | 'Beta' | 'Deprecated';
  popularity: number;
  color: string;
  whyItMatters?: string;
  usedIn?: string[];
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  displayOrder: number;
  gradient: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
}
