import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ lat = 19.4326, lon = -99.1332, zoom = 13, markers = [] }) => (
  <div style={{ height: '400px', width: '100%' }}>
    <MapContainer center={[lat, lon]} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((m, idx) => (
        <Marker key={idx} position={[m.lat, m.lon]}>
          <Popup>
            {m.label || `Marcador #${idx + 1}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);

export default MapView;
