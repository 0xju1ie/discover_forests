from model import Forest
#mongodb driver
import os
import motor.motor_asyncio

username = os.getenv('MONGODB_USER', '')
password = os.getenv('MONGODB_PASSWORD', '')

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://'+username+":"+password+'@mongo:27017/')
database = client.pachama
collection = database.forests

async def fetch_all_forests():
    forests = []
    cursor = collection.find({})
    async for document in cursor:
        forests.append(Forest(**document))
    return forests

async def fetch_forests_by_type(forest_type):
    forests = []
    cursor = collection.find({"forest_type":forest_type})
    async for document in cursor:
        forests.append(Forest(**document))
    return forests

async def create_forest(forest):
    document = forest
    result = await collection.insert_one(document)
    return document
