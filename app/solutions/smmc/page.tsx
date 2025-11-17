"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  Users,
  TrendingUp,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Share2,
  MessageCircle,
  Eye,
  Clock,
  Target
} from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
  {
    title: "Comment-to-DM Automation",
    description: "Automatically detect high-intent comments and initiate personalized DM conversations",
    icon: MessageSquare,
    metrics: "3x conversion rate"
  },
  {
    title: "24/7 Engagement Monitoring",
    description: "Never miss an opportunity - AI monitors all your social channels round the clock",
    icon: Eye,
    metrics: "100% coverage"
  },
  {
    title: "Smart Content Scheduling",
    description: "AI determines optimal posting times based on audience activity patterns",
    icon: Clock,
    metrics: "47% more reach"
  },
  {
    title: "Influencer Outreach",
    description: "Identify and engage with relevant influencers in your niche automatically",
    icon: Users,
    metrics: "5x partnerships"
  },
  {
    title: "Viral Content Analysis",
    description: "Analyze trending content and adapt your strategy in real-time",
    icon: TrendingUp,
    metrics: "2x engagement"
  },
  {
    title: "Multi-Platform Management",
    description: "Manage Instagram, TikTok, Twitter, LinkedIn from one unified dashboard",
    icon: Share2,
    metrics: "8hrs saved/week"
  }
];

const benefits = [
  "Turn followers into customers on autopilot",
  "Respond to DMs in seconds, not hours",
  "Never miss a sales opportunity",
  "Scale personalization without more staff",
  "Track ROI on every interaction",
  "Maintain authentic brand voice"
];

const caseStudy = {
  client: "Fashion Influencer",
  followers: "250K",
  results: [
    { metric: "DM Response Rate", value: "From 12hrs to 30sec" },
    { metric: "Monthly Revenue", value: "+$47,000" },
    { metric: "Engagement Rate", value: "3.2% → 8.7%" },
    { metric: "Time Saved", value: "32 hours/week" }
  ]
};

export default function SMMCSolutionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-[rgb(var(--accent-primary)/0.15)] to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tl from-[rgb(var(--accent-secondary)/0.15)] to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--accent-primary)/0.1)] border border-[rgb(var(--accent-primary)/0.2)] mb-6">
              <MessageSquare className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--accent-primary))]">
                Social Media & Content Creators
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Turn Attention Into
              <br />
              <span className="animated-gradient-text">Revenue-Generating DMs</span>
            </h1>

            <p className="text-xl text-[rgb(var(--text-secondary))] mb-8">
              AI systems that monitor every comment, story mention, and engagement opportunity
              across all your social platforms - converting followers into customers 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <GlassButton variant="solid" size="lg" glow>
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Start Converting Followers</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </GlassButton>
              </Link>
              <GlassButton variant="secondary" size="lg">
                Watch Demo
              </GlassButton>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {["312% ROI Average", "10K+ Creators", "24/7 Active", "5min Setup"].map((badge) => (
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
              The Hidden Revenue in Your Comments Section
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))]">
              Every day, hundreds of potential customers are commenting on your posts,
              sending DMs, and mentioning your brand. But you're missing 90% of them
              because you can't be online 24/7. Until now.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Missed DMs Daily", value: "127", icon: MessageCircle },
              { label: "Lost Revenue/Month", value: "$18K", icon: TrendingUp },
              { label: "Response Time", value: "8hrs", icon: Clock },
              { label: "Conversion Rate", value: "2%", icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-[rgb(var(--accent-primary))] mx-auto mb-3" />
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
              AI That Works While You Sleep
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
              Every feature designed to turn your social media presence into a
              revenue-generating machine that runs 24/7.
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[rgb(var(--accent-primary)/0.2)] to-[rgb(var(--accent-secondary)/0.1)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
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
                  Real Results, Real Revenue
                </h2>
                <p className="text-[rgb(var(--text-secondary))]">
                  {caseStudy.client} with {caseStudy.followers} followers
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div key={result.metric} className="text-center">
                    <div className="text-2xl font-bold text-[rgb(var(--accent-primary))] mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-[rgb(var(--text-tertiary))]">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[rgb(var(--accent-primary)/0.05)] rounded-lg p-6 border border-[rgb(var(--accent-primary)/0.1)]">
                <p className="text-[rgb(var(--text-secondary))] italic text-center">
                  "I was leaving so much money on the table. Now every comment is a potential
                  sale, and I don't have to be glued to my phone 24/7. The AI responds faster
                  than I ever could, and converts better too."
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Start Converting Followers Into Revenue
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
                  <MessageSquare className="w-5 h-5" />
                  <span>Get Your AI Social Media Manager</span>
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