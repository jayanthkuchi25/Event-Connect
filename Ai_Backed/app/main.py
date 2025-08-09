# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from app.routes import embed_events, semantic_search

# app = FastAPI(title="Event Semantic Search API")

# # CORS: allow frontend host (adjust as needed)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],  # frontend dev origin
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# app.include_router(embed_events.router, prefix="/api")
# app.include_router(semantic_search.router, prefix="/api")
# ////////////////////////////////
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from app.routes import embed_events, semantic_search

# app = FastAPI(title="Event Semantic Search API")

# # CORS settings
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],  # Frontend URL
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Include routes
# app.include_router(embed_events.router, prefix="/api")
# app.include_router(semantic_search.router, prefix="/api")
#////////////////////////////////////////////////

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import embed_events, semantic_search

app = FastAPI()

# CORS settings — allow both localhost and LAN access
origins = [
    "http://localhost:8080",        # Local React dev server
    "http://192.168.29.248:8080",   # LAN IP for testing on other devices
    # Add production frontend URL here when deployed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],           # Or ["*"] to allow all origins (dev only, insecure for prod)
    allow_credentials=True,
    allow_methods=["*"],             # Allow all HTTP methods: GET, POST, etc.
    allow_headers=["*"],             # Allow all request headers
)

# Register API routes after CORS is set up
app.include_router(embed_events.router, prefix="/api")
app.include_router(semantic_search.router, prefix="/api")

# Health check endpoint (optional)
@app.get("/")
async def root():
    return {"message": "FastAPI backend is running!"}


