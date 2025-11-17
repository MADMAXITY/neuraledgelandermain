const fs = require('fs');
const path = require('path');

// Read the workflows file
const workflowsPath = path.join(__dirname, '..', 'data', 'workflows.json');
console.log('Reading from:', workflowsPath);

const data = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));

console.log(`Total workflows: ${data.length}`);

// Search for Google Calendar Interview Scheduler
const googleCalendarWorkflows = data.filter(w =>
  w.title && w.title.includes('Google Calendar Interview Scheduler')
);

console.log(`\nWorkflows with "Google Calendar Interview Scheduler": ${googleCalendarWorkflows.length}`);
if (googleCalendarWorkflows.length > 0) {
  console.log('Found these workflows:');
  googleCalendarWorkflows.forEach(w => {
    console.log(`  - ID: ${w.id}, Title: ${w.title}`);
  });
}

// Check for "File Management" category
const fileManagementWorkflows = data.filter(w =>
  w.categories && w.categories.includes('File Management')
);

console.log(`\nWorkflows with "File Management" category: ${fileManagementWorkflows.length}`);

// Check for duplicate categories within workflows
let duplicateCategoryCount = 0;
data.forEach(w => {
  if (w.categories && Array.isArray(w.categories)) {
    const uniqueCategories = new Set(w.categories);
    if (uniqueCategories.size < w.categories.length) {
      duplicateCategoryCount++;
    }
  }
});

console.log(`\nWorkflows with duplicate categories within themselves: ${duplicateCategoryCount}`);

// Show first workflow as example
if (data.length > 0) {
  console.log('\nFirst workflow example:');
  console.log(JSON.stringify(data[0], null, 2).substring(0, 500) + '...');
}