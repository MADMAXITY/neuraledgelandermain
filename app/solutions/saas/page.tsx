"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Layers,
  Users,
  TrendingUp,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Target,
  Brain,
  Shield,
  RefreshCw,
  AlertCircle,
  DollarSign,
  UserCheck
} from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
  {
    title: "Intelligent Lead Scoring",
    description: "AI analyzes behavioral patterns to identify hot leads and prioritize outreach",
    icon: Target,
    metrics: "87% accuracy"
  },
  {
    title: "Automated Demo Booking",
    description: "Qualify leads and book demos automatically based on your criteria",
    icon: Clock,
    metrics: "3x more demos"
  },
  {
    title: "Predictive Churn Prevention",
    description: "Identify at-risk customers before they leave and trigger retention workflows",
    icon: AlertCircle,
    metrics: "-29% churn"
  },
  {
    title: "Smart Proposal Generation",
    description: "Generate personalized proposals based on prospect needs and interactions",
    icon: Brain,
    metrics: "2hrs → 5min"
  },
  {
    title: "Revenue Intelligence",
    description: "Track deal velocity, predict close dates, and optimize pricing in real-time",
    icon: DollarSign,
    metrics: "+38% close rate"
  },
  {
    title: "Customer Success Automation",
    description: "Automate onboarding, training, and support to reduce time-to-value",
    icon: UserCheck,
    metrics: "50% faster TTV"
  }
];

const benefits = [
  "Close deals 2x faster with AI qualification",
  "Never lose a lead to slow follow-up",
  "Predict and prevent churn before it happens",
  "Scale personalized outreach to thousands",
  "Automate repetitive sales tasks",
  "Increase win rates with data-driven insights"
];

const caseStudy = {
  client: "B2B SaaS Company",
  arr: "$5M ARR",
  results: [
    { metric: "Sales Cycle", value: "45 → 21 days" },
    { metric: "Close Rate", value: "18% → 31%" },
    { metric: "Churn Rate", value: "12% → 8%" },
    { metric: "CAC Payback", value: "18 → 11 months" }
  ]
};

export default function SaaSSolutionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[rgb(var(--success-primary)/0.15)] to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[rgb(var(--success-light)/0.15)] to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--success-primary)/0.1)] border border-[rgb(var(--success-primary)/0.2)] mb-6">
              <Layers className="w-4 h-4 text-[rgb(var(--success-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--success-primary))]">
                High-Ticket SaaS
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Shorten Your Sales Cycle
              <br />
              <span className="animated-gradient-text">By 54% With AI</span>
            </h1>

            <p className="text-xl text-[rgb(var(--text-secondary))] mb-8">
              Deploy AI throughout your entire GTM motion - from lead generation
              to customer success. Close deals faster, reduce churn, and scale
              revenue without scaling headcount.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <GlassButton variant="solid" size="lg" glow>
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Accelerate Your Sales Cycle</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </GlassButton>
              </Link>
              <GlassButton variant="secondary" size="lg">
                See ROI Calculator
              </GlassButton>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {["54% Faster Sales", "$2.3M ARR Added", "SOC2 Compliant", "14-Day Setup"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-[rgb(var(--text-secondary))]"
                >
                  <CheckCircle className="w-3 h-3 text-[rgb(var(--success-primary))]" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Your Sales Team Is Drowning in Manual Work
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))]">
              While your reps are updating CRMs, writing follow-ups, and qualifying leads,
              your competitors are closing deals. Every manual task is a missed opportunity
              and a longer sales cycle.
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Time on Admin", value: "67%", icon: Clock },
              { label: "Leads Lost/Month", value: "143", icon: Users },
              { label: "Average Sales Cycle", value: "45 days", icon: RefreshCw },
              { label: "Win Rate", value: "18%", icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-[rgb(var(--warning-primary))] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[rgb(var(--text-tertiary))]">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[rgb(var(--bg-secondary)/0.5)] to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              AI That Sells While Your Team Sleeps
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
              Every feature designed to accelerate your sales velocity and
              increase win rates without adding headcount.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <GlassCard hover className="h-full p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[rgb(var(--success-primary)/0.2)] to-[rgb(var(--success-light)/0.1)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[rgb(var(--success-primary))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[rgb(var(--text-secondary))] mb-3">
                          {feature.description}
                        </p>
                        <div className="inline-flex items-center gap-1 text-xs text-[rgb(var(--success-primary))]">
                          <TrendingUp className="w-3 h-3" />
                          {feature.metrics}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-2">
                  From 45 Days to 21 Days
                </h2>
                <p className="text-[rgb(var(--text-secondary))]">
                  {caseStudy.client} at {caseStudy.arr}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div key={result.metric} className="text-center">
                    <div className="text-2xl font-bold text-[rgb(var(--success-primary))] mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-[rgb(var(--text-tertiary))]">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[rgb(var(--success-primary)/0.05)] rounded-lg p-6 border border-[rgb(var(--success-primary)/0.1)]">
                <p className="text-[rgb(var(--text-secondary))] italic text-center">
                  "We cut our sales cycle in half and increased close rates by 72%. The AI
                  qualification alone saves each rep 15 hours per week. We're closing more
                  deals with the same team size."
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-6 text-center">
                Your Potential ROI
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[rgb(var(--accent-primary))] mb-2">
                    $847K
                  </div>
                  <div className="text-sm text-[rgb(var(--text-secondary))]">
                    Additional ARR Year 1
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[rgb(var(--success-primary))] mb-2">
                    312%
                  </div>
                  <div className="text-sm text-[rgb(var(--text-secondary))]">
                    ROI in 6 Months
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[rgb(var(--warning-primary))] mb-2">
                    21 days
                  </div>
                  <div className="text-sm text-[rgb(var(--text-secondary))]">
                    Faster Sales Cycle
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-[rgb(var(--text-tertiary))] mb-6">
                Based on average results from 100+ SaaS companies
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-12">
              Start Closing Deals Faster Today
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/[0.08]"
                >
                  <CheckCircle className="w-5 h-5 text-[rgb(var(--success-primary))] flex-shrink-0" />
                  <span className="text-[rgb(var(--text-secondary))] text-left">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <GlassButton variant="solid" size="xl" glow>
                <span className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  <span>Accelerate Your Sales Now</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </GlassButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}