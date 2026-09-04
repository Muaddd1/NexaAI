"use client";

import { AuthPageClient } from "../auth-page-client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function VerifyEmailPage() {
  const handleResend = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Verification email sent! Check your inbox.");
  };

  return (
    <AuthPageClient
      title="Verify your email"
      description="We've sent a verification link to your email address"
      linkHref="/auth/login"
      linkLabel="Back to sign in"
      linkSubLabel=""
    >
      <div className="text-center space-y-4 py-4">
        <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mx-auto flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm text-[var(--foreground-muted)]">
          Click the link in the email we sent to verify your account. The link expires in 24 hours.
        </p>
        <p className="text-xs text-[var(--foreground-subtle)]">
          Didn't receive the email? Check your spam folder or click below to resend.
        </p>
        <Button variant="outline" className="w-full" onClick={handleResend}>
          Resend verification email
        </Button>
      </div>
    </AuthPageClient>
  );
}
