# NexaAI — Premium AI SaaS Template

A production-quality, beautifully designed AI SaaS starter kit. Built with Next.js 15, TypeScript, Tailwind CSS v4, and shadcn/ui. Ready to connect to your auth, database, payments, and AI APIs.

**License:** Commercial — [see LICENSE](./LICENSE) for terms.

---

## Table of Contents

1. [What's Included](#whats-included)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Environment Variables](#environment-variables)
6. [Backend Integration](#backend-integration)
   - [Database & ORM](#database--orm)
   - [Authentication](#authentication)
   - [Payments (Stripe)](#payments-stripe)
   - [AI Providers](#ai-providers)
7. [Deployment](#deployment)
   - [Vercel](#vercel)
   - [Docker](#docker)
8. [Customization](#customization)
   - [Brand Colors](#brand-colors)
   - [Typography](#typography)
   - [Content](#content)
9. [Pages & Routes](#pages--routes)
10. [Component System](#component-system)
11. [Changelog](#changelog)

---

## What's Included

### Landing Page (14 Sections)
- Announcement bar with dismiss animation
- Sticky navbar with mobile hamburger drawer
- Hero section with animated particle canvas + dashboard mockup
- Social proof logo strip
- 6-card features grid with hover effects
- Interactive AI demo with live-style generation
- 6 use cases section
- 3-step "how it works"
- Dashboard preview with stats cards
- 3 testimonials with dicebear avatars
- Pricing section with monthly/yearly toggle
- 8-question FAQ accordion
- Final CTA banner
- Footer with 4-column links + newsletter

### Authentication (5 Pages)
- Login with OAuth placeholders (Google, GitHub)
- Register with form validation
- Forgot password
- Reset password
- Email verification success screen

### SaaS Dashboard (9 Pages)
- **Overview** — Stats cards, usage chart, recent activity, quick actions
- **AI Workspace** — Full chat interface with streaming dots, model selector, conversation history
- **Generator** — Template marketplace + content generation form
- **Templates** — Searchable template library with category filters
- **History** — Generation history with search and status filters
- **Analytics** — Tabbed charts (usage, by model, by category)
- **Team** — Member management with roles, invite dialog, usage bar
- **Billing** — Current plan, usage meter, invoice history, payment method
- **Notifications** — Read/unread list with mark-as-read

### Settings (6 Pages)
- **Profile** — Avatar, name, email, bio
- **Appearance** — Dark / Light / System theme selector
- **Security** — Password change, 2FA toggle
- **API Keys** — Create / copy / revoke keys
- **Integrations** — OpenAI, Anthropic, Gemini, Slack, Discord, GitHub, Zapier
- **Notifications** — Per-category toggle switches

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 + CSS variables |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Themes | next-themes (dark / light / system) |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth.js v5 |
| Payments | Stripe |
| AI APIs | OpenAI / Anthropic / Google Gemini |

---

## Getting Started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **pnpm** 9+ (or npm / yarn)

### Installation

```bash
# 1. Clone / extract the template
cd NexaAI

# 2. Install dependencies
pnpm install

# 3. Copy environment variables
cp .env.example .env.local
# Then fill in your .env.local (see Environment Variables below)

# 4. Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
NexaAI/
├── app/
│   ├── (marketing)/              # Landing page route group
│   │   ├── page.tsx             # Homepage (all 14 sections)
│   │   └── pricing/
│   │       └── page.tsx         # Dedicated pricing page
│   ├── (auth)/                  # Auth pages
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   └── verify-email/
│   ├── (dashboard)/             # Protected SaaS dashboard
│   │   ├── layout.tsx           # Sidebar + topbar shell
│   │   ├── overview/
│   │   ├── ai-workspace/
│   │   ├── generator/
│   │   ├── templates/
│   │   ├── history/
│   │   ├── analytics/
│   │   ├── team/
│   │   ├── billing/
│   │   ├── settings/
│   │   │   ├── profile/
│   │   │   ├── appearance/
│   │   │   ├── notifications/
│   │   │   ├── security/
│   │   │   ├── api-keys/
│   │   │   └── integrations/
│   │   └── notifications/
│   ├── layout.tsx               # Root layout (providers, fonts, metadata)
│   ├── globals.css              # CSS variables, animations, utilities
│   └── not-found.tsx            # Global 404 page
├── components/
│   ├── ui/                      # Base UI components (shadcn/ui style)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── switch.tsx
│   │   ├── accordion.tsx
│   │   ├── progress.tsx
│   │   ├── separator.tsx
│   │   ├── avatar.tsx
│   │   ├── tooltip.tsx
│   │   ├── tabs.tsx
│   │   ├── skeleton.tsx
│   │   └── sonner.tsx           # Toast notifications
│   ├── shared/                  # Cross-cutting components
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── logo.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── landing/                # Landing page sections (14 total)
│   └── dashboard/              # Dashboard-specific components
│       ├── sidebar.tsx
│       └── topbar.tsx
├── lib/
│   ├── utils.ts                 # cn() helper, formatters
│   ├── constants.ts             # All static data (nav, features, pricing, etc.)
│   └── types.ts                 # TypeScript interfaces
├── hooks/
│   ├── use-scroll-position.ts
│   └── use-media-query.ts
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── .env.example
├── LICENSE
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_URL` | App URL (e.g. `http://localhost:3000`) | Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth (generate: `openssl rand -base64 32`) | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | For payments |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | For payments |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | For payments |
| `OPENAI_API_KEY` | OpenAI API key | For AI features |
| `ANTHROPIC_API_KEY` | Anthropic API key | For AI features |
| `GOOGLE_AI_API_KEY` | Google Gemini API key | For AI features |
| `RESEND_API_KEY` | Resend API key (for transactional email) | Optional |

---

## Backend Integration

### Database & ORM

The template uses **Prisma** with **PostgreSQL** as the recommended database. Models are not pre-written — you define them based on your product needs.

**1. Install Prisma:**
```bash
pnpm add prisma @prisma/client
pnpm prisma init
```

**2. Define your schema in `prisma/schema.prisma`:**
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**3. Run migrations:**
```bash
pnpm prisma migrate dev --name init
```

**4. Create a Prisma client singleton in `lib/prisma.ts`:**
```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

### Authentication

The template is structured for **NextAuth.js v5**. Auth pages are ready — you wire them up.

**1. Install NextAuth:**
```bash
pnpm add next-auth@beta
```

**2. Create `auth.ts` at the project root:**
```typescript
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Connect to your database and verify user
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });
        // Verify password hash (use bcrypt)
        if (user && await verifyPassword(credentials.password, user.password)) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  session: { strategy: "jwt" },
});
```

**3. Create the API route in `app/api/auth/[...nextauth]/route.ts`:**
```typescript
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
```

**4. Protect dashboard routes with middleware:**
```typescript
// middleware.ts at project root
import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
```

### Payments (Stripe)

The billing dashboard page is ready. Wire it to Stripe:

**1. Install Stripe:**
```bash
pnpm add stripe
```

**2. Create a Stripe instance in `lib/stripe.ts`:**
```typescript
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});
```

**3. Create checkout session in an API route:**
```typescript
// app/api/stripe/checkout/route.ts
import { stripe } from "@/lib/stripe";
import { auth } from "@/auth";

export async function POST(req: Request) {
  const session = await auth();
  const { priceId } = await req.json();

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: session!.user!.email!,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?canceled=true`,
  });

  return Response.json({ url: checkoutSession.url });
}
```

**4. Set up a Stripe webhook in `app/api/stripe/webhook/route.ts`** to handle `checkout.session.completed`, `invoice.payment_succeeded`, and `customer.subscription.deleted` events.

### AI Providers

The AI workspace and generator are ready to connect. Use **OpenAI**, **Anthropic**, or **Google Gemini**:

```typescript
// lib/ai.ts
import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Example chat API route in app/api/chat/route.ts
export async function POST(req: Request) {
  const { messages, model } = await req.json();

  if (model === "gpt-4o") {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      stream: true,
    });
    return new Response(response.toReadableStream(), {
      headers: { "Content-Type": "text/event-stream" },
    });
  }

  if (model === "claude-3-5-sonnet") {
    const response = await anthropic.messages.stream({
      model: "claude-3-5-sonnet-20241022",
      messages,
    });
    return new Response(response.toReadableStream(), {
      headers: { "Content-Type": "text/event-stream" },
    });
  }
}
```

---

## Deployment

### Vercel

1. Push your code to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Add your environment variables in the Vercel dashboard.
4. Deploy.

```bash
# Vercel auto-detects Next.js. If not:
vercel --prod
```

For the webhook to work with Stripe on Vercel, set up your webhook endpoint in the Stripe dashboard pointing to `https://yourdomain.com/api/stripe/webhook`.

### Docker

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

Add to `next.config.ts`:
```typescript
output: "standalone",
```

Build and run:
```bash
docker build -t nexaai .
docker run -p 3000:3000 --env-file .env.local nexaai
```

---

## Customization

### Brand Colors

All colors are CSS custom properties in `app/globals.css`. To rebrand:

1. Open `app/globals.css`
2. Replace the color values in `:root` and `[data-theme="dark"]` / `[data-theme="light"]`

Key variables:
```css
--accent: #00d4ff;          /* Primary accent (buttons, links, highlights) */
--accent-secondary: #6366f1; /* Secondary accent (tags, gradients) */
--background: #07090f;       /* Dark mode background */
--foreground: #f1f5f9;      /* Dark mode text */
```

### Typography

**Headings font:** Syne — set in `app/layout.tsx` and referenced as `--font-heading`.
**Body font:** Inter — set in `app/layout.tsx` and referenced as `--font-body`.

To change fonts, update the Google Fonts import in `app/layout.tsx`:
```typescript
// In layout.tsx
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
```

### Content

All static content lives in `lib/constants.ts`:
- `NAV_LINKS`, `FOOTER_LINKS`, `SOCIAL_LINKS` — navigation
- `FEATURES`, `USE_CASES`, `HOW_IT_WORKS_STEPS` — landing page
- `PRICING_PLANS` — pricing tiers
- `TEMPLATES` — content generation templates
- `TESTIMONIALS`, `COMPANY_LOGOS` — social proof
- `FAQ_ITEMS` — FAQ section
- `AI_MODELS` — available AI models

---

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (all 14 sections) |
| `/pricing` | Dedicated pricing page |
| `/login` | Login page |
| `/register` | Registration page |
| `/forgot-password` | Password recovery |
| `/reset-password` | Password reset (token-based) |
| `/verify-email` | Email verification success |
| `/dashboard/overview` | Main dashboard |
| `/dashboard/ai-workspace` | AI chat interface |
| `/dashboard/generator` | Content generator |
| `/dashboard/templates` | Template library |
| `/dashboard/history` | Generation history |
| `/dashboard/analytics` | Usage analytics |
| `/dashboard/team` | Team management |
| `/dashboard/billing` | Subscription & invoices |
| `/dashboard/notifications` | Notification center |
| `/dashboard/settings/profile` | User profile |
| `/dashboard/settings/appearance` | Theme settings |
| `/dashboard/settings/notifications` | Notification preferences |
| `/dashboard/settings/security` | Password & 2FA |
| `/dashboard/settings/api-keys` | API key management |
| `/dashboard/settings/integrations` | Connected integrations |

---

## Component System

Components follow the shadcn/ui pattern — built on Radix UI primitives with custom styling. All components live in `components/ui/`.

### Available Components

| Component | File | Description |
|-----------|------|-------------|
| Button | `button.tsx` | Primary actions. Variants: `default`, `outline`, `ghost`, `destructive`, `success`. Sizes: `sm`, `md`, `lg`, `icon`. Has `isLoading` prop. |
| Card | `card.tsx` | Content containers. Parts: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| Badge | `badge.tsx` | Labels and tags. Variants: `default`, `success`, `warning`, `destructive`, `secondary` |
| Input | `input.tsx` | Text fields. Includes `Label` and `Textarea` in same file |
| Select | `select.tsx` | Dropdown selection |
| Dialog | `dialog.tsx` | Modal overlay |
| Dropdown Menu | `dropdown-menu.tsx` | Context menus and dropdowns |
| Switch | `switch.tsx` | Toggle switches |
| Accordion | `accordion.tsx` | Collapsible content sections |
| Progress | `progress.tsx` | Usage meters and progress bars |
| Separator | `separator.tsx` | Horizontal dividers |
| Avatar | `avatar.tsx` | User avatars |
| Tooltip | `tooltip.tsx` | Hover tooltips |
| Tabs | `tabs.tsx` | Tabbed content |
| Skeleton | `skeleton.tsx` | Loading placeholder shapes |
| Sonner | `sonner.tsx` | Toast notifications (`toast.success()`, `toast.error()`) |
| Sheet | `sheet.tsx` | Slide-out drawer panel |

### CSS Utility Classes

| Class | Description |
|-------|-------------|
| `.glass` | Glassmorphism: `backdrop-blur-xl` + semi-transparent bg |
| `.text-gradient` | Gradient text using accent colors |
| `.gradient-border` | Gradient border effect |
| `.animate-fade-in` | Fade-in entrance animation |
| `.animate-float` | Floating bob animation |
| `.animate-shimmer` | Shimmer loading effect |

---

## Changelog

### v1.0.0 — Initial Release
- 14-section landing page with Framer Motion animations
- 5 authentication pages
- 9-page SaaS dashboard
- 6-page settings section
- Full component library (17 shadcn/ui-style components)
- Dual-theme system (dark/light/system)
- SEO-ready (sitemap.xml, robots.txt, metadata)
- Commercial license

---

## Support

For issues with the template itself (bugs, missing files, build errors), contact the licensor.

For questions about integrating your own backend, consult the Next.js, Prisma, NextAuth, and Stripe documentation — the integration patterns shown in this README follow official best practices.

---

**Built with care. Ready to ship.**
