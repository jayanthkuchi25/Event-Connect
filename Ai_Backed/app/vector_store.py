import faiss
import numpy as np
from typing import List, Dict

events_store: List[Dict] = []
# Groq's nomic model has 768 embedding dims (at time of writing)
embedding_dim = 768
index = faiss.IndexFlatL2(embedding_dim)

def add_events(events: List[Dict], embeddings: List[np.ndarray]):
    global events_store, index
    events_store = events
    vectors = np.vstack(embeddings)
    index.reset()
    index.add(vectors)

def search(query_embedding: np.ndarray, top_k: int = 5) -> List[Dict]:
    distances, indices = index.search(query_embedding.reshape(1, -1), top_k)
    results = []
    for idx in indices[0]:
        if 0 <= idx < len(events_store):
            results.append(events_store[idx])
    return results
