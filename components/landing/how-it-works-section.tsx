"use client";

import { motion } from "framer-motion";
import { Plug, Wand2, Rocket } from "lucide-react";
import { Container, Section } from "@/components/shared";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = [Plug, Wand2, Rocket];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-[var(--surface)]">
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
            Simple process
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Up and running in minutes
          </h2>
          <p className="text-[var(--foreground-muted)] text-lg">
            No complex setup. No engineering hours. Just connect your tools, create your first AI workflow, and start shipping faster.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = iconMap[i];
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-center relative z-10">
                      <Icon className="w-7 h-7 text-[var(--accent)]" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-xs font-bold flex items-center justify-center"
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
