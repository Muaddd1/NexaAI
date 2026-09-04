"use client";

import { useState } from "react";
import { Wand2, Copy, Download, Check, FileText, Share2, Mail, Search, BarChart2, Video, Layout, ShoppingBag, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TEMPLATES, TEMPLATE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  "file-text": FileText,
  "share-2": Share2,
  "shopping-bag": ShoppingBag,
  mail: Mail,
  megaphone: Megaphone,
  search: Search,
  youtube: Video,
  layout: Layout,
};

const toneOptions = ["Professional", "Friendly", "Casual", "Formal", "Persuasive", "Humorous"];
const lengthOptions = ["Short", "Medium", "Long", "Very Long"];
const languageOptions = ["English", "Spanish", "French", "German", "Portuguese", "Arabic"];

export default function GeneratorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");
  const [language, setLanguage] = useState("English");
  const [topic, setTopic] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [category, setCategory] = useState("all");

  const template = TEMPLATES.find((t) => t.id === selectedTemplate);

  const handleGenerate = async () => {
    if (!topic && !customInput) return;
    setIsGenerating(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 2500));
    setResult(
      `## Generated Content\n\nBased on your input "${topic || customInput}", here's a professionally crafted ${template?.name || "content"} in ${tone} tone, ${length.toLowerCase()} length, in ${language}.\n\n---\n\n**Introduction:**\nStart with a compelling hook that captures attention immediately. Address the pain point your audience experiences and position your solution as the answer.\n\n**Main Content:**\nDevelop your core message with clear, actionable points. Use evidence and social proof to build credibility. Break complex ideas into digestible sections.\n\n**Conclusion:**\nEnd with a strong call-to-action that drives the desired response. Make the next step crystal clear and frictionless.\n\n---\n\n*Generated with NexaAI · ${new Date().toLocaleDateString()}*`
    );
    setIsGenerating(false);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const filteredTemplates = category === "all"
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.category === category);

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          Content Generator
        </h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">
          Choose a template and generate professional content in seconds.
        </p>
      </div>

      {/* Credits bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-[var(--foreground-muted)]">AI Credits</span>
            <span className="text-xs font-medium text-[var(--accent)]">4,231 / 5,000</span>
          </div>
          <Progress value={84} className="h-2" />
        </div>
        <Button variant="outline" size="sm">Upgrade Plan</Button>
      </div>

      {/* Templates grid */}
      {!selectedTemplate && (
        <div>
          <Tabs defaultValue="all" onValueChange={setCategory}>
            <TabsList className="mb-4 flex flex-wrap h-auto gap-1">
              {TEMPLATE_CATEGORIES.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value} className="text-xs">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {TEMPLATE_CATEGORIES.map((cat) => (
              <TabsContent key={cat.value} value={cat.value} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredTemplates.map((t) => {
                    const Icon = iconMap[t.icon] ?? FileText;
                    return (
                      <Card
                        key={t.id}
                        className={cn(
                          "cursor-pointer transition-all hover:border-[var(--accent)]/30 hover:shadow-glow",
                          "border-[var(--border)] bg-[var(--surface)]"
                        )}
                        onClick={() => setSelectedTemplate(t.id)}
                      >
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-sm">{t.name}</p>
                              {t.isPopular && <Badge variant="default" className="text-[10px] h-4 px-1.5">Popular</Badge>}
                            </div>
                            <p className="text-xs text-[var(--foreground-muted)] mt-0.5 line-clamp-2">{t.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {/* Generator form */}
      {selectedTemplate && template && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => { setSelectedTemplate(null); setResult(null); }}>
              ← Back to templates
            </Button>
            <Badge variant="outline">{template.name}</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Form */}
            <Card className="border-[var(--border)] bg-[var(--surface)]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{template.name}</CardTitle>
                <p className="text-xs text-[var(--foreground-muted)]">{template.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {template.fields.map((field) => (
                  <div key={field.name} className="space-y-1.5">
                    <Label className="text-xs">{field.label}</Label>
                    {field.type === "text" || field.type === "textarea" ? (
                      field.type === "textarea" ? (
                        <Textarea
                          placeholder={field.placeholder}
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          rows={3}
                        />
                      ) : (
                        <Input
                          placeholder={field.placeholder}
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                        />
                      )
                    ) : (
                      <Select value={field.type === "tone" ? tone : field.type === "length" ? length : language}
                        onValueChange={field.type === "tone" ? setTone : field.type === "length" ? setLength : setLanguage}>
                        <SelectTrigger className="h-9">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {(field.options ?? (field.type === "tone" ? toneOptions : field.type === "length" ? lengthOptions : languageOptions)).map((opt) => (
                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                ))}
                <Button className="w-full" onClick={handleGenerate} isLoading={isGenerating} disabled={!topic && !customInput}>
                  <Wand2 className="w-4 h-4 mr-1.5" />
                  Generate Content
                </Button>
              </CardContent>
            </Card>

            {/* Result */}
            <Card className="border-[var(--border)] bg-[var(--surface)]">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Generated Result</CardTitle>
                  {result && (
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
                        {copied ? <Check className="w-4 h-4 text-[var(--success)]" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] p-4 text-sm text-[var(--foreground-muted)] whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto">
                    {result.split("\n").map((line, i) => {
                      if (line.startsWith("## ")) return <h3 key={i} className="text-base font-bold text-[var(--foreground)] mt-3 first:mt-0" style={{ fontFamily: "var(--font-heading)" }}>{line.replace("## ", "")}</h3>;
                      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-[var(--foreground)] mt-2">{line.replace(/\*\*/g, "")}</p>;
                      if (line.startsWith("- ")) return <p key={i} className="text-sm pl-3 mt-1">• {line.replace("- ", "")}</p>;
                      if (line.startsWith("---")) return <hr key={i} className="border-[var(--border)] my-3" />;
                      if (line.startsWith("*") && line.endsWith("*")) return <p key={i} className="text-xs text-[var(--foreground-subtle)] italic mt-2">{line.replace(/\*/g, "")}</p>;
                      if (line.trim() === "") return <br key={i} />;
                      return <p key={i} className="text-sm">{line}</p>;
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center mb-4">
                      <Wand2 className="w-8 h-8 text-[var(--foreground-subtle)]" />
                    </div>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      Fill in the form and click<br />&ldquo;Generate Content&rdquo; to see results
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
