## AORTA (2025 Career & Education Advisor)

Monorepo scaffold:
- `frontend/aorta-frontend`: React + Vite + Tailwind SPA with i18n (Hindi/English), routing, PWA manifest, and service worker.
- `backend`: Flask API with CORS, stub endpoints for colleges, careers, roadmap, notifications.
- `ml_service`: FastAPI microservice for career-fit placeholder.
- `data`: AISHE 2024–25 ingestion notes.

Setup (local):
1) Frontend
   - cd frontend/aorta-frontend
   - npm install
   - npm run dev

2) Backend
   - cd backend
   - python -m venv .venv && .venv\\Scripts\\activate
   - pip install -r requirements.txt
   - python app.py

3) ML Service
   - cd ml_service
   - pip install fastapi uvicorn[standard] scikit-learn numpy pandas
   - uvicorn service:app --host 0.0.0.0 --port 9000

Docker (optional):
- docker compose up --build

Compliance & data:
- AISHE directory integration targeted for 2024–25 cycle. Cite AISHE and NEP resources.
- Notifications require parental consent UI for minors.

SEO:
- Meta Title: “AORTA — AI Career & College Advisor (Updated 2025)”
- Meta Description: “Personalized career paths, government-college directory, study roadmaps & mentors — trusted & updated for 2025.”






