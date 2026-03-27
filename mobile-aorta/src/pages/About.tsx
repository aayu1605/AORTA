import { motion } from 'framer-motion'
import { Heart, Users, Target, Award, Mail, Phone, MapPin } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Helped' },
    { icon: Target, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '4.8/5', label: 'User Rating' },
    { icon: Heart, value: '24/7', label: 'AI Support' }
  ]

  const features = [
    {
      title: 'AI-Powered Guidance',
      description: 'Advanced AI algorithms provide personalized career recommendations based on your interests, skills, and market trends.',
      icon: '🤖'
    },
    {
      title: 'Comprehensive Database',
      description: 'Access to 5000+ colleges, courses, and career paths with real-time data and insights.',
      icon: '📊'
    },
    {
      title: 'Personalized Roadmaps',
      description: 'Get step-by-step career roadmaps tailored to your goals and timeline.',
      icon: '🗺️'
    },
    {
      title: 'Expert Mentorship',
      description: 'Connect with industry experts and AI mentors for guidance and support.',
      icon: '👥'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning & Career Psychology',
      image: '👩‍💼'
    },
    {
      name: 'Prof. Rajesh Kumar',
      role: 'Education Director',
      expertise: 'Higher Education & Career Counseling',
      image: '👨‍🏫'
    },
    {
      name: 'Emily Chen',
      role: 'Product Lead',
      expertise: 'User Experience & Mobile Design',
      image: '👩‍💻'
    },
    {
      name: 'Dr. Michael Brown',
      role: 'Data Scientist',
      expertise: 'Big Data & Predictive Analytics',
      image: '👨‍🔬'
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
        <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-3xl flex items-center justify-center">
          <span className="text-white font-bold text-3xl">A</span>
        </div>
        <h1 className="text-3xl font-bold text-white">About AORTA Mobile</h1>
        <p className="text-primary-200 text-lg">
          Your AI-powered career companion, designed specifically for mobile devices
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-primary-200 leading-relaxed">
          To democratize career guidance by providing accessible, AI-powered career counseling 
          to every student, regardless of their background or location. We believe that every 
          student deserves personalized guidance to make informed decisions about their future.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="w-12 h-12 mx-auto bg-primary-600 rounded-2xl flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-primary-300">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Why Choose AORTA Mobile?</h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-primary-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center text-2xl">
                  {member.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-primary-400 mb-1">{member.role}</p>
                  <p className="text-xs text-primary-300">{member.expertise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Get in Touch</h2>
        <div className="card">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-sm text-primary-300">Email</p>
                <p className="text-white">support@aorta-mobile.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-sm text-primary-300">Phone</p>
                <p className="text-white">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-sm text-primary-300">Address</p>
                <p className="text-white">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* App Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center"
      >
        <h2 className="text-lg font-semibold text-white mb-3">AORTA Mobile v1.0</h2>
        <p className="text-sm text-primary-300 mb-4">
          Built with React, TypeScript, and Tailwind CSS. Optimized for mobile devices with PWA support.
        </p>
        <div className="flex justify-center space-x-4 text-xs text-primary-400">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Service</span>
          <span>•</span>
          <span>Open Source</span>
        </div>
      </motion.div>
    </div>
  )
}












