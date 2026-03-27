import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Plus, X, CheckCircle, Target, AlertCircle, TrendingUp, Shield } from 'lucide-react'

interface SWOTItem {
  id: string
  text: string
  category: 'strengths' | 'weaknesses' | 'opportunities' | 'threats'
  aiGenerated?: boolean
}

interface ActionItem {
  id: string
  text: string
  priority: 'high' | 'medium' | 'low'
  timeline: string
  completed: boolean
}

const FIELD_ANALYSIS = {
  'technology': {
    name: 'Technology & Engineering',
    strengths: [
      'High demand for tech skills globally',
      'Continuous learning and growth opportunities',
      'Remote work flexibility',
      'High earning potential',
      'Innovation-driven environment'
    ],
    weaknesses: [
      'Rapid technology changes requiring constant upskilling',
      'High competition in entry-level positions',
      'Long working hours and high stress',
      'Requires strong mathematical and logical thinking'
    ],
    opportunities: [
      'AI and Machine Learning boom',
      'Remote work revolution',
      'Startup ecosystem growth',
      'Government digital initiatives',
      'Emerging technologies (IoT, Blockchain, AR/VR)'
    ],
    threats: [
      'Economic downturns affecting tech hiring',
      'Outsourcing to lower-cost countries',
      'Age discrimination in some tech companies',
      'Rapid obsolescence of skills'
    ]
  },
  'science': {
    name: 'Science & Research',
    strengths: [
      'Intellectual satisfaction and discovery',
      'Contribution to human knowledge',
      'Stable academic career paths',
      'International collaboration opportunities',
      'Government and institutional support'
    ],
    weaknesses: [
      'Limited funding for research',
      'Long education and training periods',
      'Publish or perish pressure',
      'Limited industry opportunities in some fields'
    ],
    opportunities: [
      'Government research initiatives',
      'Private sector R&D growth',
      'International research collaborations',
      'Science communication and outreach',
      'Patent and commercialization opportunities'
    ],
    threats: [
      'Funding cuts in research budgets',
      'Political interference in scientific research',
      'Competition for limited positions',
      'Technological disruption of traditional research methods'
    ]
  },
  'commerce': {
    name: 'Commerce & Business',
    strengths: [
      'Diverse career opportunities',
      'Strong analytical and problem-solving skills',
      'Good understanding of market dynamics',
      'Leadership and management potential',
      'Financial literacy and business acumen'
    ],
    weaknesses: [
      'High competition in popular fields',
      'Economic sensitivity',
      'Long working hours in many roles',
      'Pressure to meet targets and deadlines'
    ],
    opportunities: [
      'Digital transformation of businesses',
      'Entrepreneurship and startup culture',
      'International business expansion',
      'E-commerce and online business growth',
      'Financial technology innovations'
    ],
    threats: [
      'Economic recessions affecting business',
      'Automation of routine business processes',
      'Global competition',
      'Regulatory changes'
    ]
  }
}

export default function SWOT() {
  const [swotItems, setSwotItems] = useState<SWOTItem[]>([])
  const [actionItems, setActionItems] = useState<ActionItem[]>([])
  const [newItem, setNewItem] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'strengths' | 'weaknesses' | 'opportunities' | 'threats'>('strengths')
  const [careerGoal, setCareerGoal] = useState('')
  const [selectedField, setSelectedField] = useState<string>('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const categories = {
    strengths: { 
      label: 'Strengths', 
      color: 'text-green-400', 
      bgColor: 'bg-green-500/10',
      icon: Target,
      description: 'Skills and advantages you already have' 
    },
    weaknesses: { 
      label: 'Weaknesses', 
      color: 'text-red-400', 
      bgColor: 'bg-red-500/10',
      icon: AlertCircle,
      description: 'Learning gaps and areas for improvement' 
    },
    opportunities: { 
      label: 'Opportunities', 
      color: 'text-blue-400', 
      bgColor: 'bg-blue-500/10',
      icon: TrendingUp,
      description: 'External factors that can help you' 
    },
    threats: { 
      label: 'Threats', 
      color: 'text-orange-400', 
      bgColor: 'bg-orange-500/10',
      icon: Shield,
      description: 'External challenges and obstacles' 
    }
  }

  const addSWOTItem = () => {
    if (newItem.trim()) {
      const item: SWOTItem = {
        id: Date.now().toString(),
        text: newItem.trim(),
        category: selectedCategory
      }
      setSwotItems(prev => [...prev, item])
      setNewItem('')
    }
  }

  const generateAIAnalysis = async () => {
    if (!selectedField) return
    
    setIsAnalyzing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const fieldData = FIELD_ANALYSIS[selectedField as keyof typeof FIELD_ANALYSIS]
    if (!fieldData) return
    
    const aiItems: SWOTItem[] = []
    
    fieldData.strengths.forEach((strength, index) => {
      aiItems.push({
        id: `ai-strength-${index}`,
        text: strength,
        category: 'strengths',
        aiGenerated: true
      })
    })
    
    fieldData.weaknesses.forEach((weakness, index) => {
      aiItems.push({
        id: `ai-weakness-${index}`,
        text: weakness,
        category: 'weaknesses',
        aiGenerated: true
      })
    })
    
    fieldData.opportunities.forEach((opportunity, index) => {
      aiItems.push({
        id: `ai-opportunity-${index}`,
        text: opportunity,
        category: 'opportunities',
        aiGenerated: true
      })
    })
    
    fieldData.threats.forEach((threat, index) => {
      aiItems.push({
        id: `ai-threat-${index}`,
        text: threat,
        category: 'threats',
        aiGenerated: true
      })
    })
    
    setSwotItems(prev => {
      const userItems = prev.filter(item => !item.aiGenerated)
      return [...userItems, ...aiItems]
    })
    
    setIsAnalyzing(false)
  }

  const removeSWOTItem = (id: string) => {
    setSwotItems(prev => prev.filter(item => item.id !== id))
  }

  const generateActionPlan = () => {
    const actions: ActionItem[] = []
    
    swotItems.forEach(item => {
      if (item.category === 'weaknesses') {
        actions.push({
          id: `action-${Date.now()}-${Math.random()}`,
          text: `Address weakness: ${item.text}`,
          priority: 'high',
          timeline: '3-6 months',
          completed: false
        })
      }
      
      if (item.category === 'opportunities') {
        actions.push({
          id: `action-${Date.now()}-${Math.random()}`,
          text: `Leverage opportunity: ${item.text}`,
          priority: 'medium',
          timeline: '1-3 months',
          completed: false
        })
      }
    })

    actions.push(
      {
        id: `action-${Date.now()}-${Math.random()}`,
        text: 'Build professional network in your field',
        priority: 'high',
        timeline: 'Ongoing',
        completed: false
      },
      {
        id: `action-${Date.now()}-${Math.random()}`,
        text: 'Update resume and LinkedIn profile',
        priority: 'medium',
        timeline: '2 weeks',
        completed: false
      }
    )

    setActionItems(actions)
  }

  const toggleActionCompletion = (id: string) => {
    setActionItems(prev => prev.map(action => 
      action.id === id ? { ...action, completed: !action.completed } : action
    ))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getItemsByCategory = (category: string) => {
    return swotItems.filter(item => item.category === category)
  }

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">SWOT Analysis</h1>
        <p className="text-primary-200">Analyze your career situation and create an actionable plan</p>
      </motion.div>

      {/* Career Goal Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="text-lg font-semibold mb-4">Career Goal</h2>
        <input
          type="text"
          placeholder="Enter your career goal (e.g., 'Become a Software Engineer')"
          value={careerGoal}
          onChange={(e) => setCareerGoal(e.target.value)}
          className="input-field mb-4"
        />
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm text-primary-200 mb-2">Select Career Field for AI Analysis</label>
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="input-field"
            >
              <option value="">Choose a field...</option>
              <option value="technology">Technology & Engineering</option>
              <option value="science">Science & Research</option>
              <option value="commerce">Commerce & Business</option>
            </select>
          </div>
          <button
            onClick={generateAIAnalysis}
            disabled={!selectedField || isAnalyzing}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <div className="flex items-center justify-center">
                <div className="loading-spinner mr-2"></div>
                Analyzing...
              </div>
            ) : (
              '🤖 Generate AI Analysis'
            )}
          </button>
        </div>
      </motion.div>

      {/* SWOT Categories */}
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(categories).map(([key, category]) => {
          const Icon = category.icon
          const items = getItemsByCategory(key)
          
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 ${category.bgColor} rounded-xl flex items-center justify-center mr-3`}>
                  <Icon className={`w-4 h-4 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-white">{category.label}</h3>
              </div>
              <p className="text-sm text-primary-300 mb-4">{category.description}</p>
              
              <div className="space-y-2 mb-4">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`p-3 rounded-xl ${
                        item.aiGenerated ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-primary-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center flex-1">
                          {item.aiGenerated && (
                            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded mr-2">AI</span>
                          )}
                          <span className="text-sm text-white">{item.text}</span>
                        </div>
                        <button
                          onClick={() => removeSWOTItem(item.id)}
                          className="text-red-400 hover:text-red-300 text-sm ml-2 touch-feedback"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={`Add ${category.label.toLowerCase()}...`}
                  value={selectedCategory === key ? newItem : ''}
                  onChange={(e) => {
                    setSelectedCategory(key as any)
                    setNewItem(e.target.value)
                  }}
                  className="flex-1 px-3 py-2 rounded-lg bg-primary-900/50 border border-primary-700 text-sm text-white placeholder-primary-400"
                />
                <button
                  onClick={addSWOTItem}
                  className="p-2 bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors touch-feedback"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Action Plan */}
      {swotItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Action Plan</h2>
            <button
              onClick={generateActionPlan}
              className="btn-primary text-sm px-4 py-2"
            >
              Generate Action Plan
            </button>
          </div>

          {actionItems.length > 0 && (
            <div className="space-y-3">
              {actionItems.map(action => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleActionCompletion(action.id)}
                        className="w-5 h-5 rounded border-2 border-primary-400 flex items-center justify-center touch-feedback"
                      >
                        {action.completed && <CheckCircle className="w-3 h-3 text-primary-400" />}
                      </button>
                      <span className={`text-sm ${action.completed ? 'line-through text-primary-400' : 'text-white'}`}>
                        {action.text}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs border ${getPriorityColor(action.priority)}`}>
                        {action.priority}
                      </span>
                      <span className="text-xs text-primary-400">{action.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Analysis Summary</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-400">{getItemsByCategory('strengths').length}</div>
            <div className="text-sm text-primary-300">Strengths</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">{getItemsByCategory('weaknesses').length}</div>
            <div className="text-sm text-primary-300">Weaknesses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">{getItemsByCategory('opportunities').length}</div>
            <div className="text-sm text-primary-300">Opportunities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">{getItemsByCategory('threats').length}</div>
            <div className="text-sm text-primary-300">Threats</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}












