import type { Plan, Template, TemplateCategory } from "./types";

// ============================================================
// NAVIGATION
// ============================================================
export const NAV_LINKS = [
  { label: "Product", href: "/#features" },
  { label: "Solutions", href: "/#use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/#how-it-works" },
] as const;

export const AUTH_NAV_LINKS = [
  { label: "Product", href: "/" },
  { label: "Solutions", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/" },
] as const;

// ============================================================
// FOOTER LINKS
// ============================================================
export const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/" },
    { label: "Roadmap", href: "/" },
    { label: "API", href: "/" },
  ],
  Solutions: [
    { label: "Marketing", href: "/#use-cases" },
    { label: "Sales", href: "/#use-cases" },
    { label: "Developers", href: "/#use-cases" },
    { label: "Content Creation", href: "/#use-cases" },
    { label: "Customer Support", href: "/#use-cases" },
  ],
  Resources: [
    { label: "Documentation", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Case Studies", href: "/" },
    { label: "Community", href: "/" },
    { label: "Status", href: "/" },
  ],
  Company: [
    { label: "About", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Privacy", href: "/" },
    { label: "Terms", href: "/" },
    { label: "Contact", href: "/" },
  ],
};

// ============================================================
// SOCIALS
// ============================================================
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

// ============================================================
// FEATURES
// ============================================================
export const FEATURES = [
  {
    icon: "sparkles",
    title: "AI Workspace",
    description:
      "A unified workspace where your team collaborates with AI. Share contexts, build workflows, and ship faster.",
  },
  {
    icon: "message-square",
    title: "AI Chat",
    description:
      "Chat with multiple AI models simultaneously. Compare outputs, iterate instantly, and get better results.",
  },
  {
    icon: "pen-tool",
    title: "Content Generation",
    description:
      "Generate blog posts, emails, ads, and more in seconds. Maintain your brand voice across all content.",
  },
  {
    icon: "zap",
    title: "Automation",
    description:
      "Automate repetitive tasks with AI-powered workflows. Connect your tools and let NexaAI handle the rest.",
  },
  {
    icon: "bar-chart-2",
    title: "Analytics",
    description:
      "Track AI usage, measure ROI, and optimize workflows. Real-time dashboards for data-driven decisions.",
  },
  {
    icon: "users",
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and manage permissions. Everyone stays aligned and productive.",
  },
] as const;

// ============================================================
// USE CASES
// ============================================================
export const USE_CASES = [
  {
    icon: "megaphone",
    title: "Marketing",
    description: "Generate campaigns, social posts, and email sequences at scale.",
  },
  {
    icon: "code",
    title: "Developers",
    description: "Write code faster, debug smarter, and document with AI assistance.",
  },
  {
    icon: "trending-up",
    title: "Sales",
    description: "Create personalized outreach, proposals, and follow-ups in seconds.",
  },
  {
    icon: "headphones",
    title: "Customer Support",
    description: "Resolve tickets faster with AI-powered responses and knowledge retrieval.",
  },
  {
    icon: "edit-3",
    title: "Content Creation",
    description: "Produce blog posts, videos, and creative content without the blank page.",
  },
  {
    icon: "briefcase",
    title: "Business Operations",
    description: "Automate reporting, data entry, and decision-making workflows.",
  },
] as const;

// ============================================================
// PRICING PLANS
// ============================================================
export const PRICING_PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    features: [
      "100 AI credits/month",
      "3 projects",
      "GPT-4o Mini model",
      "Basic templates",
      "Email support",
      "Community access",
    ],
    limits: {
      aiCredits: 100,
      generations: 50,
      projects: 3,
      teamMembers: 1,
    },
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 29, yearly: 290 },
    features: [
      "5,000 AI credits/month",
      "Unlimited projects",
      "All AI models (GPT-4o, Claude, Gemini)",
      "Advanced templates",
      "Priority support",
      "API access",
      "Custom workflows",
    ],
    limits: {
      aiCredits: 5000,
      generations: 5000,
      projects: -1,
      teamMembers: 5,
    },
    isPopular: true,
    stripePriceId: {
      monthly: "price_pro_monthly",
      yearly: "price_pro_yearly",
    },
  },
  {
    id: "business",
    name: "Business",
    price: { monthly: 99, yearly: 990 },
    features: [
      "25,000 AI credits/month",
      "Unlimited everything",
      "Custom AI model fine-tuning",
      "Dedicated support manager",
      "SSO & SAML",
      "Advanced analytics",
      "Team usage reports",
      "Custom integrations",
    ],
    limits: {
      aiCredits: 25000,
      generations: 25000,
      projects: -1,
      teamMembers: -1,
    },
    stripePriceId: {
      monthly: "price_business_monthly",
      yearly: "price_business_yearly",
    },
  },
];

// ============================================================
// TEMPLATES
// ============================================================
export const TEMPLATES: Template[] = [
  {
    id: "blog-post",
    name: "Blog Post",
    description: "Generate a full-length blog post with SEO-optimized structure",
    category: "writing",
    icon: "file-text",
    isPopular: true,
    fields: [
      { name: "topic", label: "Topic", type: "text", placeholder: "e.g. The future of AI in healthcare" },
      { name: "tone", label: "Tone", type: "tone" },
      { name: "length", label: "Length", type: "length" },
      { name: "language", label: "Language", type: "language" },
    ],
    prompt: "Write a blog post about {{topic}}",
  },
  {
    id: "social-media",
    name: "Social Media Post",
    description: "Create engaging posts for Twitter, LinkedIn, or Instagram",
    category: "social_media",
    icon: "share-2",
    fields: [
      { name: "platform", label: "Platform", type: "select", options: ["Twitter", "LinkedIn", "Instagram", "All"] },
      { name: "content", label: "Topic", type: "text", placeholder: "What do you want to post about?" },
      { name: "tone", label: "Tone", type: "tone" },
    ],
    prompt: "Write a {{platform}} post about {{content}}",
  },
  {
    id: "product-description",
    name: "Product Description",
    description: "Write compelling product descriptions that convert",
    category: "sales",
    icon: "shopping-bag",
    fields: [
      { name: "product", label: "Product Name", type: "text" },
      { name: "features", label: "Key Features", type: "textarea", placeholder: "Feature 1, Feature 2..." },
      { name: "tone", label: "Tone", type: "tone" },
    ],
    prompt: "Write a product description for {{product}}",
  },
  {
    id: "email",
    name: "Email",
    description: "Write cold emails, follow-ups, or newsletters",
    category: "marketing",
    icon: "mail",
    fields: [
      { name: "type", label: "Email Type", type: "select", options: ["Cold Email", "Follow-up", "Newsletter", "Welcome"] },
      { name: "subject", label: "Subject/Topic", type: "text" },
      { name: "tone", label: "Tone", type: "tone" },
    ],
    prompt: "Write a {{type}} email about {{subject}}",
  },
  {
    id: "advertisement",
    name: "Advertisement",
    description: "Create compelling ad copy for Google, Facebook, or display ads",
    category: "marketing",
    icon: "megaphone",
    fields: [
      { name: "product", label: "Product/Service", type: "text" },
      { name: "platform", label: "Platform", type: "select", options: ["Google Ads", "Facebook Ads", "Display Ads"] },
      { name: "cta", label: "Call to Action", type: "text", placeholder: "e.g. Start Free Trial" },
    ],
    prompt: "Create a {{platform}} ad for {{product}} with CTA: {{cta}}",
  },
  {
    id: "seo-article",
    name: "SEO Article",
    description: "Generate an SEO-optimized article with target keywords",
    category: "seo",
    icon: "search",
    fields: [
      { name: "keyword", label: "Target Keyword", type: "text", placeholder: "e.g. best AI tools for startups" },
      { name: "length", label: "Length", type: "length" },
      { name: "language", label: "Language", type: "language" },
    ],
    prompt: "Write an SEO article targeting the keyword {{keyword}}",
  },
  {
    id: "youtube-description",
    name: "YouTube Description",
    description: "Write SEO-friendly YouTube video descriptions",
    category: "content",
    icon: "youtube",
    fields: [
      { name: "title", label: "Video Title", type: "text" },
      { name: "summary", label: "Video Summary", type: "textarea" },
    ],
    prompt: "Write a YouTube description for: {{title}}",
  },
  {
    id: "landing-page",
    name: "Landing Page Copy",
    description: "Generate hero, features, and CTA copy for a landing page",
    category: "marketing",
    icon: "layout",
    isPopular: true,
    fields: [
      { name: "product", label: "Product Name", type: "text" },
      { name: "description", label: "Product Description", type: "textarea" },
      { name: "audience", label: "Target Audience", type: "text" },
    ],
    prompt: "Write landing page copy for {{product}} targeting {{audience}}",
  },
];

export const TEMPLATE_CATEGORIES: { value: TemplateCategory | "all"; label: string }[] = [
  { value: "all", label: "All Categories" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "writing", label: "Writing" },
  { value: "seo", label: "SEO" },
  { value: "social_media", label: "Social Media" },
  { value: "business", label: "Business" },
  { value: "development", label: "Development" },
];

// ============================================================
// FAQ DATA
// ============================================================
export const FAQ_ITEMS = [
  {
    question: "How does NexaAI's credit system work?",
    answer:
      "Each AI request consumes credits based on the model used and the length of the output. GPT-4o Mini uses fewer credits than GPT-4o or Claude. You can monitor your usage in real-time from your dashboard and set up alerts when you're running low.",
  },
  {
    question: "Can I switch between monthly and yearly billing?",
    answer:
      "Yes! You can switch at any time from your billing settings. When switching to yearly, you'll receive a prorated credit for your remaining monthly billing period. Yearly plans save you up to 17% compared to monthly.",
  },
  {
    question: "What AI models are supported?",
    answer:
      "NexaAI supports GPT-4o, GPT-4o Mini, Claude 3.5 Sonnet, Claude 3 Opus, and Google Gemini Pro. Higher plans unlock access to more powerful models and higher rate limits.",
  },
  {
    question: "Is my data used to train AI models?",
    answer:
      "No. Your prompts and generated content are never used to train AI models. All data is encrypted in transit and at rest. Enterprise customers can also opt for dedicated infrastructure for additional security.",
  },
  {
    question: "Can I invite my team members?",
    answer:
      "Absolutely. Pro plans support up to 5 team members and Business plans support unlimited team members. You can assign roles (Admin, Member, Viewer) to control who can access what features.",
  },
  {
    question: "How do I get API access?",
    answer:
      "API access is available on Pro and Business plans. You can generate API keys from your dashboard settings. We support REST APIs with SDKs for Python, JavaScript, and Ruby.",
  },
  {
    question: "What happens if I exceed my credit limit?",
    answer:
      "You'll receive a notification when you reach 80% and 100% of your monthly limit. Once exceeded, you can either upgrade to a higher plan or purchase additional credit packs. Your AI features will pause until the next billing cycle or top-up.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied, contact our support team within 14 days of your purchase for a full refund — no questions asked.",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================
export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "Stripe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    quote:
      "NexaAI cut our content production time by 70%. We now publish 3x more content with the same team, and the quality is consistently excellent. It's transformed how our marketing team operates.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    company: "Linear",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
    quote:
      "The API is incredibly well-designed and the documentation made integration straightforward. We built an internal tool that uses NexaAI to auto-generate PR descriptions and commit messages. Game changer.",
  },
  {
    name: "Priya Patel",
    role: "Founder & CEO",
    company: "Notion",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    quote:
      "I evaluated six different AI platforms before choosing NexaAI. The combination of model flexibility, pricing, and team collaboration features made it the obvious choice. We've scaled from 5 users to 200 in eight months.",
  },
];

// ============================================================
// COMPANY LOGOS (for social proof)
// ============================================================
export const COMPANY_LOGOS = [
  "Vercel",
  "Linear",
  "Notion",
  "Figma",
  "Stripe",
  "Loom",
];

// ============================================================
// HOW IT WORKS STEPS
// ============================================================
export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Connect",
    description: "Sign up in seconds. Connect your existing tools via our API or native integrations with Slack, GitHub, and more.",
  },
  {
    number: "02",
    title: "Create",
    description: "Choose from 50+ templates or start from scratch. Our AI handles the heavy lifting while you stay in control.",
  },
  {
    number: "03",
    title: "Scale",
    description: "Grow your output without growing your team. Automate workflows, collaborate with your team, and track ROI in real time.",
  },
];

// ============================================================
// AI MODELS
// ============================================================
export const AI_MODELS = [
  { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI", credits: 15 },
  { id: "gpt-4o-mini", name: "GPT-4o Mini", provider: "OpenAI", credits: 2 },
  { id: "claude-3-5-sonnet", name: "Claude 3.5 Sonnet", provider: "Anthropic", credits: 12 },
  { id: "claude-3-opus", name: "Claude 3 Opus", provider: "Anthropic", credits: 20 },
  { id: "gemini-pro", name: "Gemini Pro", provider: "Google", credits: 8 },
];
