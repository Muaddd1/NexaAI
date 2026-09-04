"use client";

import { useState } from "react";
import { AuthPageClient } from "../auth-page-client";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <AuthPageClient
        title="Check your email"
        description="We've sent a password reset link to your email"
        linkHref="/auth/login"
        linkLabel="Back to sign in"
        linkSubLabel="Remember your password?"
      >
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 border border-[var(--success)]/20 mx-auto flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-sm text-[var(--foreground-muted)]">
            We sent a password reset link to <strong className="text-[var(--foreground)]">{email}</strong>. Check your inbox and click the link to reset your password.
          </p>
          <Button variant="outline" className="w-full" onClick={() => setSubmitted(false)}>
            Resend email
          </Button>
        </div>
      </AuthPageClient>
    );
  }

  return (
    <AuthPageClient
      title="Reset your password"
      description="Enter your email and we'll send you a reset link"
      linkHref="/auth/login"
      linkLabel="Back to sign in"
      linkSubLabel="Remember your password?"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" isLoading={isLoading}>
          Send reset link
        </Button>
      </form>
    </AuthPageClient>
  );
}
