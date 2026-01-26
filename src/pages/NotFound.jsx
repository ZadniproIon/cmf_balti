import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import useDocumentTitle from '../hooks/useDocumentTitle'
import useLanguage from '../hooks/useLanguage'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import notFoundStyles from '../styles/not-found.css?raw'

const pageStyles = [notFoundStyles, componentsStyles]

const NotFound = () => {
  const { t } = useTranslation()
  const { withLang } = useLanguage()

  useDocumentTitle(t('meta.notFound.title'), t('meta.notFound.description'))
  usePageStyles(pageStyles, 'not-found')

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-content">
        <h1 id="not-found-title" className="not-found-title">{t('notFound.title')}</h1>
        <p className="not-found-text">
          <Trans
            i18nKey="notFound.text"
            components={[<Link key="not-found-home" className="not-found-inline-link" to={withLang('/')} />]}
          />
        </p>
        <Link className="not-found-link" to={withLang('/')}>
          <ArrowLeft className="icon" />
          {t('notFound.back')}
        </Link>
      </div>
    </section>
  )
}

export default NotFound
