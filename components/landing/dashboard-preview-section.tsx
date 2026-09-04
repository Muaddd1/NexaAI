"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Activity, Users, Cpu, Zap } from "lucide-react";
import { Container, Section } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Monthly Revenue", value: "$12,450", change: "+18%", up: true, icon: ArrowUpRight },
  { label: "AI Usage", value: "84,231", change: "+12%", up: true, icon: Cpu },
  { label: "Generations", value: "23,847", change: "+8%", up: true, icon: Activity },
  { label: "Active Users", value: "1,234", change: "+5%", up: true, icon: Users },
];

const recentActivity = [
  { user: "Sarah Chen", action: "Generated a blog post", time: "2m ago", type: "generation" },
  { user: "Marcus J.", action: "Created a team workspace", time: "15m ago", type: "team" },
  { user: "Priya P.", action: "Exported analytics report", time: "32m ago", type: "analytics" },
  { user: "Alex K.", action: "Generated 50 ad copies", time: "1h ago", type: "generation" },
  { user: "Sarah Chen", action: "Upgraded to Pro plan", time: "2h ago", type: "billing" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function DashboardPreviewSection() {
  return (
    <Section className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Your command center
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Real-time insights, zero friction
          </h2>
          <p className="text-[var(--foreground-muted)] text-lg">
            Track your AI usage, monitor team activity, and measure ROI — all in one beautifully designed dashboard.
          </p>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <Card className="border-[var(--border)] bg-[var(--surface)] overflow-hidden">
            <CardHeader className="pb-4 border-b border-[var(--border)]">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Overview Dashboard</CardTitle>
                <span className="text-xs text-[var(--foreground-subtle)]">Last updated: just now</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-4 h-4 text-[var(--foreground-muted)]" />
                        <span
                          className={cn(
                            "text-xs font-medium flex items-center gap-0.5",
                            stat.up ? "text-[var(--success)]" : "text-[var(--destructive)]"
                          )}
                        >
                          {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-xl font-bold mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-[var(--foreground-muted)]">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Usage chart */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                  <p className="text-sm font-medium mb-4">Usage Over Time</p>
                  <div className="flex items-end gap-1.5 h-28">
                    {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-sm bg-gradient-to-t from-[var(--accent-secondary)] to-[var(--accent)] opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-[var(--foreground-subtle)]">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  </div>
                </div>

                {/* Recent activity */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                  <p className="text-sm font-medium mb-4">Recent Activity</p>
                  <div className="space-y-3">
                    {recentActivity.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                          <Zap className="w-3 h-3 text-[var(--accent)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--foreground)]">
                            <span className="font-medium">{item.user}</span>{" "}
                            <span className="text-[var(--foreground-muted)]">{item.action}</span>
                          </p>
                        </div>
                        <span className="text-[10px] text-[var(--foreground-subtle)] shrink-0">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
