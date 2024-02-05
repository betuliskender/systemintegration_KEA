import json
import csv
import xml.etree.ElementTree as ET
import yaml
import ruamel.yaml
import sys

# Read and parse text file
with open('./me.txt','r',  encoding='utf-8') as file:
    txtContent = file.read()
    print("TXT:")
    print(txtContent)

# Read and parse XML file
tree = ET.parse('./me.xml')
root = tree.getroot()
xmlContent = ET.tostring(root, encoding='utf-8').decode('utf-8')
print("\nXML:")
print(xmlContent)

# Read and parse YAML file with ordered dictionaries
with open('./me.yaml', 'r', encoding='utf-8') as file:
    yamlContent = ruamel.yaml.YAML(typ='safe', pure=True).load(file)

print("\nYAML:")
yaml = ruamel.yaml.YAML()
yaml.default_flow_style = False
yaml.dump(yamlContent, sys.stdout)

# Read and parse JSON file
with open('./me.json', 'r',  encoding='utf-8') as file:
    jsonContent = json.load(file)
    print("\nJSON:")
    print(jsonContent)

# Read and parse CSV file
with open('./me.csv','r',  encoding='utf-8') as file:
    csvReader = csv.reader(file)
    csvContent = [row for row in csvReader]
    print("\nCSV:")
    print(csvContent)
