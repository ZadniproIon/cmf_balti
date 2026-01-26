import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import i18n, { DEFAULT_LANG, SUPPORTED_LANGS } from '../i18n'

const stripLangFromPath = (pathname) => pathname.replace(/^\/[^/]+/, '')

const LanguageLayout = () => {
  const { lang } = useParams()
  const location = useLocation()
  const normalizedLang = (lang || '').toLowerCase()
  const isSupported = SUPPORTED_LANGS.includes(normalizedLang)
  const activeLang = isSupported ? normalizedLang : DEFAULT_LANG

  useEffect(() => {
    i18n.changeLanguage(activeLang)
    document.documentElement.lang = activeLang
    localStorage.setItem('lang', activeLang)
  }, [activeLang])

  if (!isSupported) {
    const rest = stripLangFromPath(location.pathname)
    const nextPath = `/${DEFAULT_LANG}${rest}`
    return <Navigate to={`${nextPath}${location.search}${location.hash}`} replace />
  }

  return <Outlet />
}

export default LanguageLayout
