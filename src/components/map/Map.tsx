'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MarkerData, AddMarkerProps } from './types';

// --- STEP 1: custom icon Leaflet ---
const defaultIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// --- STEP 2: component untuk nambah marker via klik ---
const AddMarker: React.FC<AddMarkerProps> = ({ onAdd }) => {
  useMapEvents({
    click(e) {
      onAdd(e.latlng);
    },
  });
  return null;
};

// --- STEP 3: main Map component ---
const Map: React.FC = () => {
  const [markers, setMarkers] = useState<MarkerData[]>([
    { lat: -6.914744, lng: 107.609810, name: 'Contoh Cafe' },
  ]);

  const handleAddMarker = (latlng: L.LatLngLiteral) => {
    const name = prompt('Nama tempat:');
    if (name) {
      setMarkers([...markers, { lat: latlng.lat, lng: latlng.lng, name }]);
    }
  };

  return (
    <MapContainer
      center={[-6.914744, 107.609810]}
      zoom={13}
      className="h-112 rounded-2xl justify-content-center left-1/2 transform -translate-x-1/2"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.lat, marker.lng]} icon={defaultIcon}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
      <AddMarker onAdd={handleAddMarker} />
    </MapContainer>
  );
};

export default Map;