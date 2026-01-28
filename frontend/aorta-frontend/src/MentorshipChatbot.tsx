import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function MentorshipChatbot() {
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
    // First attempt: backend AI endpoint
    try {
      const resp = await fetch('/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          messages: messages.map(m => ({ sender: m.sender, text: m.text }))
        })
      })
      if (resp.ok) {
        const data = await resp.json()
        if (data?.reply) return data.reply as string
      }
    } catch (_) {
      // fall through to local fallback
    }
    
    // Fallback: local intent responses
    const lowerMessage = userMessage.toLowerCase()
    
    // Career guidance responses
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('profession')) {
      return `🎯 **CAREER GUIDANCE - COMPREHENSIVE ANALYSIS**

**📊 TOP CAREER CATEGORIES FOR 2025:**

**💻 TECHNOLOGY & ENGINEERING**
┌─────────────────────────────────────────┐
│ **Software Engineer**                   │
│ • Salary: ₹6-15L+ (Entry to Senior)    │
│ • Growth: 25% annually                  │
│ • Skills: Programming, Problem-solving  │
│ • Companies: TCS, Infosys, Google, MS   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ **Data Scientist**                      │
│ • Salary: ₹8-20L+ (Entry to Senior)    │
│ • Growth: 30% annually                  │
│ • Skills: Python, ML, Statistics       │
│ • Companies: Amazon, Flipkart, Zomato  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ **AI/ML Engineer**                      │
│ • Salary: ₹10-25L+ (Entry to Senior)   │
│ • Growth: 35% annually                  │
│ • Skills: AI, Deep Learning, Python    │
│ • Companies: OpenAI, NVIDIA, Tesla     │
└─────────────────────────────────────────┘

**🏥 HEALTHCARE & SCIENCES**
┌─────────────────────────────────────────┐
│ **Doctor (MBBS)**                       │
│ • Salary: ₹8-50L+ (varies by specialty)│
│ • Growth: 15% annually                  │
│ • Skills: Medical knowledge, Empathy    │
│ • Path: NEET → MBBS → Specialization   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ **Biotech Engineer**                    │
│ • Salary: ₹5-15L+ (Entry to Senior)    │
│ • Growth: 20% annually                  │
│ • Skills: Biology, Chemistry, Research │
│ • Companies: Biocon, Dr. Reddy's       │
└─────────────────────────────────────────┘

**💼 BUSINESS & FINANCE**
┌─────────────────────────────────────────┐
│ **Chartered Accountant**                │
│ • Salary: ₹6-20L+ (varies by firm)     │
│ • Growth: 18% annually                  │
│ • Skills: Accounting, Auditing, Tax    │
│ • Path: CA Foundation → Intermediate   │
└─────────────────────────────────────────┘

**🎨 CREATIVE & ARTS**
┌─────────────────────────────────────────┐
│ **Digital Marketing Specialist**        │
│ • Salary: ₹4-12L+ (Entry to Senior)    │
│ • Growth: 22% annually                  │
│ • Skills: SEO, Social Media, Analytics │
│ • Companies: Any industry needs this   │
└─────────────────────────────────────────┘

**📈 NEXT STEPS:**
1. **Take our Career Quiz** - Get personalized recommendations
2. **Explore specific fields** - Use our career explorer tool
3. **Check job market trends** - See current opportunities
4. **Plan your education** - Find the right courses and colleges

**💡 PRO TIP:** The best career is one that matches your interests, skills, and market demand. Start with our assessment to find your perfect match!`
    }
    
    // College selection responses
    if (lowerMessage.includes('college') || lowerMessage.includes('university') || lowerMessage.includes('admission')) {
      return `🏫 **COLLEGE SELECTION GUIDE - 2025**

**📚 TOP COLLEGES BY FIELD:**

**🔬 ENGINEERING & TECHNOLOGY**
┌─────────────────────────────────────────┐
│ **IITs (Indian Institutes of Technology)**│
│ • 23 IITs across India                  │
│ • Entry: JEE Advanced                   │
│ • Fees: ₹2-2.5L/year                    │
│ • ROI: 300-500%                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ **NITs (National Institutes of Tech)**  │
│ • 31 NITs across India                  │
│ • Entry: JEE Main                       │
│ • Fees: ₹1.5L/year                      │
│ • ROI: 250-400%                         │
└─────────────────────────────────────────┘

**🏥 MEDICAL & HEALTHCARE**
┌─────────────────────────────────────────┐
│ **AIIMS (All India Institute)**         │
│ • 15 AIIMS across India                 │
│ • Entry: NEET                           │
│ • Fees: ₹1,000/year (Govt)              │
│ • ROI: 1000%+                           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ **Government Medical Colleges**         │
│ • 500+ colleges nationwide              │
│ • Entry: NEET                           │
│ • Fees: ₹5,000-50,000/year              │
│ • ROI: 500-800%                         │
└─────────────────────────────────────────┘

**💼 COMMERCE & BUSINESS**
┌─────────────────────────────────────────┐
│ **Delhi University**                    │
│ • SRCC, Hindu, LSR, etc.                │
│ • Entry: CUET                           │
│ • Fees: ₹20,000-50,000/year             │
│ • ROI: 200-300%                         │
└─────────────────────────────────────────┘

**🔬 SCIENCE & RESEARCH**
┌─────────────────────────────────────────┐
│ **IISc Bangalore**                      │
│ • Premier research institute            │
│ • Entry: JEE Advanced/KVPY              │
│ • Fees: ₹2L/year                        │
│ • ROI: 400-600%                         │
└─────────────────────────────────────────┘

**📋 ADMISSION TIMELINE 2025:**
┌─────────────────────────────────────────┐
│ **December 2024**                       │
│ • JEE Main Registration Opens           │
│ • NEET Registration Opens               │
│ • CUET Registration Opens               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ **January-March 2025**                  │
│ • JEE Main Exam (2 attempts)            │
│ • NEET Exam                             │
│ • CUET Exam                             │
│ • State CET Exams                       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ **April-June 2025**                     │
│ • JEE Advanced Exam                     │
│ • Results Declaration                   │
│ • Counseling Begins                     │
└─────────────────────────────────────────┘

**🎯 SELECTION CRITERIA:**
• **Entrance Exam Score:** 70-80% weightage
• **Class 12th Marks:** 20-30% weightage  
• **Category:** General/OBC/SC/ST/EWS
• **State Domicile:** For state quotas
• **Age Limit:** Varies by exam

**💰 FINANCIAL PLANNING:**
• **Government Colleges:** ₹5K-2L/year
• **Private Colleges:** ₹2L-10L/year
• **Scholarships Available:** Merit & Need-based
• **Education Loans:** Up to ₹20L available

**📞 NEXT STEPS:**
1. **Use our College Directory** - Filter by state, budget, course
2. **Check Cutoff Trends** - See previous year cutoffs
3. **Plan Your Preparation** - Create study schedule
4. **Apply for Scholarships** - Don't miss opportunities

**💡 PRO TIP:** Apply to 10-15 colleges across different tiers to maximize your chances!`
    }
    
    // Roadmap planning responses
    if (lowerMessage.includes('roadmap') || lowerMessage.includes('plan') || lowerMessage.includes('timeline')) {
      return "Here's a step-by-step roadmap for different education levels:\n\n**For Class 10th Students:**\n**Year 1-2:**\n• Choose stream (Science/Commerce/Humanities)\n• Focus on core subjects\n• Start exploring career interests\n• Build extracurricular activities\n• Prepare for board exams\n\n**For Class 12th Students:**\n**Months 1-6:**\n• Choose target career/field\n• Research entrance exams\n• Start exam preparation\n• Build strong foundation in core subjects\n\n**Months 7-12:**\n• Intensive exam preparation\n• Take mock tests\n• Apply for exams\n• Prepare for interviews\n\n**For Graduates:**\n**Option 1 - Higher Studies:**\n• Choose specialization\n• Prepare for entrance exams (GATE, CAT, GRE)\n• Apply to universities\n• Build research portfolio\n\n**Option 2 - Job Market:**\n• Identify target roles\n• Build relevant skills\n• Create strong resume\n• Practice interviews\n• Apply to companies\n\n**Option 3 - Entrepreneurship:**\n• Identify business opportunity\n• Create business plan\n• Build MVP (Minimum Viable Product)\n• Seek funding\n• Launch and scale\n\nUse our Roadmap Builder tool to create a personalized timeline!"
    }
    
    // SWOT analysis responses
    if (lowerMessage.includes('swot') || lowerMessage.includes('strength') || lowerMessage.includes('weakness')) {
      return "Here's how to conduct a SWOT analysis for your career:\n\n**STRENGTHS (What you're good at):**\n• Strong academic performance in specific subjects\n• Leadership skills from school/college activities\n• Technical skills (programming, design, etc.)\n• Communication abilities\n• Problem-solving mindset\n• Creative thinking\n• Teamwork skills\n\n**WEAKNESSES (Areas to improve):**\n• Weak in certain subjects (math, language, etc.)\n• Lack of practical experience\n• Poor time management\n• Limited networking\n• Fear of public speaking\n• Procrastination habits\n\n**OPPORTUNITIES (External factors helping you):**\n• Growing job market in your field\n• Government scholarships and schemes\n• Online learning platforms\n• Internship opportunities\n• Mentorship programs\n• Industry connections through family/friends\n\n**THREATS (External challenges):**\n• High competition in your chosen field\n• Economic uncertainty\n• Rapid technological changes\n• Limited seats in top colleges\n• High exam cutoffs\n• Financial constraints\n\n**Action Plan:**\n1. **Leverage Strengths:** Focus on careers that use your strong points\n2. **Address Weaknesses:** Take courses, practice, seek help\n3. **Seize Opportunities:** Apply for scholarships, internships\n4. **Mitigate Threats:** Have backup plans, stay updated\n\nUse our SWOT Analysis tool to create a detailed action plan!"
    }
    
    // Study advice responses
    if (lowerMessage.includes('study') || lowerMessage.includes('exam') || lowerMessage.includes('preparation')) {
      return "Here are proven study strategies for different exams:\n\n**JEE Main/Advanced Preparation:**\n• **Physics:** Focus on concepts, practice numericals daily\n• **Chemistry:** Memorize reactions, understand mechanisms\n• **Mathematics:** Solve 50+ problems daily, focus on calculus\n• **Time Management:** 6-8 hours daily study\n• **Mock Tests:** Take weekly full-length tests\n• **Resources:** NCERT + coaching material + previous year papers\n\n**NEET Preparation:**\n• **Biology:** NCERT is sufficient, focus on diagrams\n• **Physics:** Understand concepts, practice numericals\n• **Chemistry:** Organic chemistry reactions, inorganic facts\n• **Study Schedule:** 8-10 hours daily\n• **Mock Tests:** Bi-weekly full tests\n• **Resources:** NCERT + Aakash/Allen material\n\n**General Study Tips:**\n• **Pomodoro Technique:** 25 min study + 5 min break\n• **Active Recall:** Test yourself regularly\n• **Spaced Repetition:** Review material at intervals\n• **Healthy Lifestyle:** 7-8 hours sleep, regular exercise\n• **Study Environment:** Quiet, well-lit, organized space\n• **Goal Setting:** Daily, weekly, monthly targets\n\n**Exam Day Strategy:**\n• Start with easy questions\n• Manage time per question\n• Don't spend too long on difficult questions\n• Review answers if time permits\n• Stay calm and confident\n\n**Resources:**\n• NCERT textbooks (most important)\n• Previous year question papers\n• Online platforms (Khan Academy, Unacademy)\n• Coaching institutes (if affordable)\n• Study groups with friends\n\nRemember: Consistency is key! Study regularly rather than cramming."
    }
    
    // General motivation responses
    if (lowerMessage.includes('motivation') || lowerMessage.includes('encourage') || lowerMessage.includes('help')) {
      return "You've got this! Here's some motivation and practical advice:\n\n**Success Stories:**\n• **Sundar Pichai** (Google CEO) - From a middle-class family in Chennai to leading one of the world's biggest companies\n• **Dr. APJ Abdul Kalam** - From a small town to becoming India's Missile Man and President\n• **Narayana Murthy** (Infosys founder) - Started with ₹10,000, built a multi-billion dollar company\n\n**Key Success Principles:**\n• **Consistency beats intensity** - Small daily actions compound over time\n• **Fail fast, learn faster** - Every failure teaches you something valuable\n• **Network and connect** - Your network is your net worth\n• **Stay curious** - Keep learning new skills and technologies\n• **Take calculated risks** - Growth happens outside your comfort zone\n\n**Practical Steps:**\n1. **Set SMART goals** (Specific, Measurable, Achievable, Relevant, Time-bound)\n2. **Break big goals into small daily actions**\n3. **Track your progress** weekly\n4. **Celebrate small wins** along the way\n5. **Find mentors** who can guide you\n6. **Join communities** of like-minded people\n\n**Remember:**\n• Every expert was once a beginner\n• Success is not final, failure is not fatal\n• The only impossible journey is the one you never begin\n• Your current situation is not your final destination\n\n**Daily Affirmations:**\n• \"I am capable of achieving my goals\"\n• \"Every challenge makes me stronger\"\n• \"I am worthy of success and happiness\"\n• \"I will persist until I succeed\"\n\nKeep pushing forward! I believe in you! 💪"
    }
    
    // Default responses with helpful information
    const defaultResponses = [
      "I'm here to help you with career guidance, college selection, study planning, and motivation! Here are some topics I can assist with:\n\n• **Career Guidance:** Discover career paths that match your interests\n• **College Selection:** Find the right colleges and courses\n• **Study Planning:** Create effective study schedules and strategies\n• **Exam Preparation:** Get tips for JEE, NEET, and other exams\n• **SWOT Analysis:** Analyze your strengths and weaknesses\n• **Motivation:** Get inspired and stay focused on your goals\n\nWhat specific area would you like help with?",
      "I can provide comprehensive guidance on various topics:\n\n**Academic Planning:**\n• Stream selection after 10th\n• Course selection after 12th\n• Higher education options\n• Study strategies and time management\n\n**Career Development:**\n• Career exploration and discovery\n• Skill development recommendations\n• Industry insights and trends\n• Job market analysis\n\n**College & Admissions:**\n• College selection criteria\n• Entrance exam preparation\n• Application processes\n• Scholarship opportunities\n\n**Personal Growth:**\n• Goal setting and planning\n• Motivation and mindset\n• Overcoming challenges\n• Building confidence\n\nFeel free to ask me anything about your academic or career journey!",
      "I'm your AI career mentor, and I'm here to provide you with detailed, actionable advice! Here's what I can help you with:\n\n**🎯 Career Guidance:**\n• Explore different career options\n• Match careers to your interests and skills\n• Understand job market trends\n• Plan career transitions\n\n**🎓 Educational Planning:**\n• Choose the right stream after 10th\n• Select courses after 12th\n• Plan higher education path\n• Prepare for entrance exams\n\n**🏫 College Selection:**\n• Find colleges that match your criteria\n• Compare different institutions\n• Understand admission processes\n• Explore scholarship opportunities\n\n**📚 Study & Exam Prep:**\n• Create effective study schedules\n• Learn exam strategies\n• Get subject-specific tips\n• Manage exam stress\n\n**💡 Personal Development:**\n• Build confidence and motivation\n• Set and achieve goals\n• Overcome obstacles\n• Develop leadership skills\n\nWhat would you like to know more about?",
      "Welcome! I'm your comprehensive career and education advisor. Here's how I can help you succeed:\n\n**🚀 Quick Wins I Can Provide:**\n• **Instant Career Suggestions** - Based on your interests and skills\n• **College Recommendations** - Filtered by location, budget, and courses\n• **Study Roadmaps** - Step-by-step plans for your goals\n• **Exam Strategies** - Proven techniques for JEE, NEET, and other exams\n• **Motivation Boost** - When you need encouragement and direction\n\n**📊 Data-Driven Insights:**\n• Current job market trends\n• Salary expectations by field\n• College rankings and cutoffs\n• Success rates and statistics\n• Industry growth projections\n\n**🎯 Personalized Approach:**\n• Tailored advice based on your situation\n• Practical, actionable steps\n• Real-world examples and case studies\n• Continuous support and guidance\n\n**💪 Success Framework:**\n• Goal setting and planning\n• Skill development strategies\n• Networking and mentorship\n• Overcoming challenges\n• Building confidence\n\nI'm here to be your guide, mentor, and cheerleader on your journey to success. What would you like to start with?"
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
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-primary-900/60 via-primary-800/60 to-primary-900/60 border border-primary-800/70 p-6 shadow-lg shadow-primary-900/40">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-50 via-accent-400 to-primary-200 bg-clip-text text-transparent">
          AI Mentor, here for you
        </h2>
        <p className="text-primary-200 mt-2">Encouraging, concise, and tailored guidance for your next step.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Career & Colleges</span>
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Roadmaps</span>
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Study Plans</span>
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Motivation</span>
        </div>
      </div>

      <div className="rounded-2xl bg-primary-900/40 border border-primary-800/70 p-4">
        <h3 className="font-semibold mb-3">Quick Actions</h3>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setInputText(action)}
              className="px-3 py-2 rounded-xl bg-primary-800/60 hover:bg-primary-700/60 text-sm text-primary-100 border border-primary-700/50 transition"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-primary-900/50 border border-primary-800/70 h-[480px] flex flex-col shadow-lg shadow-primary-900/40">
        <div className="p-4 border-b border-primary-800/70 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-primary-50">Chat with your AI mentor</h3>
            <p className="text-xs text-primary-300">Ask anything. Short, encouraging replies.</p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-primary-800 text-primary-200">Live</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.08),transparent_30%)]">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl border ${
                  message.sender === 'user'
                    ? 'bg-primary-600/90 border-primary-500 text-white shadow-lg shadow-primary-900/40'
                    : 'bg-primary-800/70 border-primary-700 text-primary-100'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className="text-[10px] opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-primary-800/70 text-primary-200 px-4 py-2 rounded-2xl border border-primary-700">
                <div className="flex space-x-1 items-center">
                  <span className="text-xs text-primary-300">Thinking</span>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-primary-800/70">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything…"
              className="flex-1 px-3 py-3 rounded-xl bg-primary-900 border border-primary-800 text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500/40"
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isTyping}
              className="px-4 py-3 rounded-xl bg-accent-500 hover:bg-accent-400 disabled:opacity-50 disabled:cursor-not-allowed text-primary-950 font-semibold shadow-lg shadow-primary-900/40"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-primary-900/40 p-4 border border-primary-800/70">
          <h3 className="font-medium mb-2">Career Guidance</h3>
          <p className="text-sm text-primary-300">Get personalized recommendations with clear next steps.</p>
        </div>
        <div className="rounded-2xl bg-primary-900/40 p-4 border border-primary-800/70">
          <h3 className="font-medium mb-2">College Selection</h3>
          <p className="text-sm text-primary-300">Filter by budget, state, exams, and compare quickly.</p>
        </div>
        <div className="rounded-2xl bg-primary-900/40 p-4 border border-primary-800/70">
          <h3 className="font-medium mb-2">Study Planning</h3>
          <p className="text-sm text-primary-300">Weekly plans, mocks, and revision loops to stay on track.</p>
        </div>
      </div>
    </div>
  )
}
