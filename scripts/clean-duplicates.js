const fs = require('fs');
const path = require('path');

// Read the workflows file
const workflowsPath = path.join(__dirname, '..', 'data', 'workflows.json');
const backupPath = path.join(__dirname, '..', 'data', 'workflows.backup.json');

console.log('Reading workflows.json...');
const data = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));

console.log(`Total workflows before cleaning: ${data.length}`);

// Create backup
console.log('Creating backup...');
fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));
console.log(`Backup saved to: ${backupPath}`);

// Track unique titles
const uniqueWorkflows = new Map();
const duplicates = [];

// Process workflows - keep first occurrence of each title
data.forEach((workflow) => {
  const title = workflow.title;

  if (!uniqueWorkflows.has(title)) {
    uniqueWorkflows.set(title, workflow);
  } else {
    duplicates.push(workflow);
  }
});

// Count duplicates by title
const duplicateCount = {};
duplicates.forEach(workflow => {
  duplicateCount[workflow.title] = (duplicateCount[workflow.title] || 0) + 1;
});

// Log duplicate information
console.log('\nDuplicates found:');
Object.entries(duplicateCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .forEach(([title, count]) => {
    console.log(`  - "${title}": ${count} duplicates`);
  });

// Convert map to array
const cleanedWorkflows = Array.from(uniqueWorkflows.values());

console.log(`\nTotal unique workflows: ${cleanedWorkflows.length}`);
console.log(`Removed ${data.length - cleanedWorkflows.length} duplicates`);

// Save cleaned data
console.log('\nSaving cleaned data...');
fs.writeFileSync(workflowsPath, JSON.stringify(cleanedWorkflows, null, 2));
console.log('✅ Workflows cleaned successfully!');

// Specifically check for "Google Calendar Interview Scheduler"
const gcisCount = data.filter(w => w.title === "Google Calendar Interview Scheduler").length;
const gcisCountAfter = cleanedWorkflows.filter(w => w.title === "Google Calendar Interview Scheduler").length;
console.log(`\n"Google Calendar Interview Scheduler": ${gcisCount} → ${gcisCountAfter}`);