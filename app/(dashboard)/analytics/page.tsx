"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Wand2, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Generations", value: "23,847", change: "+12%", icon: Wand2 },
  { label: "AI Credits Used", value: "4.2M", change: "+8%", icon: Cpu },
  { label: "Active Users", value: "1,234", change: "+5%", icon: Users },
  { label: "Growth", value: "+18%", change: "+3%", icon: TrendingUp },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("30d");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Analytics</h1>
          <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Track your AI usage and performance.</p>
        </div>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="12m">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-[var(--border)] bg-[var(--surface)]">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <Badge variant="success" className="text-xs">{stat.change}</Badge>
                </div>
                <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                <p className="text-xs text-[var(--foreground-muted)]">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="usage">
        <TabsList>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="models">By Model</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="mt-4">
          <Card className="border-[var(--border)] bg-[var(--surface)]">
            <CardHeader>
              <CardTitle className="text-base">AI Usage Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-1 h-48">
                {[45, 65, 55, 80, 70, 90, 75, 95, 82, 100, 88, 96, 85, 92, 78, 90, 95, 88, 94, 91, 97, 93, 89, 96, 92, 98, 95, 91, 97, 94].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-sm bg-gradient-to-t from-[var(--accent-secondary)] to-[var(--accent)] opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-[var(--foreground-subtle)]">
                <span>Jan 1</span><span>Jan 8</span><span>Jan 15</span><span>Jan 22</span><span>Jan 30</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="mt-4">
          <Card className="border-[var(--border)] bg-[var(--surface)]">
            <CardHeader><CardTitle className="text-base">Usage by Model</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "GPT-4o", percent: 42, color: "var(--accent)" },
                { name: "Claude 3.5 Sonnet", percent: 31, color: "var(--accent-secondary)" },
                { name: "GPT-4o Mini", percent: 18, color: "var(--success)" },
                { name: "Gemini Pro", percent: 9, color: "var(--warning)" },
              ].map((model) => (
                <div key={model.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{model.name}</span>
                    <span className="text-[var(--foreground-muted)]">{model.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--surface-elevated)] overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all")} style={{ width: `${model.percent}%`, backgroundColor: model.color }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="mt-4">
          <Card className="border-[var(--border)] bg-[var(--surface)]">
            <CardHeader><CardTitle className="text-base">Usage by Category</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Content Generation", percent: 38 },
                { name: "Marketing", percent: 27 },
                { name: "Sales & Outreach", percent: 19 },
                { name: "Developer Tools", percent: 11 },
                { name: "Other", percent: 5 },
              ].map((cat) => (
                <div key={cat.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{cat.name}</span>
                    <span className="text-[var(--foreground-muted)]">{cat.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--surface-elevated)] overflow-hidden">
                    <div className="h-full rounded-full bg-[var(--accent)] opacity-80" style={{ width: `${cat.percent}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
