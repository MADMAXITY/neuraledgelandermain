"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Workflow, Code2, Database, Cloud } from "lucide-react";

const techPartners = [
  { name: "OpenAI", icon: Brain, description: "GPT-4 Integration" },
  { name: "Claude", icon: Brain, description: "Anthropic AI" },
  { name: "Make", icon: Workflow, description: "Automation Platform" },
  { name: "n8n", icon: Workflow, description: "Workflow Automation" },
  { name: "Zapier", icon: Zap, description: "Integration Hub" },
  { name: "Supabase", icon: Database, description: "Database & Auth" },
];

export function TrustBar() {
  return (
    <section className="py-16 relative border-y border-white/[0.05]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-[rgb(var(--text-tertiary))] uppercase tracking-wider">
            Powered by industry-leading technology
          </p>
        </motion.div>

        {/* Tech Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="group"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl glass flex items-center justify-center group-hover:bg-white/[0.03] transition-all duration-300 group-hover:translate-y-[-2px]">
                    <Icon className="w-8 h-8 text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--text-secondary))] transition-colors" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors">
                      {partner.name}
                    </div>
                    <div className="text-xs text-[rgb(var(--text-tertiary))] mt-1">
                      {partner.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 pt-12 border-t border-white/[0.05]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "10,000+", label: "Workflows" },
              { stat: "500+", label: "Integrations" },
              { stat: "99.9%", label: "Uptime" },
              { stat: "24/7", label: "Support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-[rgb(var(--text-tertiary))]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}