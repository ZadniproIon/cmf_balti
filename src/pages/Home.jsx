import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { Clock8, HeartPulse, PhoneCall, Globe } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import useLanguage from '../hooks/useLanguage'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import homeStyles from '../styles/index.css?raw'
import pillStyles from '../styles/pill-container.css?raw'

const pageStyles = [homeStyles, pillStyles, componentsStyles]
const Home = () => {
  const { t } = useTranslation()
  const { withLang } = useLanguage()
  const hoursLines = t('home.info.cards.hours.text').split('\n')

  useDocumentTitle(t('meta.home.title'), t('meta.home.description'))
  usePageStyles(pageStyles, 'home')

  return (
    <>
      <section className="main-section-1-wrapper" aria-labelledby="hero-title">
        <div className="main-section-1">
          <div className="left-side">
            <h1 id="hero-title" className="hero-title">
              {t('home.hero.title')}
            </h1>
            <p className="hero-description">
              {t('home.hero.text')}
            </p>
            <a className="hero-cta" href="https://sia.amp.md/" target="_blank" rel="noreferrer">
              {t('home.hero.cta')}
            </a>
          </div>
          <div className="right-side">
            <img
              src="/images/main-page-jpeg/programare_online_screen_1.jpg"
              srcSet="/images/main-page-jpeg/programare_online_screen_1-240.jpg 240w, /images/main-page-jpeg/programare_online_screen_1.jpg 480w"
              sizes="(max-width: 1024px) 90vw, 400px"
              width="480"
              height="476"
              alt={t('home.hero.title')}
            />
          </div>
        </div>
      </section>

      <section className="info-utile" aria-labelledby="info-utile-title">
        <h2 id="info-utile-title" className="info-utile-title">{t('home.info.title')}</h2>
        <ul className="info-utile-containers" role="list">
          <li className="info-utile-card">
            <Clock8 className="icon" />
            <h3 className="info-utile-card-title">{t('home.info.cards.hours.title')}</h3>
            <p>
              {hoursLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < hoursLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </li>
          <li className="info-utile-card">
            <HeartPulse className="icon" />
            <h3 className="info-utile-card-title">{t('home.info.cards.centers.title')}</h3>
            <p>{t('home.info.cards.centers.text')}</p>
          </li>
          <li className="info-utile-card">
            <PhoneCall className="icon" />
            <h3 className="info-utile-card-title">{t('home.info.cards.contact.title')}</h3>
            <p>
              <Trans
                i18nKey="home.info.cards.contact.text"
                components={[<Link key="contact-link" to={withLang('/contacte')} />]}
              />
            </p>
          </li>
        </ul>
      </section>

      <section className="content-wrapper" id="despre-cmf" aria-labelledby="despre-cmf-title">
        <div className="content">
          <div className="image-side">
            <img
              src="/images/main-page-jpeg/despre-cmf-main-page-400.jpg"
              srcSet="/images/main-page-jpeg/despre-cmf-main-page-400.jpg 400w, /images/main-page-jpeg/despre-cmf-main-page-800.jpg 800w"
              sizes="400px"
              width="400"
              height="400"
              alt={t('home.about.title')}
            />
          </div>
          <div className="content-side">
            <h2 id="despre-cmf-title" className="content-title">{t('home.about.title')}</h2>
            <p>{t('home.about.text')}</p>
            <Link to={withLang('/despre-noi')}>{t('home.about.cta')}</Link>
          </div>
        </div>
      </section>

      <section className="content-wrapper" id="esti-beneficiar" aria-labelledby="esti-beneficiar-title">
        <div className="content">
          <div className="content-side">
            <h2 id="esti-beneficiar-title" className="content-title">{t('home.beneficiary.title')}</h2>
            <p>{t('home.beneficiary.text')}</p>
            <Link to={withLang('/generale')}>{t('home.beneficiary.cta')}</Link>
          </div>
          <div className="image-side">
            <img
              src="/images/main-page-jpeg/esti-beneficiar-main-page-400.jpg"
              srcSet="/images/main-page-jpeg/esti-beneficiar-main-page-400.jpg 400w, /images/main-page-jpeg/esti-beneficiar-main-page-800.jpg 800w"
              sizes="400px"
              width="400"
              height="400"
              alt={t('home.beneficiary.title')}
            />
          </div>
        </div>
      </section>

      <section className="transparenta-section-wrapper" aria-labelledby="transparenta-title">
        <div className="transparenta-section">
          <h2 id="transparenta-title" className="transparenta-title">{t('home.transparency.title')}</h2>
          <p>{t('home.transparency.text')}</p>

          <nav className="pills" aria-label="Secțiuni de transparență">
            <Link to={withLang('/transparenta#achizitii_publice')}>{t('home.transparency.pills.procurement')}</Link>
            <Link to={withLang('/transparenta#rapoarte_de_activitate')}>{t('home.transparency.pills.reports')}</Link>
            <Link to={withLang('/transparenta#contracte_cnam')}>{t('home.transparency.pills.contracts')}</Link>
          </nav>
        </div>
      </section>

      <section className="parteneri-oficiali-wrapper" aria-labelledby="parteneri-oficiali-title">
        <h2 id="parteneri-oficiali-title">{t('home.partners.title')}</h2>
        <ul className="parteneri-oficiali" role="list">
          <li className="partner-card">
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/ms%20gov%20md-150.jpg"
                srcSet="/images/main-page-jpeg/ms%20gov%20md-100.jpg 100w, /images/main-page-jpeg/ms%20gov%20md-150.jpg 150w, /images/main-page-jpeg/ms%20gov%20md-300.jpg 300w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt={t('home.partners.ministry')}
              />
            </div>
            <div className="right-side">
              <h3 className="partner-name">{t('home.partners.ministry')}</h3>
              <a href="https://ms.gov.md/" target="_blank" rel="noreferrer">
                <Globe />ms.gov.md
              </a>
            </div>
          </li>

          <li className="partner-card">
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/cnam-150.jpg"
                srcSet="/images/main-page-jpeg/cnam-100.jpg 100w, /images/main-page-jpeg/cnam-150.jpg 150w, /images/main-page-jpeg/cnam.jpg 280w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt={t('home.partners.cnam')}
              />
            </div>
            <div className="right-side">
              <h3 className="partner-name">{t('home.partners.cnam')}</h3>
              <a href="http://cnam.md/" target="_blank" rel="noreferrer">
                <Globe />cnam.md
              </a>
            </div>
          </li>

          <li className="partner-card">
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/primaria%20balti-150.jpg"
                srcSet="/images/main-page-jpeg/primaria%20balti-100.jpg 100w, /images/main-page-jpeg/primaria%20balti-150.jpg 150w, /images/main-page-jpeg/primaria%20balti-300.jpg 300w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt={t('home.partners.city')}
              />
            </div>
            <div className="right-side">
              <h3 className="partner-name">{t('home.partners.city')}</h3>
              <a href="https://balti.md/" target="_blank" rel="noreferrer">
                <Globe />balti.md
              </a>
            </div>
          </li>

          <li className="partner-card">
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/cnas-150.jpg"
                srcSet="/images/main-page-jpeg/cnas-100.jpg 100w, /images/main-page-jpeg/cnas-150.jpg 150w, /images/main-page-jpeg/cnas-300.jpg 300w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt={t('home.partners.cnas')}
              />
            </div>
            <div className="right-side">
              <h3 className="partner-name">{t('home.partners.cnas')}</h3>
              <a href="https://cnas.gov.md/" target="_blank" rel="noreferrer">
                <Globe />cnas.gov.md
              </a>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home
