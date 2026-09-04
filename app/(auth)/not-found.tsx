"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-6">
      <div className="text-center max-w-md">
        <div
          className="text-[120px] font-black leading-none select-none mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Page not found
        </h1>
        <p className="text-[var(--foreground-muted)] text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </Button>
          <Button asChild>
            <Link href="/login">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go to login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
