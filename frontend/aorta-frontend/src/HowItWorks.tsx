import { Link } from 'react-router-dom'

export default function HowItWorks() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">How AORTA Works</h2>
        <p className="text-primary-200 text-lg">Your journey to the perfect career in 4 simple steps</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
          <h3 className="text-xl font-semibold mb-2">Take Our AI-Powered Test</h3>
          <p className="text-primary-300">Complete our comprehensive psychometric assessment that analyzes your interests, strengths, and learning style in just 10 minutes.</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
          <h3 className="text-xl font-semibold mb-2">Get Your Personalized Report</h3>
          <p className="text-primary-300">Receive detailed insights about your career compatibility, recommended paths, and personalized study roadmap tailored to your goals.</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
          <h3 className="text-xl font-semibold mb-2">Explore Colleges & Courses</h3>
          <p className="text-primary-300">Browse our verified database of 10,000+ colleges with real-time data on fees, placements, and admission requirements.</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
          <h3 className="text-xl font-semibold mb-2">Connect with Mentors</h3>
          <p className="text-primary-300">Get matched with industry professionals and alumni who can guide you through your career journey with personalized advice.</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link to="/quiz" className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors">
          Start Your Journey
        </Link>
      </div>
    </section>
  )
}
