from fastapi import APIRouter, HTTPException
from typing import List
from app.embeddings import get_embedding
from app.vector_store import add_events
from app.models import Event

router = APIRouter()

@router.post("/embed-events")
async def embed_events(events: List[Event]):
    if not events:
        raise HTTPException(status_code=400, detail="No events provided.")
    embeddings = [
        get_embedding(f"{e.title} {e.description} {e.category} {e.location}")
        for e in events
    ]
    add_events([e.dict() for e in events], embeddings)
    return {"message": f"{len(events)} events indexed successfully."}
