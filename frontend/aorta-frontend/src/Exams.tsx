import { useState } from 'react'

interface Exam {
  name: string
  date: string
  description: string
  detailedInfo?: {
    eligibility: string
    syllabus: string[]
    examPattern: string
    applicationFee: string
    examDuration: string
    totalMarks: string
    negativeMarking: string
    officialWebsite: string
    registrationLink?: string
    detailedSummary?: string
    importantDates: { event: string; date: string }[]
    preparationTips: string[]
    topColleges: string[]
  }
}

export default function Exams() {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null)
  const [showModal, setShowModal] = useState(false)

  const examCategories = [
    {
      name: "Engineering Entrance",
      exams: [
        { 
          name: "JEE Main", 
          date: "April 2025", 
          description: "National level engineering entrance exam",
          detailedInfo: {
            eligibility: "Class 12th with Physics, Chemistry, Mathematics (PCM) with minimum 75% marks (65% for SC/ST)",
            syllabus: ["Physics", "Chemistry", "Mathematics"],
            examPattern: "Computer Based Test (CBT) - 2 papers (Paper 1: B.E./B.Tech, Paper 2: B.Arch/B.Planning)",
            applicationFee: "₹1000 (General), ₹500 (SC/ST/EWS), ₹500 (Female candidates)",
            examDuration: "3 hours",
            totalMarks: "300 marks",
            negativeMarking: "Yes, -1 for wrong answer, +4 for correct answer",
            officialWebsite: "https://jeemain.nta.nic.in",
            registrationLink: "https://jeemain.nta.nic.in/registration",
            detailedSummary: "JEE Main is the national level engineering entrance examination conducted by the National Testing Agency (NTA). It serves as the gateway for admission to undergraduate engineering programs at NITs, IIITs, GFTIs, and other engineering colleges across India. The exam is also the qualifying test for JEE Advanced, which is required for admission to IITs. JEE Main is conducted twice a year (January and April sessions) and candidates can appear for both attempts. The exam tests candidates on their knowledge of Physics, Chemistry, and Mathematics at the Class 12th level. It's one of the most competitive exams in India with over 10 lakh candidates appearing annually.",
            importantDates: [
              { event: "Application Start", date: "December 2024" },
              { event: "Application End", date: "January 2025" },
              { event: "Admit Card", date: "March 2025" },
              { event: "Exam Date", date: "April 2025" },
              { event: "Result", date: "May 2025" }
            ],
            preparationTips: [
              "Focus on NCERT textbooks for strong foundation",
              "Practice previous year question papers",
              "Take mock tests regularly",
              "Time management is crucial",
              "Revise formulas and concepts daily"
            ],
            topColleges: ["IITs", "NITs", "IIITs", "GFTIs", "State Engineering Colleges"]
          }
        },
        { 
          name: "JEE Advanced", 
          date: "May 2025", 
          description: "For admission to IITs",
          detailedInfo: {
            eligibility: "Top 2,50,000 rank holders in JEE Main",
            syllabus: ["Physics", "Chemistry", "Mathematics"],
            examPattern: "2 papers of 3 hours each, both compulsory",
            applicationFee: "₹2800 (General), ₹1400 (SC/ST/EWS), ₹1400 (Female candidates)",
            examDuration: "6 hours (3 hours each paper)",
            totalMarks: "360 marks (180 marks each paper)",
            negativeMarking: "Yes, -1 for wrong answer, +3 for correct answer",
            officialWebsite: "https://jeeadv.ac.in",
            registrationLink: "https://jeeadv.ac.in/registration",
            detailedSummary: "JEE Advanced is the second stage of the Joint Entrance Examination for admission to the Indian Institutes of Technology (IITs). Only the top 2,50,000 rank holders in JEE Main are eligible to appear for JEE Advanced. The exam consists of two compulsory papers, each of 3 hours duration, conducted on the same day. JEE Advanced tests candidates on their understanding of Physics, Chemistry, and Mathematics at an advanced level. The exam is known for its challenging problem-solving questions and is considered one of the toughest engineering entrance exams in the world. Successful candidates get admission to undergraduate programs at all IITs across India.",
            importantDates: [
              { event: "Registration Start", date: "May 2025" },
              { event: "Registration End", date: "May 2025" },
              { event: "Admit Card", date: "May 2025" },
              { event: "Exam Date", date: "May 2025" },
              { event: "Result", date: "June 2025" }
            ],
            preparationTips: [
              "Master JEE Main concepts thoroughly",
              "Solve advanced level problems",
              "Focus on problem-solving speed",
              "Practice previous year papers",
              "Join coaching or online courses"
            ],
            topColleges: ["IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur", "IIT Kharagpur"]
          }
        },
        { 
          name: "BITSAT", 
          date: "May 2025", 
          description: "BITS Pilani entrance exam",
          detailedInfo: {
            eligibility: "Class 12th with PCM and minimum 75% aggregate",
            syllabus: ["Physics", "Chemistry", "Mathematics", "English Proficiency", "Logical Reasoning"],
            examPattern: "Computer Based Test with 150 questions",
            applicationFee: "₹3400 (Male), ₹2900 (Female)",
            examDuration: "3 hours",
            totalMarks: "450 marks",
            negativeMarking: "Yes, -1 for wrong answer, +3 for correct answer",
            officialWebsite: "https://www.bitsadmission.com",
            registrationLink: "https://www.bitsadmission.com/registration",
            detailedSummary: "BITSAT (Birla Institute of Technology and Science Admission Test) is conducted by BITS Pilani for admission to integrated first-degree programs in Engineering, Pharmacy, and Science. BITSAT is a computer-based online test conducted at various centers across India. The exam tests candidates on their knowledge of Physics, Chemistry, Mathematics, English Proficiency, and Logical Reasoning. BITS Pilani is known for its excellent academic standards and industry-relevant curriculum. The institute has campuses in Pilani, Goa, and Hyderabad, offering world-class education in engineering and technology.",
            importantDates: [
              { event: "Application Start", date: "January 2025" },
              { event: "Application End", date: "March 2025" },
              { event: "Slot Booking", date: "April 2025" },
              { event: "Exam Date", date: "May 2025" },
              { event: "Result", date: "June 2025" }
            ],
            preparationTips: [
              "Focus on speed and accuracy",
              "Practice online mock tests",
              "Work on English and Logical Reasoning",
              "Time management is key",
              "Revise all PCM concepts"
            ],
            topColleges: ["BITS Pilani", "BITS Goa", "BITS Hyderabad"]
          }
        },
        { 
          name: "SRMJEEE", 
          date: "April 2025", 
          description: "SRM University entrance exam",
          detailedInfo: {
            eligibility: "Class 12th with PCM and minimum 60% aggregate",
            syllabus: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Aptitude"],
            examPattern: "Computer Based Test with 125 questions",
            applicationFee: "₹1200",
            examDuration: "2.5 hours",
            totalMarks: "125 marks",
            negativeMarking: "No negative marking",
            officialWebsite: "https://srmjee.srmist.edu.in",
            registrationLink: "https://srmjee.srmist.edu.in/registration",
            detailedSummary: "SRMJEEE (SRM Joint Engineering Entrance Examination) is conducted by SRM Institute of Science and Technology for admission to undergraduate engineering programs. SRM is one of India's premier private technical universities with campuses in Chennai, Kattankulathur, Ramapuram, Vadapalani, and Delhi NCR. The exam is conducted online and tests candidates on Physics, Chemistry, Mathematics, English, and Aptitude. SRM is known for its excellent placement records, with top companies recruiting from the campus. The institute offers various engineering specializations and has state-of-the-art infrastructure and faculty.",
            importantDates: [
              { event: "Application Start", date: "November 2024" },
              { event: "Application End", date: "March 2025" },
              { event: "Slot Booking", date: "March 2025" },
              { event: "Exam Date", date: "April 2025" },
              { event: "Result", date: "May 2025" }
            ],
            preparationTips: [
              "No negative marking, attempt all questions",
              "Focus on accuracy over speed",
              "Practice SRMJEEE specific papers",
              "Work on English and Aptitude",
              "Regular revision of concepts"
            ],
            topColleges: ["SRM Chennai", "SRM Kattankulathur", "SRM Ramapuram", "SRM Vadapalani", "SRM Delhi NCR"]
          }
        }
      ]
    },
    {
      name: "Medical Entrance",
      exams: [
        { 
          name: "NEET UG", 
          date: "May 2025", 
          description: "National Eligibility cum Entrance Test",
          detailedInfo: {
            eligibility: "Class 12th with Physics, Chemistry, Biology with minimum 50% marks (40% for SC/ST)",
            syllabus: ["Physics", "Chemistry", "Biology"],
            examPattern: "Pen and Paper Based Test with 180 questions",
            applicationFee: "₹1700 (General), ₹1600 (OBC), ₹1000 (SC/ST/EWS)",
            examDuration: "3 hours 20 minutes",
            totalMarks: "720 marks",
            negativeMarking: "Yes, -1 for wrong answer, +4 for correct answer",
            officialWebsite: "https://neet.nta.nic.in",
            registrationLink: "https://neet.nta.nic.in/registration",
            detailedSummary: "NEET UG (National Eligibility cum Entrance Test - Undergraduate) is the single entrance examination for admission to MBBS, BDS, and other medical courses in India. Conducted by the National Testing Agency (NTA), NEET UG is mandatory for admission to all medical colleges including government, private, and deemed universities. The exam tests candidates on Physics, Chemistry, and Biology (Botany and Zoology) at the Class 12th level. NEET UG is one of the most competitive exams in India with over 20 lakh candidates appearing annually. The exam is conducted in 13 languages and follows a uniform syllabus across the country.",
            importantDates: [
              { event: "Application Start", date: "February 2025" },
              { event: "Application End", date: "March 2025" },
              { event: "Admit Card", date: "April 2025" },
              { event: "Exam Date", date: "May 2025" },
              { event: "Result", date: "June 2025" }
            ],
            preparationTips: [
              "NCERT is the bible for NEET preparation",
              "Focus on diagrams and labeling",
              "Practice numerical problems in Physics",
              "Memorize chemical reactions and mechanisms",
              "Take regular mock tests"
            ],
            topColleges: ["AIIMS", "JIPMER", "Government Medical Colleges", "Private Medical Colleges"]
          }
        },
        { 
          name: "AIIMS MBBS", 
          date: "May 2025", 
          description: "AIIMS entrance exam",
          detailedInfo: {
            eligibility: "Class 12th with PCMB and minimum 60% marks",
            syllabus: ["Physics", "Chemistry", "Biology", "General Knowledge"],
            examPattern: "Computer Based Test with 200 questions",
            applicationFee: "₹1500 (General), ₹1200 (OBC), ₹800 (SC/ST)",
            examDuration: "3.5 hours",
            totalMarks: "200 marks",
            negativeMarking: "Yes, -1/3 for wrong answer, +1 for correct answer",
            officialWebsite: "https://www.aiimsexams.org",
            registrationLink: "https://www.aiimsexams.org/registration",
            detailedSummary: "AIIMS MBBS is the entrance examination for admission to the prestigious All India Institute of Medical Sciences (AIIMS) for MBBS programs. AIIMS is India's premier medical institute known for its excellence in medical education, research, and healthcare. The exam is conducted by AIIMS Delhi and tests candidates on Physics, Chemistry, Biology, and General Knowledge. AIIMS offers world-class medical education with state-of-the-art facilities and renowned faculty. The institute has multiple campuses across India including Delhi, Bhopal, Bhubaneswar, Jodhpur, Patna, Raipur, and Rishikesh. AIIMS graduates are highly sought after in the medical field both in India and abroad.",
            importantDates: [
              { event: "Application Start", date: "January 2025" },
              { event: "Application End", date: "March 2025" },
              { event: "Admit Card", date: "April 2025" },
              { event: "Exam Date", date: "May 2025" },
              { event: "Result", date: "June 2025" }
            ],
            preparationTips: [
              "Focus on conceptual understanding",
              "Practice GK and current affairs",
              "Work on speed and accuracy",
              "Solve previous year papers",
              "Join specialized coaching if needed"
            ],
            topColleges: ["AIIMS New Delhi", "AIIMS Jodhpur", "AIIMS Bhopal", "AIIMS Rishikesh"]
          }
        },
        { 
          name: "JIPMER", 
          date: "June 2025", 
          description: "JIPMER entrance exam",
          detailedInfo: {
            eligibility: "Class 12th with PCMB and minimum 50% marks",
            syllabus: ["Physics", "Chemistry", "Biology", "English", "Logical Reasoning"],
            examPattern: "Computer Based Test with 200 questions",
            applicationFee: "₹1600 (General), ₹1200 (OBC), ₹800 (SC/ST)",
            examDuration: "2.5 hours",
            totalMarks: "200 marks",
            negativeMarking: "No negative marking",
            officialWebsite: "https://jipmer.edu.in",
            registrationLink: "https://jipmer.edu.in/admissions",
            detailedSummary: "JIPMER (Jawaharlal Institute of Postgraduate Medical Education and Research) conducts its own entrance examination for admission to MBBS programs. JIPMER is an autonomous medical institute under the Ministry of Health and Family Welfare, Government of India. The exam tests candidates on Physics, Chemistry, Biology, English, and Logical Reasoning. JIPMER is known for its excellent medical education and research facilities. The institute offers various undergraduate and postgraduate medical programs and is recognized for its high academic standards and clinical training.",
            importantDates: [
              { event: "Application Start", date: "March 2025" },
              { event: "Application End", date: "April 2025" },
              { event: "Admit Card", date: "May 2025" },
              { event: "Exam Date", date: "June 2025" },
              { event: "Result", date: "June 2025" }
            ],
            preparationTips: [
              "No negative marking, attempt all questions",
              "Focus on English and Logical Reasoning",
              "Practice JIPMER specific papers",
              "Work on time management",
              "Revise all concepts thoroughly"
            ],
            topColleges: ["JIPMER Puducherry", "JIPMER Karaikal"]
          }
        }
      ]
    },
    {
      name: "Management Entrance",
      exams: [
        { 
          name: "CAT", 
          date: "November 2025", 
          description: "Common Admission Test for IIMs",
          detailedInfo: {
            eligibility: "Bachelor's degree with minimum 50% marks (45% for SC/ST)",
            syllabus: ["Quantitative Ability", "Verbal Ability", "Data Interpretation", "Logical Reasoning"],
            examPattern: "Computer Based Test with 100 questions",
            applicationFee: "₹2400 (General), ₹1200 (SC/ST)",
            examDuration: "3 hours",
            totalMarks: "300 marks",
            negativeMarking: "Yes, -1 for wrong answer, +3 for correct answer",
            officialWebsite: "https://iimcat.ac.in",
            registrationLink: "https://iimcat.ac.in/registration",
            detailedSummary: "CAT (Common Admission Test) is conducted by the Indian Institutes of Management (IIMs) for admission to their MBA programs. CAT is one of the most competitive management entrance exams in India, with over 2 lakh candidates appearing annually. The exam tests candidates on Quantitative Ability, Verbal Ability, Data Interpretation, and Logical Reasoning. CAT scores are accepted by all IIMs and many other top B-schools across India. The exam is conducted in multiple sessions and cities across the country. CAT is known for its challenging questions and time pressure, making it a true test of analytical and problem-solving skills.",
            importantDates: [
              { event: "Application Start", date: "August 2025" },
              { event: "Application End", date: "September 2025" },
              { event: "Admit Card", date: "October 2025" },
              { event: "Exam Date", date: "November 2025" },
              { event: "Result", date: "December 2025" }
            ],
            preparationTips: [
              "Focus on all three sections equally",
              "Practice mock tests regularly",
              "Work on reading comprehension",
              "Master data interpretation",
              "Time management is crucial"
            ],
            topColleges: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Lucknow", "IIM Indore"]
          }
        },
        { 
          name: "XAT", 
          date: "January 2025", 
          description: "XLRI entrance exam",
          detailedInfo: {
            eligibility: "Bachelor's degree with minimum 50% marks",
            syllabus: ["Verbal Ability", "Decision Making", "Quantitative Ability", "General Knowledge"],
            examPattern: "Computer Based Test with 100 questions",
            applicationFee: "₹2100",
            examDuration: "3.5 hours",
            totalMarks: "100 marks",
            negativeMarking: "Yes, -0.25 for wrong answer, +1 for correct answer",
            officialWebsite: "https://xatonline.in",
            registrationLink: "https://xatonline.in/registration",
            detailedSummary: "XAT (Xavier Aptitude Test) is conducted by XLRI Jamshedpur for admission to its management programs. XAT is one of the most prestigious management entrance exams in India, accepted by over 150 B-schools across the country. The exam tests candidates on Verbal Ability, Decision Making, Quantitative Ability, and General Knowledge. XAT is known for its unique Decision Making section which tests candidates' analytical and problem-solving skills. The exam is conducted in multiple cities across India and is considered one of the most challenging management entrance exams. XLRI is renowned for its Human Resource Management and Business Management programs.",
            importantDates: [
              { event: "Application Start", date: "August 2024" },
              { event: "Application End", date: "November 2024" },
              { event: "Admit Card", date: "December 2024" },
              { event: "Exam Date", date: "January 2025" },
              { event: "Result", date: "February 2025" }
            ],
            preparationTips: [
              "Focus on Decision Making section",
              "Practice GK and current affairs",
              "Work on essay writing",
              "Solve previous year papers",
              "Join coaching for better preparation"
            ],
            topColleges: ["XLRI Jamshedpur", "XIMB Bhubaneswar", "SP Jain Mumbai", "IMT Ghaziabad"]
          }
        },
        { 
          name: "SNAP", 
          date: "December 2024", 
          description: "Symbiosis entrance exam",
          detailedInfo: {
            eligibility: "Bachelor's degree with minimum 50% marks",
            syllabus: ["General English", "Quantitative Ability", "General Awareness", "Analytical Reasoning"],
            examPattern: "Computer Based Test with 60 questions",
            applicationFee: "₹1950",
            examDuration: "1 hour",
            totalMarks: "60 marks",
            negativeMarking: "Yes, -0.25 for wrong answer, +1 for correct answer",
            officialWebsite: "https://snaptest.org",
            registrationLink: "https://snaptest.org/registration",
            detailedSummary: "SNAP (Symbiosis National Aptitude Test) is conducted by Symbiosis International University for admission to its various management programs. SNAP is accepted by all Symbiosis institutes across India including SIBM Pune, SCMHRD Pune, SIIB Pune, and others. The exam tests candidates on General English, Quantitative Ability, General Awareness, and Analytical Reasoning. SNAP is known for its relatively easier difficulty level compared to CAT and XAT, making it accessible to a wider range of candidates. The exam is conducted in multiple sessions and cities across India. Symbiosis institutes are known for their industry-relevant curriculum and excellent placement records.",
            importantDates: [
              { event: "Application Start", date: "August 2024" },
              { event: "Application End", date: "November 2024" },
              { event: "Admit Card", date: "November 2024" },
              { event: "Exam Date", date: "December 2024" },
              { event: "Result", date: "January 2025" }
            ],
            preparationTips: [
              "Focus on speed and accuracy",
              "Practice GK and current affairs",
              "Work on English vocabulary",
              "Solve mock tests regularly",
              "Time management is key"
            ],
            topColleges: ["SIBM Pune", "SCMHRD Pune", "SIIB Pune", "SIMC Pune"]
          }
        }
      ]
    },
    {
      name: "Defense & Government",
      exams: [
        { 
          name: "NDA", 
          date: "April 2025", 
          description: "National Defence Academy",
          detailedInfo: {
            eligibility: "Class 12th for Army/Navy, Class 12th with PCM for Air Force",
            syllabus: ["Mathematics", "General Ability Test (GAT)"],
            examPattern: "Pen and Paper Based Test with 270 questions",
            applicationFee: "₹100 (General), ₹0 (SC/ST)",
            examDuration: "2.5 hours each paper",
            totalMarks: "900 marks",
            negativeMarking: "Yes, -0.33 for wrong answer, +1.33 for correct answer",
            officialWebsite: "https://upsc.gov.in",
            registrationLink: "https://upsc.gov.in/apply-online",
            detailedSummary: "NDA (National Defence Academy) is conducted by the Union Public Service Commission (UPSC) for admission to the prestigious National Defence Academy. NDA is a tri-service academy that trains cadets for the Indian Army, Navy, and Air Force. The exam is conducted twice a year and tests candidates on Mathematics and General Ability Test (GAT) which includes English, General Knowledge, Physics, Chemistry, Biology, History, Geography, and Current Affairs. NDA is one of the most prestigious defense entrance exams in India, offering a unique opportunity to serve the nation while pursuing higher education. The academy is located in Khadakwasla, Pune, and offers a 3-year course followed by specialized training in respective service academies.",
            importantDates: [
              { event: "Application Start", date: "December 2024" },
              { event: "Application End", date: "January 2025" },
              { event: "Admit Card", date: "March 2025" },
              { event: "Exam Date", date: "April 2025" },
              { event: "Result", date: "May 2025" }
            ],
            preparationTips: [
              "Focus on Mathematics and English",
              "Practice GK and current affairs",
              "Work on physical fitness",
              "Solve previous year papers",
              "Join coaching for better preparation"
            ],
            topColleges: ["NDA Khadakwasla", "NDA Ghorpuri"]
          }
        },
        { 
          name: "CDS", 
          date: "February 2025", 
          description: "Combined Defence Services",
          detailedInfo: {
            eligibility: "Bachelor's degree for IMA/INA/AFA, Class 12th for OTA",
            syllabus: ["English", "General Knowledge", "Elementary Mathematics"],
            examPattern: "Pen and Paper Based Test with 300 questions",
            applicationFee: "₹200 (General), ₹0 (SC/ST)",
            examDuration: "2 hours each paper",
            totalMarks: "300 marks",
            negativeMarking: "Yes, -0.33 for wrong answer, +1 for correct answer",
            officialWebsite: "https://upsc.gov.in",
            registrationLink: "https://upsc.gov.in/apply-online",
            detailedSummary: "CDS (Combined Defence Services) is conducted by the Union Public Service Commission (UPSC) for recruitment to the Indian Armed Forces. CDS is conducted twice a year and offers opportunities to join the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers Training Academy (OTA). The exam tests candidates on English, General Knowledge, and Elementary Mathematics. CDS is one of the most prestigious defense entrance exams in India, offering a direct path to become an officer in the Indian Armed Forces. The exam is open to both men and women, with different eligibility criteria for different academies.",
            importantDates: [
              { event: "Application Start", date: "October 2024" },
              { event: "Application End", date: "November 2024" },
              { event: "Admit Card", date: "January 2025" },
              { event: "Exam Date", date: "February 2025" },
              { event: "Result", date: "March 2025" }
            ],
            preparationTips: [
              "Focus on English and Mathematics",
              "Practice GK and current affairs",
              "Work on physical fitness",
              "Solve previous year papers",
              "Join coaching for better preparation"
            ],
            topColleges: ["IMA Dehradun", "INA Ezhimala", "AFA Hyderabad", "OTA Chennai"]
          }
        },
        { 
          name: "UPSC Civil Services", 
          date: "May 2025", 
          description: "Civil Services Examination",
          detailedInfo: {
            eligibility: "Bachelor's degree in any discipline",
            syllabus: ["General Studies", "Optional Subject", "Essay", "English", "Indian Language"],
            examPattern: "Three stages - Prelims, Mains, Interview",
            applicationFee: "₹100 (General), ₹0 (SC/ST/Female)",
            examDuration: "Prelims: 2 hours each paper, Mains: 3 hours each paper",
            totalMarks: "Prelims: 400 marks, Mains: 1750 marks, Interview: 275 marks",
            negativeMarking: "Yes, -0.33 for wrong answer, +2 for correct answer",
            officialWebsite: "https://upsc.gov.in",
            registrationLink: "https://upsc.gov.in/apply-online",
            detailedSummary: "UPSC Civil Services Examination is conducted by the Union Public Service Commission (UPSC) for recruitment to various civil services of the Government of India. The exam is conducted in three stages - Preliminary, Main, and Interview. It is one of the most prestigious and competitive exams in India, offering opportunities to join the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and other central services. The exam tests candidates on General Studies, Optional Subject, Essay, English, and Indian Language. Civil Services offer a unique opportunity to serve the nation and make a significant impact on society through various administrative roles.",
            importantDates: [
              { event: "Application Start", date: "February 2025" },
              { event: "Application End", date: "March 2025" },
              { event: "Prelims", date: "May 2025" },
              { event: "Mains", date: "September 2025" },
              { event: "Interview", date: "January 2026" }
            ],
            preparationTips: [
              "Focus on NCERT books for basics",
              "Read newspapers daily",
              "Practice answer writing",
              "Choose optional subject wisely",
              "Join coaching for guidance"
            ],
            topColleges: ["LBSNAA Mussoorie", "Various Training Institutes"]
          }
        }
      ]
    },
    {
      name: "Law & Design",
      exams: [
        {
          name: "CLAT",
          date: "December 2025",
          description: "Common Law Admission Test for NLUs",
          detailedInfo: {
            eligibility: "Class 12th with minimum 45% marks (40% for SC/ST)",
            syllabus: ["English", "Current Affairs", "Legal Reasoning", "Logical Reasoning", "Quantitative Techniques"],
            examPattern: "Computer Based Test with 120 questions",
            applicationFee: "₹4000 (General), ₹3500 (SC/ST)",
            examDuration: "2 hours",
            totalMarks: "120 marks",
            negativeMarking: "Yes, -0.25 for wrong answer",
            officialWebsite: "https://consortiumofnlus.ac.in",
            registrationLink: "https://consortiumofnlus.ac.in/clat-2025/",
            detailedSummary: "CLAT is the national-level entrance exam for undergraduate and postgraduate law programs offered by National Law Universities (NLUs) and other participating institutions.",
            importantDates: [
              { event: "Application Start", date: "July 2025" },
              { event: "Application End", date: "October 2025" },
              { event: "Admit Card", date: "November 2025" },
              { event: "Exam Date", date: "December 2025" },
              { event: "Result", date: "January 2026" }
            ],
            preparationTips: [
              "Read newspapers daily for current affairs",
              "Practice logical and legal reasoning",
              "Take timed mock tests",
              "Build vocabulary"
            ],
            topColleges: ["NLSIU Bangalore", "NALSAR Hyderabad", "WBNUJS Kolkata", "NLU Delhi (AILET)"]
          }
        },
        {
          name: "UCEED",
          date: "January 2025",
          description: "Undergraduate Common Entrance Exam for Design",
          detailedInfo: {
            eligibility: "Class 12th in any stream",
            syllabus: ["Visualization", "Design Aptitude", "Analytical Reasoning", "Creativity", "Observation"],
            examPattern: "Part A (objective), Part B (sketching)",
            applicationFee: "₹3800",
            examDuration: "3 hours",
            totalMarks: "300 marks",
            negativeMarking: "Yes in objective section",
            officialWebsite: "https://uceed.iitb.ac.in",
            registrationLink: "https://uceed.iitb.ac.in/2025/",
            detailedSummary: "UCEED is conducted by IIT Bombay for admission to B.Des programs at IITs and participating institutes.",
            importantDates: [
              { event: "Application Start", date: "September 2024" },
              { event: "Application End", date: "October 2024" },
              { event: "Admit Card", date: "January 2025" },
              { event: "Exam Date", date: "January 2025" },
              { event: "Result", date: "March 2025" }
            ],
            preparationTips: [
              "Practice sketching and storyboards",
              "Solve previous year papers",
              "Develop observation skills",
              "Build a small portfolio"
            ],
            topColleges: ["IIT Bombay", "IIT Guwahati", "IIT Hyderabad", "IIITDM Jabalpur"]
          }
        },
        {
          name: "NID DAT",
          date: "December 2024",
          description: "National Institute of Design - Design Aptitude Test",
          detailedInfo: {
            eligibility: "Class 12th in any stream",
            syllabus: ["Drawing", "Creativity", "Design Thinking", "Observation", "General Knowledge"],
            examPattern: "Prelims + Mains (Studio Test & Interview)",
            applicationFee: "₹3000",
            examDuration: "2.5 hours (Prelims)",
            totalMarks: "Varies",
            negativeMarking: "No",
            officialWebsite: "https://admissions.nid.edu",
            registrationLink: "https://admissions.nid.edu/ugdat",
            detailedSummary: "NID DAT is conducted for admission to B.Des programs at National Institute of Design campuses.",
            importantDates: [
              { event: "Application Start", date: "September 2024" },
              { event: "Application End", date: "October 2024" },
              { event: "Prelims", date: "December 2024" },
              { event: "Mains", date: "April 2025" }
            ],
            preparationTips: [
              "Regular sketching practice",
              "Observe daily objects and redesign",
              "Practice creative problem solving",
              "Build a design journal"
            ],
            topColleges: ["NID Ahmedabad", "NID Bengaluru", "NID Gandhinagar"]
          }
        }
      ]
    },
    {
      name: "Commerce & Finance",
      exams: [
        {
          name: "CA Foundation",
          date: "June 2025",
          description: "Entry-level exam for Chartered Accountancy",
          detailedInfo: {
            eligibility: "Class 12th in any stream",
            syllabus: ["Accounting", "Business Laws", "Quantitative Aptitude", "Economics"],
            examPattern: "Mixed objective & descriptive",
            applicationFee: "₹1500",
            examDuration: "2 hours per paper",
            totalMarks: "400 marks",
            negativeMarking: "Yes in MCQs",
            officialWebsite: "https://www.icai.org",
            registrationLink: "https://eservices.icai.org/",
            detailedSummary: "CA Foundation is the first step in the Chartered Accountancy course conducted by ICAI.",
            importantDates: [
              { event: "Application Start", date: "February 2025" },
              { event: "Application End", date: "March 2025" },
              { event: "Exam Date", date: "June 2025" }
            ],
            preparationTips: [
              "Focus on Accounting basics",
              "Daily practice of numericals",
              "Revise Law and Economics theory",
              "Attempt mock papers"
            ],
            topColleges: ["ICAI Recognized Centers"]
          }
        },
        {
          name: "CS Executive Entrance (CSEET)",
          date: "May 2025",
          description: "Entry exam for Company Secretary course",
          detailedInfo: {
            eligibility: "Class 12th in any stream",
            syllabus: ["Business Communication", "Legal Aptitude", "Economic & Business Environment", "Current Affairs"],
            examPattern: "Computer-based test",
            applicationFee: "₹1000",
            examDuration: "2 hours",
            totalMarks: "200 marks",
            negativeMarking: "No",
            officialWebsite: "https://www.icsi.edu",
            registrationLink: "https://smash.icsi.in/",
            detailedSummary: "CSEET is the qualifying exam for registration to the CS Executive Programme conducted by ICSI.",
            importantDates: [
              { event: "Application Start", date: "March 2025" },
              { event: "Application End", date: "April 2025" },
              { event: "Exam Date", date: "May 2025" }
            ],
            preparationTips: [
              "Read business newspapers",
              "Practice mock tests",
              "Build fundamentals in Law and Economics",
              "Improve communication skills"
            ],
            topColleges: ["ICSI Recognized Centers"]
          }
        }
      ]
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Entrance Exams & Deadlines</h2>
        <p className="text-primary-200 text-lg">Stay updated with all major entrance exams and their important dates</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {examCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="rounded-lg bg-primary-900/40 p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">{category.name}</h3>
            <div className="space-y-3">
              {category.exams.map((exam, examIndex) => (
                <div key={examIndex} className="rounded-lg bg-primary-800/50 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{exam.name}</h4>
                    <span className="text-sm text-primary-400 bg-primary-700 px-2 py-1 rounded">
                      {exam.date}
                    </span>
                  </div>
                  <p className="text-sm text-primary-300">{exam.description}</p>
                  <div className="flex gap-2 mt-3">
                    <button 
                      onClick={() => {
                        setSelectedExam(exam)
                        setShowModal(true)
                      }}
                      className="text-xs px-3 py-1 bg-primary-600 hover:bg-primary-500 rounded transition-colors"
                    >
                      View Details
                    </button>
                    <button className="text-xs px-3 py-1 bg-primary-800 hover:bg-primary-700 rounded transition-colors">
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary-800/50 to-primary-900/50 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Important Date</h3>
          <p className="text-primary-200 mb-6">Get personalized exam reminders and preparation tips</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors">
              Get Exam Alerts
            </button>
            <button className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors">
              Download Study Plan
            </button>
          </div>
        </div>
      </div>

      {/* Exam Details Modal */}
      {showModal && selectedExam && selectedExam.detailedInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-primary-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedExam.name}</h2>
                  <p className="text-primary-300 text-lg">{selectedExam.description}</p>
                  <p className="text-primary-400 text-sm">Exam Date: {selectedExam.date}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-primary-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Detailed Summary */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">What is {selectedExam.name}?</h3>
                <p className="text-primary-200 leading-relaxed">{selectedExam.detailedInfo.detailedSummary}</p>
              </div>

              {/* Registration Link */}
              <div className="mb-6 p-4 bg-primary-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Registration & Application</h3>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a
                    href={selectedExam.detailedInfo.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors font-medium"
                  >
                    Register Now
                  </a>
                  <a
                    href={selectedExam.detailedInfo.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
                  >
                    Official Website
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Eligibility</h3>
                    <p className="text-primary-200 text-sm">{selectedExam.detailedInfo.eligibility}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Exam Pattern</h3>
                    <p className="text-primary-200 text-sm">{selectedExam.detailedInfo.examPattern}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Application Fee</h3>
                    <p className="text-primary-200 text-sm">{selectedExam.detailedInfo.applicationFee}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Exam Duration</h3>
                    <p className="text-primary-200 text-sm">{selectedExam.detailedInfo.examDuration}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Total Marks</h3>
                    <p className="text-primary-200 text-sm">{selectedExam.detailedInfo.totalMarks}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Negative Marking</h3>
                    <p className="text-primary-200 text-sm">{selectedExam.detailedInfo.negativeMarking}</p>
                  </div>
                </div>
              </div>

              {/* Syllabus */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Syllabus</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExam.detailedInfo.syllabus.map((subject, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-800 text-sm rounded">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Important Dates */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Important Dates</h3>
                <div className="space-y-2">
                  {selectedExam.detailedInfo.importantDates.map((date, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-primary-800 rounded">
                      <span className="text-primary-200">{date.event}</span>
                      <span className="text-primary-300 font-medium">{date.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation Tips */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Preparation Tips</h3>
                <ul className="space-y-2">
                  {selectedExam.detailedInfo.preparationTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span className="text-primary-200 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Colleges */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Top Colleges/Institutions</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExam.detailedInfo.topColleges.map((college, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-800 text-sm rounded">
                      {college}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <a
                  href={selectedExam.detailedInfo.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors text-center font-medium"
                >
                  Register for {selectedExam.name}
                </a>
                <button className="flex-1 px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium">
                  Set Reminder
                </button>
                <button className="flex-1 px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium">
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


