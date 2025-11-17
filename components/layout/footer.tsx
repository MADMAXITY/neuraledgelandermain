"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Twitter,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Layers,
  Building2,
  Workflow,
  FileText,
  Shield,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";

const footerLinks = {
  solutions: [
    { title: "Social & Content", href: "/solutions/smmc", icon: MessageSquare },
    { title: "High-Ticket SaaS", href: "/solutions/saas", icon: Layers },
    { title: "Real Estate", href: "/solutions/real-estate", icon: Building2 },
  ],
  resources: [
    { title: "Workflows", href: "/workflows", icon: Workflow },
    { title: "Blog", href: "https://neuraledge.blog", icon: FileText, external: true },
    { title: "Documentation", href: "/docs", icon: FileText },
  ],
  company: [
    { title: "About", href: "/about", icon: Brain },
    { title: "Contact", href: "/contact", icon: Mail },
    { title: "Privacy", href: "/privacy", icon: Shield },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/neuraledge", icon: Twitter },
  { name: "GitHub", href: "https://github.com/neuraledge", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/company/neuraledge", icon: Linkedin },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        // Reset success message after 5 seconds
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        console.error('Subscription error:', data.error);
        alert('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative mt-32 border-t border-white/[0.05]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgb(var(--bg-secondary)/0.5)]" />

      <div className="relative container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-56">
                <Image
                  src="/nelogo.png"
                  alt="NeuralEdge"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-[rgb(var(--text-secondary))] max-w-sm">
              Integrated AI agents for meaningful work. Outcome-first AI integration
              to automate the robot work and scale meaningful work.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm text-[rgb(var(--text-tertiary))]">
                Get templates & playbooks delivered to your inbox
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-[rgb(var(--success-primary)/0.1)] border border-[rgb(var(--success-primary)/0.3)]">
                  <CheckCircle className="w-5 h-5 text-[rgb(var(--success-primary))]" />
                  <span className="text-sm text-[rgb(var(--success-primary))]">
                    Successfully subscribed! Check your email.
                  </span>
                </div>
              ) : (
                <form className="flex gap-2" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-tertiary))] focus:outline-none focus:border-[rgb(var(--accent-primary)/0.5)] focus:ring-1 focus:ring-[rgb(var(--accent-primary)/0.2)] disabled:opacity-50"
                  />
                  <GlassButton
                    type="submit"
                    variant="default"
                    size="sm"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? "..." : "Subscribe"}
                  </GlassButton>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/[0.05] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-4 uppercase tracking-wider">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors group"
                      >
                        <Icon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-4 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors group"
                        >
                          <Icon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                          {link.title}
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors group"
                        >
                          <Icon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                          {link.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-4 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors group"
                      >
                        <Icon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.05]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[rgb(var(--text-tertiary))]">
              © {new Date().getFullYear()} NeuralEdge. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-sm text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-secondary))] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-secondary))] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-secondary))] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}