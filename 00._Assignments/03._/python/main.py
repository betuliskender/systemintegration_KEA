from fastapi import FastAPI
import requests
from dataParser import parseXML, parseYAML, parseJSON, parseCSV, parseTXT

app = FastAPI()


@app.get("/csv")
def csv():
    data = parseCSV('../data/me.csv')
    return data

@app.get("/xml")
def xml():
    data = parseXML('../data/me.xml')
    return data

@app.get("/yaml")
def yaml():
    data = parseYAML('../data/me.yaml')
    return data

@app.get("/json")
def json():
    data = parseJSON('../data/me.json')
    return data

@app.get("/txt")
def txt():
    data = parseTXT('../data/me.txt')
    return {"data": data}
