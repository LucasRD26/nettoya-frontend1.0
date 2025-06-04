import React from 'react';
import useLocation from '../hooks/useLocation';
import MapView from '../components/location/MapView';

const LocationPage = () => {
  const { lat, lon, error } = useLocation();

  return (
    <div className="location-page">
      <h2>Mi Ubicación</h2>
      {error && <p>Error: {error}</p>}
      {lat && lon ? (
        <MapView lat={lat} lon={lon} markers={[{ lat, lon, label: 'Tú' }]} />
      ) : (
        <p>Obteniendo ubicación...</p>
      )}
    </div>
  );
};

export default LocationPage;
