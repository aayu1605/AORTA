import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Roadmap from './pages/Roadmap'
import SWOT from './pages/SWOT'
import Chatbot from './pages/Chatbot'
import Colleges from './pages/Colleges'
import After10th from './pages/After10th'
import After12th from './pages/After12th'
import Exams from './pages/Exams'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary-950 text-white">
        {/* Offline indicator */}
        {!isOnline && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-2 text-sm"
          >
            📱 You're offline. Some features may not work.
          </motion.div>
        )}

        {/* PWA Install Prompt */}
        <AnimatePresence>
          {showInstallPrompt && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-20 left-4 right-4 z-50"
            >
              <div className="bg-primary-800 border border-primary-600 rounded-2xl p-4 shadow-mobile-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Install AORTA Mobile</h3>
                      <p className="text-xs text-primary-300">Get quick access to career guidance</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setShowInstallPrompt(false)}
                      className="px-3 py-1 text-primary-400 text-sm"
                    >
                      Later
                    </button>
                    <button
                      onClick={handleInstallClick}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Install
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/swot" element={<SWOT />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/after-10th" element={<After10th />} />
            <Route path="/after-12th" element={<After12th />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
