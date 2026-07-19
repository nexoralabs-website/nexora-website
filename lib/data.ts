import type { Service, ProcessStep, Project, FAQ, WhyUsItem, CoreValue, Metric, TechStackItem, Industry } from "@/types";

// ── Hero ─────────────────────────────────────────────────────────────────────
export const heroPillars = [
  "Digital Products",
  "AI Automation",
  "Product Engineering",
  "Growth",
] as const;

// ── Metrics ──────────────────────────────────────────────────────────────────
export const metrics: Metric[] = [
  { id: "outreach", label: "Cold Outreach", value: "40+", description: "Targeted campaigns executed", icon: "Send" },
  { id: "connections", label: "Industry Connections", value: "15+", description: "Strategic professional networks", icon: "Users" },
  { id: "enquiries", label: "Client Enquiries", value: "2", description: "Per day average", icon: "MessageSquare" },
  { id: "domains", label: "Core Service Domains", value: "6", description: "Comprehensive digital solutions", icon: "Layers" },
  { id: "workflow", label: "Automation Driven Workflow", value: "100%", description: "Streamlined internal processes", icon: "Bot" },
];

// ── Industries ───────────────────────────────────────────────────────────────
export const industries: Industry[] = [
  { id: "healthcare", name: "Healthcare", description: "HIPAA-compliant platforms, telemedicine, and AI diagnostics.", icon: "Activity" },
  { id: "real-estate", name: "Real Estate", description: "Property management systems and virtual tour applications.", icon: "Building" },
  { id: "education", name: "Education", description: "LMS platforms, student portals, and ed-tech mobile apps.", icon: "GraduationCap" },
  { id: "retail", name: "Retail", description: "Inventory management and omnichannel retail solutions.", icon: "ShoppingBag" },
  { id: "ecommerce", name: "E-commerce", description: "High-conversion storefronts and scalable multi-vendor marketplaces.", icon: "ShoppingCart" },
  { id: "startups", name: "Startups", description: "Rapid MVPs, scalable architectures, and growth marketing.", icon: "Rocket" },
  { id: "manufacturing", name: "Manufacturing", description: "Supply chain automation and factory floor dashboards.", icon: "Factory" },
  { id: "professional-services", name: "Professional Services", description: "Client portals, automated billing, and CRM systems.", icon: "Briefcase" },
];

// ── Services ─────────────────────────────────────────────────────────────────
export const serviceCategories = [
  { id: "all", label: "All Services", icon: "Grid" },
] as const;

export const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Manual repetitive tasks and data processing waste time. Companies of any size can use AI agents to automate these processes, reducing operational costs and scaling without hiring.",
    icon: "Bot",
    features: ["Custom AI Agents", "LLM Integration", "Automated Workflows"],
    benefits: ["Reduce operational costs", "Scale without hiring", "24/7 autonomous operation"],
    cta: "Explore AI Automation",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Complex business logic requires bespoke solutions. Enterprises and growing firms need tailored software that fits their processes, delivering robust, future‑proof systems.",
    icon: "Code2",
    features: ["SaaS Architecture", "Microservices", "Cloud-native Development"],
    benefits: ["Robust and scalable", "Tailored to your exact logic", "Future-proof tech stack"],
    cta: "Build Custom Software",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Having a static or slow website hampers acquisition. Businesses need high‑performance, SEO‑optimized web apps that convert visitors into customers.",
    icon: "Globe",
    features: ["Next.js & React", "Server-Side Rendering", "Headless CMS"],
    benefits: ["Sub-second load times", "Perfect SEO scores", "Engaging user experience"],
    cta: "Start Web Project",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Cross-platform mobile experiences that deliver native-like performance and intuitive interfaces.",
    icon: "Smartphone",
    features: ["Flutter Development", "Native Performance", "Offline Capabilities"],
    benefits: ["Reach iOS & Android users", "Consistent brand experience", "Faster time-to-market"],
    cta: "Build a Mobile App",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Inefficient ad spend and low lead quality stall growth. Companies benefit from data‑driven campaigns that generate qualified leads and maximize ROI.",
    icon: "Megaphone",
    features: ["Meta & Google Ads", "Funnel Optimization", "Analytics & Tracking"],
    benefits: ["Predictable revenue growth", "Lower cost per acquisition", "Targeted audience reach"],
    cta: "Grow Your Business",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Low organic visibility drives traffic costs. Brands improve rankings to attract sustainable traffic and reduce reliance on paid ads.",
    icon: "Search",
    features: ["Technical Audits", "Core Web Vitals", "Keyword Strategy"],
    benefits: ["Sustainable organic traffic", "Higher domain authority", "Reduced ad dependency"],
    cta: "Improve Rankings",
  },
  {
    id: "aso",
    title: "ASO",
    description: "App store discoverability is limited. Developers boost downloads and conversion by optimizing listings and keywords.",
    icon: "Download",
    features: ["Keyword Ranking", "Listing Optimization", "A/B Testing"],
    benefits: ["More organic downloads", "Higher app store ranking", "Better user acquisition"],
    cta: "Optimize App Store",
  },
  {
    id: "crm-automation",
    title: "CRM Automation",
    description: "Manual lead handling leads to missed opportunities. Sales teams automate routing and follow‑ups to increase closing rates.",
    icon: "Users",
    features: ["Lead Routing", "Automated Follow-ups", "Data Enrichment"],
    benefits: ["Never miss a lead", "Higher closing rates", "Streamlined sales process"],
    cta: "Automate Your CRM",
  },
  {
    id: "business-process-automation",
    title: "Business Process Automation",
    description: "Disparate tools cause data silos and errors. Organizations streamline workflows with integrations, saving hours and ensuring real‑time sync.",
    icon: "GitBranch",
    features: ["API Integrations", "n8n & Zapier", "Custom Webhooks"],
    benefits: ["Zero human errors", "Save hundreds of hours", "Real-time data sync"],
    cta: "Streamline Processes",
  },
];

export const serviceCategoryMap: Record<string, string[]> = {
  "all": services.map(s => s.id),
};

// ── Process ──────────────────────────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  { id: "discover", step: 1, title: "Discover", description: "Deep dive into your business model and technical requirements.", icon: "Search" },
  { id: "plan", step: 2, title: "Plan", description: "Architecture mapping and strategic roadmap definition.", icon: "Map" },
  { id: "design", step: 3, title: "Design", description: "UI/UX design focused on premium aesthetics and conversion.", icon: "Palette" },
  { id: "develop", step: 4, title: "Develop", description: "Engineering with Next.js, Flutter, and scalable backends.", icon: "Code2" },
  { id: "automate", step: 5, title: "Automate", description: "Implementing AI and workflow automations.", icon: "Bot" },
  { id: "launch", step: 6, title: "Launch", description: "Production deployment with zero-downtime CI/CD.", icon: "Rocket" },
  { id: "scale", step: 7, title: "Scale", description: "Growth marketing and ongoing technical optimization.", icon: "TrendingUp" },
];

// ── Why Nexora ───────────────────────────────────────────────────────────────
export const whyUsItems: WhyUsItem[] = [
  { id: "ai-first", title: "AI First", description: "We build with AI at the core, automating workflows and embedding intelligence into your products.", icon: "Bot" },
  { id: "scalable-architecture", title: "Scalable Architecture", description: "Enterprise-grade infrastructure designed to handle millions of users without rewrites.", icon: "Layers" },
  { id: "business-focused", title: "Business Focused", description: "We engineer solutions that directly impact your bottom line, prioritizing revenue and efficiency.", icon: "Briefcase" },
  { id: "long-term-partner", title: "Long-term Partner", description: "We act as your dedicated engineering and growth team, committed to your sustained success.", icon: "HeartHandshake" },
  { id: "automation-driven", title: "Automation Driven", description: "If a process can be automated, we automate it. We eliminate manual overhead entirely.", icon: "GitBranch" },
  { id: "performance-optimized", title: "Performance Optimized", description: "Sub-second load times, flawless Core Web Vitals, and buttery smooth user interfaces.", icon: "Zap" },
];

// ── Core Values ──────────────────────────────────────────────────────────────
export const coreValues: CoreValue[] = [
  { id: "engineering-excellence", title: "Engineering Excellence", description: "We write clean, typed, and scalable code." },
  { id: "premium-design", title: "Premium Design", description: "Aesthetics matter. We build beautiful interfaces." },
  { id: "accountability", title: "Accountability", description: "We own our results and deliver on our promises." },
  { id: "continuous-innovation", title: "Continuous Innovation", description: "We stay ahead of the technology curve." },
];

// ── Tech Stack ───────────────────────────────────────────────────────────────
export const techStack: TechStackItem[] = [
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
  { name: "Flutter", icon: "flutter", category: "Mobile" },
  { name: "Laravel", icon: "laravel", category: "Backend" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "Supabase", icon: "supabase", category: "Database" },
  { name: "PostgreSQL", icon: "postgresql", category: "Database" },
  { name: "Firebase", icon: "firebase", category: "Database" },
  { name: "OpenAI", icon: "openai", category: "AI" },
  { name: "Claude", icon: "claude", category: "AI" },
  { name: "Gemini", icon: "gemini", category: "AI" },
  { name: "n8n", icon: "n8n", category: "Automation" },
  { name: "Google Cloud", icon: "gcloud", category: "Cloud" },
  { name: "AWS", icon: "aws", category: "Cloud" },
  { name: "Vercel", icon: "vercel", category: "Cloud" },
  { name: "Docker", icon: "docker", category: "DevOps" },
];

// ── Case Studies (Projects) ──────────────────────────────────────────────────
export const projects: Project[] = [
  { 
    id: "nexora-labs", 
    title: "Nexora Labs Website", 
    category: "Web Development", 
    overview: "A premium, high-performance agency website built to showcase engineering capabilities and drive enterprise leads.",
    problem: "The original portfolio lacked the technical depth and premium aesthetics required to attract ₹1L–₹10L enterprise projects, struggling with low conversion rates and unoptimized performance.",
    solution: "We engineered a Vercel-inspired, highly optimized Next.js platform. It features strict design systems, robust accessibility, dynamic CRO elements, and flawless Core Web Vitals.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    features: ["Component-driven architecture", "Smooth scroll-reveal animations", "Dynamic schema generation for SEO", "Highly optimized contact workflows"],
    status: "Production",
    impact: "Achieved a 99+ Lighthouse score across all metrics. The new architecture directly aligns with high-ticket positioning, significantly increasing inbound lead quality.",
    isPlaceholder: false 
  },
  { 
    id: "shri-vishwakarma", 
    title: "Shri Vishwakarma Matrimony", 
    category: "Custom Software", 
    overview: "A scalable, secure matchmaking platform bridging traditional community values with modern digital convenience.",
    problem: "The client relied on a highly manual, paper-and-phone based traditional matchmaking workflow, limiting their scale, causing data inaccuracies, and leading to slow response times for users.",
    solution: "We built a cross-platform Flutter application backed by a robust Laravel API. It features role-based dashboards for admins to verify profiles and an intuitive mobile experience for users.",
    technologies: ["Flutter", "Laravel", "MySQL", "AWS EC2", "Firebase"],
    features: ["Complex matchmaking algorithms", "Role-based administrative dashboards", "Real-time chat and notifications", "Secure identity verification workflows"],
    status: "Development",
    impact: "Projected to eliminate 90% of manual administrative tasks and expand the client's reach globally, modernizing a decades-old business model.",
    isPlaceholder: false 
  },
  { 
    id: "campusiq", 
    title: "CampusIQ", 
    category: "SaaS Platform", 
    overview: "An integrated educational management system streamlining administration, grading, and student communication.",
    problem: "Educational institutions were using fragmented legacy systems that required duplicate data entry, lacked real-time reporting, and offered poor mobile experiences for students.",
    solution: "We engineered a unified SaaS platform with multi-tenant architecture, allowing seamless data flow between administration, teachers, and students in real-time.",
    technologies: ["Next.js", "Supabase", "Prisma", "Docker", "PostgreSQL"],
    features: ["Multi-tenant school management", "Real-time grading and attendance", "Automated parent notifications", "Resource scheduling and allocation"],
    status: "Production",
    impact: "Reduced administrative overhead by 40 hours per week per institution and increased parent engagement by providing real-time academic visibility.",
    isPlaceholder: false 
  },
  { 
    id: "unisphere", 
    title: "UniSphere", 
    category: "Mobile App", 
    overview: "A cross-platform mobile community application focused on fostering campus connections and managing local events.",
    problem: "University students lacked a centralized, safe platform to discover campus events, join organizations, and network outside of generic, noisy social media platforms.",
    solution: "We developed a high-performance Flutter mobile application with localized feeds, secure university email verification, and integrated event ticketing.",
    technologies: ["Flutter", "Node.js", "Firebase", "Google Cloud", "Stripe"],
    features: ["University domain verification", "Real-time localized feeds", "In-app event ticketing and scanning", "Organizational dashboard management"],
    status: "MVP",
    impact: "Successfully validated the concept with a pilot launch, achieving high daily active user metrics and seamless transaction processing for event organizers.",
    isPlaceholder: false 
  },
  { 
    id: "health-ai", 
    title: "Health AI Simulation", 
    category: "AI Automation", 
    overview: "An advanced AI-driven diagnostic simulation tool designed to train medical professionals using dynamically generated patient scenarios.",
    problem: "Medical training relies heavily on static case studies, which fail to prepare students for the unpredictable, dynamic nature of real-world patient interactions and diagnosis.",
    solution: "We integrated advanced LLMs with a custom vector database to generate highly accurate, branching medical scenarios where the AI acts as a patient with specific symptoms and histories.",
    technologies: ["OpenAI API", "Python", "FastAPI", "React", "Pinecone Vector DB"],
    features: ["Dynamic medical scenario generation", "Natural language patient interaction", "Automated diagnostic evaluation scoring", "Evidence-based feedback loops"],
    status: "Development",
    impact: "Revolutionizing training methodology by providing unlimited, highly variable practice scenarios, ensuring medical students face diverse diagnostic challenges.",
    isPlaceholder: false 
  },
  { 
    id: "ai-crm", 
    title: "AI CRM Automation", 
    category: "Business Automation", 
    overview: "A fully automated lead qualification and follow-up sequence engine integrated seamlessly with WhatsApp and email.",
    problem: "The sales team was losing leads due to slow response times and spending hundreds of hours manually categorizing and following up with unqualified prospects.",
    solution: "We deployed an n8n-based automation architecture that uses AI to analyze incoming leads, score them, and instantly initiate personalized WhatsApp conversations.",
    technologies: ["n8n", "WhatsApp Cloud API", "Claude", "Webhooks", "PostgreSQL"],
    features: ["Instant omni-channel lead capture", "AI-driven lead scoring and routing", "Context-aware automated follow-ups", "Seamless human handoff protocols"],
    status: "Production",
    impact: "Achieved a 5-minute response time SLA for all incoming leads, increased qualification rates by 35%, and saved the sales team 20+ hours per week.",
    isPlaceholder: false 
  },
];

// ── FAQs ─────────────────────────────────────────────────────────────────────
export const faqs: FAQ[] = [
  { id: "1", question: "How long does a typical software project take to launch?", answer: "Project timelines depend strictly on scope and complexity. An MVP (Minimum Viable Product) or custom workflow automation typically launches within 4 to 8 weeks. Comprehensive SaaS platforms or complex enterprise mobile applications usually require 3 to 6 months of dedicated engineering." },
  { id: "2", question: "How much does custom software development cost?", answer: "We focus on ROI rather than just cost. Depending on your business requirements, a professional product engineering engagement with us typically ranges between ₹1L and ₹10L+. Following our Discovery Call, we provide a transparent, fixed-price proposal detailing the exact roadmap and deliverables." },
  { id: "3", question: "Do you provide long-term maintenance and technical support?", answer: "Yes. We operate as a strategic long-term partner. Post-launch, we offer Service Level Agreements (SLAs) that cover performance monitoring, security patching, server maintenance, and iterative feature development to ensure your software scales smoothly with your business." },
  { id: "4", question: "Can you modernize our existing legacy software?", answer: "Absolutely. We specialize in system modernization. We can refactor legacy codebases, migrate on-premise infrastructure to scalable cloud architectures (AWS/GCP), and redesign outdated user interfaces into modern, high-conversion experiences." },
  { id: "5", question: "How can AI and automation improve my internal workflows?", answer: "AI automation eliminates manual, repetitive tasks that drain your team's time. By integrating tools like n8n, OpenAI, and custom APIs, we can automate lead qualification, CRM data entry, customer support routing, and complex reporting—saving businesses hundreds of hours monthly." },
];
