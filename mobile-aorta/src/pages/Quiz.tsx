import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react'

type Choice = { id: string; text: string; weight: number }
type Question = { id: string; text: string; choices: Choice[] }

const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'Which activity sounds most fun this week?',
    choices: [
      { id: 'a', text: 'Build a small website or app', weight: 10 },
      { id: 'b', text: 'Solve math puzzles', weight: 9 },
      { id: 'c', text: 'Do a science experiment', weight: 8 },
      { id: 'd', text: 'Write a short story or blog', weight: 7 },
    ],
  },
  {
    id: 'q2',
    text: 'Pick a mini project',
    choices: [
      { id: 'a', text: 'Design a poster/social post', weight: 7 },
      { id: 'b', text: 'Analyze local sports stats', weight: 8 },
      { id: 'c', text: 'Repair or assemble a gadget', weight: 9 },
      { id: 'd', text: 'Interview a community mentor', weight: 6 },
    ],
  },
  {
    id: 'q3',
    text: 'What do you prefer learning from?',
    choices: [
      { id: 'a', text: 'Videos and hands-on tasks', weight: 9 },
      { id: 'b', text: 'Books and research articles', weight: 8 },
      { id: 'c', text: 'Group discussions & presentations', weight: 7 },
      { id: 'd', text: 'Coding challenges', weight: 10 },
    ],
  },
  {
    id: 'q4',
    text: 'Choose a weekly habit you would enjoy:',
    choices: [
      { id: 'a', text: 'Practice English reading 20 min/day', weight: 7 },
      { id: 'b', text: 'Daily math drills (10 problems)', weight: 9 },
      { id: 'c', text: 'Build a mini-project on weekends', weight: 10 },
      { id: 'd', text: 'Volunteer for a community activity', weight: 6 },
    ],
  },
  {
    id: 'q5',
    text: 'Which career area feels most interesting now?',
    choices: [
      { id: 'a', text: 'Technology / Engineering', weight: 10 },
      { id: 'b', text: 'Science / Research', weight: 9 },
      { id: 'c', text: 'Design / Media / Arts', weight: 7 },
      { id: 'd', text: 'Business / Social Impact', weight: 8 },
    ],
  },
]

function getRecommendations(answers: Record<string, Choice>) {
  const picks = Object.values(answers).map(a => a.text.toLowerCase()).join(' | ')
  const recs: { title: string; bullets: string[] }[] = []

  const favorTech = /code|app|website|coding|technology|engineer|mini-project/.test(picks)
  const favorScience = /science|experiment|research|physics|stats/.test(picks)
  const favorDesign = /design|poster|media|story|blog|presentation/.test(picks)
  const favorBusiness = /business|community|volunteer|social/.test(picks)

  if (favorTech) {
    recs.push({
      title: 'Technology / Engineering track',
      bullets: [
        'Streams: Science (PCM) after 10th; or Diploma (Polytechnic) for hands-on start',
        'Courses: B.Tech/B.E (CSE/IT/ECE) or Diploma in CS/ECE',
        'Next 12 weeks: DSA basics, Git/GitHub, 2 mini-projects (web/app)',
        'Entrance: JEE Main (if applicable), state CET; parallel skill badges',
      ],
    })
  }

  if (favorScience) {
    recs.push({
      title: 'Science / Research track',
      bullets: [
        'Streams: Science (PCM/PCB)',
        'Courses: B.Sc (Physics/Chemistry/Maths) or Integrated M.Sc; Research internships',
        'Next 12 weeks: Math foundations + weekly lab-style projects',
        'Exams: CUET/State admissions; explore INSPIRE scholarships',
      ],
    })
  }

  if (favorDesign) {
    recs.push({
      title: 'Design / Media / Arts track',
      bullets: [
        'Streams: Any (Humanities/Commerce/Science) with strong portfolio focus',
        'Courses: B.Des/Communication Design/Animation/BA (Media & Journalism)',
        'Next 12 weeks: Portfolio challenge (poster, video, UI mockups)',
        'Exams: NID/UCEED (if design), college portfolio reviews',
      ],
    })
  }

  if (favorBusiness || recs.length === 0) {
    recs.push({
      title: 'Business / Social Impact track',
      bullets: [
        'Streams: Commerce/Humanities; consider Vocational for entrepreneurship',
        'Courses: B.Com, BBA, BA (Public Policy/Economics)',
        'Next 12 weeks: Excel + finance basics + community project',
        'Pathways: Apprenticeships/NSDC; local incubators; govt schemes',
      ],
    })
  }

  return recs
}

export default function Quiz() {
  const [index, setIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<Record<string, Choice>>({})
  const [showResults, setShowResults] = useState(false)

  const progressPct = ((index) / QUESTIONS.length) * 100
  const canNext = Boolean(answers[QUESTIONS[index]?.id])
  const recommendations = getRecommendations(answers)
  const finished = index >= QUESTIONS.length

  useEffect(() => {
    if (finished && !showResults) {
      setShowResults(true)
      const result = { recommendations, answers, ts: Date.now() }
      localStorage.setItem('aorta_quiz_result', JSON.stringify(result))
    }
  }, [finished, recommendations, answers, showResults])

  const resetQuiz = () => {
    setIndex(0)
    setAnswers({})
    setShowResults(false)
  }

  const nextQuestion = () => {
    if (canNext) {
      setIndex(prev => prev + 1)
    }
  }

  const prevQuestion = () => {
    setIndex(prev => Math.max(0, prev - 1))
  }

  const selectAnswer = (choice: Choice) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[index].id]: choice }))
  }

  if (showResults) {
    return (
      <div className="px-4 py-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Quiz Complete!</h1>
          <p className="text-primary-200">Here are your personalized career recommendations</p>
        </motion.div>

        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{rec.title}</h3>
              <ul className="space-y-2">
                {rec.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-primary-200">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Link to="/roadmap" className="btn-primary text-center py-3">
              Build Roadmap
            </Link>
            <Link to="/colleges" className="btn-secondary text-center py-3">
              Find Colleges
            </Link>
          </div>
          <button
            onClick={resetQuiz}
            className="w-full flex items-center justify-center space-x-2 py-3 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>

        <div className="text-center">
          <p className="text-xs text-primary-400">Results saved to personalize your experience</p>
        </div>
      </div>
    )
  }

  const currentQuestion = QUESTIONS[index]

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">Career Quiz</h1>
        <p className="text-primary-200">Answer 5 questions to discover your perfect career path</p>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm text-primary-300">Question {index + 1} of {QUESTIONS.length}</span>
          <span className="text-sm text-primary-400">{Math.round(progressPct)}% Complete</span>
        </div>
        <div className="w-full h-2 bg-primary-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Question */}
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="card"
      >
        <h2 className="text-lg font-semibold text-white mb-6">{currentQuestion.text}</h2>
        <div className="space-y-3">
          {currentQuestion.choices.map((choice) => {
            const isSelected = answers[currentQuestion.id]?.id === choice.id
            return (
              <motion.button
                key={choice.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectAnswer(choice)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-primary-600 border-2 border-primary-500'
                    : 'bg-primary-800/50 border-2 border-primary-700 hover:border-primary-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? 'border-white bg-white'
                      : 'border-primary-400'
                  }`}>
                    {isSelected && (
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    )}
                  </div>
                  <span className="text-white font-medium">{choice.text}</span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-between items-center"
      >
        <button
          onClick={prevQuestion}
          disabled={index === 0}
          className="flex items-center space-x-2 px-4 py-2 text-primary-400 hover:text-primary-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>Back</span>
        </button>

        <button
          onClick={nextQuestion}
          disabled={!canNext}
          className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{index === QUESTIONS.length - 1 ? 'Finish' : 'Next'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  )
}
