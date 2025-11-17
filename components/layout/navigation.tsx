"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Layers,
  Building2
} from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Solutions",
    href: "/solutions",
    children: [
      {
        title: "Social & Content",
        href: "/solutions/smmc",
        description: "Turn attention into DMs",
        icon: MessageSquare
      },
      {
        title: "High-Ticket SaaS",
        href: "/solutions/saas",
        description: "Shorten cycles. Prove value faster",
        icon: Layers
      },
      {
        title: "Real Estate",
        href: "/solutions/real-estate",
        description: "More appointments. Cleaner closes",
        icon: Building2
      },
    ],
  },
  {
    title: "Workflows",
    href: "/workflows",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "https://neuraledge.blog",
    external: true,
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgb(var(--bg-primary)/0.95)] backdrop-blur-2xl py-4 shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
            : "py-6"
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 sm:h-12 md:h-14 w-36 sm:w-48 md:w-56 lg:w-64 transition-transform group-hover:scale-105">
                <Image
                  src="/nelogo.png"
                  alt="NeuralEdge"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link flex items-center gap-1 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                    >
                      {item.title}
                      <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "nav-link flex items-center gap-1 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors",
                        pathname === item.href && "text-[rgb(var(--text-primary))]"
                      )}
                    >
                      {item.title}
                      {item.children && (
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.title && "rotate-180"
                        )} />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72"
                        >
                          <div className="glass rounded-xl p-2 shadow-2xl border border-white/[0.08]">
                            {item.children.map((child) => {
                              const Icon = child.icon;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.05] transition-colors group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[rgb(var(--accent-primary)/0.1)] to-[rgb(var(--accent-secondary)/0.1)] flex items-center justify-center mt-0.5">
                                    <Icon className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors">
                                      {child.title}
                                    </div>
                                    <div className="text-xs text-[rgb(var(--text-tertiary))] mt-0.5">
                                      {child.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link href="/contact">
                <GlassButton variant="solid" size="md" className="group whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 flex-shrink-0" />
                    <span>Book a Demo</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </GlassButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-lg glass transition-colors hover:bg-white/[0.05] active:bg-white/[0.1] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[rgb(var(--text-primary))]" />
              ) : (
                <Menu className="w-6 h-6 text-[rgb(var(--text-primary))]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full sm:max-w-sm bg-[rgb(var(--bg-secondary))] border-l border-white/[0.08]"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/[0.08]">
                  <Link href="/" className="flex items-center">
                    <div className="relative h-8 sm:h-10 w-32 sm:w-40">
                      <Image
                        src="/nelogo.png"
                        alt="NeuralEdge"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-lg glass hover:bg-white/[0.05] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-[rgb(var(--text-primary))]" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <div key={item.title}>
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-lg hover:bg-white/[0.05] active:bg-white/[0.1] transition-colors min-h-[48px]"
                          >
                            <span className="text-base text-[rgb(var(--text-primary))]">{item.title}</span>
                            <ArrowRight className="w-5 h-5 text-[rgb(var(--text-tertiary))] rotate-[-45deg]" />
                          </a>
                        ) : item.children ? (
                          <>
                            <div className="p-3 text-[rgb(var(--text-tertiary))] text-sm font-medium uppercase tracking-wide">
                              {item.title}
                            </div>
                            <div className="ml-2 space-y-1">
                              {item.children.map((child) => {
                                const Icon = child.icon;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/[0.05] active:bg-white/[0.1] transition-colors min-h-[56px]"
                                  >
                                    <Icon className="w-5 h-5 text-[rgb(var(--accent-primary))] flex-shrink-0" />
                                    <div>
                                      <div className="text-base text-[rgb(var(--text-primary))]">
                                        {child.title}
                                      </div>
                                      <div className="text-sm text-[rgb(var(--text-tertiary))]">
                                        {child.description}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block p-4 rounded-lg hover:bg-white/[0.05] active:bg-white/[0.1] transition-colors text-base text-[rgb(var(--text-primary))] min-h-[48px]"
                          >
                            {item.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/[0.08]">
                  <Link href="/contact" className="block">
                    <GlassButton variant="solid" size="lg" className="w-full whitespace-nowrap">
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 flex-shrink-0" />
                        <span>Book a Demo</span>
                      </span>
                    </GlassButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}