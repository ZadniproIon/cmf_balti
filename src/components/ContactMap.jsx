'use client';

import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const svgPin = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="38" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.35));">
  <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24c0-6.627-5.373-12-12-12z" fill="#d32f2f"/>
  <circle cx="12" cy="12" r="5" fill="#ffffff"/>
  <circle cx="12" cy="12" r="2.5" fill="#283b6a"/>
</svg>
`;

const customPinIcon = L.divIcon({
  html: svgPin,
  className: 'custom-leaflet-pin',
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -36],
});

const MapFocus = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      map.invalidateSize();
      if (position) {
        map.flyTo(position, 14, { duration: 0.6 });
      }
    });
    return () => cancelAnimationFrame(handle);
  }, [map, position]);

  return null;
};

const ContactMap = ({
  center,
  activePosition,
  markers,
  mapAria,
  getMarkerText,
}) => {
  return (
    <MapContainer
      className="contact-map"
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      aria-label={mapAria}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapFocus position={activePosition} />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customPinIcon}>
          <Popup>
            {marker.keys.map((key) => (
              <p key={`${marker.id}-${key}`} style={{ margin: '4px 0' }}>
                {getMarkerText(key)}
              </p>
            ))}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ContactMap;
