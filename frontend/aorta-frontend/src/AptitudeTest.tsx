import { useState, useEffect } from 'react'

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
  field: 'science' | 'commerce' | 'humanities' | 'general'
  category: string
}

interface TestResult {
  science: number
  commerce: number
  humanities: number
  totalScore: number
  recommendations: string[]
  strengths: string[]
  weaknesses: string[]
}

const APTITUDE_QUESTIONS: Question[] = [
  // Science Questions
  {
    id: 's1',
    text: 'If a car travels 120 km in 2 hours, what is its average speed?',
    options: ['60 km/h', '40 km/h', '80 km/h', '100 km/h'],
    correctAnswer: 0,
    field: 'science',
    category: 'mathematics'
  },
  {
    id: 's2',
    text: 'Which of the following is a renewable energy source?',
    options: ['Coal', 'Solar energy', 'Natural gas', 'Nuclear energy'],
    correctAnswer: 1,
    field: 'science',
    category: 'physics'
  },
  {
    id: 's3',
    text: 'What is the chemical symbol for Gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    field: 'science',
    category: 'chemistry'
  },
  {
    id: 's4',
    text: 'Which organelle is known as the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
    correctAnswer: 1,
    field: 'science',
    category: 'biology'
  },
  {
    id: 's5',
    text: 'What is the value of π (pi) to two decimal places?',
    options: ['3.14', '3.15', '3.16', '3.13'],
    correctAnswer: 0,
    field: 'science',
    category: 'mathematics'
  },
  {
    id: 's6',
    text: 'Which force keeps planets in orbit around the sun?',
    options: ['Magnetic force', 'Gravitational force', 'Electric force', 'Frictional force'],
    correctAnswer: 1,
    field: 'science',
    category: 'physics'
  },
  {
    id: 's7',
    text: 'What is the pH of pure water?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    field: 'science',
    category: 'chemistry'
  },
  {
    id: 's8',
    text: 'Which blood type is known as the universal donor?',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 3,
    field: 'science',
    category: 'biology'
  },

  // Commerce Questions
  {
    id: 'c1',
    text: 'What does GDP stand for?',
    options: ['Gross Domestic Product', 'General Domestic Product', 'Gross Development Product', 'General Development Product'],
    correctAnswer: 0,
    field: 'commerce',
    category: 'economics'
  },
  {
    id: 'c2',
    text: 'Which of the following is NOT a type of business organization?',
    options: ['Partnership', 'Corporation', 'Sole Proprietorship', 'Democracy'],
    correctAnswer: 3,
    field: 'commerce',
    category: 'business'
  },
  {
    id: 'c3',
    text: 'What is the primary purpose of a balance sheet?',
    options: ['To show profit and loss', 'To show assets and liabilities', 'To show cash flow', 'To show revenue'],
    correctAnswer: 1,
    field: 'commerce',
    category: 'accounting'
  },
  {
    id: 'c4',
    text: 'Which economic system is based on supply and demand?',
    options: ['Command economy', 'Market economy', 'Traditional economy', 'Mixed economy'],
    correctAnswer: 1,
    field: 'commerce',
    category: 'economics'
  },
  {
    id: 'c5',
    text: 'What is the main function of a bank?',
    options: ['To manufacture goods', 'To provide loans and accept deposits', 'To sell insurance', 'To provide healthcare'],
    correctAnswer: 1,
    field: 'commerce',
    category: 'finance'
  },
  {
    id: 'c6',
    text: 'Which of the following is a liability?',
    options: ['Cash', 'Equipment', 'Accounts Payable', 'Inventory'],
    correctAnswer: 2,
    field: 'commerce',
    category: 'accounting'
  },
  {
    id: 'c7',
    text: 'What does ROI stand for?',
    options: ['Return on Investment', 'Rate of Interest', 'Revenue on Income', 'Return on Income'],
    correctAnswer: 0,
    field: 'commerce',
    category: 'finance'
  },
  {
    id: 'c8',
    text: 'Which marketing strategy focuses on building long-term customer relationships?',
    options: ['Transactional marketing', 'Relationship marketing', 'Direct marketing', 'Mass marketing'],
    correctAnswer: 1,
    field: 'commerce',
    category: 'marketing'
  },

  // Humanities Questions
  {
    id: 'h1',
    text: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 1,
    field: 'humanities',
    category: 'literature'
  },
  {
    id: 'h2',
    text: 'Which ancient civilization built the pyramids?',
    options: ['Greek', 'Roman', 'Egyptian', 'Mesopotamian'],
    correctAnswer: 2,
    field: 'humanities',
    category: 'history'
  },
  {
    id: 'h3',
    text: 'What is the study of human behavior and mental processes called?',
    options: ['Sociology', 'Psychology', 'Anthropology', 'Philosophy'],
    correctAnswer: 1,
    field: 'humanities',
    category: 'psychology'
  },
  {
    id: 'h4',
    text: 'Which language family does English belong to?',
    options: ['Romance', 'Germanic', 'Slavic', 'Celtic'],
    correctAnswer: 1,
    field: 'humanities',
    category: 'linguistics'
  },
  {
    id: 'h5',
    text: 'Who painted the "Mona Lisa"?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
    correctAnswer: 2,
    field: 'humanities',
    category: 'art'
  },
  {
    id: 'h6',
    text: 'What is the study of government and political systems called?',
    options: ['Economics', 'Political Science', 'Sociology', 'History'],
    correctAnswer: 1,
    field: 'humanities',
    category: 'political_science'
  },
  {
    id: 'h7',
    text: 'Which philosophical school emphasizes the importance of reason and logic?',
    options: ['Existentialism', 'Rationalism', 'Empiricism', 'Stoicism'],
    correctAnswer: 1,
    field: 'humanities',
    category: 'philosophy'
  },
  {
    id: 'h8',
    text: 'What is the study of human societies and cultures called?',
    options: ['Psychology', 'Anthropology', 'Sociology', 'History'],
    correctAnswer: 1,
    field: 'humanities',
    category: 'anthropology'
  },

  // General Aptitude Questions
  {
    id: 'g1',
    text: 'If all roses are flowers and some flowers are red, which statement is definitely true?',
    options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'],
    correctAnswer: 3,
    field: 'general',
    category: 'logical_reasoning'
  },
  {
    id: 'g2',
    text: 'What comes next in the sequence: 2, 4, 8, 16, ?',
    options: ['24', '32', '20', '28'],
    correctAnswer: 1,
    field: 'general',
    category: 'numerical_reasoning'
  },
  {
    id: 'g3',
    text: 'Which word is most similar to "BRILLIANT"?',
    options: ['Dull', 'Intelligent', 'Dark', 'Slow'],
    correctAnswer: 1,
    field: 'general',
    category: 'verbal_reasoning'
  },
  {
    id: 'g4',
    text: 'If you rearrange the letters "RAPID", you would get:',
    options: ['A bird', 'A fruit', 'A country', 'A color'],
    correctAnswer: 0,
    field: 'general',
    category: 'verbal_reasoning'
  },
  {
    id: 'g5',
    text: 'What is 25% of 200?',
    options: ['25', '50', '75', '100'],
    correctAnswer: 1,
    field: 'general',
    category: 'numerical_reasoning'
  }
]

export default function AptitudeTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)

  // Timer effect
  useEffect(() => {
    let interval: number
    if (testStarted && !showResults) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [testStarted, showResults])

  const startTest = () => {
    setTestStarted(true)
    setCurrentQuestion(0)
    setAnswers({})
    setTimeElapsed(0)
    setShowResults(false)
  }

  const selectAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < APTITUDE_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateResults = () => {
    const scores = { science: 0, commerce: 0, humanities: 0, totalScore: 0 }
    const strengths: string[] = []
    const weaknesses: string[] = []

    APTITUDE_QUESTIONS.forEach(question => {
      const userAnswer = answers[question.id]
      if (userAnswer === question.correctAnswer) {
        scores[question.field as keyof typeof scores]++
        scores.totalScore++
      }
    })

    // Calculate percentages
    const scienceTotal = APTITUDE_QUESTIONS.filter(q => q.field === 'science').length
    const commerceTotal = APTITUDE_QUESTIONS.filter(q => q.field === 'commerce').length
    const humanitiesTotal = APTITUDE_QUESTIONS.filter(q => q.field === 'humanities').length

    const sciencePercent = (scores.science / scienceTotal) * 100
    const commercePercent = (scores.commerce / commerceTotal) * 100
    const humanitiesPercent = (scores.humanities / humanitiesTotal) * 100

    // Determine strengths and weaknesses
    if (sciencePercent >= 70) strengths.push('Strong analytical and scientific thinking')
    else if (sciencePercent < 40) weaknesses.push('Needs improvement in scientific concepts')

    if (commercePercent >= 70) strengths.push('Good business and economic understanding')
    else if (commercePercent < 40) weaknesses.push('Needs improvement in business concepts')

    if (humanitiesPercent >= 70) strengths.push('Strong in humanities and social sciences')
    else if (humanitiesPercent < 40) weaknesses.push('Needs improvement in humanities subjects')

    // Generate recommendations
    const recommendations: string[] = []
    const maxScore = Math.max(sciencePercent, commercePercent, humanitiesPercent)
    
    if (maxScore === sciencePercent && sciencePercent >= 60) {
      recommendations.push('Consider pursuing Science stream (PCM/PCB)')
      recommendations.push('Explore careers in Engineering, Medicine, or Research')
      recommendations.push('Focus on Mathematics, Physics, Chemistry, and Biology')
    }
    
    if (maxScore === commercePercent && commercePercent >= 60) {
      recommendations.push('Consider pursuing Commerce stream')
      recommendations.push('Explore careers in Business, Finance, or Economics')
      recommendations.push('Focus on Accountancy, Business Studies, and Economics')
    }
    
    if (maxScore === humanitiesPercent && humanitiesPercent >= 60) {
      recommendations.push('Consider pursuing Humanities stream')
      recommendations.push('Explore careers in Arts, Literature, or Social Sciences')
      recommendations.push('Focus on History, Geography, Political Science, and Literature')
    }

    if (recommendations.length === 0) {
      recommendations.push('Consider taking additional assessments to better understand your interests')
      recommendations.push('Explore all three streams before making a decision')
    }

    const result: TestResult = {
      science: Math.round(sciencePercent),
      commerce: Math.round(commercePercent),
      humanities: Math.round(humanitiesPercent),
      totalScore: Math.round((scores.totalScore / APTITUDE_QUESTIONS.length) * 100),
      recommendations,
      strengths,
      weaknesses
    }

    // Store results
    localStorage.setItem('aorta_aptitude_result', JSON.stringify(result))
    setShowResults(true)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (!testStarted) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Aptitude Test</h2>
          <p className="text-primary-200 mb-6">
            Take our comprehensive aptitude test to discover your strengths across Science, Commerce, and Humanities fields.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg bg-primary-900/40 p-6 text-center">
            <div className="text-4xl mb-3">🔬</div>
            <h3 className="text-xl font-semibold mb-2">Science</h3>
            <p className="text-sm text-primary-300">
              Mathematics, Physics, Chemistry, Biology, and logical reasoning questions
            </p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-6 text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="text-xl font-semibold mb-2">Commerce</h3>
            <p className="text-sm text-primary-300">
              Economics, Business, Accounting, Finance, and analytical thinking questions
            </p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-6 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-semibold mb-2">Humanities</h3>
            <p className="text-sm text-primary-300">
              Literature, History, Psychology, Philosophy, and creative thinking questions
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={startTest}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Start Aptitude Test
          </button>
          <p className="text-sm text-primary-300 mt-4">
            Duration: Approximately 15-20 minutes • {APTITUDE_QUESTIONS.length} questions
          </p>
        </div>
      </div>
    )
  }

  if (showResults) {
    const result = JSON.parse(localStorage.getItem('aorta_aptitude_result') || '{}') as TestResult

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Aptitude Test Results</h2>
          <p className="text-primary-200 mb-6">
            Based on your performance, here are your strengths and recommendations:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg bg-primary-900/40 p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{result.science}%</div>
            <h3 className="text-xl font-semibold mb-2">Science</h3>
            <div className="w-full bg-primary-800 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-400 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${result.science}%` }}
              ></div>
            </div>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{result.commerce}%</div>
            <h3 className="text-xl font-semibold mb-2">Commerce</h3>
            <div className="w-full bg-primary-800 rounded-full h-2 mb-4">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${result.commerce}%` }}
              ></div>
            </div>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{result.humanities}%</div>
            <h3 className="text-xl font-semibold mb-2">Humanities</h3>
            <div className="w-full bg-primary-800 rounded-full h-2 mb-4">
              <div 
                className="bg-purple-400 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${result.humanities}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Strengths</h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Areas for Improvement</h3>
            <ul className="space-y-2">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-orange-400 mr-2">⚠</span>
                  <span className="text-sm">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-primary-900/40 p-6">
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          <ul className="space-y-2">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-400 mr-2 mt-1">•</span>
                <span className="text-sm">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/roadmap" className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors">
              Build Your Roadmap
            </a>
            <a href="/colleges" className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors">
              Explore Colleges
            </a>
            <a href="/swot" className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors">
              SWOT Analysis
            </a>
          </div>
          <p className="text-sm text-primary-300 mt-4">
            Results saved locally for personalized recommendations
          </p>
        </div>
      </div>
    )
  }

  const question = APTITUDE_QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / APTITUDE_QUESTIONS.length) * 100

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Aptitude Test</h2>
        <div className="text-sm text-primary-200">
          Question {currentQuestion + 1} of {APTITUDE_QUESTIONS.length} • Time: {formatTime(timeElapsed)}
        </div>
      </div>

      <div className="w-full bg-primary-900 rounded-full h-2">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="rounded-lg bg-primary-900/40 p-6">
        <div className="flex items-center mb-4">
          <span className={`px-3 py-1 rounded text-xs font-medium ${
            question.field === 'science' ? 'bg-blue-600' :
            question.field === 'commerce' ? 'bg-green-600' :
            question.field === 'humanities' ? 'bg-purple-600' :
            'bg-gray-600'
          }`}>
            {question.field.toUpperCase()}
          </span>
          <span className="ml-2 text-sm text-primary-300">{question.category}</span>
        </div>

        <h3 className="text-lg font-medium mb-6">{question.text}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                answers[question.id] === index
                  ? 'bg-primary-700 border-primary-500'
                  : 'bg-primary-800 border-primary-700 hover:bg-primary-750'
              }`}
            >
              <input
                type="radio"
                name={question.id}
                checked={answers[question.id] === index}
                onChange={() => selectAnswer(question.id, index)}
                className="mr-3"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-2 bg-primary-800 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          Previous
        </button>
        <button
          onClick={nextQuestion}
          className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
        >
          {currentQuestion === APTITUDE_QUESTIONS.length - 1 ? 'Finish Test' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}
