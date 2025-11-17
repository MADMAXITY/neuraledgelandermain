export const siteConfig = {
  name: "NeuralEdge",
  description: "Integrated AI agents that do the robot work so your team can do the human work.",
  url: "https://neuraledge.live",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/neuraledge",
    github: "https://github.com/neuraledge",
    blog: "https://neuraledge.blog",
  },
};

export const navItems = [
  {
    title: "Solutions",
    href: "/solutions",
    children: [
      { title: "Social & Content", href: "/solutions/smmc", description: "Turn attention into DMs" },
      { title: "High-Ticket SaaS", href: "/solutions/saas", description: "Shorten cycles. Prove value faster" },
      { title: "Real Estate", href: "/solutions/real-estate", description: "More appointments. Cleaner closes" },
    ],
  },
  {
    title: "Workflows",
    href: "/workflows",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "https://neuraledge.blog",
    external: true,
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const techStack = [
  { name: "OpenAI", logo: "/icons/openai.svg" },
  { name: "Claude", logo: "/icons/claude.svg" },
  { name: "Make", logo: "/icons/make.svg" },
  { name: "n8n", logo: "/icons/n8n.svg" },
  { name: "Zapier", logo: "/icons/zapier.svg" },
  { name: "Supabase", logo: "/icons/supabase.svg" },
];

export const solutions = [
  {
    title: "Workflow Automation",
    description: "Wire AI Into Workflows So Data Moves Itself And Approvals Land On Time.",
    icon: "Zap",
    features: ["System Sync", "Smart Reminders", "Sheets/Drive Automations", "Time Tracking"],
  },
  {
    title: "Delegation",
    description: "Assistants draft, summarize, and schedule—your team reviews and sends.",
    icon: "Users",
    features: ["Inbox Triage", "Follow‑Up & Scheduling", "Notes → Actions", "Smart Holds"],
  },
  {
    title: "Growth",
    description: "Speed-to-lead, ICP routing, and tailored outreach that turns conversations into pipeline.",
    icon: "TrendingUp",
    features: ["<5‑Min Reply", "ICP Routing", "SDR Assist", "Conv → CRM"],
  },
  {
    title: "Custom Projects",
    description: "Durable integrations with observability and guardrails so you scale without breakage.",
    icon: "Code2",
    features: ["SSOT Model", "API/Webhooks", "RBAC & Approvals", "Audit & Retention"],
  },
];

export const benefits = [
  {
    title: "Increased Productivity",
    description: "Focus on high-value work; agents handle the repetitive.",
    icon: "Zap",
  },
  {
    title: "24/7 Availability",
    description: "Systems Don't Sleep; SLAs Improve.",
    icon: "Clock",
  },
  {
    title: "Cost Reduction",
    description: "Fewer manual hours, fewer errors, clearer attribution.",
    icon: "DollarSign",
  },
  {
    title: "Scalability & Growth",
    description: "Durable integrations; add workflows, not headcount.",
    icon: "TrendingUp",
  },
];

export const faqs = [
  {
    question: "What Exactly Do I Get In The Free AI Integration Audit?",
    answer: "A Workflow Map For One Process, Recommended Agents/Automations, Risk/ToS Notes, And A Template Pack.",
  },
  {
    question: "How fast can I see value?",
    answer: "First meaningful win within the pilot window (typically 14–30 days), then expand.",
  },
  {
    question: "Will AI Replace My Team?",
    answer: "No — Agents Automate The Robot Work; Your Team Does Judgment, Strategy, Relationships.",
  },
  {
    question: "How Do You Keep This Safe And Compliant?",
    answer: "Human-In-The-Loop Approvals, Audit Logs, Least-Privilege Access, ToS-Friendly Workflows.",
  },
  {
    question: "What happens if the pilot doesn't work?",
    answer: "Pay-on-Proof: we keep working free until the KPIs land — or you don't pay.",
  },
  {
    question: "What Tools Can You Integrate?",
    answer: "CRM, Email, Calendar, Slack/Teams, Data Warehouses, SSO, Marketing Tools, Industry Systems (Varies By Niche).",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes — monitoring, change requests, monthly optimization sprints.",
  },
];

export const workflowCategories = [
  "Sales & Lead Generation",
  "Content & Social Media",
  "Data Processing",
  "Customer Service",
  "DevOps & Engineering",
  "Finance & Accounting",
  "HR & Recruiting",
  "Marketing Automation",
  "Project Management",
  "Analytics & Reporting",
];