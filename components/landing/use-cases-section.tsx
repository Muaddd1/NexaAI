"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Code,
  TrendingUp,
  Headphones,
  Edit3,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/shared";
import { Card, CardContent } from "@/components/ui/card";
import { USE_CASES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  code: Code,
  "trending-up": TrendingUp,
  headphones: Headphones,
  "edit-3": Edit3,
  briefcase: Briefcase,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export function UseCasesSection() {
  return (
    <Section id="use-cases">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Built for every team
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            AI that fits your workflow
          </h2>
          <p className="text-[var(--foreground-muted)] text-lg">
            Whether you&apos;re in marketing, engineering, sales, or operations — NexaAI adapts to how your team works.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {USE_CASES.map((useCase, i) => {
            const Icon = iconMap[useCase.icon] ?? Edit3;
            return (
              <motion.div
                key={useCase.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card
                  className={cn(
                    "p-5 h-full cursor-default group",
                    "border-[var(--border)] bg-[var(--surface)]",
                    "hover:border-[var(--accent)]/30 transition-all duration-300"
                  )}
                >
                  <CardContent className="p-0 flex flex-col gap-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        "bg-[var(--accent)]/10 text-[var(--accent)]",
                        "group-hover:bg-[var(--accent)]/20 transition-colors"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-sm mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {useCase.title}
                      </h3>
                      <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
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
