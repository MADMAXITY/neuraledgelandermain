// Workflow data types and utilities
export interface Workflow {
  id: number;
  url: string;
  slug: string;
  title: string;
  description: string;
  full_description: string | null;
  categories: string[];
  node_types: string[];
  creator: string | null;
  creator_username: string | null;
  published_date: string | null;
  updated_date: string | null;
  node_count: number;
  status: string;
  scraped_at: string;
  updated_at: string;
  // Computed fields
  complexity?: 'simple' | 'intermediate' | 'advanced';
}

export interface WorkflowCategory {
  name: string;
  count: number;
  icon?: string;
}

// Parse categories from workflow - now directly available
export function extractCategories(workflow: Workflow): string[] {
  // Categories are now directly provided in the data
  if (workflow.categories && Array.isArray(workflow.categories)) {
    return workflow.categories;
  }

  // Fallback: extract from description if categories not provided
  const categories: Set<string> = new Set();

  if (workflow.description) {
    const desc = workflow.description.toLowerCase();

    // Common categories
    const commonCategories = [
      'email', 'automation', 'api', 'database', 'webhook',
      'notification', 'integration', 'data', 'crm', 'marketing',
      'sales', 'support', 'analytics', 'social media', 'e-commerce',
      'productivity', 'communication', 'finance', 'hr', 'development'
    ];

    commonCategories.forEach(cat => {
      if (desc.includes(cat)) {
        categories.add(cat);
      }
    });
  }

  return Array.from(categories);
}

// Calculate workflow complexity based on node count
export function calculateComplexity(workflow: Workflow): 'simple' | 'intermediate' | 'advanced' {
  const nodeCount = workflow.node_count || 0;

  if (nodeCount <= 5) return 'simple';
  if (nodeCount <= 15) return 'intermediate';
  return 'advanced';
}

// Extract key integrations from node types
export function extractIntegrations(workflow: Workflow): string[] {
  if (!workflow.node_types || !Array.isArray(workflow.node_types)) {
    return [];
  }

  const integrationSet = new Set<string>();

  // Common integration patterns to extract
  const integrationPatterns = [
    'webhook', 'http', 'api', 'email', 'slack', 'discord',
    'telegram', 'twitter', 'facebook', 'google', 'github',
    'gitlab', 'jira', 'trello', 'asana', 'notion', 'airtable',
    'salesforce', 'hubspot', 'mailchimp', 'sendgrid', 'twilio',
    'stripe', 'paypal', 'shopify', 'woocommerce', 'wordpress',
    'mysql', 'postgresql', 'mongodb', 'redis', 'elasticsearch',
    'aws', 's3', 'lambda', 'sqs', 'sns', 'azure', 'gcp',
    'sheets', 'calendar', 'drive', 'gmail', 'outlook',
    'zoom', 'teams', 'dropbox', 'box', 'ftp', 'ssh', 'sftp'
  ];

  // Extract readable names from node types
  workflow.node_types.forEach(nodeType => {
    const lowerNodeType = nodeType.toLowerCase();

    // Try multiple patterns
    // Pattern 1: n8n-nodes-base.serviceName
    const baseMatch = nodeType.match(/n8n-nodes-base\.([a-zA-Z0-9]+)/i);
    if (baseMatch && baseMatch[1]) {
      const service = baseMatch[1].toLowerCase();

      // Check if it's a known integration
      for (const pattern of integrationPatterns) {
        if (service.includes(pattern) || pattern.includes(service)) {
          // Format the name properly
          const formatted = pattern.charAt(0).toUpperCase() + pattern.slice(1);
          integrationSet.add(formatted);
          break;
        }
      }

      // If not found in patterns, still add it if it's not a generic node
      const genericNodes = ['set', 'if', 'switch', 'loop', 'function', 'code', 'merge', 'split', 'wait', 'start', 'stop', 'noOp', 'stickyNote'];
      if (!genericNodes.includes(service)) {
        const formatted = service.charAt(0).toUpperCase() + service.slice(1);
        integrationSet.add(formatted);
      }
    }

    // Pattern 2: @n8n/serviceName or n8n-nodes-serviceName
    const customMatch = nodeType.match(/@n8n\/([a-zA-Z0-9]+)|n8n-nodes-([a-zA-Z0-9]+)\./i);
    if (customMatch) {
      const service = (customMatch[1] || customMatch[2]).toLowerCase();
      for (const pattern of integrationPatterns) {
        if (service.includes(pattern) || pattern.includes(service)) {
          const formatted = pattern.charAt(0).toUpperCase() + pattern.slice(1);
          integrationSet.add(formatted);
          break;
        }
      }
    }

    // Pattern 3: Direct service detection in any part of the node type
    for (const pattern of integrationPatterns) {
      if (lowerNodeType.includes(pattern)) {
        const formatted = pattern.charAt(0).toUpperCase() + pattern.slice(1);
        integrationSet.add(formatted);
      }
    }
  });

  // Special case formatting
  const formattingMap: { [key: string]: string } = {
    'Http': 'HTTP',
    'Api': 'API',
    'Aws': 'AWS',
    'S3': 'S3',
    'Sqs': 'SQS',
    'Sns': 'SNS',
    'Gcp': 'GCP',
    'Ftp': 'FTP',
    'Ssh': 'SSH',
    'Sftp': 'SFTP',
    'Mongodb': 'MongoDB',
    'Postgresql': 'PostgreSQL',
    'Mysql': 'MySQL',
    'Elasticsearch': 'Elasticsearch',
    'Hubspot': 'HubSpot',
    'Mailchimp': 'Mailchimp',
    'Sendgrid': 'SendGrid',
    'Woocommerce': 'WooCommerce',
    'Wordpress': 'WordPress'
  };

  // Apply special formatting and convert to array
  const integrations = Array.from(integrationSet).map(integration => {
    return formattingMap[integration] || integration;
  });

  return integrations.slice(0, 10); // Return up to 10 integrations
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

// Get category counts from workflows
export function getCategoryCounts(workflows: Workflow[]): WorkflowCategory[] {
  const counts: Record<string, number> = {};

  workflows.forEach(workflow => {
    const categories = extractCategories(workflow);
    categories.forEach(cat => {
      counts[cat] = (counts[cat] || 0) + 1;
    });
  });

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Search workflows
export function searchWorkflows(
  workflows: Workflow[],
  query: string,
  category?: string,
  complexity?: string
): Workflow[] {
  let filtered = workflows;

  // Filter by query
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(w =>
      w.title?.toLowerCase().includes(q) ||
      w.description?.toLowerCase().includes(q) ||
      w.full_description?.toLowerCase().includes(q) ||
      w.creator?.toLowerCase().includes(q) ||
      w.categories?.some(cat => cat.toLowerCase().includes(q)) ||
      w.node_types?.some(type => type.toLowerCase().includes(q))
    );
  }

  // Filter by category
  if (category && category !== 'all') {
    filtered = filtered.filter(w => {
      const categories = extractCategories(w);
      return categories.some(cat => cat.toLowerCase() === category.toLowerCase());
    });
  }

  // Filter by complexity
  if (complexity && complexity !== 'all') {
    filtered = filtered.filter(w =>
      calculateComplexity(w) === complexity
    );
  }

  return filtered;
}

// Paginate workflows
export function paginateWorkflows(
  workflows: Workflow[],
  page: number = 1,
  pageSize: number = 24
): {
  workflows: Workflow[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
} {
  const totalCount = workflows.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    workflows: workflows.slice(startIndex, endIndex),
    totalPages,
    currentPage,
    totalCount
  };
}