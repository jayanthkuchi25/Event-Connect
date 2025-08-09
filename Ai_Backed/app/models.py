from pydantic import BaseModel
from typing import List

class Event(BaseModel):
    id: str
    title: str
    description: str
    category: str
    location: str

class EventsList(BaseModel):
    events: List[Event]
