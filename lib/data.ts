import type { Service, ProcessStep, TechnologyCategory, Project, Testimonial, FAQ, WhyUsItem, CoreValue } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance web applications built with modern frameworks and best practices.",
    icon: "Globe",
    features: ["Responsive design", "SSR & SSG", "Performance optimized", "SEO ready"],
  },
  {
    id: "custom-software",
    title: "Custom Business Software",
    description: "Tailored software solutions that streamline operations and drive business growth.",
    icon: "Building2",
    features: ["Workflow automation", "CRM & ERP systems", "Internal tools", "Legacy modernization"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications with seamless user experiences.",
    icon: "Smartphone",
    features: ["iOS & Android", "Cross-platform", "Offline support", "Push notifications"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Scalable online stores with secure payments and inventory management.",
    icon: "ShoppingCart",
    features: ["Payment integration", "Inventory sync", "Analytics dashboard", "Multi-vendor support"],
  },
  {
    id: "api-development",
    title: "API Development",
    description: "Robust REST and GraphQL APIs designed for scalability and developer experience.",
    icon: "Plug",
    features: ["REST & GraphQL", "API documentation", "Rate limiting", "Versioning"],
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    description: "Secure, scalable backend systems that power your digital products.",
    icon: "Server",
    features: ["Microservices", "Database design", "Cloud deployment", "Real-time systems"],
  },
  {
    id: "maintenance",
    title: "Maintenance & Scaling",
    description: "Ongoing support to keep your products running smoothly and growing with demand.",
    icon: "TrendingUp",
    features: ["Performance monitoring", "Security updates", "Feature enhancements", "24/7 support"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery",
    description: "Understand your goals, users, and technical requirements.",
    duration: "Week 1",
  },
  {
    id: "planning",
    step: 2,
    title: "Planning",
    description: "Define architecture, technology choices, and delivery milestones.",
    duration: "Week 2",
  },
  {
    id: "build",
    step: 3,
    title: "Build",
    description: "Develop and iterate quickly with regular checkpoints and feedback.",
    duration: "Weeks 3–8",
  },
  {
    id: "launch",
    step: 4,
    title: "Launch",
    description: "Deploy to production and optimize for real-world performance.",
    duration: "Week 9",
  },
  {
    id: "support",
    step: 5,
    title: "Support",
    description: "Ongoing maintenance, improvements, and feature evolution.",
    duration: "Ongoing",
  },
];

function tech(id: string, name: string) {
  return { id, name };
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "Code2",
    description: "Modern frameworks and libraries for responsive user interfaces.",
    items: [
      tech("nextjs15", "Next.js 15"),
      tech("react19", "React 19"),
      tech("typescript", "TypeScript"),
      tech("javascript", "JavaScript"),
      tech("tailwindcss", "Tailwind CSS"),
      tech("alpinejs", "Alpine.js"),
      tech("blade", "Blade Templates"),
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    description: "Robust server-side technologies for scalable applications.",
    items: [
      tech("laravel12", "Laravel 12"),
      tech("php82", "PHP 8.2+"),
      tech("nodejs", "Node.js"),
      tech("expressjs", "Express.js"),
      tech("rest-apis", "REST APIs"),
      tech("webhooks", "Webhooks"),
      tech("queue-supervisor", "Queue Processing (Supervisor)"),
      tech("auth-system", "Authentication & Authorization"),
      tech("rbac", "RBAC"),
      tech("livewire", "Livewire"),
      tech("server-actions", "Next.js Server Actions"),
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: "Database",
    description: "Reliable data storage and optimization solutions.",
    items: [
      tech("mysql", "MySQL"),
      tech("postgresql", "PostgreSQL"),
      tech("mongodb", "MongoDB"),
      tech("redis", "Redis"),
      tech("neo4j", "Neo4j"),
      tech("schema-design", "Database Schema Design"),
      tech("query-opt", "Query Optimization"),
      tech("inventory-systems", "Order & Inventory Systems"),
    ],
  },
  {
    id: "baas",
    name: "BaaS",
    icon: "Cloud",
    description: "Backend-as-a-Service platforms for rapid development.",
    items: [
      tech("supabase", "Supabase"),
      tech("firebase", "Firebase"),
      tech("appwrite", "Appwrite"),
    ],
  },
  {
    id: "orm",
    name: "ORM / Query",
    icon: "Layers",
    description: "Database abstraction layers for clean data access.",
    items: [
      tech("prisma", "Prisma ORM"),
      tech("drizzle", "Drizzle ORM"),
      tech("eloquent", "Laravel Eloquent ORM"),
    ],
  },
  {
    id: "search",
    name: "Search",
    icon: "Search",
    description: "Fast and relevant search experiences.",
    items: [
      tech("scout", "Laravel Scout"),
      tech("meilisearch", "Meilisearch"),
      tech("algolia", "Algolia"),
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: "Wrench",
    description: "Deployment, monitoring, and optimization tools.",
    items: [
      tech("docker", "Docker"),
      tech("vercel", "Vercel"),
      tech("nginx", "Nginx"),
      tech("apache", "Apache"),
      tech("github", "GitHub"),
      tech("debug", "Production Debugging"),
      tech("monitoring", "Error Monitoring"),
      tech("csp", "Security Headers (CSP)"),
      tech("build-opt", "Build Optimization"),
      tech("vite", "Vite"),
    ],
  },
  {
    id: "integrations",
    name: "Integrations",
    icon: "Plug",
    description: "Third-party services and automation workflows.",
    items: [
      tech("razorpay", "Razorpay"),
      tech("pdf-import", "PDF Catalog Import"),
      tech("bulk-upload", "Bulk Product Upload"),
      tech("image-pipeline", "Image Processing Pipelines"),
      tech("filament", "Admin Panel Automation (Filament)"),
    ],
  },
  {
    id: "ui-libraries",
    name: "UI Libraries",
    icon: "Palette",
    description: "Pre-built components and design systems.",
    items: [
      tech("shadcn", "shadcn/ui"),
      tech("radix", "Radix UI"),
      tech("lucide-react", "Lucide React"),
      tech("framer", "Framer Motion"),
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: "Wrench",
    description: "Development tools and utilities we use daily.",
    items: [
      tech("git", "Git"),
      tech("postman", "Postman"),
      tech("vscode", "VS Code"),
      tech("android-studio", "Android Studio"),
    ],
  },
];

export const heroPillars = [
  "Engineering",
  "Performance",
  "Scalability",
  "Reliability",
] as const;

export const projects: Project[] = [
  {
    id: "saas-platform",
    title: "Enterprise SaaS Platform",
    category: "SaaS",
    problem: "A growing startup needed to migrate from a monolithic legacy system to a scalable multi-tenant SaaS platform.",
    solution: "Built a modern Next.js frontend with a Laravel API backend, implementing multi-tenancy, role-based access, and real-time analytics.",
    technologies: ["Next.js", "Laravel", "MySQL", "Redis", "AWS"],
    result: "Reduced page load times by 65% and enabled onboarding of 500+ enterprise clients within 6 months.",
    metrics: [
      { label: "Performance", value: "+65%" },
      { label: "Clients", value: "500+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "ecommerce-app",
    title: "Multi-Vendor E-Commerce",
    category: "E-Commerce",
    problem: "An established retailer wanted to launch a multi-vendor marketplace with complex inventory and payment workflows.",
    solution: "Developed a full-stack marketplace with Razorpay integration, vendor dashboards, and automated commission tracking.",
    technologies: ["Next.js", "Node.js", "Supabase", "Razorpay"],
    result: "Processed ₹2Cr+ in GMV within the first quarter with 99.99% payment success rate.",
    metrics: [
      { label: "GMV", value: "₹2Cr+" },
      { label: "Vendors", value: "150+" },
      { label: "Success Rate", value: "99.99%" },
    ],
  },
  {
    id: "mobile-fintech",
    title: "FinTech Mobile App",
    category: "Mobile",
    problem: "A fintech company required a secure, compliant mobile app for digital payments and financial management.",
    solution: "Built a Flutter cross-platform app with biometric auth, real-time transactions, and comprehensive audit logging.",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "REST APIs"],
    result: "Achieved 50K+ downloads with 4.8★ rating and zero security incidents in production.",
    metrics: [
      { label: "Downloads", value: "50K+" },
      { label: "Rating", value: "4.8★" },
      { label: "Security", value: "Zero incidents" },
    ],
  },
];

export const whyUsItems: WhyUsItem[] = [
  {
    id: "engineering-first",
    title: "Engineering-First Approach",
    description: "We prioritize clean architecture, maintainable code, and technical excellence in every project.",
    icon: "Code2",
  },
  {
    id: "scalable",
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business—from MVP to enterprise scale without rewrites.",
    icon: "Layers",
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description: "Agile sprints and proven processes ensure rapid time-to-market without compromising quality.",
    icon: "Zap",
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Well-documented, tested codebases that your team can easily maintain and extend.",
    icon: "FileCode2",
  },
  {
    id: "support",
    title: "Long-Term Support",
    description: "We're partners for the long haul—ongoing maintenance, updates, and strategic guidance.",
    icon: "HeartHandshake",
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and direct access to your engineering team.",
    icon: "MessageSquare",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "excellence",
    title: "Excellence",
    description: "We hold ourselves to the highest standards in code quality, design, and delivery.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "Honest communication, fair pricing, and commitments we always keep.",
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Embracing modern technologies and creative solutions to solve complex problems.",
  },
  {
    id: "partnership",
    title: "Partnership",
    description: "Your success is our success—we invest in long-term relationships, not transactions.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Nexora Labs transformed our legacy platform into a modern SaaS product. Their engineering expertise and attention to detail exceeded our expectations.",
    author: "Rajesh Kumar",
    role: "CEO",
    company: "TechVentures Inc.",
  },
  {
    id: "2",
    quote: "The team delivered our e-commerce platform ahead of schedule with zero critical bugs at launch. Their communication throughout was exceptional.",
    author: "Priya Sharma",
    role: "Founder",
    company: "ShopLocal",
  },
  {
    id: "3",
    quote: "Working with Nexora felt like having an in-house engineering team. They understood our vision and built exactly what we needed.",
    author: "Michael Chen",
    role: "CTO",
    company: "DataFlow Systems",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of projects do you work on?",
    answer: "We specialize in web applications, mobile apps, SaaS platforms, e-commerce solutions, APIs, and custom business software for startups, SMEs, and enterprise clients.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. An MVP typically takes 8-12 weeks, while larger enterprise projects may take 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    id: "3",
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, performance monitoring, security updates, and feature enhancements.",
  },
  {
    id: "4",
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints, demos, and feedback loops. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support.",
  },
  {
    id: "5",
    question: "How do you handle project communication?",
    answer: "We use Slack, email, and weekly video calls to keep you informed. You'll have direct access to your project team and a dedicated project manager.",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 12, suffix: "+" },
  { label: "Clients Worked With", value: 8, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Focused Delivery", value: 100, suffix: "%" },
];
