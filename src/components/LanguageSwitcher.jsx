import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { SUPPORTED_LANGS } from '../i18n'
import useLanguage from '../hooks/useLanguage'
import flagRo from '../assets/flags/ro.svg'
import flagRu from '../assets/flags/ru.svg'
import flagGb from '../assets/flags/gb.svg'

const LanguageSwitcher = ({ className = '' }) => {
  const { t } = useTranslation()
  const { lang } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const selectId = useId()
  const menuId = useId()
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapperRef = useRef(null)
  const isDesktop = className.includes('language-switcher-desktop')
  const flags = useMemo(
    () => ({
      ro: flagRo,
      ru: flagRu,
      en: flagGb,
    }),
    []
  )
  const options = useMemo(
    () =>
      SUPPORTED_LANGS.map((code) => ({
        code,
        label: t(`language.${code}`),
        flag: flags[code],
      })),
    [t, flags]
  )

  const navigateToLang = (nextLang) => {
    if (nextLang === lang) {
      return
    }

    const restPath = location.pathname.replace(/^\/[^/]+/, '')
    const nextPath = `/${nextLang}${restPath}`
    navigate(`${nextPath}${location.search}${location.hash}`)
  }

  const handleChange = (event) => {
    navigateToLang(event.target.value)
  }

  const handleSelect = (nextLang) => {
    navigateToLang(nextLang)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const activeOption = options.find((option) => option.code === lang) ?? options[0]

  return (
    <div
      ref={wrapperRef}
      className={`language-switcher${className ? ` ${className}` : ''}`}
    >
      {isDesktop ? (
        <div className="language-select" aria-haspopup="listbox">
          <span className="language-label" id={selectId}>
            {t('language.label')}
          </span>
          <button
            type="button"
            className={`language-trigger${menuOpen ? ' open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-labelledby={selectId}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {activeOption?.flag && (
              <img
                className="language-flag"
                src={activeOption.flag}
                alt=""
                aria-hidden="true"
              />
            )}
            <span className="language-text">{activeOption?.label}</span>
          </button>
          <ul
            id={menuId}
            role="listbox"
            className={`language-menu${menuOpen ? ' open' : ''}`}
            aria-label={t('language.label')}
          >
            {options.map((option) => (
              <li key={option.code} role="option" aria-selected={option.code === lang}>
                <button
                  type="button"
                  className="language-option"
                  onClick={() => handleSelect(option.code)}
                >
                  {option.flag && (
                    <img
                      className="language-flag"
                      src={option.flag}
                      alt=""
                      aria-hidden="true"
                    />
                  )}
                  <span className="language-text">{option.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <label className="language-label" htmlFor={selectId}>
            {t('language.label')}
          </label>
          <select id={selectId} value={lang} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher
