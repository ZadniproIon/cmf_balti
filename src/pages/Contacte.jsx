import { useState } from 'react'
import Dropdown from '../components/Dropdown'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import contactStyles from '../styles/contacte.css?raw'
import titleStyles from '../styles/title-and-section-text.css?raw'

const pageStyles = [titleStyles, contactStyles, componentsStyles]

const entries = [
  {
    key: 'cs-1',
    title: 'Centrul de Sănătate nr. 1',
    lines: [
      { label: 'Adresa:', value: 'Bălți, str. Decebal, 101V' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura et1:', value: '(0231) 7-43-34' },
      { label: 'Registratura et2:', value: '(0231) 7-37-65' },
      { label: 'Registratura et3:', value: '(0231) 7-07-18' },
      { label: 'Șef Centru de Sănătate:', value: '(0231) 7-25-43' },
    ],
  },
  {
    key: 'cs-2',
    title: 'Centrul de Sănătate nr. 2',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Strada Ștefan cel Mare, 52' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura:', value: '(0231) 2-12-32, 068759222' },
      { label: 'Șef Centru de Sănătate:', value: '(0231) 2-03-61' },
    ],
  },
  {
    key: 'cs-3',
    title: 'Centrul de Sănătate nr. 3',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Strada George Goșbuc, 13' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura:', value: '(0231) 2-42-74' },
      { label: 'Șef Centru de Sănătate:', value: '(0231) 2-51-69' },
    ],
  },
  {
    key: 'cs-4',
    title: 'Centrul de Sănătate nr. 4',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Стрийская, 9' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura:', value: '(0231) 6-78-77' },
      { label: 'Șef Centru de Sănătate:', value: '(0231) 6-74-20' },
    ],
  },
  {
    key: 'cs-5',
    title: 'Centrul de Sănătate nr. 5',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Strada Boris Glăvan, 21' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura:', value: '(0231) 3-81-79' },
      { label: 'Șef Centru de Sănătate:', value: '(0231) 3-83-55' },
    ],
  },
  {
    key: 'cs-6',
    title: 'Centrul de Sănătate nr. 6',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Strada Kiev, 30' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura:', value: '(0231) 4-45-77' },
      { label: 'Șef Centru de Sănătate:', value: '(0231) 4-34-66' },
    ],
  },
  {
    key: 'atis',
    title: 'Centrul de Sănătate Prietenos Tinerilor „ATIS”',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Strada Kiev, 30' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
    ],
  },
  {
    key: 'ccsm',
    title: 'Centrul Comunitar de Sănătate Mintală (CCSM)',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Strada Decebal, 101V' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
    ],
  },
  {
    key: 'admin',
    title: 'Administrația',
    lines: [
      { label: 'Adresa:', value: 'Bălți, Strada Decebal, 101V' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Anticamera:', value: '(0231) 7-52-28' },
      { label: 'Fax:', value: '(0231) 7-25-88' },
      { label: 'Serviciul Resurse Unmane:', value: '(0231) 7-54-80' },
      { label: 'Contabilitatea:', value: '(0231) 7-52-29' },
      { label: 'Serviciul Juridic:', value: '(0231) 7-52-29' },
      { label: 'Serviciul Economico-Financiar:', value: '(0231) 7-16-60' },
      { label: 'Contabil Șef:', value: '(0231) 7-25-44' },
      { label: 'Serviciul Tehnologii Informaționale:', value: '(0231) 7-25-88' },
    ],
  },
  {
    key: 'elizaveta',
    title: 'Oficiul Medicului de Familie s. Elizaveta',
    lines: [
      { label: 'Adresa:', value: 's. Elizaveta, Unnamed Road, 21' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura:', value: '(0231) 6-82-82' },
    ],
  },
  {
    key: 'sadovoe',
    title: 'Oficiul Medicului de Familie s. Sadovoe',
    lines: [
      { label: 'Adresa:', value: 's. Sadovoe, str. Parcovaia, 31' },
      { label: 'Email:', value: 'cmfbalti@ms.md' },
      { label: 'Registratura:', value: '(0231) 5-52-19' },
    ],
  },
]

const Contacte = () => {
  useDocumentTitle('Contacte - CMF Bălți')
  usePageStyles(pageStyles, 'contacte')

  const [openKey, setOpenKey] = useState(null)

  const toggleKey = (key) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <div id="contact-content">
      <div id="contact-left-side">
        {entries.map((entry) => (
          <Dropdown
            key={entry.key}
            title={entry.title}
            isOpen={openKey === entry.key}
            onToggle={() => toggleKey(entry.key)}
          >
            <div className="dropdown-text-content">
              {entry.lines.map((line) => (
                <p key={`${entry.key}-${line.label}`}>
                  <strong>{line.label}</strong> {line.value}
                </p>
              ))}
            </div>
            <a href="">
              <i className="fa-solid fa-location-dot"></i>Google Maps
            </a>
          </Dropdown>
        ))}
      </div>

      <div id="contact-right-side">
        <p>There should be something here, like a map</p>
        <p>Maybe I will add it, maybe not 🥱</p>
      </div>
    </div>
  )
}

export default Contacte

