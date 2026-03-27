import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Filter, Search, MapPin, DollarSign, Star } from 'lucide-react'

interface College {
  id: string
  name: string
  state: string
  city: string
  type: string
  established: number
  nirfRank: number
  fees: { min: number; max: number }
  courses: string[]
  website: string
  contact: { phone: string; email: string }
  placement: { averagePackage: number; highestPackage: number; topRecruiters: string[] }
  admission: { entranceExams: string[]; cutoff: { general: number; obc: number; sc: number; st: number } }
  facilities: string[]
}

// Mock data for demonstration
const MOCK_COLLEGES: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Delhi',
    state: 'Delhi',
    city: 'New Delhi',
    type: 'IIT',
    established: 1961,
    nirfRank: 2,
    fees: { min: 200000, max: 250000 },
    courses: ['B.Tech Computer Science', 'B.Tech Electrical', 'B.Tech Mechanical', 'B.Tech Civil'],
    website: 'https://www.iitd.ac.in',
    contact: { phone: '+91-11-2659-7135', email: 'info@iitd.ac.in' },
    placement: { averagePackage: 1500000, highestPackage: 5000000, topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Apple'] },
    admission: { entranceExams: ['JEE Advanced'], cutoff: { general: 95, obc: 90, sc: 85, st: 80 } },
    facilities: ['Hostel', 'Library', 'Sports Complex', 'Research Labs', 'Cafeteria']
  },
  {
    id: '2',
    name: 'National Institute of Technology Delhi',
    state: 'Delhi',
    city: 'New Delhi',
    type: 'NIT',
    established: 2010,
    nirfRank: 15,
    fees: { min: 150000, max: 200000 },
    courses: ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical'],
    website: 'https://www.nitdelhi.ac.in',
    contact: { phone: '+91-11-2778-7500', email: 'info@nitdelhi.ac.in' },
    placement: { averagePackage: 800000, highestPackage: 2000000, topRecruiters: ['TCS', 'Infosys', 'Wipro', 'HCL'] },
    admission: { entranceExams: ['JEE Main'], cutoff: { general: 90, obc: 85, sc: 80, st: 75 } },
    facilities: ['Hostel', 'Library', 'Sports', 'Labs', 'Cafeteria']
  },
  {
    id: '3',
    name: 'Delhi Technological University',
    state: 'Delhi',
    city: 'New Delhi',
    type: 'State University',
    established: 1941,
    nirfRank: 45,
    fees: { min: 100000, max: 150000 },
    courses: ['B.Tech Computer Science', 'B.Tech Information Technology', 'B.Tech Mechanical', 'B.Tech Civil'],
    website: 'https://www.dtu.ac.in',
    contact: { phone: '+91-11-2787-1000', email: 'info@dtu.ac.in' },
    placement: { averagePackage: 600000, highestPackage: 1500000, topRecruiters: ['Amazon', 'Microsoft', 'Adobe', 'Paytm'] },
    admission: { entranceExams: ['JEE Main'], cutoff: { general: 85, obc: 80, sc: 75, st: 70 } },
    facilities: ['Hostel', 'Library', 'Sports Complex', 'Labs', 'Cafeteria', 'Gym']
  },
  {
    id: '4',
    name: 'All India Institute of Medical Sciences Delhi',
    state: 'Delhi',
    city: 'New Delhi',
    type: 'AIIMS',
    established: 1956,
    nirfRank: 1,
    fees: { min: 1000, max: 5000 },
    courses: ['MBBS', 'B.Sc Nursing', 'B.Sc Medical Technology'],
    website: 'https://www.aiims.edu',
    contact: { phone: '+91-11-2658-8500', email: 'info@aiims.edu' },
    placement: { averagePackage: 2000000, highestPackage: 8000000, topRecruiters: ['Government Hospitals', 'Private Hospitals', 'Research Institutes'] },
    admission: { entranceExams: ['NEET'], cutoff: { general: 98, obc: 95, sc: 90, st: 85 } },
    facilities: ['Hospital', 'Hostel', 'Library', 'Research Labs', 'Sports Complex']
  }
]

export default function Colleges() {
  const [colleges, setColleges] = useState<College[]>(MOCK_COLLEGES)
  const [stateFilter, setStateFilter] = useState<string>('')
  const [typeFilter, setTypeFilter] = useState<string>('')
  const [courseFilter, setCourseFilter] = useState<string>('')
  const [budgetFilter, setBudgetFilter] = useState<number>(500000)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      // State filter
      if (stateFilter && college.state !== stateFilter) return false
      
      // Type filter
      if (typeFilter) {
        if (typeFilter === 'Government' && !['IIT', 'NIT', 'AIIMS', 'State University'].includes(college.type)) return false
        if (typeFilter === 'Private' && college.type !== 'Private') return false
      }
      
      // Course filter
      if (courseFilter && !college.courses.some(course => 
        course.toLowerCase().includes(courseFilter.toLowerCase())
      )) return false
      
      // Budget filter
      if (college.fees.min > budgetFilter) return false
      
      // Search query
      if (searchQuery && !college.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !college.city.toLowerCase().includes(searchQuery.toLowerCase())) return false
      
      return true
    }).sort((a, b) => a.nirfRank - b.nirfRank)
  }, [colleges, stateFilter, typeFilter, courseFilter, budgetFilter, searchQuery])

  const availableStates = useMemo(() => {
    const states = [...new Set(colleges.map(college => college.state))]
    return states.sort()
  }, [colleges])

  const availableCourses = useMemo(() => {
    const courses = new Set<string>()
    colleges.forEach(college => {
      college.courses.forEach(course => courses.add(course))
    })
    return Array.from(courses).sort()
  }, [colleges])

  const clearFilters = () => {
    setStateFilter('')
    setTypeFilter('')
    setCourseFilter('')
    setBudgetFilter(500000)
    setSearchQuery('')
  }

  const activeFiltersCount = [stateFilter, typeFilter, courseFilter, searchQuery].filter(Boolean).length + (budgetFilter < 500000 ? 1 : 0)

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">College Directory</h1>
        <p className="text-primary-200">Find the perfect college for your career goals</p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
          <input
            type="text"
            placeholder="Search colleges by name or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-primary-900/50 border border-primary-700 rounded-xl text-white placeholder-primary-400 focus:outline-none focus:border-primary-500"
          />
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-800/50 hover:bg-primary-700/50 rounded-xl transition-colors touch-feedback"
          >
            <Filter className="w-4 h-4 text-primary-400" />
            <span className="text-primary-200">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
          
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-primary-400 hover:text-primary-300 text-sm"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="card space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-primary-200 mb-2">State</label>
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="w-full input-field"
                >
                  <option value="">All States</option>
                  {availableStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-primary-200 mb-2">College Type</label>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full input-field"
                >
                  <option value="">All Types</option>
                  <option value="Government">Government</option>
                  <option value="Private">Private</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-primary-200 mb-2">Course</label>
                <select
                  value={courseFilter}
                  onChange={(e) => setCourseFilter(e.target.value)}
                  className="w-full input-field"
                >
                  <option value="">All Courses</option>
                  {availableCourses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-primary-200 mb-2">
                  Budget: ₹{budgetFilter.toLocaleString('en-IN')}/year
                </label>
                <input
                  type="range"
                  min={50000}
                  max={500000}
                  step={25000}
                  value={budgetFilter}
                  onChange={(e) => setBudgetFilter(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-primary-400 mt-1">
                  <span>₹50K</span>
                  <span>₹5L</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <p className="text-primary-300">
          Showing {filteredColleges.length} college{filteredColleges.length !== 1 ? 's' : ''}
        </p>
      </motion.div>

      {/* College Cards */}
      <div className="space-y-4">
        {filteredColleges.map((college, index) => (
          <motion.div
            key={college.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{college.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-primary-300 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{college.city}, {college.state}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-primary-400">
                  <span className="bg-primary-800 px-2 py-1 rounded">NIRF #{college.nirfRank}</span>
                  <span>{college.type}</span>
                  <span>Est. {college.established}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-primary-300">
                  <DollarSign className="w-4 h-4" />
                  <span>Fees: ₹{college.fees.min.toLocaleString('en-IN')} - ₹{college.fees.max.toLocaleString('en-IN')}/year</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{(college.placement.averagePackage / 100000).toFixed(1)}L avg</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-primary-300 mb-2">Courses:</p>
                <div className="flex flex-wrap gap-1">
                  {college.courses.slice(0, 3).map((course, i) => (
                    <span key={i} className="px-2 py-1 bg-primary-800/50 text-xs text-primary-200 rounded">
                      {course}
                    </span>
                  ))}
                  {college.courses.length > 3 && (
                    <span className="px-2 py-1 bg-primary-800/50 text-xs text-primary-400 rounded">
                      +{college.courses.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-primary-400">
                  Entrance: {college.admission.entranceExams.join(', ')}
                </div>
                <a
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 text-sm font-medium"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <GraduationCap className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No colleges found</h3>
          <p className="text-primary-300 mb-4">Try adjusting your filters to see more results</p>
          <button
            onClick={clearFilters}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </motion.div>
      )}
    </div>
  )
}












