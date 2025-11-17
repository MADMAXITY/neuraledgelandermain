"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Users,
  TrendingUp,
  Calendar,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Home,
  Phone,
  MapPin,
  FileText,
  Key,
  DollarSign,
  MessageSquare
} from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
  {
    title: "Instant Lead Response",
    description: "Respond to every inquiry in under 2 minutes, 24/7, with personalized property matches",
    icon: Clock,
    metrics: "<2min response"
  },
  {
    title: "Smart Property Matching",
    description: "AI analyzes buyer preferences to suggest perfect properties from your listings",
    icon: Home,
    metrics: "3x more viewings"
  },
  {
    title: "Automated Appointment Booking",
    description: "Schedule property viewings automatically based on agent and client availability",
    icon: Calendar,
    metrics: "+89% bookings"
  },
  {
    title: "Lead Nurturing Campaigns",
    description: "Keep leads warm with automated follow-ups and new listing alerts",
    icon: MessageSquare,
    metrics: "47% conversion"
  },
  {
    title: "Document Processing",
    description: "Automate paperwork, contracts, and compliance documentation",
    icon: FileText,
    metrics: "5hrs saved/deal"
  },
  {
    title: "Market Analysis Reports",
    description: "Generate CMA reports and market insights automatically for clients",
    icon: TrendingUp,
    metrics: "10min vs 2hrs"
  }
];

const benefits = [
  "Never miss a lead with 24/7 instant response",
  "Book 3x more property viewings automatically",
  "Close deals faster with AI-powered nurturing",
  "Reduce paperwork time by 80%",
  "Scale your business without more agents",
  "Track every lead from first touch to closing"
];

const caseStudy = {
  client: "Boutique Real Estate Agency",
  agents: "12 agents",
  results: [
    { metric: "Response Time", value: "4hrs → 2min" },
    { metric: "Conversion Rate", value: "8% → 23%" },
    { metric: "Deals/Agent", value: "+47%" },
    { metric: "Time to Close", value: "-31%" }
  ]
};

export default function RealEstateSolutionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-gradient-to-br from-[rgb(var(--warning-primary)/0.15)] to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tl from-[rgb(var(--warning-light)/0.15)] to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--warning-primary)/0.1)] border border-[rgb(var(--warning-primary)/0.2)] mb-6">
              <Building2 className="w-4 h-4 text-[rgb(var(--warning-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--warning-primary))]">
                Real Estate Automation
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Turn Every Lead Into
              <br />
              <span className="animated-gradient-text">A Closed Deal</span>
            </h1>

            <p className="text-xl text-[rgb(var(--text-secondary))] mb-8">
              AI that responds instantly, books viewings automatically, and nurtures
              leads until they're ready to buy. Never lose another deal to slow
              follow-up or missed opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <GlassButton variant="solid" size="lg" glow>
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Start Closing More Deals</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </GlassButton>
              </Link>
              <GlassButton variant="secondary" size="lg">
                See Case Studies
              </GlassButton>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {["<2min Response", "89% More Bookings", "3x Conversion", "MLS Integration"].map((badge) => (
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
              Speed Wins Deals in Real Estate
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))]">
              78% of buyers work with the first agent who responds. But you're juggling
              showings, paperwork, and follow-ups. By the time you respond, your
              competition has already booked the viewing.
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Average Response", value: "4hrs", icon: Clock },
              { label: "Leads Lost/Week", value: "23", icon: Users },
              { label: "Admin Time", value: "60%", icon: FileText },
              { label: "No-Shows", value: "31%", icon: Calendar }
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
              Your AI-Powered Real Estate Team
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
              From first inquiry to closing, AI handles the repetitive work
              so you can focus on building relationships and closing deals.
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[rgb(var(--warning-primary)/0.2)] to-[rgb(var(--warning-light)/0.1)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[rgb(var(--warning-primary))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[rgb(var(--text-secondary))] mb-3">
                          {feature.description}
                        </p>
                        <div className="inline-flex items-center gap-1 text-xs text-[rgb(var(--warning-primary))]">
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
                  3x More Deals, Same Team Size
                </h2>
                <p className="text-[rgb(var(--text-secondary))]">
                  {caseStudy.client} with {caseStudy.agents}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div key={result.metric} className="text-center">
                    <div className="text-2xl font-bold text-[rgb(var(--warning-primary))] mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-[rgb(var(--text-tertiary))]">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[rgb(var(--warning-primary)/0.05)] rounded-lg p-6 border border-[rgb(var(--warning-primary)/0.1)]">
                <p className="text-[rgb(var(--text-secondary))] italic text-center">
                  "We went from losing leads to slow response times to booking viewings
                  within minutes of inquiry. Our agents now focus on showing properties
                  and closing deals instead of chasing leads. Revenue is up 147% with
                  the same team."
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Integrates With Your Existing Tools
            </h3>
            <p className="text-[rgb(var(--text-secondary))]">
              Works seamlessly with MLS, CRMs, and real estate platforms
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {["MLS", "Zillow", "Realtor.com", "DocuSign", "Salesforce", "Follow Up Boss"].map((tool) => (
              <div
                key={tool}
                className="px-6 py-3 rounded-lg glass text-sm text-[rgb(var(--text-secondary))]"
              >
                {tool}
              </div>
            ))}
          </div>
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
              Start Closing More Deals Today
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
                  <Building2 className="w-5 h-5" />
                  <span>Get Your AI Real Estate Assistant</span>
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