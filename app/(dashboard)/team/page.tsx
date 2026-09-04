"use client";

import { useState } from "react";
import { Users, Plus, Shield, Mail, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const members = [
  { id: "1", name: "Jane Doe", email: "jane@nexaai.com", role: "owner", status: "active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane", usage: 2400 },
  { id: "2", name: "Sarah Chen", email: "sarah@nexaai.com", role: "admin", status: "active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah", usage: 1200 },
  { id: "3", name: "Marcus Johnson", email: "marcus@nexaai.com", role: "member", status: "active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus", usage: 800 },
  { id: "4", name: "Priya Patel", email: "priya@nexaai.com", role: "member", status: "active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya", usage: 500 },
  { id: "5", name: "Alex Kim", email: "alex@nexaai.com", role: "viewer", status: "invited", avatar: "", usage: 0 },
];

const roleColors: Record<string, string> = {
  owner: "var(--warning)",
  admin: "var(--accent-secondary)",
  member: "var(--accent)",
  viewer: "var(--foreground-muted)",
};

export default function TeamPage() {
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("member");

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Team</h1>
          <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Manage your team members and roles.</p>
        </div>
        <Button onClick={() => setInviteOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          Invite Member
        </Button>
      </div>

      {/* Team usage */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardContent className="p-5 flex items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">Team Usage This Month</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full bg-[var(--surface-elevated)] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] rounded-full" style={{ width: "49%" }} />
              </div>
              <span className="text-sm font-medium">4,900 / 10,000 credits</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Members list */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardHeader>
          <CardTitle className="text-base">Team Members ({members.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {members.map((member, i) => (
            <div key={member.id}>
              <div className="flex items-center gap-4 px-6 py-4 hover:bg-[var(--surface-elevated)] transition-colors">
                <Avatar className="w-10 h-10 shrink-0">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{member.name}</p>
                    {member.role === "owner" && <Shield className="w-3.5 h-3.5 text-[var(--warning)]" />}
                  </div>
                  <p className="text-xs text-[var(--foreground-muted)]">{member.email}</p>
                </div>
                <Badge
                  variant="outline"
                  className="shrink-0 text-xs"
                  style={{ borderColor: roleColors[member.role], color: roleColors[member.role] }}
                >
                  {member.role}
                </Badge>
                <Badge
                  variant="outline"
                  className="shrink-0 text-[10px] h-4 px-1.5"
                >
                  {member.status === "active" ? `${(member.usage / 1000).toFixed(1)}K credits` : member.status}
                </Badge>
                {member.role !== "owner" && (
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--destructive)] shrink-0">
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
              {i < members.length - 1 && <Separator className="mx-6" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Invite dialog */}
      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite Team Member</DialogTitle>
            <DialogDescription>Send an invitation to join your NexaAI workspace.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-muted)]" />
                <Input
                  type="email"
                  placeholder="colleague@company.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Role</label>
              <Select value={inviteRole} onValueChange={setInviteRole}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin — Full access</SelectItem>
                  <SelectItem value="member">Member — Can use AI</SelectItem>
                  <SelectItem value="viewer">Viewer — Read only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => setInviteOpen(false)}>Cancel</Button>
              <Button className="flex-1" disabled={!inviteEmail}>Send Invite</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
