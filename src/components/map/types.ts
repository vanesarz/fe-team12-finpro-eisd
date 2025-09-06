import { LatLngLiteral } from 'leaflet';

export interface MarkerData {
  lat: number;
  lng: number;
  name: string;
}

export interface AddMarkerProps {
  onAdd: (latlng: LatLngLiteral) => void;
}