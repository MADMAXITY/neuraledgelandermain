"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent-primary)/0.15)] via-[rgb(var(--accent-secondary)/0.1)] to-[rgb(var(--accent-tertiary)/0.15)] rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center"
            >
              <Brain className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-[rgb(var(--accent-secondary))]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-[rgb(var(--accent-tertiary))]" />
            </motion.div>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6"
          >
            Let AI Do The Work So You Can
            <br />
            <span className="animated-gradient-text">Scale Faster</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-[rgb(var(--text-secondary))] mb-8 max-w-2xl mx-auto"
          >
            Book A Free AI Integration Audit — Get Your Workflow Map And Templates.
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              "✓ 15-20 min call",
              "✓ Custom workflow map",
              "✓ Risk assessment",
              "✓ Template pack included"
            ].map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-[rgb(var(--text-secondary))]"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <GlassButton variant="solid" size="xl" className="group whitespace-nowrap" glow>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span>Book Your Free Audit Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </span>
              </GlassButton>
            </Link>
            <GlassButton variant="secondary" size="xl">
              View Success Stories
            </GlassButton>
          </motion.div>

          {/* Trust Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm text-[rgb(var(--text-tertiary))] mt-8"
          >
            Limited spots available. We onboard only 5 new clients per month to ensure quality.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}