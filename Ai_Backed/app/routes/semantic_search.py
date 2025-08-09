from fastapi import APIRouter, Query
from app.embeddings import get_embedding
from app.vector_store import search

router = APIRouter()

@router.get("/semantic-search")
async def semantic_search(query: str = Query(...)):
    query_emb = get_embedding(query)
    results = search(query_emb, top_k=5)
    return {"results": results}
