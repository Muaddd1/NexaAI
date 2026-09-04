"use client";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <div
      className={cn(
        "relative w-full py-2.5 px-4 border-b border-[var(--border)]",
        "bg-[var(--surface)] overflow-hidden"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/5 via-transparent to-[var(--accent-secondary)]/5" />
      <Container className="relative flex items-center justify-center gap-4 text-sm">
        {/* Animated dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
        </span>
        <span className="text-[var(--foreground-muted)]">
          <span className="font-medium text-[var(--foreground)]">NexaAI 2.0 is here</span> — Faster models, lower prices, and new automation features.{" "}
        </span>
        <Button variant="link" size="sm" className="text-[var(--accent)] h-auto p-0 text-sm font-medium">
          Learn more →
        </Button>
      </Container>
    </div>
  );
}
