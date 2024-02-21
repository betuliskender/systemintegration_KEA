import csv
import xmltodict
import yaml
import json

# CSV
def parseCSV(filename):
    with open(filename, 'r') as file:
        csv_reader = csv.DictReader(file)
        csv_data = [row for row in csv_reader]
        return csv_data

# XML
def parseXML(filename):
    with open(filename, 'r') as file:
        xml_data = xmltodict.parse(file.read())
        return xml_data

# YAML
def parseYAML(filename):
    with open(filename, 'r') as file:
        yaml_data = yaml.safe_load(file)
        return yaml_data

# JSON
def parseJSON(filename):
    with open(filename, 'r') as file:
        json_data = json.load(file)
        return json_data

# TXT
def parseTXT(filename):
    with open(filename, 'r') as file:
        text_content = file.read()
        return text_content