import { useState, useEffect } from 'react'

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

export default function RoadmapGenerator() {
  const [selectedPath, setSelectedPath] = useState<string>('')
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [roadmapData, setRoadmapData] = useState<RoadmapPath[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  // Load AI-generated roadmap if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem('aorta_generated_roadmap')
      if (stored) {
        const parsed = JSON.parse(stored) as RoadmapPath
        if (parsed && parsed.steps) {
          setRoadmapData([parsed])
        }
      }
    } catch (_) {
      // ignore
    }
  }, [])

  const generateRoadmap = async (pathType: string) => {
    setIsGenerating(true)
    
    // Simulate API call to generate personalized roadmap
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

Generated by AORTA - AI Career & Education Advisor
    `
    
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${roadmap.name.replace(/\s+/g, '_')}_Roadmap.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">AI-Powered Roadmap Generator</h2>
      <p className="text-primary-200">Get a personalized 3-year career roadmap based on your goals and interests.</p>

      {roadmapData.length === 0 && (
        <div className="rounded-lg bg-primary-900/30 p-6">
          <h3 className="text-lg font-medium mb-4">Choose your career path</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => generateRoadmap('tech')}
              disabled={isGenerating}
              className="p-4 rounded-lg border-2 border-primary-700 bg-primary-900/30 hover:border-primary-600 disabled:opacity-50"
            >
              <h4 className="font-medium">Technology & Engineering</h4>
              <p className="text-sm text-primary-300 mt-1">Software development, engineering, data science</p>
            </button>
            <button
              onClick={() => generateRoadmap('science')}
              disabled={isGenerating}
              className="p-4 rounded-lg border-2 border-primary-700 bg-primary-900/30 hover:border-primary-600 disabled:opacity-50"
            >
              <h4 className="font-medium">Science & Research</h4>
              <p className="text-sm text-primary-300 mt-1">Academic research, scientific careers</p>
            </button>
            <button
              onClick={() => generateRoadmap('commerce')}
              disabled={isGenerating}
              className="p-4 rounded-lg border-2 border-primary-700 bg-primary-900/30 hover:border-primary-600 disabled:opacity-50"
            >
              <h4 className="font-medium">Commerce & Business</h4>
              <p className="text-sm text-primary-300 mt-1">Business, finance, entrepreneurship</p>
            </button>
          </div>
          {isGenerating && (
            <div className="mt-4 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              <p className="mt-2 text-sm text-primary-300">Generating your personalized roadmap...</p>
            </div>
          )}
        </div>
      )}

      {roadmapData.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{roadmapData[0].name}</h3>
            <div className="flex gap-2">
              <a
                href="/pdfs/roadmap-sample.pdf"
                download="my-career-roadmap.pdf"
                className="px-4 py-2 rounded bg-primary-600 hover:bg-primary-500 text-white text-sm inline-block text-center"
              >
                Export PDF
              </a>
              <button
                onClick={() => {
                  setRoadmapData([])
                  localStorage.removeItem('aorta_generated_roadmap')
                }}
                className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm"
              >
                Generate New
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {roadmapData[0].steps.map((step, stepIndex) => (
              <div key={step.id} className="rounded-lg bg-primary-900/40 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-sm font-bold mr-4">
                      {stepIndex + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{step.title}</h4>
                      <p className="text-sm text-primary-300">{step.description}</p>
                      <p className="text-xs text-primary-400">Duration: {step.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary-300">Progress</div>
                    <div className="w-24 h-2 bg-primary-800 rounded mt-1">
                      <div className="h-2 bg-primary-500 rounded" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Tasks:</h5>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 rounded"
                          onChange={() => toggleTaskCompletion(stepIndex, taskIndex)}
                        />
                        <span className="text-sm text-primary-200">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


