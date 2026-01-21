import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapPin } from 'lucide-react'
import Dropdown from '../components/Dropdown'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import contactStyles from '../styles/contacte.css?raw'
import titleStyles from '../styles/title-and-section-text.css?raw'

const pageStyles = [titleStyles, contactStyles, componentsStyles]

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const entries = [
  {
    key: 'cs-1',
    title: 'Centrul de Sănătate nr. 1',
    lines: [
      'Adresa: Bălți, str. Decebal, 101V',
      'Email: cmfbalti@ms.md',
      'Registratura et1: 0231 7-43-34',
      'Registratura et2: 0231 7-37-65',
      'Registratura et3: 0231 7-07-18',
      'Șef Centru de Sănătate: 0231 7-25-43',
    ],
  },
  {
    key: 'cs-2',
    title: 'Centrul de Sănătate nr. 2',
    lines: [
      'Adresa: Bălți, str. Ștefan cel Mare, 52',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 2-12-32, 068759222',
      'Șef Centru de Sănătate: 0231 2-03-61',
    ],
  },
  {
    key: 'cs-3',
    title: 'Centrul de Sănătate nr. 3',
    lines: [
      'Adresa: Bălți, str. George Goșbuc, 13',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 2-42-74',
      'Șef Centru de Sănătate: 0231 2-51-69',
    ],
  },
  {
    key: 'cs-4',
    title: 'Centrul de Sănătate nr. 4',
    lines: [
      'Adresa: Bălți, str. Strîii, 9',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 6-78-77',
      'Șef Centru de Sănătate: 0231 6-74-20',
    ],
  },
  {
    key: 'cs-5',
    title: 'Centrul de Sănătate nr. 5',
    lines: [
      'Adresa: Bălți, str. Boris Glavan, 21',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 3-81-79',
      'Șef Centru de Sănătate: 0231 3-83-55',
    ],
  },
  {
    key: 'cs-6',
    title: 'Centrul de Sănătate nr. 6',
    lines: [
      'Adresa: Bălți, str. Kiev, 30',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 4-45-77',
      'Șef Centru de Sănătate: 0231 4-34-66',
    ],
  },
  {
    key: 'atis',
    title: 'Centrul de Sănătate Prietenos Tinerilor „ATIS”',
    lines: [
      'Adresa: Bălți, str. Kiev, 30',
      'Email: cmfbalti@ms.md',
      'Telefon: 0231 4-46-62',
    ],
  },
  {
    key: 'ccsm',
    title: 'Centrul Comunitar de Sănătate Mintală (CCSM)',
    lines: [
      'Adresa: Bălți, Strada Decebal, 101V',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 7-10-11',
    ],
  },
  {
    key: 'admin',
    title: 'Administrația',
    lines: [
      'Adresa: Bălți, Strada Decebal, 101V',
      'Email: cmfbalti@ms.md',
      'Anticamera: 0231 7-52-28',
      'Fax: 0231 7-25-88',
      'Serviciul Resurse Unmane: 0231 7-54-80',
      'Contabilitatea: 0231 7-52-29',
      'Serviciul Juridic: 0231 7-52-29',
      'Serviciul Economico-Financiar: 0231 7-16-60',
      'Contabil Șef: 0231 7-25-44',
      'Serviciul Tehnologii Informaționale: 0231 7-25-88',
    ],
  },
  {
    key: 'elizaveta',
    title: 'Oficiul Medicului de Familie s. Elizaveta',
    lines: [
      'Adresa: s. Elizaveta, str. Ștefan cel Mare, 21',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 6-82-82',
    ],
  },
  {
    key: 'sadovoe',
    title: 'Oficiul Medicului de Familie s. Sadovoe',
    lines: [
      'Adresa: s. Sadovoe, str. Parcovaia, 31',
      'Email: cmfbalti@ms.md',
      'Registratura: 0231 5-52-19',
    ],
  },
]

const markers = [
  {
    id: 'nr-1',
    position: [47.774417, 27.895833],
    labels: [
      'Centrul de Sănătate nr. 1',
      'Centrul Comunitar de Sănătate Mintală (CCSM)',
      'Administrația',
    ],
    keys: ['cs-1', 'ccsm', 'admin'],
  },
  {
    id: 'nr-2',
    position: [47.761139, 27.924306],
    labels: ['Centrul de Sănătate nr. 2'],
    keys: ['cs-2'],
  },
  {
    id: 'nr-3',
    position: [47.755611, 27.923361],
    labels: ['Centrul de Sănătate nr. 3'],
    keys: ['cs-3'],
  },
  {
    id: 'nr-4',
    position: [47.772083, 27.938528],
    labels: ['Centrul de Sănătate nr. 4'],
    keys: ['cs-4'],
  },
  {
    id: 'nr-5',
    position: [47.759, 27.887806],
    labels: ['Centrul de Sănătate nr. 5'],
    keys: ['cs-5'],
  },
  {
    id: 'nr-6',
    position: [47.781028, 27.925528],
    labels: ['Centrul de Sănătate nr. 6', 'Centrul de Sănătate Prietenos Tinerilor ,ATIS"'],
    keys: ['cs-6', 'atis'],
  },
  {
    id: 'elizaveta',
    position: [47.78325, 28.013278],
    labels: ['Oficiul Medicului de Familie s. Elizaveta'],
    keys: ['elizaveta'],
  },
  {
    id: 'sadovoe',
    position: [47.778861, 27.798],
    labels: ['Oficiul Medicului de Familie s. Sadovoe'],
    keys: ['sadovoe'],
  },
]

const markerPositions = markers.reduce((acc, marker) => {
  marker.keys.forEach((key) => {
    acc[key] = marker.position
  })
  return acc
}, {})

const getGoogleMapsHref = (key) => {
  const position = markerPositions[key]
  if (!position) {
    return 'https://www.google.com/maps'
  }
  return `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`
}

const MapFocus = ({ activeKey, position }) => {
  const map = useMap()

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      map.invalidateSize()
      if (position) {
        map.flyTo(position, 14, { duration: 0.6 })
      }
    })
    return () => cancelAnimationFrame(handle)
  }, [map, activeKey, position])

  return null
}

const Contacte = () => {
  useDocumentTitle('Contacte - CMF Bălți')
  usePageStyles(pageStyles, 'contacte')

  const [openKey, setOpenKey] = useState(null)
  const centerCmf1 = [47.774417, 27.895833]
  const activePosition = markerPositions[openKey]

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
            <a href={getGoogleMapsHref(entry.key)} target="_blank" rel="noreferrer">
              <MapPin className="link-icon" />Google Maps
            </a>
          </Dropdown>
        ))}
      </div>

      <div id="contact-right-side">
        <MapContainer className="contact-map" center={centerCmf1} zoom={12} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapFocus activeKey={openKey} position={activePosition} />
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>
                {marker.labels.map((label, index) => (
                  <p key={`${marker.id}-${index}`}>{label}</p>
                ))}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}

export default Contacte



