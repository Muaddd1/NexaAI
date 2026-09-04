import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, Cpu, Wand2, Activity, Users, Zap, Clock, Plus } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = { title: "Overview" };

const stats = [
  { label: "AI Credits Used", value: "4,231", total: 5000, percent: 84, icon: Cpu, color: "var(--accent)" },
  { label: "Generations", value: "1,847", change: "+12%", icon: Wand2, color: "var(--accent-secondary)" },
  { label: "Active Projects", value: "23", change: "+3", icon: Activity, color: "var(--success)" },
  { label: "Team Members", value: "8", change: "+2", icon: Users, color: "var(--warning)" },
];

const recentActivity = [
  { user: "Sarah Chen", action: "Generated a blog post using GPT-4o", time: "2 min ago", type: "generation" },
  { user: "Marcus J.", action: "Created a new team workspace", time: "15 min ago", type: "team" },
  { user: "Priya P.", action: "Exported analytics report", time: "32 min ago", type: "analytics" },
  { user: "Alex K.", action: "Generated 50 ad copies", time: "1 hr ago", type: "generation" },
  { user: "Jordan L.", action: "Upgraded to Pro plan", time: "2 hr ago", type: "billing" },
  { user: "Taylor S.", action: "Invited 2 team members", time: "3 hr ago", type: "team" },
];

const quickActions = [
  { icon: Wand2, label: "New Generation", href: "/dashboard/generator", color: "var(--accent)" },
  { icon: Activity, label: "AI Workspace", href: "/dashboard/ai-workspace", color: "var(--accent-secondary)" },
  { icon: Clock, label: "View History", href: "/dashboard/history", color: "var(--success)" },
];

export default function OverviewPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Good morning, Jane 👋
          </h1>
          <p className="text-sm text-[var(--foreground-muted)] mt-0.5">
            Here&apos;s what&apos;s happening with your NexaAI workspace.
          </p>
        </div>
        <Button asChild>
          <a href="/dashboard/generator">
            <Plus className="w-4 h-4 mr-1.5" />
            New Generation
          </a>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-[var(--border)] bg-[var(--surface)]">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${stat.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: stat.color }} />
                  </div>
                  {"change" in stat && stat.change && (
                    <Badge variant="success" className="text-xs">{stat.change}</Badge>
                  )}
                </div>
                <p className="text-2xl font-bold mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--foreground-muted)]">{stat.label}</p>
                {"percent" in stat && stat.percent && (
                  <Progress value={stat.percent} className="mt-3 h-1.5" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Usage chart */}
        <Card className="lg:col-span-2 border-[var(--border)] bg-[var(--surface)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Usage Overview</CardTitle>
              <Badge variant="outline" className="text-xs">Last 30 days</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-1.5 h-40">
              {[35, 55, 45, 70, 60, 80, 65, 90, 75, 95, 80, 100, 85, 92, 78, 88, 95, 82, 90, 96, 85, 92, 88, 95, 90, 88, 94, 91, 97, 93].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-sm bg-gradient-to-t from-[var(--accent-secondary)] to-[var(--accent)] opacity-80 hover:opacity-100 transition-opacity"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-[var(--foreground-subtle)]">
              <span>Jan 1</span><span>Jan 8</span><span>Jan 15</span><span>Jan 22</span><span>Jan 30</span>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card className="border-[var(--border)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] hover:border-[var(--foreground-subtle)] hover:bg-[var(--surface-elevated)] transition-all group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${action.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: action.color }} />
                  </div>
                  <span className="text-sm font-medium flex-1">{action.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--foreground-subtle)] group-hover:text-[var(--foreground)] transition-colors" />
                </a>
              );
            })}

            {/* Billing summary */}
            <div className="mt-4 p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[var(--foreground-muted)]">Monthly spend</span>
                <Badge variant="outline" className="text-[10px] h-4">Pro plan</Badge>
              </div>
              <p className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {formatCurrency(290)}
              </p>
              <p className="text-xs text-[var(--foreground-muted)]">Billed annually · Next invoice Dec 14</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent activity */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Recent Activity</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <a href="/dashboard/history">View all</a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className="w-8 h-8 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{item.user}</span>{" "}
                    <span className="text-[var(--foreground-muted)]">{item.action}</span>
                  </p>
                </div>
                <span className="text-xs text-[var(--foreground-subtle)] shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
