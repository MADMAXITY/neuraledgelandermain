const fs = require('fs');
const path = require('path');

// The 9 corrupted categories that appear in EVERY workflow
const CORRUPTED_CATEGORIES = [
  'Communication',
  'Development',
  'Cybersecurity',
  'Data & Storage',
  'Marketing',
  'Productivity',
  'Sales',
  'Utility',
  'Miscellaneous'
];

// Read the workflows file
const workflowsPath = path.join(__dirname, '..', 'data', 'workflows.json');
const backupPath = path.join(__dirname, '..', 'data', 'workflows.pre-category-fix.json');

console.log('Reading workflows from:', workflowsPath);
const data = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));

console.log(`Total workflows to fix: ${data.length}`);

// Create backup before fixing
console.log('Creating backup...');
fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));
console.log(`Backup saved to: ${backupPath}`);

// Track statistics
let totalCategoriesRemoved = 0;
let workflowsFixed = 0;
const categoryDistribution = {};

// Fix each workflow
data.forEach((workflow, index) => {
  if (workflow.categories && Array.isArray(workflow.categories)) {
    const originalCategories = workflow.categories.filter(cat =>
      !CORRUPTED_CATEGORIES.includes(cat)
    );

    const removedCount = workflow.categories.length - originalCategories.length;

    if (removedCount > 0) {
      if (index < 5) {
        console.log(`\nExample ${index + 1}: Workflow "${workflow.title}"`);
        console.log(`  Before: [${workflow.categories.join(', ')}]`);
        console.log(`  After: [${originalCategories.join(', ')}]`);
        console.log(`  Removed: ${removedCount} categories`);
      }

      workflow.categories = originalCategories;
      totalCategoriesRemoved += removedCount;
      workflowsFixed++;

      // Track distribution
      originalCategories.forEach(cat => {
        categoryDistribution[cat] = (categoryDistribution[cat] || 0) + 1;
      });
    }
  }
});

console.log('\n=== FIX SUMMARY ===');
console.log(`Workflows fixed: ${workflowsFixed}`);
console.log(`Total categories removed: ${totalCategoriesRemoved}`);
console.log(`Average categories removed per workflow: ${(totalCategoriesRemoved / workflowsFixed).toFixed(1)}`);

// Show category distribution
console.log('\n=== TOP 20 CATEGORIES AFTER FIX ===');
const sortedCategories = Object.entries(categoryDistribution)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

sortedCategories.forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} workflows`);
});

// Check if any of the corrupted categories remain
console.log('\n=== VERIFICATION ===');
let corruptedRemaining = false;
CORRUPTED_CATEGORIES.forEach(cat => {
  const count = categoryDistribution[cat] || 0;
  if (count > 0) {
    console.log(`WARNING: "${cat}" still appears in ${count} workflows`);
    corruptedRemaining = true;
  }
});

if (!corruptedRemaining) {
  console.log('✅ All corrupted categories successfully removed!');
} else {
  console.log('⚠️ Some corrupted categories may be legitimate for specific workflows');
}

// Save the fixed data
console.log('\nSaving fixed data...');
fs.writeFileSync(workflowsPath, JSON.stringify(data, null, 2));
console.log('✅ Data fixed and saved successfully!');

// Final verification
console.log('\n=== FINAL CHECKS ===');
const fixedData = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));
let maxCategories = 0;
let workflowWithMostCategories = null;

fixedData.forEach(workflow => {
  if (workflow.categories && workflow.categories.length > maxCategories) {
    maxCategories = workflow.categories.length;
    workflowWithMostCategories = workflow;
  }
});

console.log(`Maximum categories per workflow: ${maxCategories}`);
if (workflowWithMostCategories) {
  console.log(`  Workflow: "${workflowWithMostCategories.title}"`);
  console.log(`  Categories: [${workflowWithMostCategories.categories.join(', ')}]`);
}

// Check for workflows with no categories
const noCategories = fixedData.filter(w => !w.categories || w.categories.length === 0);
console.log(`Workflows with no categories: ${noCategories.length}`);

console.log('\n✅ Category corruption fix complete!');