"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Shield,
  ScrollText,
  Lock,
  Zap,
  Brain,
  Workflow,
  Code2
} from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";

const trustBadges = [
  { text: "Limited onboardings/month", icon: CheckCircle2 },
  { text: "Human-in-the-loop", icon: Shield },
  { text: "ToS-compliant", icon: ScrollText },
];

const techLogos = [
  { name: "OpenAI", icon: Brain },
  { name: "Claude", icon: Zap },
  { name: "Make", icon: Workflow },
  { name: "n8n", icon: Workflow },
  { name: "Zapier", icon: Zap },
  { name: "Supabase", icon: Code2 },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(0, 212, 255, 0.8)";
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-40"
          style={{ mixBlendMode: "screen" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
                  <Sparkles className="w-4 h-4 text-[rgb(var(--accent-primary))] animate-pulse" />
                  <span className="text-sm text-[rgb(var(--text-secondary))]">
                    AI Automation Platform
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="text-[rgb(var(--text-primary))]">
                  AI does the{" "}
                </span>
                <span className="animated-gradient-text">robot work.</span>
                <br />
                <span className="text-[rgb(var(--text-primary))]">
                  Your team does the{" "}
                </span>
                <span className="relative inline-block">
                  <span className="text-[rgb(var(--text-primary))]">real work.</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,4 Q50,0 100,4 T200,4"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(0, 212, 255)" />
                        <stop offset="100%" stopColor="rgb(0, 153, 255)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg lg:text-xl text-[rgb(var(--text-secondary))] leading-relaxed"
              >
                Outcome-first AI integration to remove the boring work, speed up the
                important work, and scale with less effort.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <GlassButton variant="solid" size="lg" className="group whitespace-nowrap" glow>
                    <span className="flex items-center gap-2">
                      <span>Book a Free AI Integration Audit</span>
                      <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                    </span>
                  </GlassButton>
                </Link>
                <Link href="/workflows">
                  <GlassButton variant="secondary" size="lg" className="whitespace-nowrap">
                    Explore 5K+ Workflows
                  </GlassButton>
                </Link>
              </motion.div>

              {/* CTA Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm text-[rgb(var(--text-tertiary))]"
              >
                Fast 15–20 min call. We map one workflow and share templates.
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-nowrap gap-2 md:gap-3"
              >
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.text}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] whitespace-nowrap flex-shrink-0"
                    >
                      <Icon className="w-3 h-3 text-[rgb(var(--success-primary))] flex-shrink-0" />
                      <span className="text-[11px] md:text-xs text-[rgb(var(--text-secondary))]">
                        {badge.text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Workflow Preview Card */}
              <GlassCard hover glow className="p-8">
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[rgb(var(--accent-primary)/0.2)] to-[rgb(var(--accent-secondary)/0.2)] flex items-center justify-center">
                        <Workflow className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))]">
                          Workflow Automation
                        </h3>
                        <p className="text-xs text-[rgb(var(--text-tertiary))]">
                          Running 24/7
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[rgb(var(--success-primary))] rounded-full animate-pulse" />
                      <span className="text-xs text-[rgb(var(--success-primary))]">Active</span>
                    </div>
                  </div>

                  {/* Workflow Nodes */}
                  <div className="space-y-3">
                    {[
                      { name: "Trigger", status: "completed", icon: Zap },
                      { name: "Process Data", status: "completed", icon: Brain },
                      { name: "AI Analysis", status: "active", icon: Sparkles },
                      { name: "Send Results", status: "pending", icon: ArrowRight },
                    ].map((node, index) => (
                      <motion.div
                        key={node.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            node.status === "completed" && "bg-[rgb(var(--success-primary)/0.1)]",
                            node.status === "active" && "bg-[rgb(var(--accent-primary)/0.1)] animate-pulse",
                            node.status === "pending" && "bg-white/[0.03]"
                          )}
                        >
                          <node.icon
                            className={cn(
                              "w-4 h-4",
                              node.status === "completed" && "text-[rgb(var(--success-primary))]",
                              node.status === "active" && "text-[rgb(var(--accent-primary))]",
                              node.status === "pending" && "text-[rgb(var(--text-tertiary))]"
                            )}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-[rgb(var(--text-primary))]">
                            {node.name}
                          </div>
                          <div className="w-full bg-white/[0.05] rounded-full h-1 mt-1">
                            <motion.div
                              className={cn(
                                "h-1 rounded-full",
                                node.status === "completed" && "bg-[rgb(var(--success-primary))]",
                                node.status === "active" && "bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))]",
                                node.status === "pending" && "bg-transparent"
                              )}
                              initial={{ width: 0 }}
                              animate={{
                                width: node.status === "completed" ? "100%" : node.status === "active" ? "60%" : "0%"
                              }}
                              transition={{ duration: 1, delay: 1 + index * 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/[0.08]">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(var(--accent-primary))]">
                        847
                      </div>
                      <div className="text-[10px] sm:text-xs text-[rgb(var(--text-tertiary))]">
                        Tasks/Day
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(var(--success-primary))]">
                        99.9%
                      </div>
                      <div className="text-[10px] sm:text-xs text-[rgb(var(--text-tertiary))]">
                        Uptime
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(var(--warning-primary))]">
                        40h
                      </div>
                      <div className="text-[10px] sm:text-xs text-[rgb(var(--text-tertiary))]">
                        Saved/Week
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Floating Tech Logos */}
              <div className="absolute -bottom-8 -left-8 -right-8">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {techLogos.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.05 }}
                        className="group"
                      >
                        <div className="p-3 glass rounded-lg transition-all duration-300 group-hover:translate-y-[-2px]">
                          <Icon className="w-5 h-5 text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--text-secondary))]" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}