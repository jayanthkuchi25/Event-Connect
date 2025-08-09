import json
from app.embeddings import get_embedding
from app.vector_store import add_events

def load_and_index():
    with open("app/data/events.json") as f:
        events = json.load(f)
    embeddings = [
        get_embedding(f"{e['title']} {e['description']} {e['category']} {e['location']}")
        for e in events
    ]
    add_events(events, embeddings)
    print("Events indexed successfully.")

if __name__ == "__main__":
    load_and_index()
