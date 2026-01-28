import { useState, useEffect } from 'react'

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

interface FieldData {
  name: string
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
}

// AI-driven field analysis data
const FIELD_ANALYSIS: Record<string, FieldData> = {
  'technology': {
    name: 'Technology & Engineering',
    strengths: [
      'High demand for tech skills globally',
      'Continuous learning and growth opportunities',
      'Remote work flexibility',
      'High earning potential',
      'Innovation-driven environment',
      'Transferable skills across industries'
    ],
    weaknesses: [
      'Rapid technology changes requiring constant upskilling',
      'High competition in entry-level positions',
      'Long working hours and high stress',
      'Requires strong mathematical and logical thinking',
      'Potential for job automation in some areas'
    ],
    opportunities: [
      'AI and Machine Learning boom',
      'Remote work revolution',
      'Startup ecosystem growth',
      'Government digital initiatives',
      'Emerging technologies (IoT, Blockchain, AR/VR)',
      'Freelancing and consulting opportunities'
    ],
    threats: [
      'Economic downturns affecting tech hiring',
      'Outsourcing to lower-cost countries',
      'Age discrimination in some tech companies',
      'Rapid obsolescence of skills',
      'Cybersecurity threats and data privacy concerns'
    ]
  },
  'science': {
    name: 'Science & Research',
    strengths: [
      'Intellectual satisfaction and discovery',
      'Contribution to human knowledge',
      'Stable academic career paths',
      'International collaboration opportunities',
      'Government and institutional support',
      'Diverse specializations available'
    ],
    weaknesses: [
      'Limited funding for research',
      'Long education and training periods',
      'Publish or perish pressure',
      'Limited industry opportunities in some fields',
      'Geographic limitations for specialized research'
    ],
    opportunities: [
      'Government research initiatives',
      'Private sector R&D growth',
      'International research collaborations',
      'Science communication and outreach',
      'Patent and commercialization opportunities',
      'Interdisciplinary research trends'
    ],
    threats: [
      'Funding cuts in research budgets',
      'Political interference in scientific research',
      'Competition for limited positions',
      'Technological disruption of traditional research methods',
      'Public skepticism about science'
    ]
  },
  'commerce': {
    name: 'Commerce & Business',
    strengths: [
      'Diverse career opportunities',
      'Strong analytical and problem-solving skills',
      'Good understanding of market dynamics',
      'Leadership and management potential',
      'Financial literacy and business acumen',
      'Networking opportunities'
    ],
    weaknesses: [
      'High competition in popular fields',
      'Economic sensitivity',
      'Long working hours in many roles',
      'Pressure to meet targets and deadlines',
      'Limited creativity in some traditional roles'
    ],
    opportunities: [
      'Digital transformation of businesses',
      'Entrepreneurship and startup culture',
      'International business expansion',
      'E-commerce and online business growth',
      'Financial technology innovations',
      'Consulting and advisory services'
    ],
    threats: [
      'Economic recessions affecting business',
      'Automation of routine business processes',
      'Global competition',
      'Regulatory changes',
      'Market volatility and uncertainty'
    ]
  },
  'humanities': {
    name: 'Humanities & Arts',
    strengths: [
      'Critical thinking and analytical skills',
      'Strong communication abilities',
      'Cultural awareness and empathy',
      'Creative problem-solving',
      'Research and writing skills',
      'Understanding of human behavior and society'
    ],
    weaknesses: [
      'Perceived lower earning potential',
      'Limited direct career paths',
      'Competition for academic positions',
      'Need for additional skills for marketability',
      'Less structured career progression'
    ],
    opportunities: [
      'Content creation and digital media',
      'Social impact and non-profit work',
      'Cultural and heritage preservation',
      'Education and training roles',
      'Policy and advocacy work',
      'Freelance writing and consulting'
    ],
    threats: [
      'Budget cuts in arts and humanities',
      'Digital disruption of traditional media',
      'Competition from AI-generated content',
      'Limited funding for cultural projects',
      'Changing public interest in humanities'
    ]
  }
}

export default function SWOTAnalysis() {
  const [swotItems, setSwotItems] = useState<SWOTItem[]>([])
  const [actionItems, setActionItems] = useState<ActionItem[]>([])
  const [newItem, setNewItem] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'strengths' | 'weaknesses' | 'opportunities' | 'threats'>('strengths')
  const [careerGoal, setCareerGoal] = useState('')
  const [selectedField, setSelectedField] = useState<string>('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const categories = {
    strengths: { label: 'Strengths', color: 'bg-green-600', description: 'Skills and advantages you already have' },
    weaknesses: { label: 'Weaknesses', color: 'bg-red-600', description: 'Learning gaps and areas for improvement' },
    opportunities: { label: 'Opportunities', color: 'bg-blue-600', description: 'External factors that can help you' },
    threats: { label: 'Threats', color: 'bg-orange-600', description: 'External challenges and obstacles' }
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
    
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const fieldData = FIELD_ANALYSIS[selectedField]
    if (!fieldData) return
    
    const aiItems: SWOTItem[] = []
    
    // Add AI-generated items for each category
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
      // Remove existing AI-generated items and add new ones
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
    
    // Generate actions based on SWOT analysis
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

    // Add generic action items
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
      },
      {
        id: `action-${Date.now()}-${Math.random()}`,
        text: 'Research industry trends and requirements',
        priority: 'medium',
        timeline: '1 month',
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
      case 'high': return 'bg-red-600'
      case 'medium': return 'bg-yellow-600'
      case 'low': return 'bg-green-600'
      default: return 'bg-gray-600'
    }
  }

  const getItemsByCategory = (category: string) => {
    return swotItems.filter(item => item.category === category)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">SWOT Analysis Lab</h2>
      <p className="text-primary-200">Analyze your career situation and create an actionable plan.</p>

      <div className="rounded-lg bg-primary-900/30 p-6">
        <h3 className="text-lg font-medium mb-4">Career Goal</h3>
        <input
          type="text"
          placeholder="Enter your career goal (e.g., 'Become a Software Engineer')"
          value={careerGoal}
          onChange={(e) => setCareerGoal(e.target.value)}
          className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white placeholder-primary-400 mb-4"
        />
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-primary-200 mb-2">Select Career Field for AI Analysis</label>
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white"
            >
              <option value="">Choose a field...</option>
              <option value="technology">Technology & Engineering</option>
              <option value="science">Science & Research</option>
              <option value="commerce">Commerce & Business</option>
              <option value="humanities">Humanities & Arts</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={generateAIAnalysis}
              disabled={!selectedField || isAnalyzing}
              className="w-full px-4 py-2 rounded bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </div>
              ) : (
                '🤖 Generate AI Analysis'
              )}
            </button>
          </div>
        </div>
        
        {selectedField && (
          <div className="mt-4 p-3 bg-primary-800/50 rounded">
            <p className="text-sm text-primary-200">
              <span className="font-medium">Selected Field:</span> {FIELD_ANALYSIS[selectedField]?.name}
            </p>
            <p className="text-xs text-primary-300 mt-1">
              AI will analyze strengths, weaknesses, opportunities, and threats specific to this field
            </p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className="rounded-lg bg-primary-900/40 p-4">
            <div className="flex items-center mb-4">
              <div className={`w-4 h-4 rounded ${category.color} mr-3`}></div>
              <h3 className="font-medium">{category.label}</h3>
            </div>
            <p className="text-sm text-primary-300 mb-4">{category.description}</p>
            
            <div className="space-y-2 mb-4">
              {getItemsByCategory(key as any).map(item => (
                <div key={item.id} className={`flex items-center justify-between p-2 rounded ${
                  item.aiGenerated ? 'bg-blue-900/30 border border-blue-700' : 'bg-primary-800/50'
                }`}>
                  <div className="flex items-center flex-1">
                    {item.aiGenerated && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded mr-2">AI</span>
                    )}
                    <span className="text-sm">{item.text}</span>
                  </div>
                  <button
                    onClick={() => removeSWOTItem(item.id)}
                    className="text-red-400 hover:text-red-300 text-sm ml-2"
                  >
                    ×
                  </button>
                </div>
              ))}
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
                className="flex-1 px-3 py-1 rounded bg-primary-900 border border-primary-800 text-sm text-white placeholder-primary-400"
              />
              <button
                onClick={addSWOTItem}
                className="px-3 py-1 rounded bg-primary-600 hover:bg-primary-500 text-white text-sm"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {swotItems.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Action Plan</h3>
            <button
              onClick={generateActionPlan}
              className="px-4 py-2 rounded bg-primary-600 hover:bg-primary-500 text-white text-sm"
            >
              Generate Action Plan
            </button>
          </div>

          {actionItems.length > 0 && (
            <div className="space-y-3">
              {actionItems.map(action => (
                <div key={action.id} className="flex items-center justify-between bg-primary-900/40 p-4 rounded">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={action.completed}
                      onChange={() => toggleActionCompletion(action.id)}
                      className="mr-3 rounded"
                    />
                    <span className={`text-sm ${action.completed ? 'line-through text-primary-400' : 'text-primary-200'}`}>
                      {action.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(action.priority)}`}>
                      {action.priority}
                    </span>
                    <span className="text-xs text-primary-400">{action.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="rounded-lg bg-primary-900/30 p-6">
        <h3 className="text-lg font-medium mb-4">Analysis Summary</h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
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
      </div>
    </div>
  )
}


