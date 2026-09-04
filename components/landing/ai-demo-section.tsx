"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Send,
  Copy,
  RefreshCw,
  Check,
  ChevronDown,
} from "lucide-react";
import { Container, Section } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { AI_MODELS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const DEMO_RESPONSE = `Here's a complete landing page copy for **NexaAI**:

## Hero Section
**Headline:** AI that works at the speed of your ideas.
**Subheadline:** NexaAI helps teams create, analyze, automate, and scale their work using advanced AI.

## Features Grid
1. **AI Workspace** — A unified workspace where your team collaborates with AI
2. **AI Chat** — Chat with multiple AI models simultaneously
3. **Content Generation** — Generate blog posts, emails, and more in seconds
4. **Automation** — Automate repetitive tasks with AI-powered workflows
5. **Analytics** — Track AI usage, measure ROI, and optimize workflows
6. **Team Collaboration** — Invite your team and manage permissions

## Pricing
- **Free:** 100 AI credits/month
- **Pro:** $29/month — 5,000 AI credits
- **Business:** $99/month — 25,000 AI credits

## Call to Action
**Primary:** Start Building Free
**Secondary:** Explore Platform

---

Would you like me to generate any specific section in more detail?`;

export function AIDemoSection() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("gpt-4o");
  const [isGenerating, setIsGenerating] = useState(false);
  const [response, setResponse] = useState(DEMO_RESPONSE);
  const [copied, setCopied] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="demo" className="relative bg-[var(--surface)]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            See it in action
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Generate content in seconds
          </h2>
          <p className="text-[var(--foreground-muted)] text-lg">
            Just describe what you need. NexaAI handles the rest — from landing page copy to
            full marketing campaigns.
          </p>
        </motion.div>

        {/* AI Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-[var(--border)] bg-[var(--surface-elevated)] overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--surface)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm font-medium">NexaAI Assistant</span>
              </div>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger className="w-48 h-8 text-xs bg-[var(--surface-elevated)]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {AI_MODELS.map((m) => (
                    <SelectItem key={m.id} value={m.id}>
                      <div className="flex items-center justify-between w-full gap-4">
                        <span>{m.name}</span>
                        <span className="text-[var(--foreground-subtle)] text-xs">{m.credits} credits</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 min-h-[320px]">
              {/* User prompt */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--accent-secondary)] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">U</span>
                </div>
                <div className="flex-1 bg-[var(--surface)] rounded-xl rounded-tl-sm px-4 py-3 border border-[var(--border)]">
                  <p className="text-sm text-[var(--foreground)]">
                    Generate landing page copy for a new AI productivity tool targeting developers
                  </p>
                </div>
              </div>

              {/* AI response */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[var(--accent-foreground)]" />
                  </div>
                  <div className="flex-1 bg-[var(--accent)]/5 rounded-xl rounded-tr-sm px-4 py-3 border border-[var(--accent)]/20">
                    <div className="text-sm text-[var(--foreground)] prose prose-sm max-w-none prose-headings:font-heading prose-strong:text-[var(--foreground)] prose-code:text-[var(--accent)]">
                      {response.split("\n").map((line, i) => {
                        if (line.startsWith("## ")) return <h3 key={i} className="text-base font-bold mt-3 mb-1" style={{ fontFamily: "var(--font-heading)" }}>{line.replace("## ", "")}</h3>;
                        if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-sm mb-1">{line.replace(/\*\*/g, "")}</p>;
                        if (line.startsWith("- ")) return <p key={i} className="text-sm text-[var(--foreground-muted)] pl-3">• {line.replace("- ", "")}</p>;
                        if (line.startsWith("---")) return <hr key={i} className="border-[var(--border)] my-3" />;
                        if (line.trim() === "") return <br key={i} />;
                        return <p key={i} className="text-sm text-[var(--foreground-muted)]">{line}</p>;
                      })}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 mt-4">
                      <Button variant="ghost" size="sm" className="h-7 text-xs gap-1.5" onClick={handleCopy}>
                        {copied ? <Check className="w-3 h-3 text-[var(--success)]" /> : <Copy className="w-3 h-3" />}
                        {copied ? "Copied" : "Copy"}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 text-xs gap-1.5">
                        <RefreshCw className="w-3 h-3" />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Loading state */}
              {isGenerating && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[var(--accent-foreground)]" />
                  </div>
                  <div className="flex-1 bg-[var(--accent)]/5 rounded-xl rounded-tr-sm px-4 py-3 border border-[var(--accent)]/20">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                      <span className="text-sm text-[var(--foreground-muted)]">Generating...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[var(--border)]">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Describe what you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[48px] max-h-[120px] resize-none flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerate();
                    }
                  }}
                />
                <Button size="icon" className="shrink-0 h-[48px] w-12" onClick={handleGenerate} disabled={!prompt.trim() || isGenerating}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-[var(--foreground-subtle)] mt-2">
                Press Enter to generate · Shift + Enter for new line
              </p>
            </div>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
