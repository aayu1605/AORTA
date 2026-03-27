import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, Download, RotateCcw, CheckCircle, Clock } from 'lucide-react'

interface RoadmapStep {
  id: string
  title: string
  description: string
  duration: string
  tasks: string[]
  completed: boolean
}

interface RoadmapPath {
  id: string
  name: string
  description: string
  steps: RoadmapStep[]
}

export default function Roadmap() {
  const [selectedPath, setSelectedPath] = useState<string>('')
  const [roadmapData, setRoadmapData] = useState<RoadmapPath[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateRoadmap = async (pathType: string) => {
    setIsGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const generatedRoadmaps: Record<string, RoadmapPath> = {
      'tech': {
        id: 'tech',
        name: 'Technology & Engineering Path',
        description: 'Comprehensive 3-year roadmap for technology careers',
        steps: [
          {
            id: 'foundation',
            title: 'Foundation Phase (Months 1-6)',
            description: 'Build strong fundamentals in mathematics and programming',
            duration: '6 months',
            tasks: [
              'Master algebra, calculus, and statistics',
              'Learn Python programming basics',
              'Complete 3 coding projects',
              'Prepare for JEE Main/State CET',
              'Join coding communities and forums'
            ],
            completed: false
          },
          {
            id: 'core',
            title: 'Core Learning Phase (Months 7-18)',
            description: 'Pursue engineering degree with specialization',
            duration: '12 months',
            tasks: [
              'Enroll in B.Tech program',
              'Choose specialization (CSE/IT/ECE)',
              'Complete 2 internships',
              'Build portfolio website',
              'Contribute to open source projects'
            ],
            completed: false
          },
          {
            id: 'specialization',
            title: 'Specialization Phase (Months 19-30)',
            description: 'Deep dive into chosen technology domain',
            duration: '12 months',
            tasks: [
              'Complete advanced courses in chosen field',
              'Work on real-world projects',
              'Get industry certifications',
              'Build professional network',
              'Prepare for placements'
            ],
            completed: false
          },
          {
            id: 'career',
            title: 'Career Launch Phase (Months 31-36)',
            description: 'Start professional career in technology',
            duration: '6 months',
            tasks: [
              'Apply for jobs and internships',
              'Prepare for technical interviews',
              'Create impressive portfolio',
              'Start professional career',
              'Plan for continuous learning'
            ],
            completed: false
          }
        ]
      },
      'science': {
        id: 'science',
        name: 'Science & Research Path',
        description: 'Academic and research-focused career roadmap',
        steps: [
          {
            id: 'foundation',
            title: 'Foundation Phase (Months 1-6)',
            description: 'Strengthen science fundamentals',
            duration: '6 months',
            tasks: [
              'Master Physics, Chemistry, Mathematics',
              'Read scientific journals and papers',
              'Join science clubs and societies',
              'Prepare for entrance exams',
              'Develop research interests'
            ],
            completed: false
          },
          {
            id: 'undergraduate',
            title: 'Undergraduate Phase (Months 7-24)',
            description: 'Pursue B.Sc with research focus',
            duration: '18 months',
            tasks: [
              'Enroll in B.Sc program',
              'Choose major subject',
              'Complete research internships',
              'Attend scientific conferences',
              'Build research portfolio'
            ],
            completed: false
          },
          {
            id: 'graduate',
            title: 'Graduate Studies Phase (Months 25-36)',
            description: 'Advanced studies and research',
            duration: '12 months',
            tasks: [
              'Apply for M.Sc/Integrated programs',
              'Specialize in research area',
              'Publish research papers',
              'Network with researchers',
              'Plan for PhD if interested'
            ],
            completed: false
          }
        ]
      },
      'commerce': {
        id: 'commerce',
        name: 'Commerce & Business Path',
        description: 'Business and commerce career development',
        steps: [
          {
            id: 'foundation',
            title: 'Foundation Phase (Months 1-6)',
            description: 'Build business and commerce fundamentals',
            duration: '6 months',
            tasks: [
              'Master accounting principles',
              'Learn business mathematics',
              'Improve communication skills',
              'Prepare for entrance exams',
              'Understand market dynamics'
            ],
            completed: false
          },
          {
            id: 'undergraduate',
            title: 'Undergraduate Phase (Months 7-24)',
            description: 'Pursue commerce or business degree',
            duration: '18 months',
            tasks: [
              'Enroll in B.Com/BBA program',
              'Complete business internships',
              'Learn digital marketing',
              'Build business network',
              'Develop entrepreneurial skills'
            ],
            completed: false
          },
          {
            id: 'specialization',
            title: 'Specialization Phase (Months 25-36)',
            description: 'Choose business specialization',
            duration: '12 months',
            tasks: [
              'Choose specialization (Finance/Marketing)',
              'Get professional certifications',
              'Start side business project',
              'Prepare for MBA',
              'Build industry connections'
            ],
            completed: false
          }
        ]
      }
    }
    
    setRoadmapData([generatedRoadmaps[pathType]])
    setIsGenerating(false)
  }

  const toggleTaskCompletion = (stepIndex: number, taskIndex: number) => {
    setRoadmapData(prev => prev.map(path => ({
      ...path,
      steps: path.steps.map((step, sIndex) => 
        sIndex === stepIndex 
          ? {
              ...step,
              tasks: step.tasks.map((task, tIndex) => 
                tIndex === taskIndex ? task : task
              )
            }
          : step
      )
    })))
  }

  const exportRoadmap = () => {
    const roadmap = roadmapData[0]
    const content = `
# ${roadmap.name}

${roadmap.description}

${roadmap.steps.map(step => `
## ${step.title}
**Duration:** ${step.duration}
**Description:** ${step.description}

### Tasks:
${step.tasks.map(task => `- [ ] ${task}`).join('\n')}
`).join('\n')}

Generated by AORTA Mobile - AI Career & Education Advisor
    `
    
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${roadmap.name.replace(/\s+/g, '_')}_Roadmap.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const resetRoadmap = () => {
    setRoadmapData([])
    setSelectedPath('')
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
          <Map className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">AI Roadmap Generator</h1>
        <p className="text-primary-200">Get a personalized 3-year career roadmap based on your goals</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {roadmapData.length === 0 ? (
          <motion.div
            key="path-selection"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="card"
          >
            <h2 className="text-lg font-semibold mb-4 text-center">Choose Your Career Path</h2>
            <div className="space-y-3">
              {[
                {
                  id: 'tech',
                  title: 'Technology & Engineering',
                  description: 'Software development, engineering, data science',
                  icon: '💻'
                },
                {
                  id: 'science',
                  title: 'Science & Research',
                  description: 'Academic research, scientific careers',
                  icon: '🔬'
                },
                {
                  id: 'commerce',
                  title: 'Commerce & Business',
                  description: 'Business, finance, entrepreneurship',
                  icon: '💼'
                }
              ].map((path) => (
                <motion.button
                  key={path.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => generateRoadmap(path.id)}
                  disabled={isGenerating}
                  className="w-full p-4 rounded-2xl border-2 border-primary-700 bg-primary-900/30 hover:border-primary-600 disabled:opacity-50 text-left transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{path.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{path.title}</h3>
                      <p className="text-sm text-primary-300">{path.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
            
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <div className="loading-spinner mx-auto mb-3"></div>
                <p className="text-sm text-primary-300">Generating your personalized roadmap...</p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="roadmap-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Roadmap Header */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">{roadmapData[0].name}</h2>
                  <p className="text-sm text-primary-300">{roadmapData[0].description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={exportRoadmap}
                    className="p-2 bg-primary-600 hover:bg-primary-500 rounded-xl transition-colors touch-feedback"
                  >
                    <Download className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={resetRoadmap}
                    className="p-2 bg-primary-800 hover:bg-primary-700 rounded-xl transition-colors touch-feedback"
                  >
                    <RotateCcw className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Roadmap Steps */}
            <div className="space-y-4">
              {roadmapData[0].steps.map((step, stepIndex) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stepIndex * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                      {stepIndex + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-primary-400">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-sm text-primary-300 mb-4">{step.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">Tasks:</h4>
                        <ul className="space-y-2">
                          {step.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start space-x-3">
                              <button
                                onClick={() => toggleTaskCompletion(stepIndex, taskIndex)}
                                className="w-5 h-5 rounded border-2 border-primary-400 flex items-center justify-center mt-0.5 flex-shrink-0 touch-feedback"
                              >
                                <CheckCircle className="w-3 h-3 text-primary-400" />
                              </button>
                              <span className="text-sm text-primary-200">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}












