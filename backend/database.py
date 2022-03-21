from model import Forest

#mongodb driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://admin:admin@pachama.vsxlb.mongodb.net/test')
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
