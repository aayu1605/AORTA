import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-primary-200 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link 
            to="/" 
            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
          >
            Go Home
          </Link>
          <Link 
            to="/quiz" 
            className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            Take Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}




