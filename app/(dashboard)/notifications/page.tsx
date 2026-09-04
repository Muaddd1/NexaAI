"use client";

import { useState } from "react";
import { Bell, CheckCheck, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const notifications = [
  { id: "1", title: "Welcome to NexaAI!", description: "Get started by exploring our AI workspace and templates.", type: "success", read: false, time: "2 min ago" },
  { id: "2", title: "Your weekly usage report is ready", description: "You generated 1,847 pieces of content this week. View your full analytics.", type: "info", read: false, time: "1 hr ago" },
  { id: "3", title: "New AI model available: GPT-4o", description: "We've added GPT-4o to your account. Enjoy improved accuracy and reasoning.", type: "info", read: false, time: "3 hr ago" },
  { id: "4", title: "Sarah Chen joined your team", description: "sarah@nexaai.com is now a member of your workspace.", type: "success", read: true, time: "1 day ago" },
  { id: "5", title: "Credit limit reached warning", description: "You've used 90% of your monthly credits. Consider upgrading to Pro.", type: "warning", read: true, time: "2 days ago" },
  { id: "6", title: "Payment successful", description: "Your Pro plan subscription of $29.00 has been renewed.", type: "success", read: true, time: "3 days ago" },
];

const typeStyles: Record<string, string> = {
  success: "bg-[var(--success)]/10 text-[var(--success)]",
  info: "bg-[var(--accent)]/10 text-[var(--accent)]",
  warning: "bg-[var(--warning)]/10 text-[var(--warning)]",
  error: "bg-[var(--destructive)]/10 text-[var(--destructive)]",
};

export default function NotificationsPage() {
  const [items, setItems] = useState(notifications);

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setItems((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  };

  const clearAll = () => {
    setItems([]);
  };

  const unreadCount = items.filter((n) => !n.read).length;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Notifications</h1>
          <p className="text-sm text-[var(--foreground-muted)] mt-0.5">
            {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}` : "All caught up!"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={markAllRead} disabled={unreadCount === 0}>
            <CheckCheck className="w-4 h-4 mr-1.5" />
            Mark all read
          </Button>
          <Button variant="ghost" size="sm" onClick={clearAll} disabled={items.length === 0}>
            <Trash2 className="w-4 h-4 mr-1.5" />
            Clear all
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((notif) => (
          <Card
            key={notif.id}
            className={cn(
              "border-[var(--border)] bg-[var(--surface)] transition-all cursor-pointer",
              !notif.read && "border-l-2 border-l-[var(--accent)] border-l-2"
            )}
            onClick={() => markRead(notif.id)}
          >
            <CardContent className="p-4 flex items-start gap-3">
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", typeStyles[notif.type])}>
                <Bell className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className={cn("text-sm font-medium", !notif.read ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]")}>
                    {notif.title}
                  </p>
                  {!notif.read && <div className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />}
                </div>
                <p className="text-xs text-[var(--foreground-muted)] mt-0.5">{notif.description}</p>
                <p className="text-[10px] text-[var(--foreground-subtle)] mt-1">{notif.time}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
