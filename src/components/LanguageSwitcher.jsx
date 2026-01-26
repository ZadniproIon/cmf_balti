import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { SUPPORTED_LANGS } from '../i18n'
import useLanguage from '../hooks/useLanguage'

const LanguageSwitcher = ({ className = '' }) => {
  const { t } = useTranslation()
  const { lang } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const selectId = useId()

  const handleChange = (event) => {
    const nextLang = event.target.value
    if (nextLang === lang) {
      return
    }

    const restPath = location.pathname.replace(/^\/[^/]+/, '')
    const nextPath = `/${nextLang}${restPath}`
    navigate(`${nextPath}${location.search}${location.hash}`)
  }

  return (
    <div className={`language-switcher${className ? ` ${className}` : ''}`}>
      <label className="language-label" htmlFor={selectId}>
        {t('language.label')}
      </label>
      <select id={selectId} value={lang} onChange={handleChange}>
        {SUPPORTED_LANGS.map((code) => (
          <option key={code} value={code}>
            {t(`language.${code}`)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
