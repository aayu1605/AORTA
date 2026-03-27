import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Brain, Map, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'

export default function After10th() {
  const [selectedStream, setSelectedStream] = useState<string>('')

  const streams = [
    {
      id: 'science',
      title: 'Science Stream',
      description: 'Physics, Chemistry, Biology/Mathematics',
      career: 'Leads to: Engineering, Medicine, Research, Technology',
      icon: '🔬',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'commerce',
      title: 'Commerce Stream',
      description: 'Accountancy, Business Studies, Economics',
      career: 'Leads to: CA, Business, Finance, Management',
      icon: '💼',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 'humanities',
      title: 'Humanities Stream',
      description: 'History, Geography, Political Science, Literature',
      career: 'Leads to: Arts, Law, Journalism, Social Work',
      icon: '📚',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Quick Assessment',
      description: 'Take our psychometric + interest quiz to understand your strengths and preferences.',
      icon: Brain
    },
    {
      number: 2,
      title: 'Explore Streams',
      description: 'Discover 3 streams with micro-lessons and real-world applications.',
      icon: BookOpen
    },
    {
      number: 3,
      title: 'SWOT Analysis',
      description: 'Analyze your strengths, weaknesses, opportunities, and threats for each path.',
      icon: BarChart3
    },
    {
      number: 4,
      title: 'Build Roadmap',
      description: 'Create a 2-year roadmap with subjects, bridge-courses, and skill development.',
      icon: Map
    },
    {
      number: 5,
      title: 'Apply & Prepare',
      description: 'Apply to schools and prepare for relevant entrance exams and training.',
      icon: CheckCircle
    }
  ]

  const alternativePaths = [
    {
      title: 'Vocational Courses',
      description: 'Skill-based programs that lead directly to employment.',
      items: ['ITI (Industrial Training Institute)', 'Polytechnic Diploma', 'Vocational Training Programs', 'Skill Development Courses']
    },
    {
      title: 'Scholarship Opportunities',
      description: 'Financial support for meritorious students.',
      items: ['National Merit Scholarship', 'State Government Scholarships', 'Private Foundation Grants', 'Merit-cum-Means Scholarships']
    }
  ]

  return (
    <div className="px-4 py-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">After Class 10th</h1>
        <p className="text-primary-200">Choose your path and explore exciting opportunities ahead</p>
      </motion.div>

      {/* Stream Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Choose Your Stream</h2>
        <div className="space-y-3">
          {streams.map((stream) => {
            const isSelected = selectedStream === stream.id
            return (
              <motion.button
                key={stream.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStream(stream.id)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-primary-500 bg-primary-800/50'
                    : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${stream.bgColor} rounded-2xl flex items-center justify-center text-2xl`}>
                    {stream.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{stream.title}</h3>
                    <p className="text-sm text-primary-300">{stream.description}</p>
                    <p className="text-xs text-primary-400 mt-1">{stream.career}</p>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>
        
        {selectedStream && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 space-y-3"
          >
            <div className="flex flex-wrap gap-2">
              <Link to="/quiz" className="btn-primary text-sm px-4 py-2">
                Take Career Quiz
              </Link>
              <Link to="/roadmap" className="btn-secondary text-sm px-4 py-2">
                Build Roadmap
              </Link>
              <Link to="/colleges" className="btn-secondary text-sm px-4 py-2">
                Explore Colleges
              </Link>
              <Link to="/swot" className="btn-secondary text-sm px-4 py-2">
                SWOT Analysis
              </Link>
            </div>
            <p className="text-sm text-primary-300 text-center">
              Selected: {streams.find(s => s.id === selectedStream)?.title}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* 5-Step Strategy */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">5-Step Strategy for Class 10th Students</h2>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="w-5 h-5 text-primary-400" />
                      <h3 className="font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-primary-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Alternative Paths */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Alternative Paths After 10th</h2>
        <div className="grid grid-cols-1 gap-4">
          {alternativePaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="font-semibold text-white mb-2">{path.title}</h3>
              <p className="text-sm text-primary-300 mb-3">{path.description}</p>
              <ul className="space-y-1">
                {path.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-primary-200">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-center">Get Started Today</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/quiz" className="btn-primary text-center py-4">
            Take Assessment
          </Link>
          <Link to="/chatbot" className="btn-secondary text-center py-4">
            Ask AI Mentor
          </Link>
        </div>
      </motion.section>
    </div>
  )
}












