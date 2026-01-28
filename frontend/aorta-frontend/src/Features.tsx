export default function Features() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose AORTA?</h2>
        <p className="text-primary-200 text-lg">Three powerful features that make career planning simple and effective</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="rounded-lg bg-primary-900/40 p-6 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">AI-Driven Intelligence</h3>
          <p className="text-primary-300">Our advanced AI analyzes thousands of data points from your responses, academic performance, and career trends to provide hyper-personalized recommendations. The system learns from 50,000+ successful career transitions to predict your best path forward.</p>
        </div>

        <div className="rounded-lg bg-primary-900/40 p-6 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Comprehensive Psychometric Testing</h3>
          <p className="text-primary-300">Our scientifically-validated assessment measures your cognitive abilities, personality traits, interests, and values across 12 different dimensions. The test is designed by IIT psychologists and takes into account Indian educational and cultural contexts.</p>
        </div>

        <div className="rounded-lg bg-primary-900/40 p-6 text-center">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Expert Mentorship Network</h3>
          <p className="text-primary-300">Connect with 500+ verified mentors including IIT/IIM alumni, industry leaders, and successful professionals. Get personalized guidance through 1-on-1 sessions, group workshops, and ongoing support throughout your career journey.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-800/50 to-primary-900/50 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Trusted by 50,000+ Students</h3>
          <p className="text-primary-200 mb-6">Join thousands of students who have found their perfect career path with AORTA</p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-sm text-primary-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">10,000+</div>
              <div className="text-sm text-primary-300">Colleges Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-sm text-primary-300">Expert Mentors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


