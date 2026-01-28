import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMemo, useState, useEffect } from 'react'
import About from './About'
import Quiz from './Quiz'
import RoadmapGenerator from './RoadmapGenerator'
import SWOTAnalysis from './SWOTAnalysis'
import MentorshipChatbot from './MentorshipChatbot'
import HowItWorks from './HowItWorks'
import Features from './Features'
import FAQ from './FAQ'
import Exams from './Exams'
import Careers from './Careers'
import Contact from './Contact'
import NotFound from './NotFound'
import { realApiIntegration, type College } from './api/collegesApi'


function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-glow absolute inset-0 opacity-60" />
      <header className="border-b border-primary-800/60 bg-primary-900/40 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="AORTA Logo" className="h-8 w-8 mr-3" />
            <span className="text-2xl font-black text-white tracking-wide">AORTA</span>
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link to="/careers" className="hover:text-accent-400 transition-colors">{t('nav.careers')}</Link>
            <Link to="/after-10th" className="hover:text-accent-400 transition-colors">{t('nav.after10')}</Link>
            <Link to="/after-12th" className="hover:text-accent-400 transition-colors">{t('nav.after12')}</Link>
            <Link to="/colleges" className="hover:text-accent-400 transition-colors">{t('nav.colleges')}</Link>
            <Link to="/exams" className="hover:text-accent-400 transition-colors">Exams</Link>
            <Link to="/roadmap" className="hover:text-accent-400 transition-colors">{t('nav.roadmap')}</Link>
            <Link to="/swot" className="hover:text-accent-400 transition-colors">{t('nav.swot')}</Link>
            <Link to="/mentors" className="hover:text-accent-400 transition-colors">{t('nav.mentors')}</Link>
            <Link to="/about" className="hover:text-accent-400 transition-colors">{t('nav.about')}</Link>
            <Link to="/contact" className="hover:text-accent-400 transition-colors">Contact Us</Link>
          </nav>
        </div>
      </header>
      <main className="relative max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="mt-12 border-t border-primary-800/60 relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AORTA</h3>
              <p className="text-sm text-primary-300 mb-4">
                AI-powered career guidance platform helping students make informed decisions about their future.
              </p>
              <p className="text-xs text-primary-400">
                Problem it solves: Career confusion and lack of personalized guidance in education choices.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Home</Link>
                <Link to="/features" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Features</Link>
                <Link to="/quiz" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Quiz</Link>
                <Link to="/how-it-works" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">How it Works</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link to="/careers" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Careers</Link>
                <Link to="/colleges" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Colleges</Link>
                <Link to="/roadmap" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Roadmap</Link>
                <Link to="/swot" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">SWOT Analysis</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Contact Us</Link>
                <Link to="/faq" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">FAQ</Link>
                <Link to="/about" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">About</Link>
                <a href="mailto:aorta4747@gmail.com" className="block text-sm text-primary-300 hover:text-accent-400 transition-colors">Email Support</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-800/60 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xs text-primary-400 mb-4 md:mb-0">
                <p>© 2025 AORTA. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <Link to="/quiz" className="px-4 py-2 bg-primary-600 hover:bg-accent-500 text-white text-sm rounded-lg transition-colors">
                  Take Quiz
                </Link>
                <Link to="/roadmap" className="px-4 py-2 bg-primary-800 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors">
                  Build Roadmap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Home() {
  const { t } = useTranslation()
  const [selectedLevel, setSelectedLevel] = useState<string>('')

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-50 to-accent-400 bg-clip-text text-transparent">
          {t('app.hero_title')}
        </h1>
        <p className="text-primary-200">{t('app.hero_sub')}</p>

        <div className="rounded-lg bg-primary-900/30 p-6">
          <h2 className="text-xl font-semibold mb-4">Choose your education level to get started</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setSelectedLevel('10th')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedLevel === '10th' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Class 10th Passout</h3>
              <p className="text-sm text-primary-300 mt-1">Explore streams, vocational courses, and career paths</p>
            </button>
            <button
              onClick={() => setSelectedLevel('12th')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedLevel === '12th' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Class 12th Passout</h3>
              <p className="text-sm text-primary-300 mt-1">Find colleges, courses, and admission guidance</p>
            </button>
            <button
              onClick={() => setSelectedLevel('graduate')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedLevel === 'graduate' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Graduate</h3>
              <p className="text-sm text-primary-300 mt-1">Advanced studies, career transitions, and skill development</p>
            </button>
          </div>
          
          {selectedLevel && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Link to="/roadmap" className="px-4 py-2 rounded bg-primary-600 hover:bg-primary-500 text-white text-sm">Build Roadmap</Link>
                <Link to="/colleges" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Explore Colleges</Link>
                <Link to="/features" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Features</Link>
                <Link to="/quiz" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Quiz</Link>
                {selectedLevel === '10th' && <Link to="/after-10th" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">After 10th Guide</Link>}
                {selectedLevel === '12th' && <Link to="/after-12th" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">After 12th Guide</Link>}
                {selectedLevel === 'graduate' && (
                  <>
                    <Link to="/swot" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">SWOT Analysis</Link>
                    <Link to="/mentors" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Mentorship</Link>
                  </>
                )}
              </div>
              <p className="text-sm text-primary-300">Selected: {selectedLevel === '10th' ? 'Class 10th Passout' : selectedLevel === '12th' ? 'Class 12th Passout' : 'Graduate'}</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features Section */}
      <Features />


      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-800/50 to-primary-900/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Take Quiz?</h2>
        <p className="text-primary-200 mb-6">Join thousands of students who have found their perfect career path with AORTA</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quiz" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors text-lg font-semibold">
            Take Quiz
          </Link>
          <Link to="/how-it-works" className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors">
            Learn How It Works
          </Link>
        </div>
      </section>
    </div>
  )
}


function After10th() {
  const [selectedStream, setSelectedStream] = useState<string>('')

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">After Class 10th - Choose Your Path</h1>
        <p className="text-primary-200">Your Class 10th results are just the beginning. Let's explore the exciting opportunities ahead and find the perfect stream for you.</p>
        
        <div className="rounded-lg bg-primary-900/30 p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Your Stream</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setSelectedStream('science')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedStream === 'science' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Science Stream</h3>
              <p className="text-sm text-primary-300 mt-1">Physics, Chemistry, Biology/Mathematics</p>
              <p className="text-xs text-primary-400 mt-2">Leads to: Engineering, Medicine, Research, Technology</p>
            </button>
            <button
              onClick={() => setSelectedStream('commerce')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedStream === 'commerce' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Commerce Stream</h3>
              <p className="text-sm text-primary-300 mt-1">Accountancy, Business Studies, Economics</p>
              <p className="text-xs text-primary-400 mt-2">Leads to: CA, Business, Finance, Management</p>
            </button>
            <button
              onClick={() => setSelectedStream('humanities')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedStream === 'humanities' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Humanities Stream</h3>
              <p className="text-sm text-primary-300 mt-1">History, Geography, Political Science, Literature</p>
              <p className="text-xs text-primary-400 mt-2">Leads to: Arts, Law, Journalism, Social Work</p>
            </button>
          </div>
          
          {selectedStream && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Link to="/quiz" className="px-4 py-2 rounded bg-primary-600 hover:bg-primary-500 text-white text-sm">Take Career Quiz</Link>
                <Link to="/roadmap" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Build Roadmap</Link>
                <Link to="/colleges" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Explore Colleges</Link>
                <Link to="/swot" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">SWOT Analysis</Link>
              </div>
              <p className="text-sm text-primary-300">Selected: {selectedStream === 'science' ? 'Science Stream' : selectedStream === 'commerce' ? 'Commerce Stream' : 'Humanities Stream'}</p>
            </div>
          )}
        </div>
      </section>

      {/* 5-Step Strategy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5-Step Strategy for Class 10th Students</h2>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">1</div>
            <h3 className="font-medium mb-2">Quick Assessment</h3>
            <p className="text-sm text-primary-300">Take our psychometric + interest quiz to understand your strengths and preferences.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">2</div>
            <h3 className="font-medium mb-2">Explore Streams</h3>
            <p className="text-sm text-primary-300">Discover 3 streams with micro-lessons and real-world applications.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">3</div>
            <h3 className="font-medium mb-2">SWOT Analysis</h3>
            <p className="text-sm text-primary-300">Analyze your strengths, weaknesses, opportunities, and threats for each path.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">4</div>
            <h3 className="font-medium mb-2">Build Roadmap</h3>
            <p className="text-sm text-primary-300">Create a 2-year roadmap with subjects, bridge-courses, and skill development.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">5</div>
            <h3 className="font-medium mb-2">Apply & Prepare</h3>
            <p className="text-sm text-primary-300">Apply to schools and prepare for relevant entrance exams and training.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function After12th() {
  const [selectedTrack, setSelectedTrack] = useState<string>('')

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">After Class 12th - Shape Your Future</h1>
        <p className="text-primary-200">Your Class 12th results open doors to countless opportunities. Let's find the perfect career track that matches your interests, skills, and aspirations.</p>
        
        <div className="rounded-lg bg-primary-900/30 p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Your Career Track</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setSelectedTrack('undergraduate')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTrack === 'undergraduate' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Undergraduate Studies</h3>
              <p className="text-sm text-primary-300 mt-1">Bachelor's degrees in various fields</p>
              <p className="text-xs text-primary-400 mt-2">Leads to: B.Tech, B.Sc, B.Com, BA, BBA, etc.</p>
            </button>
            <button
              onClick={() => setSelectedTrack('polytechnic')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTrack === 'polytechnic' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Polytechnic/Diploma</h3>
              <p className="text-sm text-primary-300 mt-1">Technical diploma programs</p>
              <p className="text-xs text-primary-400 mt-2">Leads to: Engineering Diploma, Technical Skills</p>
            </button>
            <button
              onClick={() => setSelectedTrack('apprenticeship')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTrack === 'apprenticeship' 
                  ? 'border-primary-500 bg-primary-800/50' 
                  : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
              }`}
            >
              <h3 className="font-medium">Apprenticeship</h3>
              <p className="text-sm text-primary-300 mt-1">Learn while you earn</p>
              <p className="text-xs text-primary-400 mt-2">Leads to: Industry experience, Skill development</p>
            </button>
          </div>
          
          {selectedTrack && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Link to="/quiz" className="px-4 py-2 rounded bg-primary-600 hover:bg-primary-500 text-white text-sm">Take Career Quiz</Link>
                <Link to="/roadmap" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Build Roadmap</Link>
                <Link to="/colleges" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">Explore Colleges</Link>
                <Link to="/swot" className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm">SWOT Analysis</Link>
              </div>
              <p className="text-sm text-primary-300">Selected: {selectedTrack === 'undergraduate' ? 'Undergraduate Studies' : selectedTrack === 'polytechnic' ? 'Polytechnic/Diploma' : 'Apprenticeship'}</p>
            </div>
          )}
        </div>
      </section>

      {/* 5-Step Strategy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5-Step Strategy for Class 12th Students</h2>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">1</div>
            <h3 className="font-medium mb-2">Deep Assessment</h3>
            <p className="text-sm text-primary-300">Take our comprehensive psychometric + career-fit quiz to understand your true potential.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">2</div>
            <h3 className="font-medium mb-2">Career Shortlisting</h3>
            <p className="text-sm text-primary-300">Shortlist 3 career tracks: UG/Polytechnic/Apprenticeship based on your profile.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">3</div>
            <h3 className="font-medium mb-2">Timeline Planning</h3>
            <p className="text-sm text-primary-300">Build a detailed roadmap with prep timeline, application deadlines, and financial planning.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">4</div>
            <h3 className="font-medium mb-2">College Selection</h3>
            <p className="text-sm text-primary-300">Use our AISHE-backed directory to shortlist government colleges and apply strategically.</p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">5</div>
            <h3 className="font-medium mb-2">Final Decision</h3>
            <p className="text-sm text-primary-300">Use mentorship and mock counseling sessions before making your final seat choice.</p>
          </div>
        </div>
      </section>

      {/* Popular Career Paths */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Popular Career Paths After 12th</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg bg-primary-900/40 p-4">
            <h3 className="font-medium mb-2">Engineering & Technology</h3>
            <p className="text-sm text-primary-300 mb-3">B.Tech in various specializations</p>
            <ul className="text-sm text-primary-200 space-y-1">
              <li>• Computer Science Engineering</li>
              <li>• Electronics & Communication</li>
              <li>• Mechanical Engineering</li>
              <li>• Civil Engineering</li>
            </ul>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <h3 className="font-medium mb-2">Medical & Healthcare</h3>
            <p className="text-sm text-primary-300 mb-3">Healthcare and medical sciences</p>
            <ul className="text-sm text-primary-200 space-y-1">
              <li>• MBBS (Medicine)</li>
              <li>• BDS (Dentistry)</li>
              <li>• B.Pharm (Pharmacy)</li>
              <li>• B.Sc Nursing</li>
            </ul>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <h3 className="font-medium mb-2">Commerce & Business</h3>
            <p className="text-sm text-primary-300 mb-3">Business and commerce studies</p>
            <ul className="text-sm text-primary-200 space-y-1">
              <li>• B.Com (Commerce)</li>
              <li>• BBA (Business Administration)</li>
              <li>• CA (Chartered Accountancy)</li>
              <li>• CFA (Chartered Financial Analyst)</li>
            </ul>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <h3 className="font-medium mb-2">Arts & Humanities</h3>
            <p className="text-sm text-primary-300 mb-3">Liberal arts and humanities</p>
            <ul className="text-sm text-primary-200 space-y-1">
              <li>• BA (Bachelor of Arts)</li>
              <li>• B.Sc (Pure Sciences)</li>
              <li>• Journalism & Mass Comm</li>
              <li>• Psychology & Sociology</li>
            </ul>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <h3 className="font-medium mb-2">Design & Creative</h3>
            <p className="text-sm text-primary-300 mb-3">Creative and design fields</p>
            <ul className="text-sm text-primary-200 space-y-1">
              <li>• B.Arch (Architecture)</li>
              <li>• B.Des (Design)</li>
              <li>• BFA (Fine Arts)</li>
              <li>• Fashion Design</li>
            </ul>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-4">
            <h3 className="font-medium mb-2">Defense & Services</h3>
            <p className="text-sm text-primary-300 mb-3">Defense and government services</p>
            <ul className="text-sm text-primary-200 space-y-1">
              <li>• NDA (National Defense Academy)</li>
              <li>• CDS (Combined Defense Services)</li>
              <li>• Civil Services Preparation</li>
              <li>• Police Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Entrance Exams Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Important Entrance Exams Timeline</h2>
        <div className="rounded-lg bg-primary-900/40 p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-lg font-bold mb-2 mx-auto">Dec</div>
              <h3 className="font-medium mb-1">December</h3>
              <p className="text-sm text-primary-300">JEE Main Registration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-lg font-bold mb-2 mx-auto">Jan</div>
              <h3 className="font-medium mb-1">January</h3>
              <p className="text-sm text-primary-300">NEET Registration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-lg font-bold mb-2 mx-auto">Feb</div>
              <h3 className="font-medium mb-1">February</h3>
              <p className="text-sm text-primary-300">JEE Main Exam</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-lg font-bold mb-2 mx-auto">May</div>
              <h3 className="font-medium mb-1">May</h3>
              <p className="text-sm text-primary-300">NEET Exam</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


function Colleges() {
  const [stateFilter, setStateFilter] = useState<string>('')
  const [income, setIncome] = useState<number>(150000)
  const [courseFilter, setCourseFilter] = useState<string>('')
  const [typeFilter, setTypeFilter] = useState<string>('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [colleges, setColleges] = useState<College[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const collegesPerPage = 20

  // Fetch colleges from API
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setLoading(true)
        // Fetch all colleges first, then filter locally for better control
        const data = await realApiIntegration.fetchColleges()
        setColleges(data)
        setError(null)
      } catch (err) {
        setError('Failed to load colleges')
        console.error('Error fetching colleges:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchColleges()
  }, [])

  const filtered = useMemo(() => {
    return colleges
      .filter(college => {
        // Filter by state - exact match (case sensitive)
        if (stateFilter && college.state !== stateFilter) {
          return false
        }
        
        // Filter by college type
        if (typeFilter) {
          if (typeFilter === 'Government' && !['IIT', 'NIT', 'Central University', 'State University', 'Government'].includes(college.type)) {
            return false
          }
          if (typeFilter === 'Private' && college.type !== 'Private') {
            return false
          }
        }
        
        // Filter by course
        if (courseFilter && !college.courses.some(course => 
          course.toLowerCase().includes(courseFilter.toLowerCase())
        )) {
          return false
        }
        
        // Filter by income (budget)
        if (college.fees.min > income) {
          return false
        }
        
        return true
      })
      .sort((a, b) => {
        // Sort by NIRF rank (lower is better) and then by name
        if (a.nirfRank !== b.nirfRank) {
          return a.nirfRank - b.nirfRank
        }
        return a.name.localeCompare(b.name)
      })
  }, [colleges, stateFilter, typeFilter, courseFilter, income])

  // Get available courses and states from current data
  const availableCourses = useMemo(() => {
    const courseSet = new Set<string>()
    colleges.forEach(college => {
      college.courses.forEach(course => {
        courseSet.add(course)
      })
    })
    return Array.from(courseSet).sort()
  }, [colleges])

  const availableStates = useMemo(() => {
    const stateSet = new Set<string>()
    colleges.forEach(college => {
      stateSet.add(college.state)
    })
    return Array.from(stateSet).sort()
  }, [colleges])

  const totalPages = Math.ceil(filtered.length / collegesPerPage)
  const startIndex = (currentPage - 1) * collegesPerPage
  const endIndex = startIndex + collegesPerPage
  const currentColleges = filtered.slice(startIndex, endIndex)

  // Generate pagination buttons
  const getPaginationButtons = () => {
    const buttons = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i)
      }
    } else {
      // Show pages relative to current page
      const start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
      const end = Math.min(totalPages, start + maxVisible - 1)
      
      if (start > 1) {
        buttons.push(1)
        if (start > 2) buttons.push('...')
      }
      
      for (let i = start; i <= end; i++) {
        buttons.push(i)
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) buttons.push('...')
        buttons.push(totalPages)
      }
    }
    
    return buttons
  }

  if (loading) {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Colleges</h2>
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
          <p className="mt-2 text-sm text-primary-300">Loading colleges...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Colleges</h2>
        <div className="text-center py-8">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg"
          >
            Retry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Colleges</h2>
      <p className="text-primary-200 text-sm">Filters adapt to your quiz results. Choose state, college type, budget, and course.</p>

      <div className="rounded bg-primary-900/30 p-4 space-y-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          <select className="px-3 py-2 rounded bg-primary-900 border border-primary-800" value={stateFilter} onChange={e=>setStateFilter(e.target.value)} aria-label="Filter by state">
            <option value="">All states</option>
            {availableStates.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="px-3 py-2 rounded bg-primary-900 border border-primary-800" value={typeFilter} onChange={e=>setTypeFilter(e.target.value)} aria-label="Filter by college type">
            <option value="">All types</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
          <div>
            <label className="block text-sm text-primary-200 mb-1">Budget: ₹{income.toLocaleString('en-IN')}/yr</label>
            <input type="range" min={150000} max={500000} step={5000} value={income} onChange={e=>setIncome(parseInt(e.target.value))} aria-label="Income range" className="w-full" />
          </div>
          <select className="px-3 py-2 rounded bg-primary-900 border border-primary-800" value={courseFilter} onChange={e=>setCourseFilter(e.target.value)} aria-label="Filter by course">
            <option value="">All courses</option>
            {availableCourses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        
        {/* Active Filters Display */}
        {(stateFilter || typeFilter || courseFilter || income < 500000) && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-primary-200">Active filters:</span>
            {stateFilter && (
              <span className="px-2 py-1 bg-primary-800 text-primary-200 text-xs rounded">
                State: {stateFilter}
              </span>
            )}
            {typeFilter && (
              <span className="px-2 py-1 bg-primary-800 text-primary-200 text-xs rounded">
                Type: {typeFilter}
              </span>
            )}
            {courseFilter && (
              <span className="px-2 py-1 bg-primary-800 text-primary-200 text-xs rounded">
                Course: {courseFilter}
              </span>
            )}
            {income < 500000 && (
              <span className="px-2 py-1 bg-primary-800 text-primary-200 text-xs rounded">
                Budget: ₹{income.toLocaleString('en-IN')}
              </span>
            )}
            <button
              onClick={() => {
                setStateFilter('')
                setTypeFilter('')
                setCourseFilter('')
                setIncome(500000)
              }}
              className="px-2 py-1 bg-red-600 hover:bg-red-500 text-white text-xs rounded"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* College Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full px-4 py-3 bg-primary-900 border border-primary-800 rounded-lg text-left flex justify-between items-center hover:bg-primary-800 transition-colors"
        >
          <span className="text-primary-200">
            {filtered.length > 0 
              ? `Showing ${filtered.length} colleges` 
              : 'Select filters to view colleges'
            }
          </span>
          <svg 
            className={`w-5 h-5 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showDropdown && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-primary-900 border border-primary-800 rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
            {filtered.length > 0 ? (
                  <div className="divide-y divide-primary-800">
                    {filtered.map((c: College, index: number) => (
                      <div key={c.id} className="p-4 hover:bg-primary-800 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <a 
                              href={c.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-white hover:text-primary-200 hover:underline cursor-pointer block"
                            >
                              {c.name}
                            </a>
                            <p className="text-xs text-primary-300 mt-1">{c.state} · Fees: ₹{c.fees.min.toLocaleString('en-IN')}-{c.fees.max.toLocaleString('en-IN')}/yr</p>
                            <p className="text-xs text-primary-300">Courses: {c.courses.slice(0, 3).join(', ')}{c.courses.length > 3 ? '...' : ''}</p>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-right">
                              <div className="text-xs text-primary-300 mb-1">#{startIndex + index + 1}</div>
                              <span className="inline-block px-2 py-1 text-xs bg-primary-800 rounded">
                                NIRF #{c.nirfRank}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
            ) : (
              <div className="p-4 text-primary-300 text-sm text-center">
                No colleges match your current filters. Try adjusting your selection.
              </div>
            )}
          </div>
        )}
      </div>

      {/* College List with Pagination */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">College Directory</h3>
          <p className="text-sm text-primary-300">
            Showing {startIndex + 1}-{Math.min(endIndex, filtered.length)} of {filtered.length} colleges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentColleges.map((c: College, index: number) => (
            <div key={c.id} className="rounded-lg bg-primary-900/40 p-4 hover:bg-primary-900/60 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <a 
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm leading-tight text-primary-200 hover:text-white hover:underline cursor-pointer"
                >
                  {c.name}
                </a>
                <div className="flex flex-col items-end ml-2 flex-shrink-0">
                  <div className="text-xs text-primary-300 mb-1">#{startIndex + index + 1}</div>
                  <span className="text-xs bg-primary-800 px-2 py-1 rounded">
                    NIRF #{c.nirfRank}
                  </span>
                </div>
              </div>
              <p className="text-xs text-primary-300 mb-2">{c.state}</p>
              <p className="text-xs text-primary-400 mb-2">Fees: ₹{c.fees.min.toLocaleString('en-IN')}-{c.fees.max.toLocaleString('en-IN')}/yr</p>
              <div className="mt-2">
                <p className="text-xs text-primary-300">Courses: {c.courses.slice(0, 2).join(', ')}{c.courses.length > 2 ? '...' : ''}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded bg-primary-800 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {getPaginationButtons().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-2 text-primary-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page as number)}
                    className={`px-3 py-2 rounded text-sm ${
                      currentPage === page
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-800 hover:bg-primary-700 text-primary-200'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded bg-primary-800 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Next
            </button>
          </div>
        )}
        
        {filtered.length === 0 && (
          <div className="text-center py-8">
            <p className="text-primary-300">No colleges match your current filters.</p>
            <p className="text-sm text-primary-400 mt-2">Try adjusting your state, budget, or course selection.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function Roadmap() {
  return <RoadmapGenerator />
}

function SWOT() {
  return <SWOTAnalysis />
}

function Mentorship() {
  return <MentorshipChatbot />
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/after-10th" element={<After10th />} />
          <Route path="/after-12th" element={<After12th />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/colleges/:name" element={<CollegeDetail />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/swot" element={<SWOT />} />
          <Route path="/mentors" element={<Mentorship />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

function CollegeDetail() {
  const { id } = useParams<{ id: string }>()
  const [college, setCollege] = useState<College | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        setLoading(true)
        if (id) {
          const data = await realApiIntegration.fetchCollegeDetails(id)
          setCollege(data)
        }
        setError(null)
      } catch (err) {
        setError('Failed to load college details')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCollegeDetails()
    }
  }, [id])

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        <p className="mt-2 text-sm text-primary-300">Loading college details...</p>
      </div>
    )
  }

  if (error || !college) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Failed to load college details</p>
      </div>
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold">{college.name}</h2>
          <p className="text-primary-300">{college.city}, {college.state}</p>
          <p className="text-sm text-primary-400">Established: {college.established}</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 text-sm bg-primary-800 rounded">NIRF #{college.nirfRank}</span>
          <p className="text-xs text-primary-400 mt-1">{college.type}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg bg-primary-900/30 p-4">
          <h3 className="font-medium mb-3">Contact Information</h3>
          <p className="text-sm text-primary-200">Phone: {college.contact.phone}</p>
          <p className="text-sm text-primary-200">Email: {college.contact.email}</p>
          <p className="text-sm text-primary-200">Website: <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">{college.website}</a></p>
        </div>

        <div className="rounded-lg bg-primary-900/30 p-4">
          <h3 className="font-medium mb-3">Fees Structure</h3>
          <p className="text-sm text-primary-200">Range: ₹{college.fees.min.toLocaleString('en-IN')} - ₹{college.fees.max.toLocaleString('en-IN')}/year</p>
          <p className="text-xs text-primary-400">Fees may vary by course and category</p>
        </div>
      </div>

      <div className="rounded-lg bg-primary-900/30 p-4">
        <h3 className="font-medium mb-3">Placement Statistics</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-primary-300">Average Package</p>
            <p className="text-lg font-semibold text-green-400">₹{(college.placement.averagePackage / 100000).toFixed(1)}L</p>
          </div>
          <div>
            <p className="text-sm text-primary-300">Highest Package</p>
            <p className="text-lg font-semibold text-green-400">₹{(college.placement.highestPackage / 100000).toFixed(1)}L</p>
          </div>
          <div>
            <p className="text-sm text-primary-300">Top Recruiters</p>
            <p className="text-sm text-primary-200">{college.placement.topRecruiters.join(', ')}</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-primary-900/30 p-4">
        <h3 className="font-medium mb-3">Courses Available</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {college.courses.map((course, index) => (
            <div key={index} className="p-2 bg-primary-800/50 rounded text-sm">
              {course}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-primary-900/30 p-4">
        <h3 className="font-medium mb-3">Admission Information</h3>
        <div className="space-y-2">
          <p className="text-sm text-primary-200">Entrance Exams: {college.admission.entranceExams.join(', ')}</p>
          <div className="grid md:grid-cols-4 gap-4 mt-3">
            <div>
              <p className="text-xs text-primary-300">General</p>
              <p className="text-sm font-semibold">{college.admission.cutoff.general}%</p>
            </div>
            <div>
              <p className="text-xs text-primary-300">OBC</p>
              <p className="text-sm font-semibold">{college.admission.cutoff.obc}%</p>
            </div>
            <div>
              <p className="text-xs text-primary-300">SC</p>
              <p className="text-sm font-semibold">{college.admission.cutoff.sc}%</p>
            </div>
            <div>
              <p className="text-xs text-primary-300">ST</p>
              <p className="text-sm font-semibold">{college.admission.cutoff.st}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-primary-900/30 p-4">
        <h3 className="font-medium mb-3">Facilities</h3>
        <div className="flex flex-wrap gap-2">
          {college.facilities.map((facility, index) => (
            <span key={index} className="px-3 py-1 bg-primary-800 rounded text-sm">
              {facility}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
