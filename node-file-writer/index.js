const fs   = require('fs');
const path = require('path');

// File will live in the mounted volume at /data/test_data
const filePath = path.join('/data', 'test_data');

// Append one line
const line = `Text written from new container ${new Date().toISOString()}\n`;
fs.appendFileSync(filePath, line);

// Read everything back and show it
const content = fs.readFileSync(filePath, 'utf8');
console.log('---- Current file content ----');
console.log(content);