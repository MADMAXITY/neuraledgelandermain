const fs = require('fs');
const path = require('path');

// Read the workflows file
const workflowsPath = path.join(__dirname, '..', 'data', 'workflows.json');
const backupPath = path.join(__dirname, '..', 'data', 'workflows.categories-backup.json');
const data = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));

console.log(`Total workflows before cleaning: ${data.length}`);

// Create backup
console.log('Creating backup...');
fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));
console.log(`Backup saved to: ${backupPath}`);

// Fix duplicate categories within each workflow
let fixedCount = 0;
data.forEach(workflow => {
  if (workflow.categories && Array.isArray(workflow.categories)) {
    // Remove duplicates while preserving order
    const uniqueCategories = [];
    const seen = new Set();

    workflow.categories.forEach(cat => {
      if (!seen.has(cat)) {
        seen.add(cat);
        uniqueCategories.push(cat);
      }
    });

    if (uniqueCategories.length < workflow.categories.length) {
      console.log(`Fixed workflow ${workflow.id}: "${workflow.title}"`);
      console.log(`  Before: ${workflow.categories.length} categories`);
      console.log(`  After: ${uniqueCategories.length} categories`);
      workflow.categories = uniqueCategories;
      fixedCount++;
    }
  }
});

console.log(`\nFixed ${fixedCount} workflows with duplicate categories`);

// Save the cleaned data
console.log('\nSaving cleaned data...');
fs.writeFileSync(workflowsPath, JSON.stringify(data, null, 2));
console.log('✅ Categories cleaned successfully!');

// Verify the fix
console.log('\nVerifying...');
const verifyData = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));
let stillHasDuplicates = 0;

verifyData.forEach(workflow => {
  if (workflow.categories && Array.isArray(workflow.categories)) {
    const uniqueSet = new Set(workflow.categories);
    if (uniqueSet.size < workflow.categories.length) {
      stillHasDuplicates++;
    }
  }
});

if (stillHasDuplicates === 0) {
  console.log('✅ All duplicate categories have been removed!');
} else {
  console.log(`⚠️ Still ${stillHasDuplicates} workflows with duplicate categories`);
}