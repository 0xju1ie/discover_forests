from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import (
    create_forest,
    fetch_all_forests,
    fetch_forests_by_type
)
from model import Forest

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://0.0.0.0:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"hello": "world"}

@app.get("/api/forests")
async def get_forests():
    response = await fetch_all_forests()
    if response:
        return response
    raise HTTPException(500, f"problem getting forests")

@app.get("/api/forests/{forest_type}")
async def get_forest_by_type(forest_type):
    response = await fetch_forests_by_type(forest_type)
    if response:
        return response
    raise HTTPException(404, f"forests not found")

@app.post("/api/forests/", response_model=Forest)
async def post_forest(forest: Forest):
    response = await create_forest(forest.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong creating new forest")