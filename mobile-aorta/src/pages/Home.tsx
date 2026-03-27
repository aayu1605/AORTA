import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Map, 
  BarChart3, 
  MessageCircle, 
  GraduationCap, 
  BookOpen,
  ArrowRight,
  Star,
  Users,
  Target
} from 'lucide-react'

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<string>('')

  const features = [
    {
      icon: Brain,
      title: 'AI Career Quiz',
      description: 'Discover your perfect career path',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      path: '/quiz'
    },
    {
      icon: Map,
      title: 'Roadmap Generator',
      description: 'Get personalized career roadmaps',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      path: '/roadmap'
    },
    {
      icon: BarChart3,
      title: 'SWOT Analysis',
      description: 'Analyze your strengths & weaknesses',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      path: '/swot'
    },
    {
      icon: MessageCircle,
      title: 'AI Mentor',
      description: 'Chat with our AI career mentor',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      path: '/chatbot'
    },
    {
      icon: GraduationCap,
      title: 'College Directory',
      description: 'Find the perfect college for you',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      path: '/colleges'
    },
    {
      icon: BookOpen,
      title: 'Exam Guide',
      description: 'Master entrance exams',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      path: '/exams'
    }
  ]

  const stats = [
    { icon: Users, value: '10K+', label: 'Students Helped' },
    { icon: Target, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.8', label: 'Rating' }
  ]

  return (
    <div className="px-4 py-6 space-y-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-3xl flex items-center justify-center mb-4">
          <span className="text-white font-bold text-3xl">A</span>
        </div>
        <h1 className="text-3xl font-bold text-white text-balance">
          Your AI Career Guide
        </h1>
        <p className="text-primary-200 text-lg leading-relaxed">
          Discover your perfect career path with AI-powered guidance, personalized roadmaps, and expert mentorship.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-primary-800/50 rounded-2xl flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-primary-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Education Level Selection */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Choose Your Education Level</h2>
        <div className="space-y-3">
          {[
            { id: '10th', title: 'Class 10th Passout', desc: 'Explore streams and career paths', icon: BookOpen },
            { id: '12th', title: 'Class 12th Passout', desc: 'Find colleges and courses', icon: GraduationCap },
            { id: 'graduate', title: 'Graduate', desc: 'Advanced studies and career transitions', icon: Target }
          ].map((level) => {
            const Icon = level.icon
            const isSelected = selectedLevel === level.id
            
            return (
              <motion.button
                key={level.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedLevel(level.id)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-primary-500 bg-primary-800/50'
                    : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-primary-600' : 'bg-primary-800'
                  }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{level.title}</h3>
                    <p className="text-sm text-primary-300">{level.desc}</p>
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
        
        {selectedLevel && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 space-y-3"
          >
            <div className="flex flex-wrap gap-2">
              <Link to="/quiz" className="btn-primary text-sm px-4 py-2">
                Take Quiz
              </Link>
              <Link to="/roadmap" className="btn-secondary text-sm px-4 py-2">
                Build Roadmap
              </Link>
              <Link to="/colleges" className="btn-secondary text-sm px-4 py-2">
                Find Colleges
              </Link>
            </div>
            <p className="text-sm text-primary-300 text-center">
              Selected: {selectedLevel === '10th' ? 'Class 10th' : selectedLevel === '12th' ? 'Class 12th' : 'Graduate'}
            </p>
          </motion.div>
        )}
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Explore Our Features</h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={feature.path}
                  className="block card hover:bg-primary-800/50 transition-colors touch-feedback"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-primary-300">{feature.description}</p>
                  <div className="flex items-center justify-end mt-3">
                    <ArrowRight className="w-4 h-4 text-primary-400" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="gradient-primary rounded-3xl p-6 text-center space-y-4"
      >
        <h2 className="text-2xl font-bold text-white">Ready to Start Your Journey?</h2>
        <p className="text-blue-100">
          Join thousands of students who found their perfect career path with AORTA
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/quiz" className="bg-white text-primary-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-colors touch-feedback">
            Take Career Quiz
          </Link>
          <Link to="/chatbot" className="bg-primary-800/50 text-white hover:bg-primary-700/50 font-semibold px-6 py-3 rounded-xl transition-colors touch-feedback">
            Chat with AI Mentor
          </Link>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-center">Quick Access</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/after-10th" className="btn-secondary text-center py-4">
            After 10th Guide
          </Link>
          <Link to="/after-12th" className="btn-secondary text-center py-4">
            After 12th Guide
          </Link>
        </div>
      </motion.section>
    </div>
  )
}












