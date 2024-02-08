import { readFileSync } from "fs";
import { parseString } from "xml2js";
import yaml from "js-yaml";

function printSeparator() {
    console.log("-".repeat(50));
}

// Read and parse text file
const txtContent = readFileSync("./me.txt", "utf-8");
console.log("\nTXT:");
console.log(txtContent);
printSeparator();

// Read and parse XML file
const xmlContent = readFileSync("./me.xml", "utf-8");
parseString(xmlContent, (err, result) => {
    if (err) {
        console.error("Error parsing XML:", err);
        return;
    }
    const { name, age, hobbies } = result.me;
    console.log("XML:");
    console.log(`name: ${name[0]}`);
    console.log(`age: ${age[0]}`);
    console.log(`hobbies: ${hobbies[0].hobby.join(", ")}`);
});
printSeparator();

// Read and parse YAML
const yamlContent = readFileSync("./me.yaml", "utf-8");
const yamlParsed = yaml.load(yamlContent);
console.log("\nYAML:");
for (const key in yamlParsed) {
    if (Array.isArray(yamlParsed[key])) {
        console.log(`${key}: ${yamlParsed[key].join(", ")}`);
    } else {
        console.log(`${key}: ${yamlParsed[key]}`);
    }
}
printSeparator();

// Read and parse JSON file
const jsonContent = JSON.parse(readFileSync("./me.json", "utf-8"));
console.log("\nJSON:");
for (const key in jsonContent) {
    if (Array.isArray(jsonContent[key])) {
        console.log(`${key}: ${jsonContent[key].join(", ")}`);
    } else {
        console.log(`${key}: ${jsonContent[key]}`);
    }
}
printSeparator();

// Read and parse CSV file
const csvData = readFileSync("./me.csv", "utf-8");
const csvContent = csvData.split(/\r?\n/).map(row => row.split(","));
console.log("\nCSV:");
const headers = csvContent[0];
const data = csvContent[1];
const result = {};
headers.forEach((header, index) => {
    result[header.trim()] = data[index].trim();
});
const hobbiesIndex = headers.indexOf("hobbies");
if (hobbiesIndex !== -1) {
    const hobbies = [];
    for (let i = hobbiesIndex; i < data.length; i++) {
        hobbies.push(data[i].trim());
    }
    result["hobbies"] = `"${hobbies.join(", ").replace(/^"|"$/g, '')}"`;
}
for (const key in result) {
    console.log(`${key}: ${result[key]}`);
}
printSeparator();