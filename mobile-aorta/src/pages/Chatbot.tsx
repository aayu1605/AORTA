import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI career mentor. I can help you with career guidance, college selection, roadmap planning, and SWOT analysis. What would you like to discuss today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
    
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('profession')) {
      return `🎯 **CAREER GUIDANCE**

**Top Career Categories for 2025:**

**💻 TECHNOLOGY & ENGINEERING**
• Software Engineer - ₹6-15L+ (Entry to Senior)
• Data Scientist - ₹8-20L+ (Entry to Senior)  
• AI/ML Engineer - ₹10-25L+ (Entry to Senior)

**🏥 HEALTHCARE & SCIENCES**
• Doctor (MBBS) - ₹8-50L+ (varies by specialty)
• Biotech Engineer - ₹5-15L+ (Entry to Senior)

**💼 BUSINESS & FINANCE**
• Chartered Accountant - ₹6-20L+ (varies by firm)
• Digital Marketing Specialist - ₹4-12L+ (Entry to Senior)

**📈 NEXT STEPS:**
1. Take our Career Quiz for personalized recommendations
2. Explore specific fields using our tools
3. Check job market trends
4. Plan your education path

**💡 PRO TIP:** The best career matches your interests, skills, and market demand!`
    }
    
    if (lowerMessage.includes('college') || lowerMessage.includes('university') || lowerMessage.includes('admission')) {
      return `🏫 **COLLEGE SELECTION GUIDE**

**🔬 ENGINEERING & TECHNOLOGY**
• IITs (23 across India) - Entry: JEE Advanced, Fees: ₹2-2.5L/year
• NITs (31 across India) - Entry: JEE Main, Fees: ₹1.5L/year

**🏥 MEDICAL & HEALTHCARE**
• AIIMS (15 across India) - Entry: NEET, Fees: ₹1,000/year
• Government Medical Colleges - Entry: NEET, Fees: ₹5K-50K/year

**💼 COMMERCE & BUSINESS**
• Delhi University - Entry: CUET, Fees: ₹20K-50K/year

**📋 ADMISSION TIMELINE 2025:**
• December 2024: JEE Main, NEET, CUET Registration
• January-March 2025: Exams
• April-June 2025: Results & Counseling

**💰 FINANCIAL PLANNING:**
• Government Colleges: ₹5K-2L/year
• Private Colleges: ₹2L-10L/year
• Scholarships Available: Merit & Need-based

**💡 PRO TIP:** Apply to 10-15 colleges across different tiers!`
    }
    
    if (lowerMessage.includes('roadmap') || lowerMessage.includes('plan') || lowerMessage.includes('timeline')) {
      return `🗺️ **CAREER ROADMAP GUIDE**

**For Class 10th Students:**
**Year 1-2:**
• Choose stream (Science/Commerce/Humanities)
• Focus on core subjects
• Start exploring career interests
• Build extracurricular activities

**For Class 12th Students:**
**Months 1-6:**
• Choose target career/field
• Research entrance exams
• Start exam preparation
• Build strong foundation

**Months 7-12:**
• Intensive exam preparation
• Take mock tests
• Apply for exams
• Prepare for interviews

**For Graduates:**
**Option 1 - Higher Studies:**
• Choose specialization
• Prepare for entrance exams (GATE, CAT, GRE)
• Apply to universities

**Option 2 - Job Market:**
• Identify target roles
• Build relevant skills
• Create strong resume
• Practice interviews

Use our Roadmap Builder tool for personalized timelines!`
    }
    
    if (lowerMessage.includes('swot') || lowerMessage.includes('strength') || lowerMessage.includes('weakness')) {
      return `📊 **SWOT ANALYSIS GUIDE**

**STRENGTHS (What you're good at):**
• Strong academic performance
• Leadership skills
• Technical skills
• Communication abilities
• Problem-solving mindset

**WEAKNESSES (Areas to improve):**
• Weak in certain subjects
• Lack of practical experience
• Poor time management
• Limited networking

**OPPORTUNITIES (External factors helping you):**
• Growing job market
• Government scholarships
• Online learning platforms
• Internship opportunities

**THREATS (External challenges):**
• High competition
• Economic uncertainty
• Rapid technological changes
• Limited seats in top colleges

**Action Plan:**
1. Leverage Strengths
2. Address Weaknesses
3. Seize Opportunities
4. Mitigate Threats

Use our SWOT Analysis tool for detailed planning!`
    }
    
    if (lowerMessage.includes('study') || lowerMessage.includes('exam') || lowerMessage.includes('preparation')) {
      return `📚 **STUDY STRATEGIES**

**JEE Main/Advanced Preparation:**
• Physics: Focus on concepts, practice numericals daily
• Chemistry: Memorize reactions, understand mechanisms
• Mathematics: Solve 50+ problems daily, focus on calculus
• Time Management: 6-8 hours daily study
• Mock Tests: Take weekly full-length tests

**NEET Preparation:**
• Biology: NCERT is sufficient, focus on diagrams
• Physics: Understand concepts, practice numericals
• Chemistry: Organic reactions, inorganic facts
• Study Schedule: 8-10 hours daily

**General Study Tips:**
• Pomodoro Technique: 25 min study + 5 min break
• Active Recall: Test yourself regularly
• Spaced Repetition: Review at intervals
• Healthy Lifestyle: 7-8 hours sleep, exercise

**Exam Day Strategy:**
• Start with easy questions
• Manage time per question
• Stay calm and confident

Remember: Consistency beats intensity!`
    }
    
    if (lowerMessage.includes('motivation') || lowerMessage.includes('encourage') || lowerMessage.includes('help')) {
      return `💪 **MOTIVATION & SUCCESS**

**Success Stories:**
• Sundar Pichai - From Chennai to Google CEO
• Dr. APJ Abdul Kalam - From small town to President
• Narayana Murthy - Started with ₹10K, built Infosys

**Key Success Principles:**
• Consistency beats intensity
• Fail fast, learn faster
• Network and connect
• Stay curious
• Take calculated risks

**Practical Steps:**
1. Set SMART goals
2. Break big goals into daily actions
3. Track progress weekly
4. Celebrate small wins
5. Find mentors
6. Join communities

**Daily Affirmations:**
• "I am capable of achieving my goals"
• "Every challenge makes me stronger"
• "I will persist until I succeed"

Keep pushing forward! I believe in you! 💪`
    }
    
    const defaultResponses = [
      "I'm here to help you with career guidance, college selection, study planning, and motivation! Here are some topics I can assist with:\n\n• Career Guidance: Discover career paths\n• College Selection: Find the right colleges\n• Study Planning: Create effective schedules\n• Exam Preparation: Get tips for JEE, NEET\n• SWOT Analysis: Analyze strengths/weaknesses\n• Motivation: Get inspired and stay focused\n\nWhat specific area would you like help with?",
      "I can provide comprehensive guidance on various topics:\n\n**Academic Planning:**\n• Stream selection after 10th\n• Course selection after 12th\n• Higher education options\n• Study strategies\n\n**Career Development:**\n• Career exploration\n• Skill development\n• Industry insights\n• Job market analysis\n\n**College & Admissions:**\n• College selection criteria\n• Entrance exam preparation\n• Application processes\n• Scholarship opportunities\n\nFeel free to ask me anything!",
      "Welcome! I'm your comprehensive career and education advisor. Here's how I can help you succeed:\n\n**🚀 Quick Wins:**\n• Instant Career Suggestions\n• College Recommendations\n• Study Roadmaps\n• Exam Strategies\n• Motivation Boost\n\n**📊 Data-Driven Insights:**\n• Job market trends\n• Salary expectations\n• College rankings\n• Success rates\n\n**🎯 Personalized Approach:**\n• Tailored advice\n• Practical steps\n• Real-world examples\n• Continuous support\n\nWhat would you like to start with?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const sendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    try {
      const botResponse = await generateBotResponse(inputText.trim())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickActions = [
    'Help me choose a career path',
    'Find colleges for me',
    'Create a study roadmap',
    'Analyze my strengths and weaknesses',
    'Give me study tips',
    'Motivate me for my goals'
  ]

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">AI Career Mentor</h1>
        <p className="text-primary-200">Chat with our AI mentor for personalized career guidance</p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="font-semibold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setInputText(action)}
              className="p-3 rounded-xl bg-primary-800/50 hover:bg-primary-700/50 text-sm text-primary-200 transition-colors touch-feedback"
            >
              {action}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-0 overflow-hidden"
      >
        <div className="p-4 border-b border-primary-800">
          <h3 className="font-semibold text-white flex items-center">
            <Bot className="w-5 h-5 mr-2 text-primary-400" />
            Chat with AI Mentor
          </h3>
        </div>
        
        <div className="h-96 overflow-y-auto p-4 space-y-4 no-scrollbar">
          <AnimatePresence>
            {messages.map(message => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-primary-600' : 'bg-primary-800'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-800 text-primary-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-primary-800 text-primary-200 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-primary-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="flex-1 input-field"
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isTyping}
              className="p-3 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-colors touch-feedback"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}












