"use client";

import { useState } from "react";
import { Search, FileText, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TEMPLATES, TEMPLATE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  "file-text": FileText,
  "share-2": Star,
  "shopping-bag": Star,
  mail: Star,
  megaphone: Star,
  search: Star,
  youtube: Star,
  layout: Star,
};

export default function TemplatesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [previewId, setPreviewId] = useState<string | null>(null);

  const filtered = TEMPLATES.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || t.category === category;
    return matchesSearch && matchesCategory;
  });

  const preview = TEMPLATES.find((t) => t.id === previewId);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Templates</h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Browse and use pre-built content templates.</p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-muted)]" />
          <Input placeholder="Search templates..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Tabs defaultValue="all" onValueChange={setCategory}>
          <TabsList className="flex flex-wrap h-auto gap-1">
            {TEMPLATE_CATEGORIES.slice(0, 5).map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value} className="text-xs">{cat.label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t) => {
          const Icon = iconMap[t.icon] ?? FileText;
          return (
            <Card key={t.id} className="border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all group">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {t.isPopular && <Badge variant="default" className="text-[10px] h-4 px-1.5">Popular</Badge>}
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toggleFavorite(t.id)}>
                      <Star className={cn("w-3.5 h-3.5", favorites.includes(t.id) ? "fill-[var(--warning)] text-[var(--warning)]" : "text-[var(--foreground-muted)]")} />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{t.name}</h3>
                <p className="text-xs text-[var(--foreground-muted)] mb-4 line-clamp-2">{t.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={() => setPreviewId(t.id)}>
                    <Eye className="w-3 h-3 mr-1" /> Preview
                  </Button>
                  <Button size="sm" className="flex-1 text-xs" asChild>
                    <a href="/dashboard/generator">Use Template</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Preview dialog */}
      <Dialog open={!!previewId} onOpenChange={() => setPreviewId(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{preview?.name}</DialogTitle>
            <DialogDescription>{preview?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium text-[var(--foreground-muted)] mb-2">Template Fields</p>
              {preview?.fields.map((f) => (
                <div key={f.name} className="flex items-center gap-2 text-sm mb-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  {f.label} <span className="text-[var(--foreground-subtle)]">({f.type})</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--foreground-muted)]">
              Preview text would appear here showing how the generated content will look.
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="flex-1" asChild onClick={() => setPreviewId(null)}>
              <a href="/dashboard/generator">Use This Template</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
