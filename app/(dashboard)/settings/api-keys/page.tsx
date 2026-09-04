"use client";

import { useState } from "react";
import { Key, Copy, Trash2, Plus, Eye, EyeOff, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { formatRelativeTime, truncateKey } from "@/lib/utils";
import { toast } from "sonner";

const keys: { id: string; name: string; key: string; createdAt: Date; lastUsed: Date | undefined }[] = [
  { id: "1", name: "Production API Key", key: "nexa_live_sk_8x9f2h7j4k3l6m8n1p2q5r9s0t", createdAt: new Date("2025-11-01"), lastUsed: new Date("2025-12-13") },
  { id: "2", name: "Development Key", key: "nexa_test_sk_4a7b2c5d8e1f3g6h9i0j2k4l7m", createdAt: new Date("2025-10-15"), lastUsed: new Date("2025-12-10") },
];

export default function ApiKeysPage() {
  const [createOpen, setCreateOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [showKey, setShowKey] = useState<string | null>(null);
  const [keysList, setKeysList] = useState(keys);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleRevoke = (id: string) => {
    setKeysList((prev) => prev.filter((k) => k.id !== id));
    toast.success("API key revoked");
  };

  const handleCreate = () => {
    const newKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: `nexa_live_sk_${Math.random().toString(36).slice(2, 30)}`,
      createdAt: new Date(),
      lastUsed: undefined,
    };
    setKeysList((prev) => [newKey, ...prev]);
    setShowKey(newKey.key);
    setNewKeyName("");
    setCreateOpen(false);
    toast.success("API key created");
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>API Keys</h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Manage your API keys for programmatic access.</p>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 p-4 rounded-lg border border-[var(--warning)]/20 bg-[var(--warning)]/5">
        <AlertTriangle className="w-4 h-4 text-[var(--warning)] shrink-0 mt-0.5" />
        <div className="text-xs text-[var(--foreground-muted)]">
          <strong className="text-[var(--warning)]">Keep your keys secret.</strong> Do not share them in public repositories or client-side code. API keys grant full access to your account.
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={() => setCreateOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          Create New Key
        </Button>
      </div>

      {/* Keys list */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Key className="w-4 h-4" /> Your API Keys
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {keysList.map((key, i) => (
            <div key={key.id}>
              <div className="flex items-center gap-4 px-6 py-4">
                <div className="flex-1">
                  <p className="font-medium text-sm">{key.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="text-xs text-[var(--foreground-muted)] bg-[var(--surface-elevated)] px-2 py-1 rounded">
                      {truncateKey(showKey === key.key ? key.key : key.key)}
                    </code>
                    {showKey === key.key && (
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowKey(null)}>
                        <EyeOff className="w-3 h-3" />
                      </Button>
                    )}
                    {showKey !== key.key && (
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowKey(key.key)}>
                        <Eye className="w-3 h-3" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleCopy(key.key)}>
                      {copied === key.key ? <span className="text-[var(--success)] text-[10px]">Copied!</span> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                  <div className="flex gap-4 mt-1">
                    <span className="text-[10px] text-[var(--foreground-subtle)]">Created {formatRelativeTime(key.createdAt)}</span>
                    {key.lastUsed && <span className="text-[10px] text-[var(--foreground-subtle)]">Last used {formatRelativeTime(key.lastUsed)}</span>}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-[var(--destructive)]" onClick={() => handleRevoke(key.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              {i < keysList.length - 1 && <div className="mx-6 h-px bg-[var(--border)]" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Create dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create API Key</DialogTitle>
            <DialogDescription>Give your API key a descriptive name to identify its purpose.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Key name</label>
              <Input
                placeholder="e.g. Production API Key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => setCreateOpen(false)}>Cancel</Button>
              <Button className="flex-1" onClick={handleCreate} disabled={!newKeyName}>Create Key</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
