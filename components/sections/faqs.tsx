"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const faqs = [
  {
    question: "What Exactly Do I Get In The Free AI Integration Audit?",
    answer: "You'll receive a comprehensive workflow map for one of your key processes, recommended AI agents and automations tailored to your needs, detailed risk and Terms of Service compliance notes to ensure safe implementation, and a template pack to help you get started immediately. This audit typically saves businesses 20-40 hours of discovery work.",
  },
  {
    question: "How fast can I see value?",
    answer: "Most clients see their first meaningful win within the pilot window, typically 14–30 days. We start with quick wins that demonstrate immediate value, then systematically expand to more complex automations. Our approach ensures you're seeing ROI from week one while building toward transformative changes.",
  },
  {
    question: "Will AI Replace My Team?",
    answer: "No — our AI agents are designed to automate the robot work so your team can focus on judgment, strategy, and relationships. Think of it as giving each team member a tireless assistant who handles the repetitive tasks. Your team becomes more valuable when they're freed from mundane work to focus on what humans do best.",
  },
  {
    question: "How Do You Keep This Safe And Compliant?",
    answer: "We implement multiple layers of security including human-in-the-loop approvals for critical decisions, comprehensive audit logs for every action, least-privilege access controls, and ToS-friendly workflows that comply with platform requirements. Every automation is transparent and traceable.",
  },
  {
    question: "What happens if the pilot doesn't work?",
    answer: "We operate on a Pay-on-Proof model: we keep working free until the KPIs land — or you don't pay. We're confident in our ability to deliver results because we've done this hundreds of times. If we can't deliver the agreed outcomes, you owe us nothing.",
  },
  {
    question: "What Tools Can You Integrate?",
    answer: "We integrate with virtually any modern business tool including CRMs (Salesforce, HubSpot, Pipedrive), Email platforms (Gmail, Outlook), Calendar systems, Slack/Teams, Data Warehouses, SSO providers, Marketing Tools, and Industry-specific systems. If it has an API, we can likely integrate it.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes — we provide comprehensive ongoing support including 24/7 monitoring of your automations, change requests as your needs evolve, monthly optimization sprints to improve performance, and priority support for any issues. Most clients stay with us long-term because the value compounds over time.",
  },
  {
    question: "How much does AI automation typically cost?",
    answer: "Our pricing varies based on complexity, but typically ranges from $2,500 for simple workflow automations to $15,000+ for comprehensive AI agent implementations. The ROI is usually 5-10x within the first year. We also offer monthly retainer options starting at $5,000/month for ongoing automation development.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
              <span className="text-sm text-[rgb(var(--text-secondary))]">
                FAQs
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(var(--text-primary))] mb-4">
              We've Got the Answers<br />
              <span className="animated-gradient-text">You're Looking For</span>
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
              Quick answers to your AI automation questions.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <GlassCard className="overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <h3 className="text-lg font-medium text-[rgb(var(--text-primary))] pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgb(var(--accent-primary)/0.1)] flex items-center justify-center">
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-white/[0.05] pt-4">
                            <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-[rgb(var(--text-secondary))] mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] transition-colors font-medium"
            >
              Contact our team →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}