import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-primary-200 text-lg mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-primary-200 text-lg">
          Have questions? We're here to help! Get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary-300">aorta4747@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-primary-300">Within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-primary-300">India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <p className="text-sm text-primary-200">Send us your question or feedback</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <p className="text-sm text-primary-200">Our team reviews and prioritizes your message</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <p className="text-sm text-primary-200">We respond with personalized guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-primary-900/40 p-6">
          <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white placeholder-primary-400 focus:border-primary-600 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white placeholder-primary-400 focus:border-primary-600 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white placeholder-primary-400 focus:border-primary-600 focus:outline-none"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white placeholder-primary-400 focus:border-primary-600 focus:outline-none resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-medium"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="rounded-lg bg-primary-900/40 p-6">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-primary-200 mb-2">How quickly do you respond?</h4>
            <p className="text-sm text-primary-300">We typically respond within 24 hours during business days.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary-200 mb-2">Can I get career guidance?</h4>
            <p className="text-sm text-primary-300">Yes! Our team includes career counselors and industry experts.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary-200 mb-2">Is there a cost for consultation?</h4>
            <p className="text-sm text-primary-300">Basic questions are free. Detailed consultations may have fees.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary-200 mb-2">Can I schedule a call?</h4>
            <p className="text-sm text-primary-300">Yes, mention your preference for a call in your message.</p>
          </div>
        </div>
      </div>
    </div>
  )
}




