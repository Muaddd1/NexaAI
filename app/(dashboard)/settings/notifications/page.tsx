"use client";

import { useState } from "react";
import { Bell, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const groups = [
  {
    label: "Account",
    notifications: [
      { id: "security", title: "Security alerts", desc: "Sign-ins from new devices" },
      { id: "billing", title: "Billing updates", desc: "Payment confirmations and failures" },
      { id: "password", title: "Password changes", desc: "When your password is updated" },
    ],
  },
  {
    label: "Usage",
    notifications: [
      { id: "credits", title: "Credit alerts", desc: "When you reach 80% and 100% of your limit" },
      { id: "usage", title: "Weekly usage report", desc: "Summary of your AI usage each week" },
      { id: "model", title: "New model releases", desc: "When new AI models become available" },
    ],
  },
  {
    label: "Team",
    notifications: [
      { id: "member", title: "Member invites", desc: "When someone joins or leaves your workspace" },
      { id: "admin", title: "Admin actions", desc: "Changes to team settings and roles" },
    ],
  },
];

export default function NotificationsPage() {
  const [settings, setSettings] = useState<Record<string, boolean>>(
    Object.fromEntries(groups.flatMap((g) => g.notifications.map((n) => [n.id, true])))
  );

  const toggle = (id: string) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allEnabled = Object.values(settings).every(Boolean);
  const noneEnabled = Object.values(settings).every((v) => !v);

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Notifications</h1>
          <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Choose what updates you receive.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => setSettings((prev) => Object.fromEntries(Object.keys(prev).map((k) => [k, true])))}>
            Enable all
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setSettings((prev) => Object.fromEntries(Object.keys(prev).map((k) => [k, false])))}>
            Disable all
          </Button>
        </div>
      </div>

      {groups.map((group) => (
        <Card key={group.label} className="border-[var(--border)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-base">{group.label}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {group.notifications.map((notif, i) => (
              <div key={notif.id}>
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-medium">{notif.title}</p>
                    <p className="text-xs text-[var(--foreground-muted)]">{notif.desc}</p>
                  </div>
                  <Switch checked={settings[notif.id]} onCheckedChange={() => toggle(notif.id)} />
                </div>
                {i < group.notifications.length - 1 && <Separator className="mx-6" />}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
