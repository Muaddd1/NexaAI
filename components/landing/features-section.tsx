"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  PenTool,
  Zap,
  BarChart2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/shared";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "message-square": MessageSquare,
  "pen-tool": PenTool,
  zap: Zap,
  "bar-chart-2": BarChart2,
  users: Users,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export function FeaturesSection() {
  return (
    <Section id="features" className="relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Powerful Features
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything you need to build with AI
          </h2>
          <p className="text-[var(--foreground-muted)] text-lg">
            From content generation to team collaboration — NexaAI gives you every tool
            you need to move faster and ship better products.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Sparkles;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card
                  className={cn(
                    "h-full border-[var(--border)] bg-[var(--surface)]",
                    "hover:border-[var(--accent)]/30 hover:shadow-glow transition-all duration-300",
                    "cursor-default group"
                  )}
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-5",
                        "bg-[var(--accent)]/10 text-[var(--accent)]",
                        "group-hover:bg-[var(--accent)]/20 transition-colors"
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
