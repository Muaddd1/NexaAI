// ============================================================
// USER & AUTH
// ============================================================
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "owner" | "admin" | "member" | "viewer";
  createdAt: Date;
}

export interface TeamMember extends User {
  status: "active" | "invited" | "inactive";
  usageThisMonth: number;
  maxUsage: number;
}

// ============================================================
// AI & CONTENT
// ============================================================
export interface AIConversation {
  id: string;
  title: string;
  model: string;
  createdAt: Date;
  updatedAt: Date;
  messageCount: number;
}

export interface AIMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  model?: string;
  createdAt: Date;
  tokens?: number;
}

export interface AIGeneration {
  id: string;
  type: GenerationType;
  prompt: string;
  result: string;
  model: string;
  tokens: number;
  createdAt: Date;
  status: "success" | "failed" | "pending";
}

export type GenerationType =
  | "blog_post"
  | "social_media"
  | "product_description"
  | "email"
  | "advertisement"
  | "seo_article"
  | "youtube_description"
  | "landing_page";

// ============================================================
// TEMPLATES
// ============================================================
export interface Template {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  icon: string;
  fields: TemplateField[];
  prompt: string;
  isPopular?: boolean;
}

export interface TemplateField {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "tone" | "length" | "language";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export type TemplateCategory =
  | "marketing"
  | "sales"
  | "writing"
  | "seo"
  | "social_media"
  | "business"
  | "content"
  | "development";

// ============================================================
// BILLING & PLANS
// ============================================================
export type PlanType = "free" | "pro" | "business";

export interface Plan {
  id: PlanType;
  name: string;
  price: { monthly: number; yearly: number };
  features: string[];
  limits: {
    aiCredits: number;
    generations: number;
    projects: number;
    teamMembers: number;
  };
  isPopular?: boolean;
  stripePriceId?: { monthly: string; yearly: string };
}

export interface BillingRecord {
  id: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  date: Date;
  invoiceUrl?: string;
}

export interface Subscription {
  plan: PlanType;
  status: "active" | "canceled" | "past_due" | "trialing";
  currentPeriodEnd: Date;
  isYearly: boolean;
}

// ============================================================
// API KEYS
// ============================================================
export interface ApiKey {
  id: string;
  name: string;
  key: string; // masked: nexa_live_sk_xxxx...xxxx
  createdAt: Date;
  lastUsed?: Date;
}

// ============================================================
// NOTIFICATIONS
// ============================================================
export interface Notification {
  id: string;
  title: string;
  description: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: Date;
}

// ============================================================
// DASHBOARD METRICS
// ============================================================
export interface DashboardStats {
  aiCredits: number;
  aiCreditsLimit: number;
  monthlyUsage: number;
  monthlyUsageLimit: number;
  activeProjects: number;
  totalGenerations: number;
  mrr: number;
  activeUsers: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

// ============================================================
// INTEGRATIONS
// ============================================================
export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "connected" | "disconnected";
  docsUrl?: string;
}
