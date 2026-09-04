"use client";

import { useState } from "react";
import { Shield, Key, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export default function SecurityPage() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSaving(false);
    toast.success("Security settings updated");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Security</h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Manage your account security.</p>
      </div>

      {/* Change password */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Key className="w-4 h-4" /> Change Password
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirm">Confirm new password</Label>
            <Input id="confirm" type="password" placeholder="••••••••" />
          </div>
          <Button onClick={handleSave} isLoading={isSaving}>
            <Shield className="w-4 h-4 mr-1.5" />
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* 2FA */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="font-medium text-sm">Two-factor authentication</p>
            <p className="text-xs text-[var(--foreground-muted)] mt-0.5">Add an extra layer of security to your account.</p>
          </div>
          <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
        </CardContent>
      </Card>
    </div>
  );
}
