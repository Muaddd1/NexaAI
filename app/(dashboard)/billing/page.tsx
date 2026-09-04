"use client";

import { useState } from "react";
import { CreditCard, Zap, Download, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn, formatCurrency } from "@/lib/utils";

const plans = [
  { id: "free", name: "Free", price: 0, credits: "100", popular: false },
  { id: "pro", name: "Pro", price: 29, credits: "5,000", popular: true },
  { id: "business", name: "Business", price: 99, credits: "25,000", popular: false },
];

const invoices = [
  { id: "INV-2025-001", date: "Dec 1, 2025", amount: 290, status: "Paid" },
  { id: "INV-2025-002", date: "Nov 1, 2025", amount: 290, status: "Paid" },
  { id: "INV-2025-003", date: "Oct 1, 2025", amount: 290, status: "Paid" },
];

export default function BillingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Billing</h1>
        <p className="text-sm text-[var(--foreground-muted)] mt-0.5">Manage your subscription and billing.</p>
      </div>

      {/* Current plan */}
      <Card className="border-[var(--accent)]/30 bg-[var(--surface)]">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-[var(--accent)] text-[var(--accent-foreground)]">Pro Plan</Badge>
                <Badge variant="success" className="text-xs">Active</Badge>
              </div>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Your plan renews on <strong className="text-[var(--foreground)]">Dec 14, 2025</strong>
              </p>
              <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                Billed {isYearly ? "annually" : "monthly"} · {formatCurrency(290)} / year
              </p>
            </div>
            <Button variant="outline" size="sm">Manage Plan</Button>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>4,231</p>
              <p className="text-xs text-[var(--foreground-muted)]">Credits Used</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>769</p>
              <p className="text-xs text-[var(--foreground-muted)]">Credits Left</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>84%</p>
              <p className="text-xs text-[var(--foreground-muted)]">Usage</p>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={84} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Switch billing cycle */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="font-medium text-sm">Billing cycle</p>
            <p className="text-xs text-[var(--foreground-muted)] mt-0.5">
              Save up to 17% with annual billing
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className={cn("text-sm", !isYearly ? "text-[var(--foreground)] font-medium" : "text-[var(--foreground-muted)]")}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative w-11 h-6 rounded-full transition-colors",
                isYearly ? "bg-[var(--accent)]" : "bg-[var(--border)]"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  isYearly ? "translate-x-5.5" : "translate-x-0.5"
                )}
              />
            </button>
            <span className={cn("text-sm", isYearly ? "text-[var(--foreground)] font-medium" : "text-[var(--foreground-muted)]")}>
              Yearly <Badge variant="success" className="ml-1 text-[10px] h-4 px-1">-17%</Badge>
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Payment method */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)]">
            <div className="w-10 h-7 rounded bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">•••• •••• •••• 4242</p>
              <p className="text-xs text-[var(--foreground-muted)]">Expires 12/26</p>
            </div>
            <Button variant="ghost" size="sm">Update</Button>
          </div>
        </CardContent>
      </Card>

      {/* Invoice history */}
      <Card className="border-[var(--border)] bg-[var(--surface)]">
        <CardHeader>
          <CardTitle className="text-base">Invoice History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {invoices.map((invoice, i) => (
            <div key={invoice.id}>
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-medium">{invoice.id}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{invoice.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{formatCurrency(invoice.amount)}</span>
                  <Badge variant="success" className="text-[10px] h-4">{invoice.status}</Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              {i < invoices.length - 1 && <Separator className="mx-6" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
