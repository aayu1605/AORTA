import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@aorta-mobile.com',
      response: 'Within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly',
      contact: '+91 98765 43210',
      response: 'Mon-Fri, 9AM-6PM'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our AI assistant',
      contact: 'Available 24/7',
      response: 'Instant response'
    }
  ]

  const faqs = [
    {
      question: 'How do I get started with AORTA Mobile?',
      answer: 'Simply download the app, create an account, and take our career assessment quiz to get personalized recommendations.'
    },
    {
      question: 'Is the app free to use?',
      answer: 'Yes, AORTA Mobile is completely free to use. We believe career guidance should be accessible to everyone.'
    },
    {
      question: 'How accurate are the career recommendations?',
      answer: 'Our AI algorithms have a 95% accuracy rate based on user feedback and career outcome tracking.'
    },
    {
      question: 'Can I use the app offline?',
      answer: 'Yes, AORTA Mobile works offline for most features. Some features like real-time chat require internet connection.'
    },
    {
      question: 'How do I update my profile information?',
      answer: 'Go to Settings > Profile to update your personal information, education details, and career preferences.'
    }
  ]

  return (
    <div className="px-4 py-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">Contact Us</h1>
        <p className="text-primary-200">We're here to help you succeed in your career journey</p>
      </motion.div>

      {/* Contact Methods */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Get in Touch</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-sm text-primary-300 mb-2">{method.description}</p>
                    <p className="text-primary-200 font-medium">{method.contact}</p>
                    <p className="text-xs text-primary-400 mt-1">{method.response}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Send us a Message</h2>
        <div className="card">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-primary-300">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-primary-200 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm text-primary-200 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-primary-200 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm text-primary-200 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-spinner mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-primary-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Office Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center"
      >
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Clock className="w-5 h-5 text-primary-400" />
          <h3 className="font-semibold text-white">Office Hours</h3>
        </div>
        <div className="space-y-1 text-sm text-primary-300">
          <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
          <p>Saturday: 10:00 AM - 4:00 PM IST</p>
          <p>Sunday: Closed</p>
        </div>
        <p className="text-xs text-primary-400 mt-3">
          AI Assistant available 24/7 for instant help
        </p>
      </motion.div>
    </div>
  )
}












