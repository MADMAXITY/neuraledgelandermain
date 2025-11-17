"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Workflow as WorkflowIcon,
  Layers,
  Download,
  Copy,
  CheckCircle,
  Clock,
  Calendar,
  ArrowRight,
  Loader2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Brain
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Footer } from "@/components/layout/footer";
import { Workflow } from "@/lib/workflows";
import { formatDate, calculateComplexity, extractCategories } from "@/lib/workflows";

interface WorkflowDetailResponse {
  workflow: Workflow;
  relatedWorkflows: Workflow[];
}

// Generate sample node types based on workflow title for demo purposes
function generateSampleNodeTypes(workflow: Workflow): string[] {
  const title = workflow.title.toLowerCase();
  const baseNodes = ['n8n-nodes-base.start', 'n8n-nodes-base.set'];

  // Add relevant nodes based on title keywords
  if (title.includes('google') || title.includes('calendar')) {
    baseNodes.push('n8n-nodes-base.googleCalendar', 'n8n-nodes-base.googleSheets');
  }
  if (title.includes('email') || title.includes('mail')) {
    baseNodes.push('n8n-nodes-base.emailSend', 'n8n-nodes-base.gmail');
  }
  if (title.includes('database') || title.includes('postgres') || title.includes('mysql')) {
    baseNodes.push('n8n-nodes-base.postgres', 'n8n-nodes-base.mysql');
  }
  if (title.includes('api') || title.includes('webhook')) {
    baseNodes.push('n8n-nodes-base.webhook', 'n8n-nodes-base.httpRequest');
  }
  if (title.includes('slack')) {
    baseNodes.push('n8n-nodes-base.slack');
  }
  if (title.includes('excel') || title.includes('spreadsheet')) {
    baseNodes.push('n8n-nodes-base.microsoftExcel', 'n8n-nodes-base.spreadsheetFile');
  }
  if (title.includes('schedule') || title.includes('cron')) {
    baseNodes.push('n8n-nodes-base.cron', 'n8n-nodes-base.schedule');
  }

  // Add some common nodes
  if (baseNodes.length < 5) {
    baseNodes.push('n8n-nodes-base.if', 'n8n-nodes-base.function', 'n8n-nodes-base.merge');
  }

  return baseNodes.slice(0, Math.min(baseNodes.length, workflow.node_count || 7));
}

// Extract integrations from generated node types
function extractIntegrationsFromNodes(nodeTypes: string[]): string[] {
  const integrations = new Set<string>();

  nodeTypes.forEach(node => {
    if (node.includes('google')) integrations.add('Google');
    if (node.includes('calendar')) integrations.add('Calendar');
    if (node.includes('sheets')) integrations.add('Sheets');
    if (node.includes('email') || node.includes('gmail')) integrations.add('Email');
    if (node.includes('postgres')) integrations.add('PostgreSQL');
    if (node.includes('mysql')) integrations.add('MySQL');
    if (node.includes('slack')) integrations.add('Slack');
    if (node.includes('webhook')) integrations.add('Webhook');
    if (node.includes('http')) integrations.add('HTTP');
    if (node.includes('excel')) integrations.add('Excel');
    if (node.includes('cron')) integrations.add('Scheduler');
  });

  return Array.from(integrations);
}

export default function WorkflowDetailPage() {
  const params = useParams();
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [relatedWorkflows, setRelatedWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [actualWorkflowJson, setActualWorkflowJson] = useState<any>(null);

  useEffect(() => {
    if (params.id) {
      fetchWorkflowDetail(params.id as string);
    }
  }, [params.id]);

  const fetchWorkflowDetail = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      // Fetch workflow metadata
      const response = await fetch(`/api/workflows/${id}`);

      if (!response.ok) {
        throw new Error('Workflow not found');
      }

      const data: WorkflowDetailResponse = await response.json();
      setWorkflow(data.workflow);
      setRelatedWorkflows(data.relatedWorkflows || []);

      // Fetch actual workflow JSON
      try {
        const workflowFileResponse = await fetch(`/api/workflows/${id}/download`);
        if (workflowFileResponse.ok) {
          const workflowJson = await workflowFileResponse.json();
          setActualWorkflowJson(workflowJson);
        }
      } catch (err) {
        console.log('Could not fetch actual workflow file, using metadata instead');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load workflow');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyWorkflow = () => {
    // Use actual workflow JSON if available, otherwise fall back to metadata
    const dataToCopy = actualWorkflowJson || workflow;
    if (dataToCopy) {
      navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadWorkflow = () => {
    // Use actual workflow JSON if available, otherwise fall back to metadata
    const dataToDownload = actualWorkflowJson || workflow;
    if (dataToDownload) {
      const dataStr = JSON.stringify(dataToDownload, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

      // Use the workflow name from actual JSON if available
      let fileName = 'workflow.json';
      if (actualWorkflowJson && actualWorkflowJson.name) {
        fileName = `${actualWorkflowJson.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
      } else if (workflow) {
        fileName = `${workflow.slug || workflow.id}-workflow.json`;
      }

      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', fileName);
      linkElement.click();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[rgb(var(--accent-primary))]" />
      </div>
    );
  }

  if (error || !workflow) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassCard className="p-8 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-[rgb(var(--error-primary))] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
            {error || 'Workflow not found'}
          </h2>
          <p className="text-[rgb(var(--text-secondary))] mb-6">
            The workflow you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/workflows">
            <GlassButton variant="secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Workflows
            </GlassButton>
          </Link>
        </GlassCard>
      </div>
    );
  }

  const complexity = calculateComplexity(workflow);
  const categories = extractCategories(workflow);

  // Extract actual node types from the real workflow JSON if available
  let nodeTypes: string[] = [];
  if (actualWorkflowJson && actualWorkflowJson.nodes) {
    // Extract unique node types from actual workflow nodes
    const uniqueTypes = new Set<string>();
    actualWorkflowJson.nodes.forEach((node: any) => {
      if (node.type) {
        uniqueTypes.add(node.type);
      }
    });
    nodeTypes = Array.from(uniqueTypes);
  } else if (workflow.node_types && workflow.node_types.length > 0) {
    // Use node_types from metadata if available
    nodeTypes = workflow.node_types;
  } else {
    // Generate sample node types as fallback
    nodeTypes = generateSampleNodeTypes(workflow);
  }

  const integrations = extractIntegrationsFromNodes(nodeTypes);

  return (
    <>
      <section className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link href="/workflows">
              <button className="flex items-center gap-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Workflows</span>
              </button>
            </Link>
          </motion.div>

          {/* Main Content - Centered Layout */}
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[rgb(var(--accent-primary)/0.2)] to-[rgb(var(--accent-secondary)/0.1)] mb-6">
                <WorkflowIcon className="w-10 h-10 text-[rgb(var(--accent-primary))]" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[rgb(var(--text-primary))] mb-4">
                {workflow.title}
              </h1>

              <div className="flex items-center justify-center gap-4 text-sm text-[rgb(var(--text-secondary))] mb-6">
                {workflow.published_date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(workflow.published_date)}
                  </span>
                )}
                {workflow.updated_date && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Updated {formatDate(workflow.updated_date)}
                  </span>
                )}
                {workflow.url && (
                  <a
                    href={workflow.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View on n8n.io
                  </a>
                )}
              </div>

              {/* Description */}
              {(workflow.full_description || workflow.description) && (
                <p className="text-lg text-[rgb(var(--text-secondary))] max-w-3xl mx-auto mb-8">
                  {workflow.full_description || workflow.description || "Automate your workflows with this powerful n8n template."}
                </p>
              )}

              {/* Categories */}
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-[rgb(var(--text-secondary))]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Stats Grid - Centered and Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10"
            >
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] text-center mb-6">
                  Workflow Stats
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[rgb(var(--accent-primary)/0.08)] to-transparent border border-[rgb(var(--accent-primary)/0.15)]">
                    <Layers className="w-6 h-6 text-[rgb(var(--accent-primary))] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[rgb(var(--accent-primary))]">
                      {actualWorkflowJson?.nodes?.length || workflow.node_count || 0}
                    </div>
                    <div className="text-xs text-[rgb(var(--text-tertiary))] mt-1">Total Nodes</div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[rgb(var(--warning-primary)/0.08)] to-transparent border border-[rgb(var(--warning-primary)/0.15)]">
                    <Brain className="w-6 h-6 text-[rgb(var(--warning-primary))] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[rgb(var(--warning-primary))] capitalize">
                      {complexity === 'intermediate' ? 'Inter.' : complexity}
                    </div>
                    <div className="text-xs text-[rgb(var(--text-tertiary))] mt-1">Complexity</div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[rgb(var(--success-primary)/0.08)] to-transparent border border-[rgb(var(--success-primary)/0.15)]">
                    <Sparkles className="w-6 h-6 text-[rgb(var(--success-primary))] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[rgb(var(--success-primary))]">
                      {integrations.length}
                    </div>
                    <div className="text-xs text-[rgb(var(--text-tertiary))] mt-1">Integrations</div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[rgb(var(--info-primary)/0.08)] to-transparent border border-[rgb(var(--info-primary)/0.15)]">
                    <WorkflowIcon className="w-6 h-6 text-[rgb(var(--info-primary))] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[rgb(var(--info-primary))]">
                      {nodeTypes.length}
                    </div>
                    <div className="text-xs text-[rgb(var(--text-tertiary))] mt-1">Node Types</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Integrations Section */}
            {integrations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10"
              >
                <GlassCard className="p-8">
                  <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] text-center mb-6">
                    Integrations & Services
                  </h2>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {integrations.map((integration) => (
                      <span
                        key={integration}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-[rgb(var(--accent-primary)/0.1)] to-[rgb(var(--accent-secondary)/0.05)] border border-[rgb(var(--accent-primary)/0.2)] text-sm text-[rgb(var(--accent-primary))] font-medium"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {/* Action Buttons - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10"
            >
              <div className="max-w-md mx-auto space-y-3">
                <Link href="/contact" className="block">
                  <GlassButton variant="solid" size="lg" className="w-full" glow>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Custom Deployment
                  </GlassButton>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <GlassButton
                    variant="secondary"
                    size="md"
                    onClick={handleDownloadWorkflow}
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </GlassButton>

                  <GlassButton
                    variant="secondary"
                    size="md"
                    onClick={handleCopyWorkflow}
                    className="w-full"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy JSON
                      </>
                    )}
                  </GlassButton>
                </div>
              </div>
            </motion.div>

            {/* Related Workflows */}
            {relatedWorkflows.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <GlassCard className="p-8">
                  <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] text-center mb-6">
                    Related Workflows
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {relatedWorkflows.slice(0, 4).map((related) => (
                      <Link key={related.id} href={`/workflows/${related.id}`}>
                        <div className="group p-4 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[rgb(var(--accent-primary)/0.2)] transition-all cursor-pointer">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors line-clamp-1">
                              {related.title}
                            </h3>
                            <ArrowRight className="w-4 h-4 text-[rgb(var(--text-tertiary))] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 flex-shrink-0" />
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[rgb(var(--text-tertiary))]">
                            <span>{related.node_count || 0} nodes</span>
                            <span>•</span>
                            <span className="capitalize">{calculateComplexity(related)}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="text-center mt-6">
                    <Link href="/workflows">
                      <button className="text-sm text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] transition-colors">
                        Browse All Workflows →
                      </button>
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}