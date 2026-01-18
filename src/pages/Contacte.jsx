import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
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
      'Adresa: Bălți, str. Decebal, 101V',
      'Email: cmfbalti@ms.md',
      'Registratura et1: (0231) 7-43-34',
      'Registratura et2: (0231) 7-37-65',
      'Registratura et3: (0231) 7-07-18',
      'Șef Centru de Sănătate: (0231) 7-25-43',
    ],
  },
  {
    key: 'cs-2',
    title: 'Centrul de Sănătate nr. 2',
    lines: [
      'Adresa: Bălți, Strada Ștefan cel Mare, 52',
      'Email: cmfbalti@ms.md',
      'Registratura: (0231) 2-12-32, 068759222',
      'Șef Centru de Sănătate: (0231) 2-03-61',
    ],
  },
  {
    key: 'cs-3',
    title: 'Centrul de Sănătate nr. 3',
    lines: [
      'Adresa: Bălți, Strada George Goșbuc, 13',
      'Email: cmfbalti@ms.md',
      'Registratura: (0231) 2-42-74',
      'Șef Centru de Sănătate: (0231) 2-51-69',
    ],
  },
  {
    key: 'cs-4',
    title: 'Centrul de Sănătate nr. 4',
    lines: [
      'Adresa: Bălți, Стрийская, 9',
      'Email: cmfbalti@ms.md',
      'Registratura: (0231) 6-78-77',
      'Șef Centru de Sănătate: (0231) 6-74-20',
    ],
  },
  {
    key: 'cs-5',
    title: 'Centrul de Sănătate nr. 5',
    lines: [
      'Adresa: Bălți, Strada Boris Glăvan, 21',
      'Email: cmfbalti@ms.md',
      'Registratura: (0231) 3-81-79',
      'Șef Centru de Sănătate: (0231) 3-83-55',
    ],
  },
  {
    key: 'cs-6',
    title: 'Centrul de Sănătate nr. 6',
    lines: [
      'Adresa: Bălți, Strada Kiev, 30',
      'Email: cmfbalti@ms.md',
      'Registratura: (0231) 4-45-77',
      'Șef Centru de Sănătate: (0231) 4-34-66',
    ],
  },
  {
    key: 'atis',
    title: 'Centrul de Sănătate Prietenos Tinerilor „ATIS”',
    lines: [
      'Adresa: Bălți, Strada Kiev, 30',
      'Email: cmfbalti@ms.md',
    ],
  },
  {
    key: 'ccsm',
    title: 'Centrul Comunitar de Sănătate Mintală (CCSM)',
    lines: [
      'Adresa: Bălți, Strada Decebal, 101V',
      'Email: cmfbalti@ms.md',
    ],
  },
  {
    key: 'admin',
    title: 'Administrația',
    lines: [
      'Adresa: Bălți, Strada Decebal, 101V',
      'Email: cmfbalti@ms.md',
      'Anticamera: (0231) 7-52-28',
      'Fax: (0231) 7-25-88',
      'Serviciul Resurse Unmane: (0231) 7-54-80',
      'Contabilitatea: (0231) 7-52-29',
      'Serviciul Juridic: (0231) 7-52-29',
      'Serviciul Economico-Financiar: (0231) 7-16-60',
      'Contabil Șef: (0231) 7-25-44',
      'Serviciul Tehnologii Informaționale: (0231) 7-25-88',
    ],
  },
  {
    key: 'elizaveta',
    title: 'Oficiul Medicului de Familie s. Elizaveta',
    lines: [
      'Adresa: s. Elizaveta, Unnamed Road, 21',
      'Email: cmfbalti@ms.md',
      'Registratura: (0231) 6-82-82',
    ],
  },
  {
    key: 'sadovoe',
    title: 'Oficiul Medicului de Familie s. Sadovoe',
    lines: [
      'Adresa: s. Sadovoe, str. Parcovaia, 31',
      'Email: cmfbalti@ms.md',
      'Registratura: (0231) 5-52-19',
    ],
  },
]

const MapFocus = ({ activeKey, targetKey, position }) => {
  const map = useMap()
  const previousKey = useRef(null)

  useEffect(() => {
    if (activeKey === targetKey && previousKey.current !== targetKey) {
      map.setView(position, 14)
    }
    previousKey.current = activeKey
  }, [activeKey, targetKey, position, map])

  return null
}

const Contacte = () => {
  useDocumentTitle('Contacte - CMF Bălți')
  usePageStyles(pageStyles, 'contacte')

  const [openKey, setOpenKey] = useState(null)
  const centerCmf1 = [47.7744167, 27.8958333]

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
              {entry.lines.filter((line) => line && line.trim()).map((line, index) => (
                <p key={`${entry.key}-${index}`}>{line}</p>
              ))}
            </div>
            <a href="">
              <i className="fa-solid fa-location-dot"></i>Google Maps
            </a>
          </Dropdown>
        ))}
      </div>

      <div id="contact-right-side">
        <MapContainer center={centerCmf1} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapFocus activeKey={openKey} targetKey="cs-1" position={centerCmf1} />
          <Marker position={centerCmf1}>
            <Popup>Centrul de Sanatate nr. 1</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contacte

