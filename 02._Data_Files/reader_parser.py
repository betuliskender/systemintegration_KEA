import json
import csv
import xml.etree.ElementTree as ET
import yaml
import ruamel.yaml
import sys

# Read and parse text file
with open('./me.txt','r',  encoding='utf-8') as file:
    txt_content = file.read()
    print("TXT:")
    print(txt_content)

# Read and parse XML file
tree = ET.parse('./me.xml')
root = tree.getroot()
xml_content = ET.tostring(root, encoding='utf-8').decode('utf-8')
print("\nXML:")
print(xml_content)

# Read and parse YAML file with ordered dictionaries
with open('./me.yaml', 'r', encoding='utf-8') as file:
    yaml_content = ruamel.yaml.YAML(typ='safe', pure=True).load(file)

print("\nYAML:")
yaml = ruamel.yaml.YAML()
yaml.default_flow_style = False
yaml.dump(yaml_content, sys.stdout)

# Read and parse JSON file
with open('./me.json', 'r',  encoding='utf-8') as file:
    json_content = json.load(file)
    print("\nJSON:")
    print(json_content)

# Read and parse CSV file
with open('./me.csv','r',  encoding='utf-8') as file:
    csv_reader = csv.reader(file)
    csv_content = [row for row in csv_reader]
    print("\nCSV:")
    print(csv_content)
