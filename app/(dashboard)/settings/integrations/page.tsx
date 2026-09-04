"use client";

import { useState } from "react";
import { Plug, Check, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const integrations = [
  { id: "openai", name: "OpenAI", description: "GPT-4o, GPT-4o Mini, and more", connected: true, color: "#10a37f" },
  { id: "anthropic", name: "Anthropic", description: "Claude 3.5 Sonnet, Claude 3 Opus", connected: false, color: "#d4a574" },
  { id: "gemini", name: "Google Gemini", description: "Gemini Pro and Gemini Ultra", connected: false, color: "#4285f4" },
  { id: "slack", name: "Slack", description: "Get AI summaries in Slack", connected: false, color: "#4a154b" },
  { id: "discord", name: "Discord", description: "AI bot for your Discord server", connected: false, color: "#5865f2" },
  { id: "github", name: "GitHub", description: "AI-assisted code review", connected: true, color: "#24292e" },
  { id: "zapier", name: "Zapier", description: "Automate workflows with AI", connected: false, color: "#ff4a00" },
];

export default function IntegrationsPage() {
  const [items, setItems] = useState(integrations);

  const toggle = (id: string) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, connected: !item.connected } : item));
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Integrations</h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Connect NexaAI with your favorite tools.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="border-[var(--border)] bg-[var(--surface)]">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: item.color }}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm flex items-center gap-1.5">
                      {item.name}
                      {item.connected && <Check className="w-3.5 h-3.5 text-[var(--success)]" />}
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)] mt-0.5">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant={item.connected ? "outline" : "default"}
                  size="sm"
                  className="flex-1"
                  onClick={() => toggle(item.id)}
                >
                  {item.connected ? "Disconnect" : "Connect"}
                </Button>
                {item.connected && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
