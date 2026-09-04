"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Wand2,
  FileText,
  History,
  BarChart2,
  Users,
  CreditCard,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  Zap,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard/overview" },
  { icon: MessageSquare, label: "AI Workspace", href: "/dashboard/ai-workspace" },
  { icon: Wand2, label: "Generator", href: "/dashboard/generator" },
  { icon: FileText, label: "Templates", href: "/dashboard/templates" },
  { icon: History, label: "History", href: "/dashboard/history" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
];

const secondaryItems = [
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications", badge: 3 },
  { icon: Settings, label: "Settings", href: "/dashboard/settings/profile" },
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const NavLink = ({ item }: { item: typeof navItems[0] | typeof secondaryItems[0] }) => {
    const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
    const Icon = item.icon;
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
        )}
      >
        <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-[var(--accent)]" : "")} />
        {!isCollapsed && (
          <>
            <span className="flex-1">{item.label}</span>
            {"badge" in item && item.badge && (
              <Badge variant="default" className="h-5 px-1.5 text-[10px]">
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full flex flex-col",
          "bg-[var(--surface)] border-r border-[var(--border)]",
          "transition-all duration-300 ease-in-out",
          "lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed ? "w-[72px]" : "w-64"
        )}
      >
        {/* Header */}
        <div className={cn(
          "flex items-center border-b border-[var(--border)] h-16 px-4",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="var(--surface-elevated)" stroke="var(--border)" strokeWidth="1" />
                <circle cx="16" cy="16" r="4" fill="var(--accent)" />
                <circle cx="8" cy="12" r="2" fill="var(--accent)" opacity="0.8" />
                <circle cx="24" cy="10" r="2" fill="var(--accent-secondary)" opacity="0.8" />
                <circle cx="8" cy="20" r="2" fill="var(--accent-secondary)" opacity="0.8" />
                <circle cx="24" cy="22" r="2" fill="var(--accent)" opacity="0.8" />
              </svg>
              <span className="font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                Nexa<span className="text-[var(--accent)]">AI</span>
              </span>
            </Link>
          )}
          {isCollapsed && (
            <div className="w-7 h-7 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <Zap className="w-4 h-4 text-[var(--accent-foreground)]" />
            </div>
          )}

          {/* Collapse toggle (desktop only) */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] text-[var(--foreground-muted)]"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
          </button>

          {/* Mobile close */}
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Plan badge */}
        {!isCollapsed && (
          <div className="mx-3 mt-3 mb-1">
            <div className="rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-2 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="text-xs font-medium text-[var(--accent)]">Pro Plan</span>
              <Badge variant="outline" className="ml-auto text-[10px] h-4 px-1.5 border-[var(--accent)]/30 text-[var(--accent)]">
                Active
              </Badge>
            </div>
          </div>
        )}

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* Secondary nav */}
        <div className="px-3 py-2 border-t border-[var(--border)] space-y-0.5">
          {secondaryItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>
      </aside>
    </>
  );
}
