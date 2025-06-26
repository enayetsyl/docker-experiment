const fs   = require("fs");
const path = require("path");

const filePath = path.join("/data", "test_data");
const line     = `Text written from container ${new Date().toISOString()}\n`;

fs.appendFileSync(filePath, line);
const content = fs.readFileSync(filePath, "utf8");

console.log("---- Current file content ----");
console.log(content);