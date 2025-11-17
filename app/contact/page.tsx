"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import {
  Mail,
  MessageSquare,
  Calendar,
  CheckCircle,
  Clock,
  Shield,
  FileText,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission error:', data.error);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="min-h-screen py-32">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
                <Mail className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
                <span className="text-sm text-[rgb(var(--text-secondary))]">Contact Us</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Let's Build Your
                <br />
                <span className="animated-gradient-text">AI Automation</span>
              </h1>
              <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
                Book a free AI Integration Audit and get your workflow map with templates.
                Fast 15–20 min call to transform your business.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Column - What You Get */}
              <div className="lg:col-span-2 space-y-6">
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-4">
                    What You Get in the Free Audit
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: FileText, text: "AI workflow map for one process" },
                      { icon: CheckCircle, text: "Recommended agents/automations" },
                      { icon: Shield, text: "Risk/ToS compliance notes" },
                      { icon: MessageSquare, text: "Template pack to get started" }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-[rgb(var(--success-primary))] mt-0.5" />
                          <span className="text-sm text-[rgb(var(--text-secondary))]">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-4">
                    Why Work With Us
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Limited onboardings per month",
                      "Human-in-the-loop approach",
                      "Pay-on-proof pilot program",
                      "Full ownership transfer"
                    ].map((text, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent-primary))] mt-2" />
                        <span className="text-sm text-[rgb(var(--text-secondary))]">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-4">
                    Quick Response Time
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
                    <span className="text-sm text-[rgb(var(--text-secondary))]">
                      Average response: <strong>2-4 hours</strong>
                    </span>
                  </div>
                  <p className="text-xs text-[rgb(var(--text-tertiary))]">
                    Monday to Friday, 9 AM - 6 PM EST
                  </p>
                </GlassCard>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <GlassCard className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgb(var(--success-primary)/0.1)] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[rgb(var(--success-primary))]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                      Thanks for reaching out!
                    </h3>
                    <p className="text-[rgb(var(--text-secondary))] mb-6">
                      We'll be in touch shortly to schedule your free AI Integration Audit.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] transition-colors"
                    >
                      Send another message →
                    </button>
                  </GlassCard>
                ) : (
                  <GlassCard className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-tertiary))] focus:outline-none focus:border-[rgb(var(--accent-primary)/0.5)] focus:ring-1 focus:ring-[rgb(var(--accent-primary)/0.2)] transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-tertiary))] focus:outline-none focus:border-[rgb(var(--accent-primary)/0.5)] focus:ring-1 focus:ring-[rgb(var(--accent-primary)/0.2)] transition-all"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                          What problem should we tackle first? *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-tertiary))] focus:outline-none focus:border-[rgb(var(--accent-primary)/0.5)] focus:ring-1 focus:ring-[rgb(var(--accent-primary)/0.2)] transition-all resize-none"
                          placeholder="We're spending too much time on manual data entry and follow-ups..."
                        />
                      </div>

                      <div className="pt-4">
                        <GlassButton
                          type="submit"
                          variant="solid"
                          size="lg"
                          className="w-full whitespace-nowrap"
                          loading={isSubmitting}
                        >
                          <span className="flex items-center justify-center gap-2">
                            <span>{isSubmitting ? "Sending..." : "Book Free AI Integration Audit"}</span>
                            {!isSubmitting && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
                          </span>
                        </GlassButton>
                      </div>

                      <p className="text-xs text-[rgb(var(--text-tertiary))] text-center">
                        We'll never share your data. Audit outputs remain yours.
                      </p>
                    </form>
                  </GlassCard>
                )}

                {/* Alternative Contact Methods */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <a
                    href="https://calendly.com/neuraledge/audit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-4 rounded-lg hover:bg-white/[0.03] transition-colors group"
                  >
                    <Calendar className="w-5 h-5 text-[rgb(var(--accent-primary))] mb-2" />
                    <h4 className="text-sm font-medium text-[rgb(var(--text-primary))] mb-1">
                      Schedule Directly
                    </h4>
                    <p className="text-xs text-[rgb(var(--text-tertiary))]">
                      Book a time that works for you
                    </p>
                  </a>

                  <a
                    href="mailto:hello@neuraledge.live"
                    className="glass p-4 rounded-lg hover:bg-white/[0.03] transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-[rgb(var(--accent-primary))] mb-2" />
                    <h4 className="text-sm font-medium text-[rgb(var(--text-primary))] mb-1">
                      Email Us
                    </h4>
                    <p className="text-xs text-[rgb(var(--text-tertiary))]">
                      hello@neuraledge.live
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}