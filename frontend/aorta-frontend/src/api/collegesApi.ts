// Real API integration for colleges data
export interface College {
  id: string
  name: string
  state: string
  city: string
  type: 'IIT' | 'NIT' | 'Central University' | 'State University' | 'Private' | 'Government'
  nirfRank: number
  fees: {
    min: number
    max: number
    currency: 'INR'
  }
  courses: string[]
  established: number
  website: string
  contact: {
    phone: string
    email: string
  }
  facilities: string[]
  placement: {
    averagePackage: number
    highestPackage: number
    topRecruiters: string[]
  }
  admission: {
    entranceExams: string[]
    cutoff: {
      general: number
      obc: number
      sc: number
      st: number
    }
  }
}

import { collegesData } from '../data/collegesData'

// Mock API calls - replace with real API endpoints
export const collegesApi = {
  async getAllColleges(): Promise<College[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Return the comprehensive list of 500 colleges
    return collegesData
  },

  async getCollegesByState(state: string): Promise<College[]> {
    const allColleges = await this.getAllColleges()
    return allColleges.filter(college => college.state === state)
  },

  async getCollegesByCourse(course: string): Promise<College[]> {
    const allColleges = await this.getAllColleges()
    return allColleges.filter(college => 
      college.courses.some(c => c.toLowerCase().includes(course.toLowerCase()))
    )
  },

  async getCollegesByBudget(maxFees: number): Promise<College[]> {
    const allColleges = await this.getAllColleges()
    return allColleges.filter(college => college.fees.max <= maxFees)
  },

  async getCollegeById(id: string): Promise<College | null> {
    const allColleges = await this.getAllColleges()
    return allColleges.find(college => college.id === id) || null
  },

  async searchColleges(query: string): Promise<College[]> {
    const allColleges = await this.getAllColleges()
    const lowerQuery = query.toLowerCase()
    return allColleges.filter(college => 
      college.name.toLowerCase().includes(lowerQuery) ||
      college.state.toLowerCase().includes(lowerQuery) ||
      college.city.toLowerCase().includes(lowerQuery) ||
      college.courses.some(course => course.toLowerCase().includes(lowerQuery))
    )
  }
}

// Real API integration functions
export const realApiIntegration = {
  // Replace with actual API endpoints
  baseUrl: 'http://localhost:8000/api/v1',
  
  async fetchColleges(filters?: {
    state?: string
    course?: string
    maxFees?: number
    nirfRank?: number
  }): Promise<College[]> {
    try {
      const params = new URLSearchParams()
      if (filters?.state) params.append('state', filters.state)
      if (filters?.course) params.append('course', filters.course)
      if (filters?.maxFees) params.append('max_fees', filters.maxFees.toString())
      if (filters?.nirfRank) params.append('nirf_rank', filters.nirfRank.toString())
      
      const response = await fetch(`${this.baseUrl}/colleges?${params}`)
      if (!response.ok) throw new Error('Failed to fetch colleges')
      
      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      // Fallback to mock data
      return collegesApi.getAllColleges()
    }
  },

  async fetchCollegeDetails(id: string): Promise<College | null> {
    try {
      const response = await fetch(`${this.baseUrl}/colleges/${id}`)
      if (!response.ok) throw new Error('Failed to fetch college details')
      
      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      // Fallback to mock data
      return collegesApi.getCollegeById(id)
    }
  },

  async submitQuizResults(results: any): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/quiz/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(results)
      })
      
      if (!response.ok) throw new Error('Failed to submit quiz results')
      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      return { success: false, error: 'Failed to submit quiz results' }
    }
  },

  async generateRoadmap(userProfile: any): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/roadmap/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userProfile)
      })
      
      if (!response.ok) throw new Error('Failed to generate roadmap')
      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      return { success: false, error: 'Failed to generate roadmap' }
    }
  }
}


