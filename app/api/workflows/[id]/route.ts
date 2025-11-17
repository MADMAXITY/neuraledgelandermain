import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Workflow } from '@/lib/workflows';

// Cache for workflow data
let cachedWorkflows: Workflow[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Load workflows from JSON file
async function loadWorkflows(): Promise<Workflow[]> {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedWorkflows && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedWorkflows;
  }

  try {
    // Load from the data directory
    const workflowsPath = path.join(process.cwd(), 'data', 'workflows.json');

    if (fs.existsSync(workflowsPath)) {
      const data = fs.readFileSync(workflowsPath, 'utf-8');
      cachedWorkflows = JSON.parse(data);
      cacheTimestamp = now;
      return cachedWorkflows || [];
    }

    // Return empty array if no file exists
    return [];
  } catch (error) {
    console.error('Error loading workflows:', error);
    return [];
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: workflowId } = await params;

    // Load workflows
    const allWorkflows = await loadWorkflows();

    // Find the specific workflow - convert both to string for comparison
    const workflow = allWorkflows.find(w => w.id.toString() === workflowId);

    if (!workflow) {
      return NextResponse.json(
        { error: 'Workflow not found' },
        { status: 404 }
      );
    }

    // Find related workflows (same categories)
    const relatedWorkflows = allWorkflows
      .filter(w => {
        if (w.id.toString() === workflowId) return false;

        // Check for matching categories
        if (workflow.categories && w.categories) {
          const workflowCategories = new Set(workflow.categories);
          return w.categories.some(cat => workflowCategories.has(cat));
        }

        return false;
      })
      .slice(0, 4); // Limit to 4 related workflows

    return NextResponse.json({
      workflow,
      relatedWorkflows
    });
  } catch (error) {
    console.error('Error fetching workflow:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workflow' },
      { status: 500 }
    );
  }
}