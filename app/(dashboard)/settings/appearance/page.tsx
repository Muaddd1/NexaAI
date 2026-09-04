"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const themes = [
  { value: "light", icon: Sun, label: "Light", desc: "Clean and bright" },
  { value: "dark", icon: Moon, label: "Dark", desc: "Easy on the eyes" },
  { value: "system", icon: Monitor, label: "System", desc: "Match your OS" },
] as const;

export default function AppearancePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Appearance</h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Customize the look and feel of NexaAI.</p>
      </div>

      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardHeader>
          <CardTitle className="text-base">Theme</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {themes.map((t) => {
              const Icon = t.icon;
              const isActive = theme === t.value;
              return (
                <button
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all",
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)]/5"
                      : "border-[var(--border)] hover:border-[var(--foreground-subtle)]"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      isActive ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "bg-[var(--surface-elevated)] text-[var(--foreground-muted)]"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={cn("text-sm font-medium", isActive ? "text-[var(--accent)]" : "text-[var(--foreground)]")}>
                    {t.label}
                  </span>
                  <span className="text-xs text-[var(--foreground-muted)]">{t.desc}</span>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
