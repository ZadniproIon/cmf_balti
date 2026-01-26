import { useParams } from 'react-router-dom'
import { DEFAULT_LANG, SUPPORTED_LANGS } from '../i18n'

const useLanguage = () => {
  const { lang: langParam } = useParams()
  const rawLang = (langParam || '').toLowerCase()
  const isSupported = SUPPORTED_LANGS.includes(rawLang)
  const lang = isSupported ? rawLang : DEFAULT_LANG

  const withLang = (path = '/') => {
    if (!path) {
      return `/${lang}`
    }

    const normalized = path.startsWith('/') ? path : `/${path}`
    if (normalized === '/') {
      return `/${lang}`
    }

    return `/${lang}${normalized}`
  }

  return { lang, rawLang, isSupported, withLang }
}

export default useLanguage
