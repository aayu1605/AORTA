import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="px-4 py-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="relative"
        >
          <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <Search className="w-3 h-3 text-white" />
          </div>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
          <p className="text-primary-200 text-lg max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-800 to-primary-900 rounded-full flex items-center justify-center"
        >
          <div className="text-6xl">🔍</div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-primary-400 mb-3">Or try one of these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/quiz" className="px-3 py-1 bg-primary-800/50 hover:bg-primary-700/50 text-primary-200 text-sm rounded-lg transition-colors">
                Career Quiz
              </Link>
              <Link to="/roadmap" className="px-3 py-1 bg-primary-800/50 hover:bg-primary-700/50 text-primary-200 text-sm rounded-lg transition-colors">
                Roadmap
              </Link>
              <Link to="/colleges" className="px-3 py-1 bg-primary-800/50 hover:bg-primary-700/50 text-primary-200 text-sm rounded-lg transition-colors">
                Colleges
              </Link>
              <Link to="/chatbot" className="px-3 py-1 bg-primary-800/50 hover:bg-primary-700/50 text-primary-200 text-sm rounded-lg transition-colors">
                AI Mentor
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xs text-primary-500">
            If you think this is an error, please contact our support team.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}












