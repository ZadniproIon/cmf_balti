import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import infoStyles from '../styles/info-pentru-beneficiari.css?raw'
import pillStyles from '../styles/pill-container.css?raw'
import quickSelectStyles from '../styles/quick-select.css?raw'
import titleStyles from '../styles/title-and-section-text.css?raw'

const pageStyles = [quickSelectStyles, titleStyles, pillStyles, infoStyles, componentsStyles]

const General = () => {
  const { t } = useTranslation()

  useDocumentTitle(t('meta.general.title'), t('meta.general.description'))
  usePageStyles(pageStyles, 'info-beneficiari')

  const rightsItems = t('general.rights.items', { returnObjects: true })
  const responsibilitiesItems = t('general.responsibilities.items', { returnObjects: true })
  const services = t('general.services', { returnObjects: true })
  const insuranceParagraphs = t('general.insurance.paragraphs', { returnObjects: true })

  const programLabel = services.family.programLink
  const programParagraphParts = services.family.paragraph2.split(programLabel)
  const cnamLabel = t('general.insurance.cnamLabel')

  const quickLinks = [
    { href: '#drepturile_pacientului', label: t('general.quickLinks.rights') },
    { href: '#responsabilitatile_pacientului', label: t('general.quickLinks.responsibilities') },
    { href: '#servicii', label: t('general.quickLinks.services') },
    { href: '#asigurarea_obligatorie_de_asistenta_medicala', label: t('general.quickLinks.insurance') },
    { href: '#tarife', label: t('general.quickLinks.tarife') },
  ]

  const tarifeDownloads = [
    {
      year: 2021,
      href: 'https://server.cmf-balti.md/static/pdf/article-pdf-511-0.3289387758139458.pdf',
    },
    {
      year: 2022,
      href: 'https://server.cmf-balti.md/static/pdf/article-pdf-512-0.1886027953116397.pdf',
    },
    {
      year: 2023,
      href: 'https://server.cmf-balti.md/static/pdf/article-pdf-513-0.2620717613034873.pdf',
    },
    {
      year: 2024,
      href: 'https://server.cmf-balti.md/static/pdf/article-pdf-553-0.3840356830293784.pdf',
    },
    {
      year: 2025,
      href: 'https://server.cmf-balti.md/static/pdf/article-pdf-617-0.31922044473368605.pdf',
    },
    {
      year: 2026,
      href: 'https://server.cmf-balti.md/static/pdf/article-pdf-698-0.6186151516443106.pdf',
    },
  ]

  return (
    <>
      <h1 className="sr-only">{t('nav.general')}</h1>
      <section className="quick-select" aria-labelledby="quick-select-title">
        <h2 id="quick-select-title" className="quick-select-title">{t('general.quickSelect')}</h2>
        <nav className="select-options" aria-label="Navigare rapidă">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      <section aria-labelledby="drepturile_pacientului">
        <h2 className="title-text" id="drepturile_pacientului">
          {t('general.rights.title')}
        </h2>
        <div className="section-text">
          <p>{t('general.rights.intro')}</p>
          <ul>
            {rightsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="responsabilitatile_pacientului">
        <h2 className="title-text" id="responsabilitatile_pacientului">
          {t('general.responsibilities.title')}
        </h2>
        <div className="section-text">
          <p>{t('general.responsibilities.intro')}</p>
          <ul>
            {responsibilitiesItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="servicii">
        <h2 className="title-text" id="servicii">{t('general.services.title')}</h2>
        <div className="section-text">
          <div className="servicii-block">
            <article className="block">
              <h3 className="block-title">{services.family.title}</h3>
              <div className="block-content">
                <p>{services.family.paragraph1}</p>
                <br />
                <p>
                  {programParagraphParts.length > 1 ? (
                    <>
                      {programParagraphParts[0]}
                      <u>
                        <a
                          href="https://www.legis.md/cautare/getResults?doc_id=93248&lang=ro"
                          target="_blank"
                          rel="noreferrer"
                          className="simple-link"
                        >
                          {programLabel}
                        </a>
                      </u>
                      {programParagraphParts.slice(1).join(programLabel)}
                    </>
                  ) : (
                    services.family.paragraph2
                  )}
                </p>
                <br />
                <div className="list">
                  <p>
                    <b>{services.family.stepsTitle}</b>
                  </p>
                  <ol>
                    {services.family.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>

            <article className="block">
              <h3 className="block-title">{services.lab.title}</h3>
              <div className="block-content">
                <p>{services.lab.paragraph1}</p>
                <br />
                <div className="list">
                  <p>{services.lab.listTitle}</p>
                  <ol>
                    {services.lab.labs.map((lab) => (
                      <li key={lab}>{lab}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>

            <article className="block">
              <h3 className="block-title">{services.imaging.title}</h3>
              <div className="block-content">
                <div className="list">
                  <p>{services.imaging.locationsTitle}</p>
                  <ul>
                    {services.imaging.locations.map((location) => (
                      <li key={location}>{location}</li>
                    ))}
                  </ul>
                </div>
                <br />
                <p>{services.imaging.paragraph1}</p>
                <br />
                <p>{services.imaging.paragraph2}</p>
                <br />
                <div className="list">
                  <p>
                    <b>{services.imaging.radiologyTitle}</b>
                  </p>
                  <ul>
                    {services.imaging.radiology.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="list">
                  <p>
                    <b>{services.imaging.ultrasoundTitle}</b>
                  </p>
                  <ul>
                    {services.imaging.ultrasound.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="list">
                  <p>
                    <b>{services.imaging.endoscopyTitle}</b>
                  </p>
                  <ul>
                    {services.imaging.endoscopy.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="block">
              <h3 className="block-title">{services.rehab.title}</h3>
              <div className="block-content">
                <p>{services.rehab.paragraph1}</p>
                <br />
                <div className="list">
                  <p>
                    <b>{services.rehab.scheduleTitle}</b>
                  </p>
                  <ul>
                    {services.rehab.schedule.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <br />
                <div className="list">
                  <p>
                    <b>{services.rehab.cabinetsTitle}</b>
                  </p>
                  <ul>
                    {services.rehab.cabinets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <br />
                <div className="list">
                  <p>
                    <b>{services.rehab.methodsTitle}</b>
                  </p>
                  <ul>
                    {services.rehab.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <br />
                <div className="list">
                  <p>
                    <b>{services.rehab.proceduresTitle}</b>
                  </p>
                  <ul>
                    {services.rehab.procedures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="asigurarea_obligatorie_de_asistenta_medicala">
        <h2 className="title-text" id="asigurarea_obligatorie_de_asistenta_medicala">
          {t('general.insurance.title')}
        </h2>
        <div className="section-text">
          {insuranceParagraphs.map((paragraph, index) => {
            if (index === 1 && paragraph.includes(cnamLabel)) {
              const parts = paragraph.split(cnamLabel)
              return (
                <p key={paragraph}>
                  {parts[0]}
                  <a href="http://cnam.md/" target="_blank" rel="noreferrer" className="simple-link">
                    {cnamLabel}
                  </a>
                  {parts.slice(1).join(cnamLabel)}
                </p>
              )
            }

            return <p key={paragraph}>{paragraph}</p>
          })}
        </div>
      </section>

      <section aria-labelledby="tarife">
        <h2 className="title-text" id="tarife">{t('general.tarife.title')}</h2>
        <div className="tarife">
          <h3 className="tarife-title-text">{t('general.tarife.subtitle')}</h3>
          <div className="download-button-class">
            {tarifeDownloads.map((item) => (
              <a
                key={item.year}
                className="download-button"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <Download className="download-icon" />
                <p>{t('general.tarife.year', { year: item.year })}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default General
