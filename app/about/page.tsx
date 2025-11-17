import { Footer } from "@/components/layout/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Target, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
                <Brain className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
                <span className="text-sm text-[rgb(var(--text-secondary))]">About Us</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Building the Future of
                <br />
                <span className="animated-gradient-text">AI Automation</span>
              </h1>
              <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
                NeuralEdge is on a mission to democratize AI automation, making it accessible,
                safe, and valuable for businesses of all sizes.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <GlassCard className="p-6">
                <Target className="w-10 h-10 text-[rgb(var(--accent-primary))] mb-4" />
                <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-[rgb(var(--text-secondary))]">
                  Remove boring work through AI automation while maintaining human oversight and control.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <Users className="w-10 h-10 text-[rgb(var(--accent-primary))] mb-4" />
                <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">
                  Our Approach
                </h3>
                <p className="text-sm text-[rgb(var(--text-secondary))]">
                  Human-in-the-loop AI that augments your team, not replaces them.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <Sparkles className="w-10 h-10 text-[rgb(var(--accent-primary))] mb-4" />
                <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">
                  Our Promise
                </h3>
                <p className="text-sm text-[rgb(var(--text-secondary))]">
                  Pay-on-proof pilots. We deliver results or you don't pay.
                </p>
              </GlassCard>
            </div>

            {/* Story Section */}
            <GlassCard className="p-8 mb-16">
              <h2 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[rgb(var(--text-secondary))]">
                <p>
                  Founded by a team of AI engineers and automation specialists, NeuralEdge emerged
                  from a simple observation: businesses were drowning in repetitive tasks while
                  their talented teams were stuck doing robot work.
                </p>
                <p>
                  We believed there had to be a better way. A way where AI handles the mundane,
                  repetitive tasks while humans focus on creativity, strategy, and meaningful work
                  that moves the business forward.
                </p>
                <p>
                  Today, we help businesses across Social Media, SaaS, and Real Estate transform
                  their operations with production-ready AI automation that saves 40+ hours per
                  week while maintaining complete control and compliance.
                </p>
              </div>
            </GlassCard>

            {/* Values */}
            <div>
              <h2 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-6 text-center">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Transparency First",
                    description: "No black boxes. Every automation is auditable and understandable."
                  },
                  {
                    title: "Human Empowerment",
                    description: "AI should augment human capabilities, not replace human judgment."
                  },
                  {
                    title: "Results Oriented",
                    description: "We measure success by outcomes delivered, not hours billed."
                  },
                  {
                    title: "Continuous Innovation",
                    description: "The AI landscape evolves daily. So do we."
                  }
                ].map((value, index) => (
                  <GlassCard key={index} className="p-6">
                    <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[rgb(var(--text-secondary))]">
                      {value.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}