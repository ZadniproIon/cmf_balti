'use client';

import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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
      scrollWheelZoom={true}
      aria-label={mapAria}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapFocus position={activePosition} />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
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
