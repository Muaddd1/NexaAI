"use client";

import { useState } from "react";
import Link from "next/link";
import { Link2, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface AuthPageClientProps {
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  linkSubLabel: string;
  children: React.ReactNode;
}

export function AuthPageClient({
  title,
  description,
  linkHref,
  linkLabel,
  linkSubLabel,
  children,
}: AuthPageClientProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to NexaAI
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-[var(--border)] bg-[var(--surface)]">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                {/* Logo */}
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="15" fill="var(--surface-elevated)" stroke="var(--border)" strokeWidth="1" />
                  <line x1="8" y1="12" x2="14" y2="14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <line x1="24" y1="10" x2="18" y2="14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <line x1="8" y1="20" x2="14" y2="18" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <line x1="24" y1="22" x2="18" y2="18" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <circle cx="16" cy="16" r="4" fill="var(--accent)" />
                  <circle cx="8" cy="12" r="2" fill="var(--accent)" opacity="0.8" />
                  <circle cx="24" cy="10" r="2" fill="var(--accent-secondary)" opacity="0.8" />
                  <circle cx="8" cy="20" r="2" fill="var(--accent-secondary)" opacity="0.8" />
                  <circle cx="24" cy="22" r="2" fill="var(--accent)" opacity="0.8" />
                </svg>
              </div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>

          <p className="text-center text-sm text-[var(--foreground-muted)] mt-4">
            {linkSubLabel}{" "}
            <Link href={linkHref} className="text-[var(--accent)] hover:underline font-medium">
              {linkLabel}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
