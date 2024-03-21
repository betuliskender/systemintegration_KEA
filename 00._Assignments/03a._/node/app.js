import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { parseXML, parseYAML, parseCSV, parseJSON, parseTXT } from './dataParser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.get("/xml", async (req, res) => {
    try {
        const parsedXML = await parseXML('../data/me.xml')
        res.send(parsedXML);
    } catch (err) {
        console.error("Error parsing XML:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/yaml", async (req, res) => {
    try {
        const parsedYAML = await parseYAML('../data/me.yaml');
        res.send(parsedYAML);
    } catch (err) {
        console.error("Error parsing YAML:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/csv", async (req, res) => {
    try {
        const parsedCSV = await parseCSV('../data/me.csv');
        res.send(parsedCSV);
    } catch (err) {
        console.error("Error parsing CSV:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/json", async (req, res) => {
    try {
        const parsedJSON = await parseJSON('../data/me.json');
        res.send(parsedJSON);
    } catch (err) {
        console.error("Error parsing JSON:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/txt", async (req, res) => {
    try {
        const parsedText = await parseTXT('../data/me.txt');
        res.send(parsedText);
    } catch (err) {
        console.error("Error parsing text:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/requestcsv", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/csv");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error handling CSV request:", error);
        res.status(500).send("Internal Server Error");
    }
  });

  app.get("/requestxml", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/xml");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error handling XML request:", error);
        res.status(500).send("Internal Server Error");
    }
  });

  app.get("/requestyaml", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/yaml");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error handling YAML request:", error);
        res.status(500).send("Internal Server Error");
    }
  });

  app.get("/requestjson", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/json");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error handling JSON request:", error);
        res.status(500).send("Internal Server Error");
    }
  });

  app.get("/requesttxt", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/txt");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error handling CSV request:", error);
        res.status(500).send("Internal Server Error");
    }
  });

const PORT = 8050;
app.listen(PORT, () => console.log("Server is running on port", PORT))