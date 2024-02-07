import json
import csv
import xml.etree.ElementTree as ET
import yaml
import ruamel.yaml
import sys

def print_separator():
    print('-' * 50)

# Read and parse text file
with open('./me.txt','r',  encoding='utf-8') as file:
    txtContent = file.read()
    print("TXT:")
    print(txtContent)
    print_separator()

# Read and parse XML file
tree = ET.parse('./me.xml')
root = tree.getroot()
xml_data = {}
for child in root:
    if child.tag == 'hobbies':
        xml_data[child.tag] = ', '.join(hobby.text for hobby in child.findall('hobby'))
    else:
        xml_data[child.tag] = child.text
print("XML:")
for key, value in xml_data.items():
    print(f"{key}: {value}")
print_separator()

# Read and parse YAML file with ordered dictionaries
with open('./me.yaml', 'r', encoding='utf-8') as file:
    yamlContent = ruamel.yaml.YAML(typ='safe', pure=True).load(file)

print("YAML:")
for key, value in yamlContent.items():
    if isinstance(value, list):
        value = ', '.join(value)
    print(f"{key}: {value}")
print_separator()


# Read and parse JSON file
with open('./me.json', 'r', encoding='utf-8') as file:
    jsonContent = json.load(file)
    print("JSON:")
    for key, value in jsonContent.items():
        if isinstance(value, list):
            value = ', '.join(value)
        print(f"{key}: {value}")
print_separator()

# Read and parse CSV file
with open('./me.csv', 'r', encoding='utf-8') as file:
    csvReader = csv.reader(file)
    header = next(csvReader)
    print("CSV:")
    for row in csvReader:
        for i, value in enumerate(row):
            print(f"{header[i]}: {value}")
        print()
    print_separator()