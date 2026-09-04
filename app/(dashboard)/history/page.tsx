"use client";

import { useState } from "react";
import { Search, Copy, Eye, Trash2, Filter, FileText, Wand2, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const historyItems = [
  { id: "1", type: "generation", template: "Blog Post", prompt: "Write a blog post about the future of AI...", result: "The future of AI is transforming every industry...", model: "GPT-4o", date: "2 min ago", status: "success" },
  { id: "2", type: "generation", template: "Email", prompt: "Cold email for new SaaS product launch...", result: "Subject: Transform Your Workflow...", model: "Claude 3.5", date: "15 min ago", status: "success" },
  { id: "3", type: "chat", template: "AI Chat", prompt: "Explain quantum computing in simple terms", result: "Quantum computing uses quantum mechanics...", model: "GPT-4o", date: "1 hr ago", status: "success" },
  { id: "4", type: "generation", template: "Social Media", prompt: "LinkedIn post about remote work productivity", result: "5 proven strategies for remote work productivity...", model: "GPT-4o Mini", date: "2 hr ago", status: "success" },
  { id: "5", type: "generation", template: "SEO Article", prompt: "SEO article on best AI tools for startups", result: "Top 10 AI Tools Every Startup Needs...", model: "Claude 3.5", date: "3 hr ago", status: "failed" },
  { id: "6", type: "generation", template: "Advertisement", prompt: "Google Ads copy for a CRM software", result: "Streamline Your Sales Pipeline...", model: "GPT-4o", date: "5 hr ago", status: "success" },
];

const typeIcon: Record<string, React.ElementType> = {
  generation: Wand2,
  chat: FileText,
  email: Mail,
};

export default function HistoryPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = historyItems.filter((item) => {
    const matchesSearch = item.prompt.toLowerCase().includes(search.toLowerCase()) || item.template.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>History</h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">View and manage all your AI generations.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-muted)]" />
          <Input placeholder="Search history..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-36"><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="generation">Generation</SelectItem>
            <SelectItem value="chat">Chat</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-36"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const Icon = typeIcon[item.type] ?? Wand2;
          return (
            <Card key={item.id} className="border-[var(--border)] bg-[var(--surface)]">
              <CardContent className="p-4 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{item.template}</span>
                    <Badge variant={item.status === "success" ? "success" : "destructive"} className="text-[10px] h-4 px-1.5">{item.status}</Badge>
                    <span className="text-xs text-[var(--foreground-subtle)]">{item.model}</span>
                    <span className="text-xs text-[var(--foreground-subtle)] ml-auto">{item.date}</span>
                  </div>
                  <p className="text-xs text-[var(--foreground-muted)] mb-1">
                    <span className="font-medium text-[var(--foreground-subtle)]">Prompt:</span> {item.prompt}
                  </p>
                  <p className="text-xs text-[var(--foreground-subtle)] line-clamp-1">
                    <span className="font-medium text-[var(--foreground-subtle)]">Result:</span> {item.result}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--destructive)]">
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
