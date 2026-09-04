"use client";

import { useState } from "react";
import Link from "next/link";
import { Link2, X, Mail, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  github: Link2,
  twitter: X,
  linkedin: Link2,
};

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-[var(--foreground-muted)] mb-6 max-w-xs leading-relaxed">
              AI that works at the speed of your ideas. Trusted by modern teams worldwide.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 text-sm"
                />
                <Button type="submit" size="icon" className="h-9 w-9 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <p className="text-sm font-semibold mb-3 text-[var(--foreground)]" style={{ fontFamily: "var(--font-heading)" }}>
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--foreground-subtle)]">
            © {new Date().getFullYear()} NexaAI. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon] ?? Mail;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center",
                    "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
                    "bg-[var(--surface-elevated)] border border-[var(--border)]",
                    "hover:border-[var(--foreground-subtle)] transition-all"
                  )}
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
