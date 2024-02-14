import { readFileSync } from "fs";
import { parseString } from "xml2js";
import yaml from "js-yaml";

// Function to read and parse text file
export function parseTextFile(filePath) {
    const txtContent = readFileSync(filePath, "utf-8");
    const txtLines = txtContent.trim().split("\r\n").map(line => {
        const [key, value] = line.split(":").map(item => item.trim());
        return { [key]: value };
    });
    return Object.assign({}, ...txtLines);
}

// Function to read and parse XML file
export function parseXMLFile(filePath, callback) {
    const xmlContent = readFileSync(filePath, "utf-8");
    parseString(xmlContent, (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        const { name, age, hobbies } = result.me;
        callback(null, {
            name: name[0],
            age: age[0],
            hobbies: hobbies[0].hobby.join(", ")
        });
    });
}

// Function to read and parse YAML file
export function parseYAMLFile(filePath) {
    const yamlContent = readFileSync(filePath, "utf-8");
    return yaml.load(yamlContent);
}

// Function to read and parse JSON file
export function parseJSONFile(filePath) {
    const jsonContent = JSON.parse(readFileSync(filePath, "utf-8"));
    return jsonContent;
}

// Function to read and parse CSV file
export function parseCSVFile(filePath) {
    const csvData = readFileSync(filePath, "utf-8");
    const csvContent = csvData.split(/\r?\n/).map(row => row.split(","));
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
        result["hobbies"] = hobbies.join(", ").replace(/^"|"$/g, '');
    }
    return result;
}