from fastapi import FastAPI
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

print(datetime.now())
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/timestamp")
def timestamp():
    return {"timestamp": datetime.now()}

