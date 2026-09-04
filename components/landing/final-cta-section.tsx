"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function FinalCTASection() {
  const [email, setEmail] = useState("");

  return (
    <Section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent-secondary)]/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />

      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Glow orb */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6">
            <Sparkles className="w-8 h-8 text-[var(--accent)]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Start building{' '}
            <span className="text-gradient">10x faster</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
            Join thousands of teams already using NexaAI to ship faster, collaborate smarter, and scale without limits.
          </p>

          {/* Email signup */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                window.location.href = `/auth/register?email=${encodeURIComponent(email)}`;
              }
            }}
          >
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12"
            />
            <Button type="submit" size="lg" className="h-12 shrink-0">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>

          <p className="text-xs text-[var(--foreground-subtle)] mt-4">
            No credit card required · Free plan available · Cancel anytime
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
