"use client";

import { useState } from "react";
import { AuthPageClient } from "../auth-page-client";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link2, Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast.success("Account created! Check your email to verify your account.");
    setTimeout(() => { window.location.href = "/auth/verify-email"; }, 1500);
  };

  return (
    <AuthPageClient
      title="Create your account"
      description="Start building with NexaAI for free"
      linkHref="/auth/login"
      linkLabel="Sign in"
      linkSubLabel="Already have an account?"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* OAuth buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button type="button" variant="outline" className="w-full">
            <Link2 className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button type="button" variant="outline" className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            Google
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[var(--surface)] px-2 text-[var(--foreground-muted)]">or continue with email</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-[var(--foreground-subtle)]">Must be at least 8 characters</p>
          </div>
        </div>

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Create account
        </Button>

        <p className="text-xs text-center text-[var(--foreground-muted)]">
          By creating an account, you agree to our{" "}
          <Link href="/" className="text-[var(--accent)] hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/" className="text-[var(--accent)] hover:underline">Privacy Policy</Link>.
        </p>
      </form>
    </AuthPageClient>
  );
}
