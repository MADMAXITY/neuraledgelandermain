"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Layers, Building2, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

const solutions = [
  {
    id: "smmc",
    title: "Social Media & Content Creators",
    tagline: "Turn attention into DMs",
    description: "AI systems that turn your audience engagement into qualified conversations, automatically.",
    icon: MessageSquare,
    href: "/solutions/smmc",
    color: "accent",
    benefits: [
      "24/7 engagement monitoring across all platforms",
      "Intelligent comment-to-DM conversion workflows",
      "Personalized outreach at scale",
      "Content performance analytics and optimization"
    ],
    stats: {
      engagement: "+312%",
      conversion: "47%",
      time: "8hrs → 30min"
    }
  },
  {
    id: "saas",
    title: "High-Ticket SaaS",
    tagline: "Shorten cycles. Prove value faster",
    description: "Deploy AI throughout your entire sales cycle to close deals 2x faster with half the effort.",
    icon: Layers,
    href: "/solutions/saas",
    color: "success",
    benefits: [
      "Automated demo booking and qualification",
      "Intelligent lead scoring and routing",
      "AI-powered proposal generation",
      "Predictive churn prevention systems"
    ],
    stats: {
      cycle: "-54%",
      close: "+38%",
      churn: "-29%"
    }
  },
  {
    id: "real-estate",
    title: "Real Estate",
    tagline: "More appointments. Cleaner closes",
    description: "From lead capture to closing, AI agents handle the repetitive work so you can focus on relationships.",
    icon: Building2,
    href: "/solutions/real-estate",
    color: "warning",
    benefits: [
      "Instant lead response and qualification",
      "Automated property matching and alerts",
      "Smart appointment scheduling",
      "Document processing and compliance"
    ],
    stats: {
      response: "<2min",
      bookings: "+89%",
      efficiency: "3x"
    }
  }
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[rgb(var(--accent-primary)/0.1)] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[rgb(var(--accent-secondary)/0.1)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--accent-primary)/0.1)] border border-[rgb(var(--accent-primary)/0.2)] mb-6">
              <Sparkles className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--accent-primary))]">
                Industry-Specific AI Solutions
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              AI That Speaks Your
              <br />
              <span className="animated-gradient-text">Industry's Language</span>
            </h1>

            <p className="text-xl text-[rgb(var(--text-secondary))] mb-8">
              Production-ready AI automation tailored to your specific industry challenges.
              No generic solutions. Just results.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Link href={solution.href}>
                    <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.03] transition-all duration-300 hover:translate-y-[-4px]">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[rgb(var(--accent-primary)/0.2)] to-[rgb(var(--accent-secondary)/0.1)] flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[rgb(var(--accent-primary))]" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-[rgb(var(--accent-primary))] font-medium mb-4">
                        {solution.tagline}
                      </p>
                      <p className="text-[rgb(var(--text-secondary))] mb-6">
                        {solution.description}
                      </p>

                      {/* Benefits */}
                      <ul className="space-y-3 mb-8">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[rgb(var(--success-primary))] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgb(var(--text-secondary))]">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.05]">
                        {Object.entries(solution.stats).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-xl font-bold text-[rgb(var(--text-primary))]">
                              {value}
                            </div>
                            <div className="text-xs text-[rgb(var(--text-tertiary))] capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 mt-6 text-[rgb(var(--accent-primary))] font-medium group-hover:gap-4 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-20"
          >
            <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Not seeing your industry?
            </h3>
            <p className="text-[rgb(var(--text-secondary))] mb-8">
              We build custom AI solutions for any industry. Let's discuss your specific needs.
            </p>
            <GlassButton variant="solid" size="lg" glow>
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Schedule Custom Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </GlassButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}