import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
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

const entryOrder = ['admin', 'cs1', 'cs2', 'cs3', 'cs4', 'cs5', 'cs6', 'atis', 'ccsm', 'elizaveta', 'sadovoe']

const markers = [
  {
    id: 'nr-1',
    position: [47.774417, 27.895833],
    keys: ['cs1', 'ccsm', 'admin'],
  },
  {
    id: 'nr-2',
    position: [47.761139, 27.924306],
    keys: ['cs2'],
  },
  {
    id: 'nr-3',
    position: [47.755611, 27.923361],
    keys: ['cs3'],
  },
  {
    id: 'nr-4',
    position: [47.772083, 27.938528],
    keys: ['cs4'],
  },
  {
    id: 'nr-5',
    position: [47.759, 27.887806],
    keys: ['cs5'],
  },
  {
    id: 'nr-6',
    position: [47.781028, 27.925528],
    keys: ['cs6', 'atis'],
  },
  {
    id: 'elizaveta',
    position: [47.78325, 28.013278],
    keys: ['elizaveta'],
  },
  {
    id: 'sadovoe',
    position: [47.778861, 27.798],
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
  const { t } = useTranslation()

  useDocumentTitle(t('meta.contact.title'), t('meta.contact.description'))
  usePageStyles(pageStyles, 'contacte')

  const [openKey, setOpenKey] = useState(null)
  const centerCmf1 = [47.774417, 27.895833]
  const activePosition = markerPositions[openKey]
  const entries = t('contact.entries', { returnObjects: true })

  const toggleKey = (key) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <section id="contact-content" aria-labelledby="contacte-title">
      <h1 id="contacte-title" className="sr-only">{t('contact.title')}</h1>
      <section id="contact-left-side" aria-labelledby="contacte-list-title">
        <h2 id="contacte-list-title" className="sr-only">{t('contact.listTitle')}</h2>
        <ul className="contact-list" role="list">
          {entryOrder.map((key) => {
            const entry = entries[key]

            return (
              <li className="contact-list-item" key={key}>
                <Dropdown
                  title={entry.title}
                  isOpen={openKey === key}
                  onToggle={() => toggleKey(key)}
                >
                  <div className="dropdown-text-content">
                    {entry.lines.filter((line) => line && line.trim()).map((line) => (
                      <p key={`${key}-${line}`}>{line}</p>
                    ))}
                  </div>
                  <a href={getGoogleMapsHref(key)} target="_blank" rel="noreferrer">
                    <MapPin className="link-icon" />{t('contact.googleMaps')}
                  </a>
                </Dropdown>
              </li>
            )
          })}
        </ul>
      </section>

      <section id="contact-right-side" aria-labelledby="contacte-map-title">
        <h2 id="contacte-map-title" className="sr-only">{t('contact.mapTitle')}</h2>
        <MapContainer
          className="contact-map"
          center={centerCmf1}
          zoom={12}
          scrollWheelZoom={true}
          aria-label={t('contact.mapAria')}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapFocus activeKey={openKey} position={activePosition} />
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>
                {marker.keys.map((key) => (
                  <p key={`${marker.id}-${key}`}>{t(`contact.markers.${key}`)}</p>
                ))}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </section>
  )
}

export default Contacte
