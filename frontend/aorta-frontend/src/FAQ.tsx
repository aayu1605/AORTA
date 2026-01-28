import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How accurate is AORTA's career assessment?",
      answer: "Our AI-powered assessment has a 95% accuracy rate in predicting career compatibility. It's based on extensive research and validated against 50,000+ successful career transitions. The assessment considers your academic performance, interests, personality traits, and current market trends."
    },
    {
      question: "How does the mentorship program work?",
      answer: "Our AI matches you with verified mentors based on your career interests, location, and goals. You can book 30-minute or 1-hour sessions with industry professionals, IIT/IIM alumni, and successful entrepreneurs. Sessions can be conducted via video call, phone, or in-person."
    },
    {
      question: "Can parents use AORTA for their children?",
      answer: "Absolutely! AORTA is designed for both students and parents. Parents can create accounts to track their child's progress, access detailed reports, and even participate in mentorship sessions. We provide special parent guides and resources."
    },
    {
      question: "How often is the college data updated?",
      answer: "Our college database is updated monthly with the latest information from AISHE (All India Survey on Higher Education), NIRF rankings, and direct college sources. We ensure you always have access to current fees, admission criteria, and placement statistics."
    },
    {
      question: "What if I'm not sure about my career goals?",
      answer: "That's exactly why AORTA exists! Our assessment is designed to help confused students discover their true potential. We provide multiple career options with detailed explanations, and our mentors can guide you through the decision-making process."
    },
    {
      question: "Can I use AORTA if I'm already in college?",
      answer: "Yes! AORTA is useful for students at any stage - whether you're choosing streams after 10th, selecting courses after 12th, or planning your career after graduation. Our tools adapt to your current situation and help you make informed decisions."
    },
    {
      question: "How do I know if a college is right for me?",
      answer: "AORTA's college matching algorithm considers your academic profile, budget, location preferences, and career goals. We provide detailed compatibility scores and personalized recommendations. You can also connect with current students or alumni through our platform."
    },
    {
      question: "Is my personal data safe with AORTA?",
      answer: "Absolutely. We follow strict data protection protocols and comply with all privacy regulations. Your personal information is encrypted and never shared with third parties without your consent. You can delete your data anytime."
    },
    {
      question: "What makes AORTA different from other career guidance platforms?",
      answer: "AORTA combines AI-powered assessments with real human mentorship, verified college data, and personalized roadmaps. Unlike generic advice, we provide actionable, data-driven recommendations specifically tailored for Indian students and the Indian education system."
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-primary-200 text-lg">Everything you need to know about AORTA</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg bg-primary-900/40 border border-primary-800">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary-800/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <svg
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-primary-200">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-primary-300 mb-4">Still have questions?</p>
        <a href="mailto:aorta4747@gmail.com" className="inline-block px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors">
          Contact Support
        </a>
      </div>
    </section>
  )
}
