import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* NexaAI Logo SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Neural node background */}
        <circle cx="16" cy="16" r="15" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
        {/* Connection lines */}
        <line x1="8" y1="12" x2="14" y2="14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="24" y1="10" x2="18" y2="14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="8" y1="20" x2="14" y2="18" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="24" y1="22" x2="18" y2="18" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="16" y1="6" x2="16" y2="10" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="16" y1="22" x2="16" y2="26" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        {/* Nodes */}
        <circle cx="16" cy="16" r="4" fill="var(--accent)" />
        <circle cx="8" cy="12" r="2" fill="var(--accent)" opacity="0.8" />
        <circle cx="24" cy="10" r="2" fill="var(--accent-secondary)" opacity="0.8" />
        <circle cx="8" cy="20" r="2" fill="var(--accent-secondary)" opacity="0.8" />
        <circle cx="24" cy="22" r="2" fill="var(--accent)" opacity="0.8" />
        <circle cx="16" cy="6" r="1.5" fill="var(--accent)" opacity="0.5" />
        <circle cx="16" cy="26" r="1.5" fill="var(--accent-secondary)" opacity="0.5" />
      </svg>
      {/* Wordmark */}
      <span
        className="text-xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
      >
        Nexa
        <span style={{ color: "var(--accent)" }}>AI</span>
      </span>
    </div>
  );
}
