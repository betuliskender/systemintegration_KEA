from fastapi import FastAPI
import requests

app = FastAPI()

my_dict = {"message": [1,2,3,4]}
print(my_dict["message"])

@app.get("/fastapiData")
def _():
    return {"message": [1,2,3,4]}

@app.get("/requestExpress")
def get_express_data():
    res = requests.get('http://localhost:8080/expressData')
    data = res.json()

    return {"data": data}