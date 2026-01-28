import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface RoadmapStep {
  id: string
  title: string
  description: string
  duration: string
  tasks: string[]
}

interface RoadmapPath {
  id: string
  name: string
  description: string
  steps: RoadmapStep[]
}

const AFTER_10TH_ROADMAPS: RoadmapPath[] = [
  {
    id: '10-science',
    name: 'After 10th - Science Stream (2 Years)',
    description: 'Focused 2-year plan for students choosing the Science stream after Class 10th.',
    steps: [
      {
        id: '10-sci-year1',
        title: 'Year 1: Class 11 Foundation',
        description: 'Build strong fundamentals in core science subjects and start light exploration of careers.',
        duration: '12 months',
        tasks: [
          'Choose PCB / PCM combination with school/board',
          'Create a weekly timetable for Physics, Chemistry, Math/Biology',
          'Focus on NCERT and reference books for strong basics',
          'Join school/online science clubs and Olympiad practice',
          'Explore careers: engineering, medicine, research, pure sciences',
          'Start building study habits: daily revision + weekly test'
        ]
      },
      {
        id: '10-sci-year2',
        title: 'Year 2: Class 12 & Entrance Prep',
        description: 'Prepare for board exams plus JEE/NEET/other science entrances.',
        duration: '12 months',
        tasks: [
          'Finalize target exams (JEE/NEET/State CET/others)',
          'Solve previous year question papers for boards + target exams',
          'Give monthly mock tests and maintain an error log',
          'Revise formulas, diagrams and important derivations weekly',
          'Shortlist coaching / online courses if needed',
          'Build a simple project or science fair model to add to profile'
        ]
      }
    ]
  },
  {
    id: '10-commerce',
    name: 'After 10th - Commerce Stream (2 Years)',
    description: '2-year roadmap for students choosing Commerce after Class 10th.',
    steps: [
      {
        id: '10-com-year1',
        title: 'Year 1: Class 11 Commerce Foundation',
        description: 'Understand core commerce subjects and basics of finance and business.',
        duration: '12 months',
        tasks: [
          'Choose Commerce with/without Maths based on interest',
          'Build basics in Accountancy, Business Studies, and Economics',
          'Track expenses and create a small personal budget to understand money',
          'Follow business news (newspapers, YouTube explainers)',
          'Explore careers: CA, CS, CMA, BBA, Economics, Management',
          'Learn Excel/Google Sheets fundamentals'
        ]
      },
      {
        id: '10-com-year2',
        title: 'Year 2: Boards + Entrance Ready',
        description: 'Focus on Class 12 boards and entrance prep for commerce pathways.',
        duration: '12 months',
        tasks: [
          'Decide target exams: CA Foundation, CSEET, BBA/B.Com entrances',
          'Create formula sheets for Accounts, Eco, Business Studies',
          'Give section-wise mock tests every 2 weeks',
          'Participate in commerce/finance competitions in school/online',
          'Build a small project: business plan, stock market simulation, or case study',
          'Shortlist colleges and note application timelines'
        ]
      }
    ]
  },
  {
    id: '10-humanities',
    name: 'After 10th - Humanities Stream (2 Years)',
    description: '2-year roadmap for students choosing Humanities/Arts after Class 10th.',
    steps: [
      {
        id: '10-hum-year1',
        title: 'Year 1: Class 11 Exploration',
        description: 'Strengthen reading/writing skills and explore wide Humanities opportunities.',
        duration: '12 months',
        tasks: [
          'Choose subjects like History, Political Science, Geography, Psychology, Sociology, etc.',
          'Read one non-textbook book per month (biographies, history, current affairs)',
          'Start writing: blogs, essays, or journaling to improve expression',
          'Join debate, MUN, theatre, or writing clubs',
          'Explore careers: law, civil services, media, design, social work',
          'Build a simple portfolio of writings, presentations, or creative work'
        ]
      },
      {
        id: '10-hum-year2',
        title: 'Year 2: Boards + Career Direction',
        description: 'Prepare for Class 12 boards and entrance exams like law, media, and liberal arts.',
        duration: '12 months',
        tasks: [
          'Practice answer-writing for theory subjects with time limits',
          'Follow daily news and government schemes for GK/current affairs',
          'Decide target exams: CLAT, CUET, IPU, private university tests, etc.',
          'Take mocks for reasoning, English, and GK if aiming for law/media',
          'Shortlist 10–15 colleges/universities with Humanities programs',
          'Refine portfolio and prepare for interviews/personal statements'
        ]
      }
    ]
  }
]

const AFTER_12TH_ROADMAPS: RoadmapPath[] = [
  {
    id: 'undergraduate',
    name: 'After 12th - Undergraduate Degree (4 Years)',
    description: 'Four-year roadmap for students pursuing degrees like B.Tech, B.Sc, B.Com, BA, BBA etc.',
    steps: [
      {
        id: '12-tech-year1',
        title: 'Year 1: Foundation & Transition',
        description: 'Adjust to college, clear fundamentals, and choose areas of interest.',
        duration: 'Year 1',
        tasks: [
          'Understand core subjects: Programming, Math, Electronics/Mechanics (as per branch)',
          'Join coding clubs, hackathons, or tech communities in college',
          'Build 1–2 mini projects (calculator, basic website, simple app)',
          'Learn Git/GitHub and push your code',
          'Explore different branches: AI, Web, App, Systems, etc.'
        ]
      },
      {
        id: '12-tech-year2',
        title: 'Year 2: Core Skills & Internships',
        description: 'Strengthen core CS/Engineering skills and aim for first internship.',
        duration: 'Year 2',
        tasks: [
          'Complete a Data Structures & Algorithms course',
          'Build 2–3 intermediate projects (full‑stack app, IoT, ML mini project)',
          'Participate in hackathons and coding contests',
          'Apply for summer internships or research assistant roles',
          'Start LinkedIn profile and basic resume'
        ]
      },
      {
        id: '12-tech-year3',
        title: 'Year 3: Specialization & Exposure',
        description: 'Choose a specialization and create visible proof of skills.',
        duration: 'Year 3',
        tasks: [
          'Pick a specialization: Web, App, AI/ML, Cloud, Cybersecurity, etc.',
          'Contribute to open‑source or long‑term team projects',
          'Do at least one meaningful internship or industry project',
          'Attend tech conferences/meetups, build network',
          'Prepare for placement tests/competitive exams (GATE/CAT/others) if needed'
        ]
      },
      {
        id: '12-tech-year4',
        title: 'Year 4: Placements & Higher Studies',
        description: 'Convert your skills and projects into job offers or higher education admits.',
        duration: 'Year 4',
        tasks: [
          'Finalize target companies or higher‑study programs',
          'Refine resume, portfolio, and LinkedIn with measurable impact',
          'Practice interviews: DSA/system design/HR depending on role',
          'Complete final year project aligning with your target role',
          'Apply to jobs, off‑campus roles, or MS/MTech/other programs'
        ]
      }
    ]
  },
  {
    id: 'polytechnic',
    name: 'After 12th - Polytechnic / Diploma + Lateral Entry (4 Years)',
    description: 'Roadmap combining diploma years and lateral entry into degree/industry over four years.',
    steps: [
      {
        id: '12-sci-year1',
        title: 'Year 1: Core Science Foundation',
        description: 'Strengthen fundamentals and explore research areas.',
        duration: 'Year 1',
        tasks: [
          'Focus on fundamental courses in your chosen major (Physics/Chemistry/Math/Biology, etc.)',
          'Join departmental clubs and attend guest lectures',
          'Learn basic data analysis tools (Python/R/Excel as relevant)',
          'Read 1–2 introductory research papers or review articles',
          'Maintain good semester grades'
        ]
      },
      {
        id: '12-sci-year2',
        title: 'Year 2: Research Skills',
        description: 'Get exposure to research methodology and lab work.',
        duration: 'Year 2',
        tasks: [
          'Assist professors with small projects or lab work',
          'Learn scientific writing and presentation skills',
          'Apply for summer research fellowships (e.g. IASc, IITs, IISER)',
          'Start early preparation for exams like JAM/GATE/CSIR‑NET (as applicable)'
        ]
      },
      {
        id: '12-sci-year3',
        title: 'Year 3: Specialization & Publications',
        description: 'Deepen expertise and aim for visible research output.',
        duration: 'Year 3',
        tasks: [
          'Choose specialization electives aligned with your interest',
          'Work on a longer‑term research project with a guide',
          'Present at college/university symposiums',
          'Attempt to write/publish a short paper/poster'
        ]
      },
      {
        id: '12-sci-year4',
        title: 'Year 4: Higher Studies / Career Launch',
        description: 'Decide between MSc/Integrated MSc/PhD or industry roles.',
        duration: 'Year 4',
        tasks: [
          'Prepare and appear for JAM/GATE/CSIR‑NET/other exams',
          'Apply to MSc/Integrated/PhD programs in India or abroad',
          'If job‑oriented, build skills in analytics, data science, or lab‑based roles',
          'Complete final‑year dissertation with strong results'
        ]
      }
    ]
  },
  {
    id: 'apprenticeship',
    name: 'After 12th - Apprenticeship / Skill-First (4 Years)',
    description: 'Skill-first roadmap for students focusing on apprenticeships, on-the-job learning, and upskilling.',
    steps: [
      {
        id: '12-com-year1',
        title: 'Year 1: Commerce Basics & Tools',
        description: 'Understand fundamental commerce subjects and core tools.',
        duration: 'Year 1',
        tasks: [
          'Strengthen basics in Accounting, Economics, Business Law, Statistics',
          'Learn Excel and basic data visualisation tools',
          'Join finance/entrepreneurship clubs in college',
          'Follow business news and company case studies'
        ]
      },
      {
        id: '12-com-year2',
        title: 'Year 2: Certifications & Exposure',
        description: 'Start building an edge with certifications and internships.',
        duration: 'Year 2',
        tasks: [
          'Decide if you want CA/CS/CMA or MBA later and align subjects',
          'Attempt entry‑level certifications (e.g. NISM, basic finance/data courses)',
          'Do a part‑time internship or volunteer in accounts/ops roles',
          'Build a small portfolio: case studies, Excel models, presentations'
        ]
      },
      {
        id: '12-com-year3',
        title: 'Year 3: Specialization & Internships',
        description: 'Choose specialization and get serious work exposure.',
        duration: 'Year 3',
        tasks: [
          'Specialize in Finance, Marketing, HR, Operations, Analytics, etc.',
          'Complete 1–2 quality internships (corporate or startups)',
          'Prepare for CAT/other MBA entrances if that is your path',
          'Network via LinkedIn, alumni, and industry events'
        ]
      },
      {
        id: '12-com-year4',
        title: 'Year 4: Jobs / Higher Studies',
        description: 'Convert your profile into job offers or B‑schools.',
        duration: 'Year 4',
        tasks: [
          'Sit for campus placements and off‑campus drives',
          'Finalize MBA/Masters applications (SOPs, LORs, exam scores)',
          'Polish resume and portfolio with clear achievements',
          'Plan a 2–3 year post‑graduation growth roadmap'
        ]
      }
    ]
  },
  {
    id: 'medical',
    name: 'After 12th - Medical & Healthcare (4+ Years)',
    description: 'Roadmap for NEET aspirants and early MBBS/BDS/BSc Nursing journey (first four years).',
    steps: [
      {
        id: '12-med-year1',
        title: 'Year 1: NEET Prep & Admission',
        description: 'Finish Class 12th and focus on cracking NEET/other medical entrances.',
        duration: 'Year 1',
        tasks: [
          'Finalize target courses: MBBS, BDS, BSc Nursing, BAMS, BHMS, etc.',
          'Follow a strict timetable covering Physics, Chemistry, Biology daily',
          'Solve previous year NEET papers and chapter-wise MCQs',
          'Give full-length mock tests and analyse mistakes every week',
          'Shortlist government and private medical colleges with your expected rank range'
        ]
      },
      {
        id: '12-med-year2',
        title: 'Year 2: Pre-Clinical Foundation',
        description: 'Build a strong base in first-year medical subjects.',
        duration: 'Year 2',
        tasks: [
          'Focus on Anatomy, Physiology, and Biochemistry basics',
          'Develop disciplined reading and note-making habits',
          'Join study groups and discuss clinical relevance of topics',
          'Observe seniors and mentors to understand medical college culture',
          'Maintain a healthy routine to manage stress and workload'
        ]
      },
      {
        id: '12-med-year3',
        title: 'Year 3: Clinical Exposure & Skills',
        description: 'Move from theory to wards and patient interaction.',
        duration: 'Year 3',
        tasks: [
          'Spend meaningful time in OPDs and wards observing cases',
          'Practice case-taking and basic clinical examinations',
          'Participate in CMEs, conferences, and medical quizzes',
          'Start early awareness of PG exam patterns (NEET-PG/INI-CET, etc.)'
        ]
      },
      {
        id: '12-med-year4',
        title: 'Year 4: Internship & PG Planning',
        description: 'Convert your MBBS/BDS/BSc Nursing learning into real-world care and future plans.',
        duration: 'Year 4',
        tasks: [
          'Take internship postings seriously and learn procedures under supervision',
          'Decide between PG preparation, government service, or private practice',
          'Create a realistic 2–3 year plan for PG entrance preparation if needed',
          'Build a professional CV with rotations, conferences, and any research work'
        ]
      }
    ]
  }
]

export default function RoadmapGenerator() {
  const [level, setLevel] = useState<'10th' | '12th' | ''>('')
  const [selectedPathId, setSelectedPathId] = useState<string>('')

  const paths = level === '10th'
    ? AFTER_10TH_ROADMAPS
    : level === '12th'
    ? AFTER_12TH_ROADMAPS
    : []

  const activePath = paths.find(p => p.id === selectedPathId) || null

  const location = useLocation()

  // Initialize from URL query parameters, e.g. /roadmap?stage=12th&path=polytechnic
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const stage = params.get('stage') as '10th' | '12th' | null
    const path = params.get('path') || ''

    if (stage === '10th' || stage === '12th') {
      setLevel(stage)
      if (path) {
        setSelectedPathId(path)
      }
    }
  }, [location.search])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Roadmap Builder</h2>
      <p className="text-primary-200">
        Choose whether you are planning <span className="font-semibold">after Class 10th</span> or <span className="font-semibold">after Class 12th</span>, then pick a stream to see a clear, step‑by‑step roadmap.
      </p>

      {/* Step 1: Choose level */}
      {level === '' && (
        <section className="rounded-lg bg-primary-900/40 p-6 space-y-4">
          <h3 className="text-lg font-medium mb-2">Select your current stage</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => {
                setLevel('10th')
                setSelectedPathId('')
              }}
              className="p-4 rounded-lg border-2 border-primary-700 bg-primary-900/40 hover:border-primary-500 text-left transition-colors"
            >
              <h4 className="font-semibold">After Class 10th</h4>
              <p className="text-sm text-primary-300 mt-1">
                2-year roadmap for Science, Commerce, or Humanities streams.
              </p>
            </button>
            <button
              onClick={() => {
                setLevel('12th')
                setSelectedPathId('')
              }}
              className="p-4 rounded-lg border-2 border-primary-700 bg-primary-900/40 hover:border-primary-500 text-left transition-colors"
            >
              <h4 className="font-semibold">After Class 12th</h4>
              <p className="text-sm text-primary-300 mt-1">
                4-year roadmap for college, placements, and higher studies.
              </p>
            </button>
          </div>
        </section>
      )}

      {/* Step 2: Choose stream/path */}
      {level !== '' && !activePath && (
        <section className="rounded-lg bg-primary-900/40 p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">
              {level === '10th'
                ? 'Choose your stream for the next 2 years'
                : 'Choose your path for the next 4 years'}
            </h3>
            <button
              onClick={() => {
                setLevel('')
                setSelectedPathId('')
              }}
              className="text-xs px-3 py-1 rounded bg-primary-800 hover:bg-primary-700"
            >
              Change stage
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {paths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPathId(path.id)}
                className="p-4 rounded-lg border-2 border-primary-700 bg-primary-900/40 hover:border-primary-500 text-left transition-colors"
              >
                <h4 className="font-semibold">{path.name}</h4>
                <p className="text-sm text-primary-300 mt-1">{path.description}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 3: Show roadmap */}
      {activePath && (
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{activePath.name}</h3>
              <p className="text-sm text-primary-300">{activePath.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedPathId('')}
                className="px-4 py-2 rounded bg-primary-800 hover:bg-primary-700 text-white text-sm"
              >
                Choose another path
              </button>
              <button
                onClick={() => {
                  setLevel('')
                  setSelectedPathId('')
                }}
                className="px-4 py-2 rounded bg-primary-900 border border-primary-700 hover:bg-primary-800 text-white text-sm"
              >
                Start over
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {activePath.steps.map((step, index) => (
              <div key={step.id} className="rounded-lg bg-primary-900/40 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{step.title}</h4>
                      <p className="text-sm text-primary-300">{step.description}</p>
                      <p className="text-xs text-primary-400">Duration: {step.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Tasks:</h5>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center">
                        <input type="checkbox" className="mr-3 rounded" />
                        <span className="text-sm text-primary-200">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

