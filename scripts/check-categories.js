const fs = require('fs');
const path = require('path');

// Read the workflows file
const workflowsPath = path.join(__dirname, '..', 'data', 'workflows.json');
const data = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));

console.log(`Total workflows: ${data.length}`);

// Count all categories
const categoryCount = {};
data.forEach(workflow => {
  if (workflow.categories && Array.isArray(workflow.categories)) {
    workflow.categories.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });
  }
});

// Sort categories by count
const sortedCategories = Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

console.log('\nTop 20 categories:');
sortedCategories.forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} workflows`);
});

// Check for duplicate category names (case-insensitive)
const categoryLower = {};
const duplicates = [];

Object.keys(categoryCount).forEach(cat => {
  const lower = cat.toLowerCase();
  if (categoryLower[lower]) {
    duplicates.push(`"${categoryLower[lower]}" and "${cat}"`);
  } else {
    categoryLower[lower] = cat;
  }
});

if (duplicates.length > 0) {
  console.log('\nFound duplicate category names (different case):');
  duplicates.forEach(dup => console.log(`  - ${dup}`));
}

// Check for workflows with duplicate categories within themselves
const workflowsWithDuplicateCategories = [];
data.forEach((workflow, index) => {
  if (workflow.categories && Array.isArray(workflow.categories)) {
    const uniqueCategories = new Set(workflow.categories);
    if (uniqueCategories.size < workflow.categories.length) {
      workflowsWithDuplicateCategories.push({
        index,
        id: workflow.id,
        title: workflow.title,
        categories: workflow.categories
      });
    }
  }
});

if (workflowsWithDuplicateCategories.length > 0) {
  console.log(`\nFound ${workflowsWithDuplicateCategories.length} workflows with duplicate categories within themselves:`);
  workflowsWithDuplicateCategories.slice(0, 5).forEach(w => {
    console.log(`  - Workflow ${w.id}: "${w.title}"`);
    console.log(`    Categories: [${w.categories.join(', ')}]`);
  });
}