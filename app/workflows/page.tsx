"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Filter,
  Workflow as WorkflowIcon,
  Clock,
  Eye,
  Layers,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Package,
  User,
  Calendar,
  Code2
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassSelectEnhanced } from "@/components/ui/glass-select";
import { Footer } from "@/components/layout/footer";
import { Workflow } from "@/lib/workflows";
import { formatDate, calculateComplexity, extractCategories, extractIntegrations } from "@/lib/workflows";

interface PaginatedResponse {
  workflows: Workflow[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch workflows when filters change
  useEffect(() => {
    fetchWorkflows();
  }, [searchQuery, selectedCategory, selectedComplexity, currentPage]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/workflows?categories=true');
      const data = await response.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchWorkflows = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        q: searchQuery,
        category: selectedCategory,
        complexity: selectedComplexity,
        page: currentPage.toString(),
        pageSize: '24'
      });

      const response = await fetch(`/api/workflows?${params}`);
      const data: PaginatedResponse = await response.json();

      setWorkflows(data.workflows || []);
      setTotalPages(data.totalPages || 1);
      setTotalCount(data.totalCount || 0);
    } catch (error) {
      console.error('Error fetching workflows:', error);
      setWorkflows([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, selectedComplexity, currentPage]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchWorkflows();
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'simple':
        return 'text-[rgb(var(--success-primary))]';
      case 'intermediate':
        return 'text-[rgb(var(--warning-primary))]';
      case 'advanced':
        return 'text-[rgb(var(--error-primary))]';
      default:
        return 'text-[rgb(var(--text-secondary))]';
    }
  };

  return (
    <>
      <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--accent-primary)/0.1)] border border-[rgb(var(--accent-primary)/0.2)] mb-6">
              <WorkflowIcon className="w-4 h-4 text-[rgb(var(--accent-primary))]" />
              <span className="text-sm font-medium text-[rgb(var(--accent-primary))]">
                10,000+ Ready Workflows
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-4 sm:mb-6">
              Browse AI
              <br />
              <span className="animated-gradient-text">Workflow Templates</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--text-secondary))] max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              {totalCount.toLocaleString()} pre-built n8n workflows ready to deploy.
              Find the perfect automation for your business in seconds.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(var(--accent-primary))]">
                  {totalCount.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-[rgb(var(--text-tertiary))]">Total Workflows</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(var(--success-primary))]">
                  {categories.length}
                </div>
                <div className="text-xs sm:text-sm text-[rgb(var(--text-tertiary))]">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(var(--warning-primary))]">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[rgb(var(--text-tertiary))]">Production Ready</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <GlassCard className="p-4 sm:p-6">
              <form onSubmit={handleSearch} className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-[rgb(var(--text-tertiary))]" />
                  <input
                    type="text"
                    placeholder="Search workflows..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-tertiary))] focus:outline-none focus:border-[rgb(var(--accent-primary)/0.5)] focus:ring-1 focus:ring-[rgb(var(--accent-primary)/0.2)] text-sm sm:text-base"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-end">
                  {/* Category Filter */}
                  <div className="flex-1 sm:min-w-[200px]">
                    <GlassSelectEnhanced
                      label="Category"
                      value={selectedCategory}
                      onChange={(e) => {
                        // Extract actual category name (remove index suffix)
                        const value = e.target.value;
                        const actualCategory = value === 'all' ? 'all' : value.substring(0, value.lastIndexOf('_'));
                        setSelectedCategory(actualCategory);
                        setCurrentPage(1);
                      }}
                      options={[
                        { value: 'all', label: 'All Categories' },
                        ...categories.slice(0, 15).map((cat, index) => ({
                          value: `${cat.name}_${index}`, // Make value unique
                          label: cat.name.charAt(0).toUpperCase() + cat.name.slice(1),
                          count: cat.count
                        }))
                      ]}
                    />
                  </div>

                  {/* Complexity Filter */}
                  <div className="flex-1 sm:min-w-[200px]">
                    <GlassSelectEnhanced
                      label="Complexity"
                      value={selectedComplexity}
                      onChange={(e) => {
                        setSelectedComplexity(e.target.value);
                        setCurrentPage(1);
                      }}
                      options={[
                        { value: 'all', label: 'All Complexity' },
                        { value: 'simple', label: 'Simple (1-5 nodes)' },
                        { value: 'intermediate', label: 'Intermediate (6-15 nodes)' },
                        { value: 'advanced', label: 'Advanced (16+ nodes)' }
                      ]}
                    />
                  </div>

                  <GlassButton type="submit" variant="default" size="sm" className="w-full sm:w-auto h-[42px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <span className="sm:hidden">Filter</span>
                    <span className="hidden sm:inline">Apply Filters</span>
                  </GlassButton>
                </div>
              </form>
            </GlassCard>
          </motion.div>

          {/* Workflows Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[rgb(var(--accent-primary))]" />
            </div>
          ) : workflows.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-[rgb(var(--text-tertiary))] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                No workflows found
              </h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                {workflows.map((workflow, index) => {
                  const complexity = calculateComplexity(workflow);
                  const categories = extractCategories(workflow);
                  const integrations = extractIntegrations(workflow);

                  return (
                    <motion.div
                      key={workflow.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                    >
                      <Link href={`/workflows/${workflow.id}`}>
                        <GlassCard hover className="h-full p-6 cursor-pointer group">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[rgb(var(--accent-primary)/0.2)] to-[rgb(var(--accent-secondary)/0.1)] flex items-center justify-center">
                              <WorkflowIcon className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/[0.03] ${getComplexityColor(complexity)}`}>
                              {complexity}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-3 group-hover:text-[rgb(var(--accent-primary))] transition-colors line-clamp-2">
                            {workflow.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-[rgb(var(--text-secondary))] mb-4 line-clamp-2">
                            {workflow.full_description || workflow.description || "Automate your workflow with this pre-built template"}
                          </p>

                          {/* Integrations */}
                          {integrations.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {integrations.slice(0, 3).map((integration, idx) => (
                                <span
                                  key={`${integration}-${idx}`}
                                  className="px-2 py-1 rounded-md bg-gradient-to-r from-[rgb(var(--accent-primary)/0.1)] to-[rgb(var(--accent-secondary)/0.05)] border border-[rgb(var(--accent-primary)/0.2)] text-xs text-[rgb(var(--accent-primary))]"
                                >
                                  {integration}
                                </span>
                              ))}
                              {integrations.length > 3 && (
                                <span className="px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs text-[rgb(var(--text-tertiary))]">
                                  +{integrations.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Categories */}
                          {categories.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {categories.slice(0, 2).map((cat, idx) => (
                                <span
                                  key={`${cat}-${idx}`}
                                  className="px-2 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-[rgb(var(--text-tertiary))]"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-white/[0.05] text-xs text-[rgb(var(--text-tertiary))]">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Layers className="w-3 h-3" />
                                {workflow.node_count} nodes
                              </span>
                              {workflow.published_date && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {formatDate(workflow.published_date)}
                                </span>
                              )}
                            </div>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                          </div>
                        </GlassCard>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4">
                  <GlassButton
                    variant="secondary"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </GlassButton>

                  <span className="text-[rgb(var(--text-secondary))]">
                    Page {currentPage} of {totalPages}
                  </span>

                  <GlassButton
                    variant="secondary"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </GlassButton>
                </div>
              )}
            </>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <GlassCard className="p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-4">
                Need a Custom Workflow?
              </h2>
              <p className="text-lg text-[rgb(var(--text-secondary))] mb-8">
                Our AI experts can build and deploy custom workflows tailored to your specific needs.
                Get started with a free consultation.
              </p>
              <Link href="/contact">
                <GlassButton variant="solid" size="lg" glow>
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Get Custom Workflow</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </GlassButton>
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}