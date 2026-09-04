"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section id="pricing">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Simple pricing
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Start free. Scale when ready.
          </h2>
          <p className="text-[var(--foreground-muted)] text-lg mb-8">
            No hidden fees. No surprises. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                !isYearly
                  ? "bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-sm"
                  : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                isYearly
                  ? "bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-sm"
                  : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              )}
            >
              Yearly
              <Badge variant="success" className="text-[10px] px-1.5 py-0.5">-17%</Badge>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
            >
              <Card
                className={cn(
                  "relative h-full border-[var(--border)] bg-[var(--surface)]",
                  plan.isPopular
                    ? "border-[var(--accent)]/50 shadow-[0_0_40px_rgba(0,212,255,0.1)]"
                    : ""
                )}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="text-xs px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pt-8 pb-4">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl font-extrabold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      ${isYearly ? Math.round(plan.price.yearly / 12) : plan.price.monthly}
                    </span>
                    <span className="text-[var(--foreground-muted)]">/month</span>
                  </div>
                  {isYearly && plan.price.yearly > 0 && (
                    <p className="text-xs text-[var(--foreground-muted)] mt-1">
                      Billed ${plan.price.yearly}/year
                    </p>
                  )}
                  {plan.price.monthly === 0 && (
                    <p className="text-xs text-[var(--foreground-muted)] mt-1">Free forever</p>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                        <span className="text-[var(--foreground-muted)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <a href="/auth/register">
                      {plan.price.monthly === 0 ? "Get Started Free" : "Start Free Trial"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="text-center text-sm text-[var(--foreground-muted)] mt-8"
        >
          All plans include a 14-day money-back guarantee. No credit card required for free plan.
        </motion.p>
      </Container>
    </Section>
  );
}
