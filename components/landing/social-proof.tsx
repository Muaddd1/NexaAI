"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/shared";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Vercel", width: 80 },
  { name: "Stripe", width: 60 },
  { name: "Linear", width: 70 },
  { name: "Notion", width: 75 },
  { name: "Figma", width: 65 },
  { name: "Loom", width: 60 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export function SocialProof() {
  return (
    <Section className="py-12 border-y border-[var(--border)] bg-[var(--surface)]">
      <Container>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center text-sm text-[var(--foreground-muted)] mb-8"
        >
          Trusted by modern engineering and product teams worldwide
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2 + i}
              className="text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors"
            >
              {/* Text-based logo as fallback */}
              <span
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {company.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
