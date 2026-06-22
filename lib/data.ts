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
    id: "core",
    name: "Core",
    icon: "Code2",
    items: [
      tech("php", "PHP"),
      tech("javascript", "JavaScript (ES6+)"),
      tech("typescript", "TypeScript"),
      tech("html5", "HTML5"),
      tech("css3", "CSS3"),
      tech("sql", "SQL"),
      tech("dart", "Dart"),
    ],
  },
  {
    id: "backend",
    name: "Backend Engineering",
    icon: "Server",
    items: [
      tech("laravel", "Laravel"),
      tech("rest", "REST APIs"),
      tech("mvc", "MVC Architecture"),
      tech("service-layer", "Service Layer Architecture"),
      tech("auth", "Authentication Systems"),
      tech("webhooks", "Webhooks"),
      tech("queue", "Queue System"),
      tech("events", "Events & Listeners"),
      tech("email", "Email Systems"),
      tech("mysql", "MySQL"),
      tech("transactions", "Transactions"),
      tech("stock-locking", "Stock Locking"),
    ],
  },
  {
    id: "payments",
    name: "Payments",
    icon: "CreditCard",
    items: [
      tech("razorpay", "Razorpay"),
      tech("signature", "Signature Verification"),
      tech("refunds", "Refund Handling"),
      tech("retry", "Retry Logic"),
      tech("order-lifecycle", "Order Lifecycle"),
    ],
  },
  {
    id: "frontend",
    name: "Web Frontend",
    icon: "Layout",
    items: [
      tech("nextjs", "Next.js"),
      tech("react", "React"),
      tech("blade", "Blade"),
      tech("alpine", "Alpine.js"),
      tech("tailwind", "Tailwind CSS"),
      tech("responsive", "Responsive Design"),
      tech("components", "Component Architecture"),
      tech("ajax", "AJAX"),
      tech("vite", "Vite"),
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "Smartphone",
    items: [
      tech("flutter", "Flutter"),
      tech("provider", "Provider"),
      tech("secure-storage", "Secure Storage"),
      tech("file-handling", "File Handling"),
      tech("api-integration", "API Integration"),
    ],
  },
  {
    id: "modern-stack",
    name: "Modern Stack",
    icon: "Cloud",
    items: [tech("supabase", "Supabase"), tech("firebase", "Firebase")],
  },
  {
    id: "tools",
    name: "Tools",
    icon: "Wrench",
    items: [
      tech("nodejs", "Node.js"),
      tech("npm", "npm"),
      tech("git", "Git"),
      tech("postman", "Postman"),
      tech("vscode", "VS Code"),
    ],
  },
  {
    id: "security",
    name: "Security",
    icon: "Shield",
    items: [
      tech("csp", "CSP"),
      tech("security-headers", "Security Headers"),
      tech("webhook-validation", "Webhook Validation"),
      tech("idempotent", "Idempotent Systems"),
      tech("env-config", "Environment Configs"),
    ],
  },
  {
    id: "architecture",
    name: "Architecture",
    icon: "Layers",
    items: [
      tech("mvc-arch", "MVC"),
      tech("service-layer-arch", "Service Layer"),
      tech("event-driven", "Event Driven"),
      tech("modular", "Modular Architecture"),
      tech("api-first", "API First"),
      tech("scalable-workflows", "Scalable Workflows"),
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
  { label: "Focused on Delivery", value: 100, suffix: "%" },
];
