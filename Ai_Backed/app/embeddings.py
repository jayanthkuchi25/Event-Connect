import os
import numpy as np
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
groq_api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key=groq_api_key)

def get_embedding(text: str) -> np.ndarray:
    response = client.embeddings.create(
        model="nomic-embed-text-v1",
        input=text
    )
    embedding = response.data[0].embedding
    return np.array(embedding, dtype=np.float32)
