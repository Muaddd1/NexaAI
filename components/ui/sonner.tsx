"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster({ ...props }) {
  return (
    <SonnerToaster
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--surface-elevated)] group-[.toaster]:border group-[.toaster]:border-[var(--border)] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[var(--foreground-muted)]",
          actionButton:
            "group-[.toast]:bg-[var(--accent)] group-[.toast]:text-[var(--accent-foreground)]",
          cancelButton:
            "group-[.toast]:bg-[var(--surface)] group-[.toast]:text-[var(--foreground-muted)]",
          success: "group-[.toaster]:border-[var(--success)]",
          error: "group-[.toaster]:border-[var(--destructive)]",
          warning: "group-[.toaster]:border-[var(--warning)]",
          info: "group-[.toaster]:border-[var(--accent)]",
        },
      }}
      {...props}
    />
  );
}
