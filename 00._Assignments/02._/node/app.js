import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { parseXMLFile, parseYAMLFile, parseCSVFile, parseJSONFile, parseTextFile } from '../../02._Data_Files/reader_parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.get("/xml", (req, res) => {
    try {
        parseXMLFile('../../02._Data_Files/me.xml', (err, data) => {
            if (err) {
                console.error("Error parsing XML:", err);
                res.status(500).send("Internal Server Error");
                return;
            }
            res.send(data);
        });
    } catch (err) {
        console.error("Error parsing XML:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/yaml", (req, res) => {
    try {
        const parsedYAML = parseYAMLFile('../../02._Data_Files/me.yaml');
        res.send(parsedYAML);
    } catch (err) {
        console.error("Error parsing YAML:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/csv", (req, res) => {
    try {
        const parsedCSV = parseCSVFile('../../02._Data_Files/me.csv');
        res.send(parsedCSV);
    } catch (err) {
        console.error("Error parsing CSV:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/json", (req, res) => {
    try {
        const parsedJSON = parseJSONFile('../../02._Data_Files/me.json');
        res.send(parsedJSON);
    } catch (err) {
        console.error("Error parsing JSON:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/text", (req, res) => {
    try {
        const parsedText = parseTextFile('../../02._Data_Files/me.txt');
        res.send(parsedText);
    } catch (err) {
        console.error("Error parsing text:", err);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = 8050;
app.listen(PORT, () => console.log("Server is running on port", PORT))