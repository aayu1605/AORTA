import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      app: {
        name: 'AORTA',
        hero_title: "Plan your future with AORTA = India's AI-driven, localized career & education advisor.",
        hero_sub: 'Discover careers after Class 10 & 12, compare government colleges, get personalized study roadmaps, and connect with mentors. (Updated: 2025)'
      },
      nav: {
        careers: 'Explore Careers',
        after10: 'After 10th',
        after12: 'After 12th',
        colleges: 'Colleges',
        roadmap: 'Roadmap Builder',
        swot: 'SWOT Lab',
        mentors: 'Mentorship',
        about: 'About'
      },
      footer: {
        stamp1: 'Data & schedules reflect AISHE 2024–25 and Ministry of Education guidance as of 2025. AORTA regularly syncs with government sources and national education initiatives.',
        stamp2: 'College directory data via AISHE (2024–25 updates).'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: { order: ['querystring', 'localStorage', 'navigator'], caches: ['localStorage'] }
  })

export default i18n






