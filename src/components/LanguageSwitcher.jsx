'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, routing } from '../i18n/routing';

const flags = {
  ro: '/flags/ro.svg',
  ru: '/flags/ru.svg',
  en: '/flags/gb.svg',
};

const LanguageSwitcher = ({ className = '' }) => {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const selectId = useId();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const isDesktop = className.includes('language-switcher-desktop');

  const options = useMemo(
    () =>
      routing.locales.map((code) => ({
        code,
        label: t(code),
        flag: flags[code] || `/flags/${code}.svg`,
      })),
    [t]
  );

  const navigateToLang = (nextLocale) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  const handleChange = (event) => {
    navigateToLang(event.target.value);
  };

  const handleSelect = (nextLocale) => {
    navigateToLang(nextLocale);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const activeOption = options.find((option) => option.code === locale) ?? options[0];

  return (
    <div
      ref={wrapperRef}
      className={`language-switcher${className ? ` ${className}` : ''}`}
    >
      {isDesktop ? (
        <div className="language-select">
          <span className="language-label" id={selectId}>
            {t('label')}
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
                width={16}
                height={16}
                aria-hidden="true"
              />
            )}
            <span className="language-text">{activeOption?.label}</span>
          </button>
          <ul
            id={menuId}
            role="listbox"
            className={`language-menu${menuOpen ? ' open' : ''}`}
            aria-label={t('label')}
          >
            {options.map((option) => (
              <li key={option.code} role="option" aria-selected={option.code === locale}>
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
                      width={16}
                      height={16}
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
            {t('label')}
          </label>
          <select id={selectId} value={locale} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
