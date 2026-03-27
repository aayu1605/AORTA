from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class FitRequest(BaseModel):
    interests: list[str] = []
    grades: dict[str, float] = {}

class ChatRequest(BaseModel):
    message: str
    history: list[dict] | None = None

@app.get('/health')
def health():
    return {"status": "ok"}

@app.post('/career-fit')
def career_fit(req: FitRequest):
    # Placeholder: simple heuristic score
    score = min(100, max(0, int((len(req.interests) * 10) + sum(req.grades.values()) / (len(req.grades) or 1))))
    return {"fit": score}

@app.post('/chat')
def chat(req: ChatRequest):
    msg = (req.message or '').strip().lower()

    def concise(items: list[str]):
        # Join into short bullet-like lines
        return "\n".join(f"• {i}" for i in items)

    if not msg:
        return {"reply": "Ask about careers, exams, or colleges. Keep it specific for precise answers."}

    # Intent: exams
    if any(k in msg for k in ["jee", "neet", "exam", "uceed", "clat", "cat", "upsc"]):
        reply = concise([
            "Check official site for dates/fees (they change)",
            "Use our Exams tab for pattern, syllabus, tips",
            "Plan weekly: mock tests + revision",
        ])
        return {"reply": reply}

    # Intent: colleges
    if any(k in msg for k in ["college", "university", "admission", "cutoff"]):
        reply = concise([
            "Filter by state/budget/course in Colleges tab",
            "Compare NIRF rank and fees range",
            "Verify current cutoffs on official portals",
        ])
        return {"reply": reply}

    # Intent: careers/streams
    if any(k in msg for k in ["career", "job", "stream", "course"]):
        reply = concise([
            "Take the Quiz for a quick match",
            "Build a roadmap with milestones",
            "Start a small project to test interest",
        ])
        return {"reply": reply}

    # Generic study help
    if any(k in msg for k in ["study", "prepare", "syllabus", "mock"]):
        reply = concise([
            "Daily: 2 focused blocks + 1 revision block",
            "Weekly: 1 full mock, error log review",
            "Monthly: syllabus audit + weak areas first",
        ])
        return {"reply": reply}

    # Default concise helper
    return {"reply": "Tell me your class/stream, target exam (if any), and timeline—I'll give precise next steps."}








