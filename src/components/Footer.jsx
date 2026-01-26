import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import useLanguage from '../hooks/useLanguage'

const Footer = () => {
  const { t } = useTranslation()
  const { withLang } = useLanguage()
  const programLines = [t('footer.hours.weekdays'), t('footer.hours.saturday')]

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <section className="footer-brand" aria-labelledby="footer-brand-title">
            <div className="footer-brand-logo">
              <img src="/images/logo-cmf.png" alt={t('footer.brand.logoAlt')} />
            </div>
            <h2 id="footer-brand-title" className="footer-title">{t('footer.brand.title')}</h2>
            <p className="footer-tagline">{t('footer.brand.tagline')}</p>
          </section>

          <div className="footer-section">
            <section className="footer-group" aria-labelledby="footer-contact-heading">
              <h3 id="footer-contact-heading" className="footer-heading">{t('footer.contact')}</h3>
              <address className="footer-address">
                <ul className="footer-list footer-contact">
                  <li>{t('footer.address')}: {t('footer.addressValue')}</li>
                  <li>
                    {t('footer.phone')}: <a href="tel:02319977">02319977</a>
                  </li>
                  <li>
                    {t('footer.email')}: <a href="mailto:cmfbalti@ms.md">cmfbalti@ms.md</a>
                  </li>
                </ul>
              </address>
            </section>
            <section className="footer-group" aria-labelledby="footer-program-heading">
              <h3 id="footer-program-heading" className="footer-heading">{t('footer.program')}</h3>
              <ul className="footer-list">
                {programLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          </div>

          <nav className="footer-section" id="navigare" aria-label={t('footer.navigationLabel')}>
            <h3 className="footer-heading">{t('footer.navigation')}</h3>
            <ul className="footer-links">
              <li>
                <Link to={withLang('/')}>{t('nav.home')}</Link>
              </li>
              <li>
                <Link to={withLang('/despre-noi')}>{t('nav.about')}</Link>
              </li>
              <li>
                <Link to={withLang('/generale')}>{t('nav.general')}</Link>
              </li>
              <li>
                <Link to={withLang('/transparenta')}>{t('nav.transparenta')}</Link>
              </li>
              <li>
                <Link to={withLang('/contacte')}>{t('nav.contact')}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            <Trans
              i18nKey="footer.credit"
              values={{ heart: '❤️', name: 'Zadnipro Ion' }}
              components={[
                <a key="footer-credit-link" href="https://github.com/ZadniproIon" target="_blank" rel="noreferrer" />,
              ]}
            />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
