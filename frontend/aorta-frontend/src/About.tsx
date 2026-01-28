export default function About() {
  return (
    <div className="space-y-12">
      {/* Mission Section */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">About AORTA</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-primary-200 leading-relaxed">
            AORTA is an AI-driven, student-first career and education advisor launched by Team AORTA to simplify post-10th and post-12th decisions across India. Combining psychometric guidance, gamified quizzes, a verified government-college directory, and a mentorship network, AORTA aims to make government colleges visible choices and to personalize study roadmaps for each learner.
          </p>
          <p className="text-primary-200 leading-relaxed">
            Our platform features and data are updated for 2025 to align with national education frameworks and higher-education surveys. We believe that every student deserves access to personalized career guidance, regardless of their background or location.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg bg-primary-900/40 p-6">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-primary-200">
            To democratize career guidance in India by providing AI-powered, personalized career recommendations that help students make informed decisions about their future, with a special focus on making government colleges more accessible and visible.
          </p>
        </div>
        <div className="rounded-lg bg-primary-900/40 p-6">
          <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
          <p className="text-primary-200">
            To become India's most trusted career guidance platform, helping millions of students discover their true potential and build successful careers that align with their interests, skills, and aspirations.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg bg-primary-900/40 p-4 text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
              AS
            </div>
            <h3 className="font-semibold">Aayush Sachin Agrawal</h3>
            <p className="text-sm text-primary-400">Product & Strategy Lead</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="font-semibold mb-3">Student-First Approach</h3>
            <p className="text-primary-200 text-sm">
              Every decision we make is guided by what's best for students. We prioritize their success and well-being above all else.
            </p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="font-semibold mb-3">Data-Driven Insights</h3>
            <p className="text-primary-200 text-sm">
              We use real data from AISHE, NIRF rankings, and industry trends to provide accurate, up-to-date information.
            </p>
          </div>
          <div className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="font-semibold mb-3">Accessibility & Inclusion</h3>
            <p className="text-primary-200 text-sm">
              We believe career guidance should be accessible to all students, regardless of their background or location.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="rounded-lg bg-gradient-to-r from-primary-800/50 to-primary-900/50 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-primary-200 mb-6">
          Have questions about AORTA or need help with your career journey? We're here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:aorta4747@gmail.com" className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors">
            Email us: aorta4747@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}






