import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: workflowId } = await params;

    // Validate workflow ID to prevent path traversal
    if (!/^[a-zA-Z0-9_-]+$/.test(workflowId)) {
      return NextResponse.json(
        { error: 'Invalid workflow ID' },
        { status: 400 }
      );
    }

    // Use a fixed path relative to the project
    const workflowFilePath = path.join(process.cwd(), 'workflows', 'workflows', `${workflowId}.json`);

    // Check if file exists
    if (!fs.existsSync(workflowFilePath)) {
      return NextResponse.json(
        { error: 'Workflow file not found' },
        { status: 404 }
      );
    }

    // Read the workflow file
    const workflowData = fs.readFileSync(workflowFilePath, 'utf-8');
    return NextResponse.json(JSON.parse(workflowData));

  } catch (error) {
    console.error('Error fetching workflow file:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workflow file' },
      { status: 500 }
    );
  }
}