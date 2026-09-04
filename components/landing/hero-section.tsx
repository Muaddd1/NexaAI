"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const numParticles = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => { init(); };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-20">
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        aria-hidden="true"
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[var(--accent-secondary)]/10 rounded-full blur-[128px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm gap-2 border-[var(--accent)]/30 text-[var(--accent)]">
              <Sparkles className="w-3.5 h-3.5" />
              Introducing NexaAI 2.0 — Now with 50+ templates
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-[var(--foreground)]">AI that works at the</span>
            <br />
            <span className="text-gradient">speed of your ideas.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            NexaAI helps teams create, analyze, automate, and scale their work using
            advanced AI. Ship faster, iterate smarter, and grow without limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" asChild className="group">
              <a href="/auth/register">
                Start Building Free
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <a href="#demo">
                <Play className="w-4 h-4 mr-1" />
                Explore Platform
              </a>
            </Button>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative max-w-5xl mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/20 via-transparent to-transparent blur-xl pointer-events-none rounded-xl" />

            {/* Main dashboard card */}
            <div className={cn(
              "relative rounded-2xl border border-[var(--border)] overflow-hidden",
              "bg-[var(--surface)] shadow-[0_0_80px_rgba(0,212,255,0.1)]"
            )}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-elevated)]">
                <div className="w-3 h-3 rounded-full bg-[var(--destructive)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--warning)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--success)]" />
                <div className="flex-1 mx-4">
                  <div className="h-5 rounded-md bg-[var(--surface)] border border-[var(--border)] w-64 mx-auto" />
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "AI Credits", value: "4,231", change: "+12%" },
                    { label: "Generations", value: "1,847", change: "+8%" },
                    { label: "Active Users", value: "342", change: "+5%" },
                    { label: "Avg. Latency", value: "124ms", change: "-23%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-3">
                      <p className="text-xs text-[var(--foreground-muted)] mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-[var(--foreground)]" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                      <p className="text-xs text-[var(--success)] font-medium">{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-[var(--foreground)]">AI Usage This Week</p>
                    <p className="text-xs text-[var(--foreground-muted)]">Last 7 days</p>
                  </div>
                  {/* Simple bar chart using CSS */}
                  <div className="flex items-end gap-2 h-24">
                    {[45, 65, 50, 80, 70, 90, 85].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-sm bg-gradient-to-t from-[var(--accent-secondary)] to-[var(--accent)] opacity-80"
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[10px] text-[var(--foreground-subtle)]">
                          {["M", "T", "W", "T", "F", "S", "S"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat preview */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-[var(--accent-foreground)]" />
                    </div>
                    <p className="text-sm font-medium text-[var(--foreground)]">NexaAI Assistant</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[var(--surface)] rounded-lg px-3 py-2 text-xs text-[var(--foreground-muted)] border border-[var(--border)]">
                      Generate a landing page for a new AI product launch targeting developers...
                    </div>
                    <div className="bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-secondary)]/10 rounded-lg px-3 py-2 text-xs text-[var(--foreground)] border border-[var(--accent)]/20">
                      I&apos;ve created a complete landing page with hero section, features grid, pricing table, and CTA...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
