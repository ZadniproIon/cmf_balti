'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Dropdown from './Dropdown';

const MapPlaceholder = () => (
  <div
    className="contact-map"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eef3f8',
      color: '#283b6a',
      gap: '0.75rem',
      borderRadius: '16px',
    }}
  >
    <MapPin className="link-icon" style={{ width: '32px', height: '32px', color: '#d32f2f' }} aria-hidden="true" />
    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Harta interactivă Bălți</span>
  </div>
);

// Dynamically import ContactMap with ssr: false so Leaflet runs purely on client
const ContactMap = dynamic(() => import('./ContactMap'), {
  ssr: false,
  loading: MapPlaceholder,
});

const entryOrder = [
  'admin',
  'cs1',
  'cs2',
  'cs3',
  'cs4',
  'cs5',
  'cs6',
  'atis',
  'ccsm',
  'elizaveta',
  'sadovoe',
];

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
];

const markerPositions = markers.reduce((acc, marker) => {
  marker.keys.forEach((key) => {
    acc[key] = marker.position;
  });
  return acc;
}, {});

const getGoogleMapsHref = (key) => {
  const position = markerPositions[key];
  if (!position) {
    return 'https://www.google.com/maps';
  }
  return `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`;
};

const centerCmf1 = [47.774417, 27.895833];

const ContactClient = () => {
  const t = useTranslations('contact');
  const [openKey, setOpenKey] = useState(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const activePosition = markerPositions[openKey];
  const entries = t.raw('entries');

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoadMap(true), { timeout: 1200 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setShouldLoadMap(true), 200);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleKey = (key) => {
    setShouldLoadMap(true);
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section id="contact-content" aria-labelledby="contacte-title">
      <h1 id="contacte-title" className="sr-only">
        {t('title')}
      </h1>
      <section id="contact-left-side" aria-labelledby="contacte-list-title">
        <h2 id="contacte-list-title" className="sr-only">
          {t('listTitle')}
        </h2>
        <ul className="contact-list" role="list">
          {entryOrder.map((key) => {
            const entry = entries[key];

            return (
              <li className="contact-list-item" key={key}>
                <Dropdown
                  title={entry.title}
                  isOpen={openKey === key}
                  onToggle={() => toggleKey(key)}
                >
                  <div className="dropdown-text-content">
                    {entry.lines
                      .filter((line) => line && line.trim())
                      .map((line) => (
                        <p key={`${key}-${line}`}>{line}</p>
                      ))}
                  </div>
                  <a
                    href={getGoogleMapsHref(key)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="link-icon" aria-hidden="true" />
                    {t('googleMaps')}
                  </a>
                </Dropdown>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="contact-right-side" aria-labelledby="contacte-map-title">
        <h2 id="contacte-map-title" className="sr-only">
          {t('mapTitle')}
        </h2>
        {shouldLoadMap ? (
          <ContactMap
            center={centerCmf1}
            activePosition={activePosition}
            markers={markers}
            mapAria={t('mapAria')}
            getMarkerText={(key) => t(`markers.${key}`)}
          />
        ) : (
          <MapPlaceholder />
        )}
      </section>
    </section>
  );
};

export default ContactClient;
