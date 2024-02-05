import { readFileSync } from "fs";

// Read and parse XML file
const xmlContent = readFileSync("./me.xml", "utf-8");
console.log("XML:");
console.log(xmlContent);

// Read and parse JSON file
const jsonContent = JSON.parse(readFileSync("./me.json", "utf-8"));
console.log("\nJSON:");
console.log(jsonContent);

// Read and parse YAML file with ordered dictionaries
const yamlContent = readFileSync("./me.yaml", "utf-8");
console.log("\nYAML:");
console.log(yamlContent);

// Read and parse CSV file
const csvData = readFileSync("./me.csv", "utf-8");
const csvContent = csvData.split(/\r?\n/).map((row) => row.split(","));
console.log("\nCSV:");
console.log(csvContent);


// Read and parse text file
const txtContent = readFileSync("./me.txt", "utf-8");
console.log("\nTXT:");
console.log(txtContent);