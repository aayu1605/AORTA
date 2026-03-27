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
  const suggestedQuestions = [
    'What after 12th Science?',
    'Best careers for PCM students?',
    'How to prepare for JEE?',
    'What is SWOT analysis for career?'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'
    
    if (!apiUrl) {
      return 'Backend API URL not configured. Please set VITE_API_URL in .env file.'
    }

    try {
      const resp = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          messages: messages.slice(-6).map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        })
      })

      const data = await resp.json()
      if (!resp.ok) {
        throw new Error(data?.error || 'Backend API request failed')
      }
      return data?.reply || 'I could not generate a response. Please try again.'
    } catch (error) {
      console.error('Backend API error:', error)
      return 'AI service is temporarily unavailable. Please try again in a moment.'
    }
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
    } catch {
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

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hello! I am your AI Career Tutor. Ask me about streams, exams, colleges, or skills.",
        sender: 'bot',
        timestamp: new Date()
      }
    ])
    setInputText('')
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
    <div className="space-y-4 md:space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-primary-900/60 via-primary-800/60 to-primary-900/60 border border-primary-800/70 p-6 shadow-lg shadow-primary-900/40">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-50 via-accent-400 to-primary-200 bg-clip-text text-transparent">
          AI Career Tutor
        </h2>
        <p className="text-sm md:text-base text-primary-200 mt-2">Friendly, specific guidance for Indian students.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Career & Colleges</span>
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Roadmaps</span>
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Study Plans</span>
          <span className="px-3 py-1 text-xs rounded-full bg-primary-800/70 border border-primary-700 text-primary-100">Motivation</span>
        </div>
      </div>

      <div className="rounded-2xl bg-primary-900/40 border border-primary-800/70 p-4">
        <h3 className="font-semibold mb-3">Quick Actions</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestedQuestions.map((action, index) => (
            <button
              key={`suggest-${index}`}
              onClick={() => setInputText(action)}
              className="min-h-[44px] px-3 py-2 rounded-xl bg-accent-500/20 hover:bg-accent-500/30 text-sm text-primary-50 border border-accent-500/40 transition"
            >
              {action}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setInputText(action)}
              className="min-h-[44px] px-3 py-2 rounded-xl bg-primary-800/60 hover:bg-primary-700/60 text-sm text-primary-100 border border-primary-700/50 transition"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-primary-900/50 border border-primary-800/70 h-[65vh] min-h-[420px] md:h-[560px] flex flex-col shadow-lg shadow-primary-900/40">
        <div className="p-4 border-b border-primary-800/70 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-primary-50">Chat with AI Career Tutor</h3>
            <p className="text-xs text-primary-300">Ask anything. Short, encouraging replies.</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs px-2 py-1 rounded-full bg-primary-800 text-primary-200">Live</span>
            <button
              onClick={clearChat}
              className="min-h-[44px] px-3 py-2 text-xs rounded-lg bg-primary-800 hover:bg-primary-700 text-primary-100"
            >
              Clear Chat
            </button>
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
                  <span className="text-xs text-primary-300">Typing</span>
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
          <div className="flex flex-col sm:flex-row gap-2">
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
              className="min-h-[44px] px-4 py-3 rounded-xl bg-accent-500 hover:bg-accent-400 disabled:opacity-50 disabled:cursor-not-allowed text-primary-950 font-semibold shadow-lg shadow-primary-900/40"
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
