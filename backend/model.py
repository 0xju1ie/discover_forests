from pydantic import BaseModel
from enum import Enum

class ForestType(str, Enum):
    conservation = "conservation"
    reforestation = "reforestation"

class Forest(BaseModel):
    id: int
    name: str
    image: str
    country: str
    longitude: float
    latitude: float
    forest_type: ForestType
    area_covered: float
    current_carbon_stored: float
    delta_carbon_stored: float
    long_description: str
    brief_description: str
    
