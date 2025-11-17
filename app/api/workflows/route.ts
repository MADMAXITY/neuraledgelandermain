import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Workflow, searchWorkflows, paginateWorkflows, getCategoryCounts } from '@/lib/workflows';

// Cache for workflow data
let cachedWorkflows: Workflow[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 0; // Disable cache completely for development

// Load workflows from JSON file
async function loadWorkflows(): Promise<Workflow[]> {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedWorkflows && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedWorkflows;
  }

  try {
    // Try to load from the workflows export file
    const workflowsPath = path.join(process.cwd(), '..', 'workflows', 'workflows_export.json');

    if (!fs.existsSync(workflowsPath)) {
      // Fallback to a local copy if the original path doesn't exist
      const localPath = path.join(process.cwd(), 'data', 'workflows.json');
      if (fs.existsSync(localPath)) {
        const data = fs.readFileSync(localPath, 'utf-8');
        cachedWorkflows = JSON.parse(data);
      } else {
        // Return sample data if no file exists
        cachedWorkflows = generateSampleWorkflows();
      }
    } else {
      const data = fs.readFileSync(workflowsPath, 'utf-8');
      cachedWorkflows = JSON.parse(data);
    }

    cacheTimestamp = now;
    return cachedWorkflows || [];
  } catch (error) {
    console.error('Error loading workflows:', error);
    // Return sample data on error
    return generateSampleWorkflows();
  }
}

// Generate sample workflows for demonstration (fallback)
function generateSampleWorkflows(): Workflow[] {
  const categories = [
    ['Email Automation'], ['CRM Integration'], ['Data Processing'],
    ['Social Media'], ['E-commerce'], ['Analytics'], ['Marketing'],
    ['Sales'], ['Support'], ['Development']
  ];

  const sampleWorkflows: Workflow[] = [];

  for (let i = 1; i <= 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const nodeCount = Math.floor(Math.random() * 20) + 3;

    sampleWorkflows.push({
      id: i,
      url: `https://n8n.io/workflows/${i}`,
      slug: `workflow-${i}`,
      title: `${category[0]} Workflow ${i}`,
      description: `Automate your ${category[0].toLowerCase()} tasks with this powerful workflow.`,
      full_description: `Automate your ${category[0].toLowerCase()} tasks with this powerful workflow. Connect multiple services and streamline your processes. This workflow helps you save time and increase productivity.`,
      categories: category,
      node_types: [
        'n8n-nodes-base.webhook',
        'n8n-nodes-base.http',
        'n8n-nodes-base.function',
        'n8n-nodes-base.email',
        'n8n-nodes-base.database'
      ].slice(0, Math.floor(Math.random() * 5) + 1),
      creator: `User ${Math.floor(Math.random() * 100)}`,
      creator_username: `user${Math.floor(Math.random() * 100)}`,
      published_date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
      updated_date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      node_count: nodeCount,
      status: 'completed',
      scraped_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  }

  return sampleWorkflows;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || 'all';
    const complexity = searchParams.get('complexity') || 'all';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '24', 10);
    const getCategories = searchParams.get('categories') === 'true';

    // Load workflows
    const allWorkflows = await loadWorkflows();

    // If requesting categories
    if (getCategories) {
      const categories = getCategoryCounts(allWorkflows);
      return NextResponse.json({ categories });
    }

    // Search and filter workflows
    const filteredWorkflows = searchWorkflows(allWorkflows, query, category, complexity);

    // Paginate results
    const paginatedResult = paginateWorkflows(filteredWorkflows, page, pageSize);

    return NextResponse.json(paginatedResult);
  } catch (error) {
    console.error('Error in workflows API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workflows' },
      { status: 500 }
    );
  }
}