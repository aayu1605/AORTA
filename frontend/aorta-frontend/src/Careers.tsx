import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Career {
  id: number
  name: string
  category: string
  description: string
  salary: string
  demand: string
  education: string
  skills: string[]
  detailedDescription?: string
  careerPath?: string[]
  topCompanies?: string[]
  growthProspects?: string
  workEnvironment?: string
  relatedCareers?: string[]
}

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null)
  const [showModal, setShowModal] = useState(false)

  const careerCategories = [
    { id: 'all', name: 'All Careers' },
    { id: 'technology', name: 'Technology' },
    { id: 'medical', name: 'Medical' },
    { id: 'business', name: 'Business' },
    { id: 'arts', name: 'Arts & Design' },
    { id: 'science', name: 'Science & Research' }
  ]

  const careers: Career[] = [
    {
      id: 1,
      name: "Software Engineer",
      category: "technology",
      description: "Design, develop, and maintain software applications and systems",
      salary: "₹6-25 LPA",
      demand: "High",
      education: "B.Tech CSE, BCA, MCA",
      skills: ["Programming", "Problem Solving", "Teamwork"],
      detailedDescription: "Software Engineers are responsible for designing, developing, testing, and maintaining software applications. They work across various industries and use programming languages to create solutions that meet user needs. This role involves both technical skills and creative problem-solving abilities.",
      careerPath: ["Junior Developer (0-2 years)", "Mid-level Developer (2-5 years)", "Senior Developer (5-8 years)", "Tech Lead (8+ years)", "Engineering Manager"],
      topCompanies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "HCL", "Accenture"],
      growthProspects: "Excellent growth prospects with 25% annual growth in job opportunities. High demand across all industries.",
      workEnvironment: "Office-based with flexible work options. Collaborative team environment with regular meetings and code reviews.",
      relatedCareers: ["Data Scientist", "DevOps Engineer", "Product Manager", "Technical Architect", "Full Stack Developer"]
    },
    {
      id: 2,
      name: "Data Scientist",
      category: "technology",
      description: "Analyze complex data to help organizations make informed decisions",
      salary: "₹8-30 LPA",
      demand: "Very High",
      education: "B.Tech, M.Tech, B.Sc/M.Sc Statistics",
      skills: ["Python", "Machine Learning", "Statistics"],
      detailedDescription: "Data Scientists extract insights from large datasets using statistical analysis, machine learning, and programming skills. They help organizations make data-driven decisions and solve complex business problems through advanced analytics.",
      careerPath: ["Data Analyst (0-2 years)", "Junior Data Scientist (2-3 years)", "Senior Data Scientist (3-6 years)", "Lead Data Scientist (6+ years)", "Chief Data Officer"],
      topCompanies: ["Google", "Amazon", "Microsoft", "Flipkart", "Zomato", "Swiggy", "Ola", "Uber"],
      growthProspects: "Exceptional growth with 30% annual increase in job opportunities. Critical role in digital transformation.",
      workEnvironment: "Mix of office and remote work. Collaborative environment with cross-functional teams including business stakeholders.",
      relatedCareers: ["Data Analyst", "Machine Learning Engineer", "Business Intelligence Analyst", "Research Scientist", "AI Engineer"]
    },
    {
      id: 3,
      name: "Doctor",
      category: "medical",
      description: "Diagnose and treat patients, provide medical care and advice",
      salary: "₹5-50 LPA",
      demand: "High",
      education: "MBBS, MD/MS",
      skills: ["Medical Knowledge", "Communication", "Empathy"],
      detailedDescription: "Doctors diagnose and treat illnesses, injuries, and other health conditions. They examine patients, order tests, prescribe medications, and provide ongoing care. This is a highly respected profession that requires extensive education and training.",
      careerPath: ["MBBS Intern (1 year)", "Resident Doctor (3-5 years)", "Specialist Doctor (5+ years)", "Senior Consultant (10+ years)", "Department Head"],
      topCompanies: ["AIIMS", "Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Manipal Hospitals", "Government Hospitals"],
      growthProspects: "Stable growth with consistent demand. Specialization in high-demand areas offers excellent opportunities.",
      workEnvironment: "Hospital/clinic-based with long hours. High-stress environment requiring quick decision-making and patient care.",
      relatedCareers: ["Nurse", "Pharmacist", "Physiotherapist", "Medical Researcher", "Healthcare Administrator"]
    },
    {
      id: 4,
      name: "Business Analyst",
      category: "business",
      description: "Analyze business processes and recommend improvements",
      salary: "₹4-20 LPA",
      demand: "High",
      education: "BBA, MBA, B.Com",
      skills: ["Analytics", "Communication", "Problem Solving"],
      detailedDescription: "Business Analysts bridge the gap between business needs and technology solutions. They analyze business processes, identify problems, and recommend solutions to improve efficiency and profitability.",
      careerPath: ["Junior Business Analyst (0-2 years)", "Business Analyst (2-4 years)", "Senior Business Analyst (4-6 years)", "Lead Business Analyst (6+ years)", "Business Analysis Manager"],
      topCompanies: ["Deloitte", "PwC", "KPMG", "EY", "Accenture", "IBM", "Capgemini", "Cognizant"],
      growthProspects: "Strong growth prospects with increasing demand for data-driven decision making across industries.",
      workEnvironment: "Office-based with client visits. Collaborative environment working with various stakeholders and teams.",
      relatedCareers: ["Management Consultant", "Product Manager", "Project Manager", "Data Analyst", "Operations Manager"]
    },
    {
      id: 5,
      name: "Graphic Designer",
      category: "arts",
      description: "Create visual concepts to communicate ideas and messages",
      salary: "₹3-15 LPA",
      demand: "Medium",
      education: "B.Des, BFA, Diploma",
      skills: ["Creativity", "Design Software", "Communication"],
      detailedDescription: "Graphic Designers create visual concepts using computer software or by hand to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for various applications.",
      careerPath: ["Junior Designer (0-2 years)", "Graphic Designer (2-4 years)", "Senior Designer (4-6 years)", "Art Director (6+ years)", "Creative Director"],
      topCompanies: ["Ogilvy", "McCann", "DDB", "Publicis", "WPP", "Freelance", "Design Studios", "Tech Companies"],
      growthProspects: "Moderate growth with opportunities in digital marketing and web design. Freelancing offers flexibility.",
      workEnvironment: "Creative studio or office environment. Collaborative work with marketing teams and clients.",
      relatedCareers: ["UI/UX Designer", "Web Designer", "Illustrator", "Brand Manager", "Marketing Manager"]
    },
    {
      id: 6,
      name: "Research Scientist",
      category: "science",
      description: "Conduct research to advance scientific knowledge",
      salary: "₹6-25 LPA",
      demand: "Medium",
      education: "Ph.D, M.Sc, B.Sc",
      skills: ["Research", "Analytical Thinking", "Patience"],
      detailedDescription: "Research Scientists conduct experiments and investigations to advance scientific knowledge in various fields. They work in laboratories, universities, or research institutions to develop new theories, products, or processes.",
      careerPath: ["Research Assistant (0-2 years)", "Junior Scientist (2-4 years)", "Research Scientist (4-8 years)", "Senior Scientist (8+ years)", "Principal Scientist"],
      topCompanies: ["ISRO", "DRDO", "CSIR", "IITs", "IISc", "TIFR", "BARC", "Private R&D Labs"],
      growthProspects: "Steady growth with opportunities in government research institutions and private R&D companies.",
      workEnvironment: "Laboratory-based with flexible hours. Independent work with occasional team collaborations.",
      relatedCareers: ["Data Scientist", "Biotechnologist", "Chemist", "Physicist", "Academic Researcher"]
    }
  ]

  const filteredCareers = careers.filter(career => {
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory
    const matchesSearch = career.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'text-green-400'
      case 'High': return 'text-blue-400'
      case 'Medium': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Career Options</h2>
        <p className="text-primary-200 text-lg">Discover diverse career paths and find your perfect match</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-primary-900 border border-primary-800 text-white placeholder-primary-400 focus:outline-none focus:border-primary-600"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {careerCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-800 text-primary-200 hover:bg-primary-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map(career => (
          <div key={career.id} className="rounded-lg bg-primary-900/40 p-6 hover:bg-primary-900/60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{career.name}</h3>
              <span className={`text-sm font-medium ${getDemandColor(career.demand)}`}>
                {career.demand} Demand
              </span>
            </div>
            
            <p className="text-primary-300 text-sm mb-4">{career.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-primary-400">Salary Range:</span>
                <span className="text-green-400 font-medium">{career.salary}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-primary-400">Education:</span>
                <span className="text-primary-200">{career.education}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-primary-400 mb-2">Key Skills:</p>
              <div className="flex flex-wrap gap-1">
                {career.skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-primary-800 text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => {
                  setSelectedCareer(career)
                  setShowModal(true)
                }}
                className="flex-1 px-3 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm rounded transition-colors"
              >
                Learn More
              </button>
              <button className="px-3 py-2 bg-primary-800 hover:bg-primary-700 text-white text-sm rounded transition-colors">
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-primary-300 text-lg">No careers found matching your criteria</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
            }}
            className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      <div className="bg-gradient-to-r from-primary-800/50 to-primary-900/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Can't Find Your Dream Career?</h3>
        <p className="text-primary-200 mb-6">Take our AI-powered assessment to discover careers that match your unique profile</p>
        <Link to="/quiz" className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors">
          Take Career Assessment
        </Link>
      </div>

      {/* Career Details Modal */}
      {showModal && selectedCareer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-primary-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedCareer.name}</h2>
                  <p className="text-primary-300 text-lg">{selectedCareer.description}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-primary-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Salary Range</h3>
                    <p className="text-green-400 text-lg font-medium">{selectedCareer.salary}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Education Required</h3>
                    <p className="text-primary-200">{selectedCareer.education}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Job Demand</h3>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${getDemandColor(selectedCareer.demand)}`}>
                      {selectedCareer.demand} Demand
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-800 text-sm rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Detailed Description</h3>
                  <p className="text-primary-200 leading-relaxed">{selectedCareer.detailedDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Career Path</h3>
                  <div className="space-y-2">
                    {selectedCareer.careerPath?.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-primary-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Top Companies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.topCompanies?.map((company, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-800 text-sm rounded">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Related Careers</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.relatedCareers?.map((career, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-800 text-sm rounded">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Growth Prospects</h3>
                  <p className="text-primary-200">{selectedCareer.growthProspects}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Work Environment</h3>
                  <p className="text-primary-200">{selectedCareer.workEnvironment}</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link to="/quiz" className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors text-center">
                  Take Career Quiz
                </Link>
                <Link to="/roadmap" className="flex-1 px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors text-center">
                  Build Roadmap
                </Link>
                <Link to="/colleges" className="flex-1 px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors text-center">
                  Find Colleges
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


