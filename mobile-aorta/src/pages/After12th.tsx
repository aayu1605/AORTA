import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Brain, Map, BarChart3, ArrowRight, CheckCircle, Calendar } from 'lucide-react'

export default function After12th() {
  const [selectedTrack, setSelectedTrack] = useState<string>('')

  const tracks = [
    {
      id: 'undergraduate',
      title: 'Undergraduate Studies',
      description: 'Bachelor\'s degrees in various fields',
      career: 'Leads to: B.Tech, B.Sc, B.Com, BA, BBA, etc.',
      icon: '🎓',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'polytechnic',
      title: 'Polytechnic/Diploma',
      description: 'Technical diploma programs',
      career: 'Leads to: Engineering Diploma, Technical Skills',
      icon: '🔧',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 'apprenticeship',
      title: 'Apprenticeship',
      description: 'Learn while you earn',
      career: 'Leads to: Industry experience, Skill development',
      icon: '⚡',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Deep Assessment',
      description: 'Take our comprehensive psychometric + career-fit quiz to understand your true potential.',
      icon: Brain
    },
    {
      number: 2,
      title: 'Career Shortlisting',
      description: 'Shortlist 3 career tracks: UG/Polytechnic/Apprenticeship based on your profile.',
      icon: CheckCircle
    },
    {
      number: 3,
      title: 'Timeline Planning',
      description: 'Build a detailed roadmap with prep timeline, application deadlines, and financial planning.',
      icon: Calendar
    },
    {
      number: 4,
      title: 'College Selection',
      description: 'Use our AISHE-backed directory to shortlist government colleges and apply strategically.',
      icon: GraduationCap
    },
    {
      number: 5,
      title: 'Final Decision',
      description: 'Use mentorship and mock counseling sessions before making your final seat choice.',
      icon: Map
    }
  ]

  const careerPaths = [
    {
      title: 'Engineering & Technology',
      description: 'B.Tech in various specializations',
      courses: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering']
    },
    {
      title: 'Medical & Healthcare',
      description: 'Healthcare and medical sciences',
      courses: ['MBBS (Medicine)', 'BDS (Dentistry)', 'B.Pharm (Pharmacy)', 'B.Sc Nursing']
    },
    {
      title: 'Commerce & Business',
      description: 'Business and commerce studies',
      courses: ['B.Com (Commerce)', 'BBA (Business Administration)', 'CA (Chartered Accountancy)', 'CFA (Chartered Financial Analyst)']
    },
    {
      title: 'Arts & Humanities',
      description: 'Liberal arts and humanities',
      courses: ['BA (Bachelor of Arts)', 'B.Sc (Pure Sciences)', 'Journalism & Mass Comm', 'Psychology & Sociology']
    },
    {
      title: 'Design & Creative',
      description: 'Creative and design fields',
      courses: ['B.Arch (Architecture)', 'B.Des (Design)', 'BFA (Fine Arts)', 'Fashion Design']
    },
    {
      title: 'Defense & Services',
      description: 'Defense and government services',
      courses: ['NDA (National Defense Academy)', 'CDS (Combined Defense Services)', 'Civil Services Preparation', 'Police Services']
    }
  ]

  const examTimeline = [
    { month: 'Dec', name: 'December', exam: 'JEE Main Registration' },
    { month: 'Jan', name: 'January', exam: 'NEET Registration' },
    { month: 'Feb', name: 'February', exam: 'JEE Main Exam' },
    { month: 'May', name: 'May', exam: 'NEET Exam' }
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
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">After Class 12th</h1>
        <p className="text-primary-200">Shape your future with the right career track</p>
      </motion.div>

      {/* Track Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Choose Your Career Track</h2>
        <div className="space-y-3">
          {tracks.map((track) => {
            const isSelected = selectedTrack === track.id
            return (
              <motion.button
                key={track.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTrack(track.id)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-primary-500 bg-primary-800/50'
                    : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${track.bgColor} rounded-2xl flex items-center justify-center text-2xl`}>
                    {track.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{track.title}</h3>
                    <p className="text-sm text-primary-300">{track.description}</p>
                    <p className="text-xs text-primary-400 mt-1">{track.career}</p>
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
        
        {selectedTrack && (
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
              Selected: {tracks.find(t => t.id === selectedTrack)?.title}
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
        <h2 className="text-xl font-semibold text-center">5-Step Strategy for Class 12th Students</h2>
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

      {/* Popular Career Paths */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Popular Career Paths After 12th</h2>
        <div className="grid grid-cols-1 gap-4">
          {careerPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="font-semibold text-white mb-2">{path.title}</h3>
              <p className="text-sm text-primary-300 mb-3">{path.description}</p>
              <div className="grid grid-cols-2 gap-1">
                {path.courses.map((course, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-primary-200">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Entrance Exams Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Important Entrance Exams Timeline</h2>
        <div className="card">
          <div className="grid grid-cols-2 gap-4">
            {examTimeline.map((exam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-lg font-bold text-white mb-2 mx-auto">
                  {exam.month}
                </div>
                <h3 className="font-semibold text-white mb-1">{exam.name}</h3>
                <p className="text-sm text-primary-300">{exam.exam}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-center">Start Your Journey</h2>
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












