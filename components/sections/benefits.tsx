"use client";

import { motion } from "framer-motion";
import { Zap, Clock, DollarSign, TrendingUp, Shield, Users, BarChart3, Cpu } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const benefits = [
  {
    title: "Increased Productivity",
    description: "Focus on high-value work; agents handle the repetitive.",
    icon: Zap,
    stat: "40+ hrs",
    statLabel: "Saved Weekly",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "24/7 Availability",
    description: "Systems Don't Sleep; SLAs Improve.",
    icon: Clock,
    stat: "99.9%",
    statLabel: "Uptime",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Cost Reduction",
    description: "Fewer manual hours, fewer errors, clearer attribution.",
    icon: DollarSign,
    stat: "60%",
    statLabel: "Cost Savings",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Scalability & Growth",
    description: "Durable integrations; add workflows, not headcount.",
    icon: TrendingUp,
    stat: "10x",
    statLabel: "Scale Factor",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Enhanced Security",
    description: "Audit logs, compliance checks, and secure data handling.",
    icon: Shield,
    stat: "100%",
    statLabel: "Compliant",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Team Empowerment",
    description: "Your team focuses on strategy while AI handles execution.",
    icon: Users,
    stat: "3x",
    statLabel: "Team Output",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function Benefits() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(var(--accent-primary)/0.05)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgb(var(--accent-secondary)/0.05)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <BarChart3 className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
            <span className="text-sm text-[rgb(var(--text-secondary))]">
              Key Benefits
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(var(--text-primary))] mb-4">
            The Key Benefits Of AI<br />
            <span className="animated-gradient-text">For Your Business Growth</span>
          </h2>
          <p className="text-lg text-[rgb(var(--text-secondary))] max-w-3xl mx-auto">
            Integrate once, multiply outcomes — without multiplying headcount.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard hover className="h-full p-6 group">
                  <div className="space-y-4">
                    {/* Icon and Stats */}
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} p-[1px]`}>
                        <div className="w-full h-full rounded-xl bg-[rgb(var(--bg-primary))] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold animated-gradient-text">
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-[rgb(var(--text-tertiary))]">
                          {benefit.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-[rgb(var(--accent-primary)/0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <GlassCard className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Workflows Available" },
                { number: "500+", label: "Hours Saved Monthly" },
                { number: "99.9%", label: "Uptime Guarantee" },
                { number: "24/7", label: "AI Operations" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold animated-gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[rgb(var(--text-tertiary))]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}