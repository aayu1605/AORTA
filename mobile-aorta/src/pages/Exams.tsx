import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Target, Award, Clock, CheckCircle } from 'lucide-react'

export default function Exams() {
  const [selectedExam, setSelectedExam] = useState<string>('')

  const exams = [
    {
      id: 'jee-main',
      name: 'JEE Main',
      description: 'Joint Entrance Examination for Engineering',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '3 hours',
      attempts: '2 per year',
      difficulty: 'High',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'jee-advanced',
      name: 'JEE Advanced',
      description: 'Advanced Engineering Entrance',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '3 hours each paper',
      attempts: '1 per year',
      difficulty: 'Very High',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      id: 'neet',
      name: 'NEET',
      description: 'National Eligibility cum Entrance Test',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      duration: '3 hours 20 minutes',
      attempts: '1 per year',
      difficulty: 'High',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 'cuet',
      name: 'CUET',
      description: 'Common University Entrance Test',
      subjects: ['Language + Domain Subjects'],
      duration: 'Varies by subject',
      attempts: '1 per year',
      difficulty: 'Medium',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    }
  ]

  const preparationTips = [
    {
      exam: 'JEE Main/Advanced',
      tips: [
        'Focus on NCERT textbooks for strong foundation',
        'Practice 50+ problems daily in each subject',
        'Take weekly mock tests to track progress',
        'Master time management - 2 minutes per question',
        'Revise formulas and concepts regularly',
        'Join study groups for peer learning'
      ]
    },
    {
      exam: 'NEET',
      tips: [
        'NCERT Biology is sufficient - focus on diagrams',
        'Practice physics numericals daily',
        'Memorize chemistry reactions and mechanisms',
        'Take bi-weekly full-length practice tests',
        'Focus on accuracy over speed',
        'Maintain 8-10 hours daily study schedule'
      ]
    },
    {
      exam: 'CUET',
      tips: [
        'Choose subjects based on target course',
        'Focus on current affairs and general knowledge',
        'Practice previous year question papers',
        'Improve reading speed and comprehension',
        'Take subject-specific mock tests',
        'Stay updated with exam pattern changes'
      ]
    }
  ]

  const studySchedule = [
    { time: '6:00 AM - 8:00 AM', activity: 'Morning Study (Difficult Topics)', icon: '🌅' },
    { time: '8:00 AM - 9:00 AM', activity: 'Breakfast & Rest', icon: '🍳' },
    { time: '9:00 AM - 12:00 PM', activity: 'Core Subject Study', icon: '📚' },
    { time: '12:00 PM - 1:00 PM', activity: 'Lunch Break', icon: '🍽️' },
    { time: '1:00 PM - 3:00 PM', activity: 'Practice Problems', icon: '✏️' },
    { time: '3:00 PM - 4:00 PM', activity: 'Short Break', icon: '☕' },
    { time: '4:00 PM - 6:00 PM', activity: 'Mock Tests/Revision', icon: '📝' },
    { time: '6:00 PM - 7:00 PM', activity: 'Physical Exercise', icon: '🏃' },
    { time: '7:00 PM - 9:00 PM', activity: 'Evening Study', icon: '🌙' },
    { time: '9:00 PM - 10:00 PM', activity: 'Dinner & Relaxation', icon: '🍽️' },
    { time: '10:00 PM - 11:00 PM', activity: 'Light Revision', icon: '📖' }
  ]

  const examTimeline = [
    { month: 'Dec 2024', exam: 'JEE Main Registration Opens', status: 'Upcoming' },
    { month: 'Jan 2025', exam: 'NEET Registration Opens', status: 'Upcoming' },
    { month: 'Feb 2025', exam: 'JEE Main Exam (Session 1)', status: 'Upcoming' },
    { month: 'Mar 2025', exam: 'JEE Main Exam (Session 2)', status: 'Upcoming' },
    { month: 'Apr 2025', exam: 'JEE Advanced Registration', status: 'Upcoming' },
    { month: 'May 2025', exam: 'NEET Exam', status: 'Upcoming' },
    { month: 'Jun 2025', exam: 'JEE Advanced Exam', status: 'Upcoming' },
    { month: 'Jul 2025', exam: 'CUET Exam', status: 'Upcoming' }
  ]

  return (
    <div className="px-4 py-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">Entrance Exams Guide</h1>
        <p className="text-primary-200">Master the most important entrance exams for your career</p>
      </motion.div>

      {/* Exam Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Choose Your Target Exam</h2>
        <div className="grid grid-cols-1 gap-3">
          {exams.map((exam) => {
            const isSelected = selectedExam === exam.id
            return (
              <motion.button
                key={exam.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedExam(exam.id)}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-primary-500 bg-primary-800/50'
                    : 'border-primary-700 bg-primary-900/30 hover:border-primary-600'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{exam.name}</h3>
                    <p className="text-sm text-primary-300 mb-2">{exam.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-primary-400">
                      <span>Duration: {exam.duration}</span>
                      <span>•</span>
                      <span>Attempts: {exam.attempts}</span>
                      <span>•</span>
                      <span className={exam.color}>Difficulty: {exam.difficulty}</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-primary-300">Subjects: {exam.subjects.join(', ')}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center ml-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Preparation Tips */}
      {selectedExam && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">Preparation Tips</h2>
          <div className="card">
            <h3 className="font-semibold text-white mb-4">
              {exams.find(e => e.id === selectedExam)?.name} Preparation Strategy
            </h3>
            <div className="space-y-3">
              {preparationTips
                .find(tips => tips.exam.includes(exams.find(e => e.id === selectedExam)?.name.split(' ')[0] || ''))
                ?.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary-200">{tip}</span>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Study Schedule */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Daily Study Schedule</h2>
        <div className="card">
          <div className="space-y-3">
            {studySchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-3 rounded-xl bg-primary-800/30"
              >
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{item.time}</div>
                  <div className="text-xs text-primary-300">{item.activity}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Exam Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">2025 Exam Timeline</h2>
        <div className="space-y-3">
          {examTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.month}</h3>
                    <p className="text-sm text-primary-300">{item.exam}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-center">Start Your Preparation</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="btn-primary text-center py-4">
            Create Study Plan
          </button>
          <button className="btn-secondary text-center py-4">
            Take Mock Test
          </button>
        </div>
      </motion.section>
    </div>
  )
}












