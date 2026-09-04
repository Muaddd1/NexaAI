"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Search, Send, Copy, Check, ThumbsUp, ThumbsDown, Square, Sparkles, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AI_MODELS } from "@/lib/constants";

const conversations = [
  { id: "1", title: "Blog post about AI in healthcare", date: "2h ago", active: true },
  { id: "2", title: "Landing page copy for fintech startup", date: "5h ago", active: false },
  { id: "3", title: "Email sequence for product launch", date: "1d ago", active: false },
  { id: "4", title: "SEO article on remote work trends", date: "2d ago", active: false },
];

const DEMO_MESSAGES = [
  {
    role: "user",
    content: "Write a compelling landing page headline for an AI-powered code review tool targeting senior developers",
  },
  {
    role: "assistant",
    content: `Here are 5 compelling landing page headlines for your AI-powered code review tool:

1. **"Ship Code Without the Worry — AI That Reviews Before You Merge"**
2. **"Your Senior Dev Is Always In. AI-Powered Code Review, 24/7."**
3. **"Catch Bugs Before They Catch You. AI Code Review That Thinks Like Your Best Engineer."**
4. **"Code Review at the Speed of Thought — Powered by AI."**
5. **"What if Every PR Had a 10x Engineer Reviewing It?"**

Each headline targets a different angle: peace of mind, availability, quality, speed, and aspiration. I'd recommend option 1 or 4 for most audiences, and option 5 for senior developers who want to feel empowered.

Want me to expand any of these into full hero copy?`,
  },
];

export default function AIWorkspacePage() {
  const [model, setModel] = useState("gpt-4o");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(DEMO_MESSAGES);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsGenerating(true);

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "I'm generating a response based on your request. The AI is thinking through the best approach...\n\nHere's a comprehensive answer tailored to your needs:\n\n**Key Points:**\n- First insight about your query\n- Second consideration to keep in mind\n- Third recommendation for best results\n\nWould you like me to elaborate on any of these points?",
      },
    ]);
    setIsGenerating(false);
  };

  return (
    <div className="flex h-full gap-0 -m-4 sm:-m-6">
      {/* Conversation sidebar */}
      <div
        className={cn(
          "flex flex-col border-r border-[var(--border)] bg-[var(--surface)] w-64 shrink-0 transition-all",
          sidebarOpen ? "hidden md:flex" : "hidden"
        )}
      >
        <div className="p-3 border-b border-[var(--border)]">
          <Button className="w-full justify-start gap-2" size="sm">
            <Plus className="w-4 h-4" />
            New Chat
          </Button>
        </div>
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--foreground-muted)]" />
            <Input placeholder="Search..." className="pl-8 h-8 text-xs" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-xs transition-colors",
                conv.active
                  ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "text-[var(--foreground-muted)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
              )}
            >
              <p className="font-medium line-clamp-1">{conv.title}</p>
              <p className="text-[10px] mt-0.5 opacity-60">{conv.date}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Sparkles className="w-4 h-4" />
            </Button>
            <h2 className="font-medium text-sm">NexaAI Assistant</h2>
          </div>
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="w-44 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {AI_MODELS.map((m) => (
                <SelectItem key={m.id} value={m.id} className="text-xs">
                  {m.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className="flex gap-3">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarFallback className={msg.role === "assistant" ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "bg-[var(--accent-secondary)] text-white"}>
                  {msg.role === "assistant" ? "AI" : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    msg.role === "assistant"
                      ? "bg-[var(--surface)] border border-[var(--border)] rounded-tl-sm"
                      : "bg-[var(--accent)] text-[var(--accent-foreground)] rounded-tr-sm"
                  )}
                >
                  {msg.content.split("\n").map((line, j) => {
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return <p key={j} className="font-semibold mt-2 first:mt-0">{line.replace(/\*\*/g, "")}</p>;
                    }
                    if (line.startsWith("- ")) {
                      return <p key={j} className="text-sm opacity-90 pl-3 mt-1">• {line.replace("- ", "")}</p>;
                    }
                    if (line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") || line.startsWith("4.") || line.startsWith("5.")) {
                      return <p key={j} className="text-sm opacity-90 mt-1">{line}</p>;
                    }
                    if (line.trim() === "") return <br key={j} />;
                    return <p key={j} className="text-sm opacity-90">{line}</p>;
                  })}
                </div>

                {/* Message actions */}
                {msg.role === "assistant" && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => { navigator.clipboard.writeText(msg.content); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
                      {copied ? <Check className="w-3 h-3 text-[var(--success)]" /> : <Copy className="w-3 h-3" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <ThumbsUp className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <ThumbsDown className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isGenerating && (
            <div className="flex gap-3">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarFallback className="bg-[var(--accent)] text-[var(--accent-foreground)]">AI</AvatarFallback>
              </Avatar>
              <div className="rounded-2xl rounded-tl-sm bg-[var(--surface)] border border-[var(--border)] px-4 py-3">
                <div className="flex gap-1">
                  {[0, 150, 300].map((d) => (
                    <div key={d} className="w-2 h-2 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="flex gap-2">
            <Input
              placeholder="Ask NexaAI anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            />
            {isGenerating ? (
              <Button size="icon" variant="outline" onClick={() => setIsGenerating(false)}>
                <Square className="w-4 h-4" />
              </Button>
            ) : (
              <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            )}
          </div>
          <p className="text-[10px] text-[var(--foreground-subtle)] mt-1.5">
            NexaAI can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
}
