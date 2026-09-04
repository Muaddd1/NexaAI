import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "NexaAI — AI that works at the speed of your ideas",
    template: "%s | NexaAI",
  },
  description:
    "NexaAI helps teams create, analyze, automate, and scale their work using advanced AI. Trusted by modern teams worldwide.",
  keywords: [
    "AI",
    "artificial intelligence",
    "SaaS",
    "content generation",
    "automation",
    "GPT-4",
    "Claude",
    "team collaboration",
  ],
  authors: [{ name: "NexaAI" }],
  creator: "NexaAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexaai.com",
    siteName: "NexaAI",
    title: "NexaAI — AI that works at the speed of your ideas",
    description:
      "NexaAI helps teams create, analyze, automate, and scale their work using advanced AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaAI — AI that works at the speed of your ideas",
    description:
      "NexaAI helps teams create, analyze, automate, and scale their work using advanced AI.",
    creator: "@nexaai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
