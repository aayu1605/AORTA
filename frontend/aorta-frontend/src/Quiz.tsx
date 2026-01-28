import { useEffect, useMemo, useState } from 'react'

type Choice = { id: string; text: string; weight: number; category?: string }
type Question = { id: string; text: string; choices: Choice[]; category?: string }

// Expanded question bank for randomized quiz
const QUESTION_BANK: Question[] = [
  {
    id: 'q1',
    text: 'Which activity sounds most fun this week?',
    choices: [
      { id: 'a', text: 'Build a small website or app', weight: 10, category: 'technology' },
      { id: 'b', text: 'Solve math puzzles', weight: 9, category: 'science' },
      { id: 'c', text: 'Do a science experiment', weight: 8, category: 'science' },
      { id: 'd', text: 'Write a short story or blog', weight: 7, category: 'arts' },
    ],
    category: 'general'
  },
  {
    id: 'q2',
    text: 'Pick a mini project',
    choices: [
      { id: 'a', text: 'Design a poster/social post', weight: 7, category: 'arts' },
      { id: 'b', text: 'Analyze local sports stats', weight: 8, category: 'science' },
      { id: 'c', text: 'Repair or assemble a gadget', weight: 9, category: 'technology' },
      { id: 'd', text: 'Interview a community mentor', weight: 6, category: 'business' },
    ],
    category: 'general'
  },
  {
    id: 'q3',
    text: 'What do you prefer learning from?',
    choices: [
      { id: 'a', text: 'Videos and hands-on tasks', weight: 9, category: 'learning' },
      { id: 'b', text: 'Books and research articles', weight: 8, category: 'learning' },
      { id: 'c', text: 'Group discussions & presentations', weight: 7, category: 'learning' },
      { id: 'd', text: 'Coding challenges', weight: 10, category: 'technology' },
    ],
    category: 'learning'
  },
  {
    id: 'q4',
    text: 'Choose a weekly habit you’d enjoy:',
    choices: [
      { id: 'a', text: 'Practice English reading 20 min/day', weight: 7, category: 'arts' },
      { id: 'b', text: 'Daily math drills (10 problems)', weight: 9, category: 'science' },
      { id: 'c', text: 'Build a mini-project on weekends', weight: 10, category: 'technology' },
      { id: 'd', text: 'Volunteer for a community activity', weight: 6, category: 'business' },
    ],
    category: 'habits'
  },
  {
    id: 'q5',
    text: 'Which career area feels most interesting now?',
    choices: [
      { id: 'a', text: 'Technology / Engineering', weight: 10, category: 'technology' },
      { id: 'b', text: 'Science / Research', weight: 9, category: 'science' },
      { id: 'c', text: 'Design / Media / Arts', weight: 7, category: 'arts' },
      { id: 'd', text: 'Business / Social Impact', weight: 8, category: 'business' },
    ],
    category: 'career'
  },
  // Additional questions to diversify the pool
  {
    id: 'q6',
    text: 'What type of problems do you enjoy solving?',
    choices: [
      { id: 'a', text: 'Logical and algorithmic', weight: 10, category: 'technology' },
      { id: 'b', text: 'Scientific and experimental', weight: 9, category: 'science' },
      { id: 'c', text: 'Creative and visual', weight: 8, category: 'arts' },
      { id: 'd', text: 'Business and social', weight: 8, category: 'business' },
    ],
    category: 'preference'
  },
  {
    id: 'q7',
    text: 'Which activity sounds most like you?',
    choices: [
      { id: 'a', text: 'Build an app that helps students', weight: 10, category: 'technology' },
      { id: 'b', text: 'Research a new medical cure', weight: 9, category: 'science' },
      { id: 'c', text: 'Design logos and posters', weight: 8, category: 'arts' },
      { id: 'd', text: 'Start a local business', weight: 8, category: 'business' },
    ],
    category: 'preference'
  },
  {
    id: 'q8',
    text: 'How do you tackle a new challenge?',
    choices: [
      { id: 'a', text: 'Break it into logical steps and code it', weight: 10, category: 'technology' },
      { id: 'b', text: 'Research deeply and experiment', weight: 9, category: 'science' },
      { id: 'c', text: 'Story-board and design a concept', weight: 8, category: 'arts' },
      { id: 'd', text: 'Pitch it, plan resources, and execute', weight: 8, category: 'business' },
    ],
    category: 'approach'
  },
  {
    id: 'q9',
    text: 'What outcome excites you most?',
    choices: [
      { id: 'a', text: 'A working prototype / app', weight: 10, category: 'technology' },
      { id: 'b', text: 'A published paper or discovery', weight: 9, category: 'science' },
      { id: 'c', text: 'A viral design or creative piece', weight: 8, category: 'arts' },
      { id: 'd', text: 'A profitable project or social venture', weight: 8, category: 'business' },
    ],
    category: 'outcome'
  },
  {
    id: 'q10',
    text: 'Pick the environment you thrive in:',
    choices: [
      { id: 'a', text: 'Hackathons / dev sprints', weight: 10, category: 'technology' },
      { id: 'b', text: 'Labs / research groups', weight: 9, category: 'science' },
      { id: 'c', text: 'Studios / creative meetups', weight: 8, category: 'arts' },
      { id: 'd', text: 'Startups / business clubs', weight: 8, category: 'business' },
    ],
    category: 'environment'
  },
  {
    id: 'q11',
    text: 'Which skill do you want to showcase in 6 months?',
    choices: [
      { id: 'a', text: 'Full-stack project or AI mini-app', weight: 10, category: 'technology' },
      { id: 'b', text: 'Science fair project / publication', weight: 9, category: 'science' },
      { id: 'c', text: 'Portfolio of designs/videos', weight: 8, category: 'arts' },
      { id: 'd', text: 'Business pitch deck / finance model', weight: 8, category: 'business' },
    ],
    category: 'skill'
  },
  {
    id: 'q12',
    text: 'How do you like to collaborate?',
    choices: [
      { id: 'a', text: 'Pair-program or build in small tech teams', weight: 10, category: 'technology' },
      { id: 'b', text: 'Research with mentors and peers', weight: 9, category: 'science' },
      { id: 'c', text: 'Co-create with designers/creatives', weight: 8, category: 'arts' },
      { id: 'd', text: 'Lead a small crew to ship a product', weight: 8, category: 'business' },
    ],
    category: 'collab'
  }
]

function getRandomizedQuestions(): Question[] {
  const shuffled = [...QUESTION_BANK].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 10)
}

// Recommendation helper retained for future roadmap API tuning (currently unused)
// Removed unused getRecommendations to satisfy lints

export default function Quiz() {
  const [index, setIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<Record<string, Choice>>({})
  const QUESTIONS = useMemo(() => getRandomizedQuestions(), [])

  const progressPct = useMemo(() => ((index) / QUESTIONS.length) * 100, [index])
  const canNext = Boolean(answers[QUESTIONS[index]?.id])

  const finished = index >= QUESTIONS.length

  // Track scores by domain
  const trackScores = useMemo(() => {
    const scores: Record<string, number> = {
      technology: 0,
      science: 0,
      arts: 0,
      business: 0,
    }
    Object.values(answers).forEach(choice => {
      if (!choice.category) return
      scores[choice.category] = (scores[choice.category] || 0) + choice.weight
    })
    return scores
  }, [answers])

  const compatibility = useMemo(() => {
    const maxScore = Math.max(...Object.values(trackScores), 1)
    return Object.entries(trackScores)
      .map(([k, v]) => ({ track: k, score: v, pct: Math.round((v / maxScore) * 100) }))
      .sort((a, b) => b.pct - a.pct)
  }, [trackScores])

  const saveResult = () => {
    const result = { answers, trackScores, compatibility, ts: Date.now() }
    localStorage.setItem('aorta_quiz_result', JSON.stringify(result))
  }

  useEffect(() => {
    if (finished) {
      saveResult()
    }
  }, [finished]) // eslint-disable-line react-hooks/exhaustive-deps

  if (finished) {
    const top = compatibility[0]
    return (
      <section className="space-y-6">
        <div className="bg-gradient-to-r from-primary-800/70 via-primary-700/60 to-primary-900/60 rounded-2xl p-6 border border-primary-700/60 shadow-lg shadow-primary-900/40">
          <h2 className="text-3xl font-bold">Your Compatibility Analysis</h2>
          <p className="text-primary-200 mt-2">Based on your answers, here’s how you align with each path.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {compatibility.map(item => (
            <div key={item.track} className="rounded-2xl bg-primary-900/50 border border-primary-800/60 p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="capitalize font-semibold">{item.track}</h3>
                <span className="text-lg font-bold text-accent-400">{item.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-primary-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-500 to-primary-500"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
              <p className="text-xs text-primary-300 mt-2">Score: {item.score}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-primary-900/60 border border-primary-800/60 p-4">
          <h3 className="font-semibold mb-2">Next Steps</h3>
          <ul className="list-disc pl-5 text-sm text-primary-200 space-y-1">
            <li>Build a roadmap tailored to your top match.</li>
            <li>Explore colleges and exams relevant to that path.</li>
            <li>Save your result to revisit and refine later.</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="/roadmap"
              onClick={saveResult}
              className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-sm"
            >
              Build Roadmap
            </a>
            <a
              href="/exams"
              className="px-4 py-2 rounded-lg bg-primary-800 hover:bg-primary-700 text-white text-sm"
            >
              View Exams
            </a>
            <button
              onClick={() => {
                setIndex(0)
                setAnswers({})
              }}
              className="px-4 py-2 rounded-lg bg-primary-700 hover:bg-primary-600 text-white text-sm"
            >
              Retake Quiz
            </button>
          </div>
          {top && <p className="text-sm text-accent-400 mt-3">Top match: {top.track} ({top.pct}%)</p>}
        </div>
      </section>
    )
  }

  const q = QUESTIONS[index]

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Quick Career Quiz</h2>
        <div className="text-sm text-primary-200">Question {index + 1} of {QUESTIONS.length}</div>
      </div>
      <div className="w-full h-2 bg-primary-900 rounded">
        <div className="h-2 bg-primary-600 rounded" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="rounded bg-primary-900/40 p-4">
        <p className="font-medium mb-3">{q.text}</p>
        <fieldset className="grid md:grid-cols-2 gap-2">
          {q.choices.map((c) => (
            <label key={c.id} className={`flex items-center gap-2 px-3 py-2 rounded border cursor-pointer ${answers[q.id]?.id === c.id ? 'bg-primary-700 border-primary-600' : 'bg-primary-900 border-primary-800 hover:bg-primary-800'}`}>
              <input
                type="radio"
                name={q.id}
                value={c.id}
                checked={answers[q.id]?.id === c.id}
                onChange={() => setAnswers((a) => ({ ...a, [q.id]: c }))}
              />
              <span>{c.text}</span>
            </label>
          ))}
        </fieldset>
      </div>

      <div className="flex justify-between">
        <button
          className="px-4 py-2 rounded bg-primary-800 text-sm disabled:opacity-50"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          Back
        </button>
        <button
          className="px-4 py-2 rounded bg-primary-600 hover:bg-primary-500 text-sm disabled:opacity-50"
          onClick={() => setIndex((i) => i + 1)}
          disabled={!canNext}
        >
          Next
        </button>
      </div>
    </section>
  )
}


