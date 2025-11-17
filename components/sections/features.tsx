"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Users,
  TrendingUp,
  Code2,
  Clock,
  Shield,
  Database,
  Workflow,
  Brain,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
  {
    title: "Workflow Automation",
    description: "Wire AI Into Workflows So Data Moves Itself And Approvals Land On Time.",
    icon: Workflow,
    gradient: "from-blue-500 to-cyan-500",
    features: ["System Sync", "Smart Reminders", "Sheets/Drive Automations", "Time Tracking"],
  },
  {
    title: "Delegation",
    description: "Assistants draft, summarize, and schedule—your team reviews and sends.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    features: ["Inbox Triage", "Follow‑Up & Scheduling", "Notes → Actions", "Smart Holds"],
  },
  {
    title: "Growth",
    description: "Speed-to-lead, ICP routing, and tailored outreach that turns conversations into pipeline.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    features: ["<5‑Min Reply", "ICP Routing", "SDR Assist", "Conv → CRM"],
  },
  {
    title: "Custom Projects",
    description: "Durable integrations with observability and guardrails so you scale without breakage.",
    icon: Code2,
    gradient: "from-orange-500 to-red-500",
    features: ["SSOT Model", "API/Webhooks", "RBAC & Approvals", "Audit & Retention"],
  },
];

export function Features() {
  return (
    <section className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--bg-secondary)/0.3)] to-transparent" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <Zap className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
            <span className="text-sm text-[rgb(var(--text-secondary))]">
              AI Solutions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(var(--text-primary))] mb-4">
            AI Solutions That Take Your Business<br />
            <span className="animated-gradient-text">To The Next Level</span>
          </h2>
          <p className="text-lg text-[rgb(var(--text-secondary))] max-w-3xl mx-auto">
            We Design, Develop, And Implement AI Agents & Automations That Remove
            Busywork And Unlock Growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard hover className="h-full p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-[rgb(var(--bg-primary))] flex items-center justify-center">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-2">
                            <span className="text-xs text-[rgb(var(--text-secondary))]">
                              {feature.title}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))]">
                            {feature.title === "Workflow Automation" && "Automate repetitive tasks"}
                            {feature.title === "Delegation" && "Delegate daily tasks"}
                            {feature.title === "Growth" && "Accelerate sales"}
                            {feature.title === "Custom Projects" && "Build Smarter Systems"}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-3">
                      {feature.features.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-[rgb(var(--success-primary))] flex-shrink-0" />
                          <span className="text-sm text-[rgb(var(--text-secondary))]">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-white/[0.05]">
                      <a
                        href={`/solutions#${feature.title.toLowerCase().replace(" ", "-")}`}
                        className="inline-flex items-center gap-2 text-sm text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] transition-colors group"
                      >
                        Learn more about {feature.title}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[rgb(var(--text-secondary))] mb-6">
            Ready to transform your business with AI automation?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 glass-button text-[rgb(var(--accent-primary))] font-semibold group"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}