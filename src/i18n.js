import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ro from './locales/ro.json'
import ru from './locales/ru.json'

export const SUPPORTED_LANGS = ['ro', 'ru', 'en']
export const DEFAULT_LANG = 'ro'

const storedLang = localStorage.getItem('lang')
const initialLang = SUPPORTED_LANGS.includes(storedLang) ? storedLang : DEFAULT_LANG

i18n.use(initReactI18next).init({
  resources: {
    ro: { translation: ro },
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: initialLang,
  fallbackLng: DEFAULT_LANG,
  supportedLngs: SUPPORTED_LANGS,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
