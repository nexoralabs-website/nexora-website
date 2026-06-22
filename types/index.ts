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
  duration: string;
}

export interface Technology {
  id: string;
  name: string;
}

export interface TechnologyCategory {
  id: string;
  name: string;
  icon: string;
  items: Technology[];
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
