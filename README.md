Event-Connect
Live demo: event-connect-delta.vercel.app

Event-Connect is a full-stack platform for discovering, searching, and registering for trending events, powered by AI semantic search.
It combines a modern React frontend (Vite + TypeScript) with a scalable FastAPI backend leveraging Groq embeddings for fast and relevant event discovery.

Features
🎟️ Browse Trending Events — See featured & popular events in an interactive grid.

🔍 Semantic AI Search — Instantly find events by meaning, not just keywords.

🛠️ Fast, Modern Stack — React/TypeScript frontend, FastAPI backend.

⚡ Groq Embeddings Integration — Powerful semantic vector search.

♻️ Easy Registration Flow — Quick navigation from discovery to registration.

🌐 Fully Deployed — Frontend on Vercel, backend local or cloud.

Folder Structure

Event-Connect/
├── Ai_Backed/ai_backend/     # FastAPI backend for semantic search
│   ├── app/
│   │   ├── main.py           # FastAPI server with CORS
│   │   ├── embeddings.py     # Groq AI embeddings
│   │   ├── vector_store.py   # FAISS vector search
│   │   └── ...               # routes, models, etc.
│   ├── requirements.txt      # Backend dependencies
│   ├── .env                  # API keys for Groq
│   └── ...
├── src/                      # React frontend
│   ├── pages/Index.tsx       # Homepage, event grid, AI search integration
│   ├── components/           # HeroSection, EventCard, EventGrid
│   └── ...
├── public/                   # Static assets
├── package.json              # Frontend dependencies
├── README.md                 # (You are here!)
└── ...

Getting Started
1. Clone the Repository
bash
git clone https://github.com/jayanthkuchi25/Event-Connect.git
cd Event-Connect
2. Setup the Backend (FastAPI AI Semantic Search)
bash
cd Ai_Backed/ai_backend
python -m venv venv_ai_backend
venv_ai_backend\Scripts\activate    # Use source venv_ai_backend/bin/activate on Mac/Linux

pip install -r requirements.txt
Create a .env file (with your Groq Cloud API key):

text
GROQ_API_KEY=your_actual_groq_api_key_here
Run FastAPI server:

bash
uvicorn app.main:app --reload --port 8000
3. Setup the Frontend (React/Vite/TypeScript)
bash
cd ../../frontend  # Or src/ if that's your main frontend
npm install
npm run dev
Open http://localhost:8080 in your browser.

Usage
Browse Events: Default trending events displayed on homepage.

AI Semantic Search: Search bar uses semantic embeddings for best-match results.

Register for Events: Click any event card's "Register" button to start registration flow.

API Docs: http://localhost:8000/docs (FastAPI Swagger UI for backend testing).

Deployment
Frontend: Vercel auto-deploys on commit.
See Vercel dashboard.

Backend: Run locally, or deploy FastAPI to your server/cloud.

Tech Stack
Frontend: React · TypeScript · Vite · Tailwind CSS

Backend: FastAPI · Python · Groq Embeddings API · FAISS · Pydantic

Deployment: Vercel (frontend), local/cloud (backend)

Environment Variables
Backend (Ai_Backed/ai_backend/.env):

text
GROQ_API_KEY=your_groq_api_key
Contributing
Fork the repository

Create your feature branch: git checkout -b feature/new-feature

Commit your changes: git commit -m "Add new feature"

Push to the branch: git push origin feature/new-feature

Open a pull request

License
MIT

Acknowledgments
Groq Cloud

Vercel

FastAPI

React

Feel free to reach out for any issues or questions!
