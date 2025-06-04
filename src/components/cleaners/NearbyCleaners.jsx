import React, { useState } from 'react';
import CleanerService from '../../api/cleaners';
import CleanerCard from './CleanerCard';
import Loader from '../layout/Loader';
import './NearbyCleaners.css'; // Assuming you have some styles for the nearby cleaners component

const NearbyCleaners = () => {
  const [coords, setCoords] = useState({ lat: '', lon: '', radius: 5 });
  const [cleaners, setCleaners] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCoords({ ...coords, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await CleanerService.getNearbyCleaners(coords.lat, coords.lon, coords.radius);
      setCleaners(data);
    } catch (error) {
      alert('Error al buscar limpiadores cercanos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Limpiadores Cercanos</h2>
      <form onSubmit={handleSearch}>
        <input
          type="number"
          name="lat"
          value={coords.lat}
          onChange={handleChange}
          placeholder="Latitud"
          step="any"
          required
        />
        <input
          type="number"
          name="lon"
          value={coords.lon}
          onChange={handleChange}
          placeholder="Longitud"
          step="any"
          required
        />
        <input
          type="number"
          name="radius"
          value={coords.radius}
          onChange={handleChange}
          placeholder="Radio (km)"
          min={1}
          max={50}
        />
        <button type="submit">Buscar</button>
      </form>
      {loading ? (
        <Loader />
      ) : (
        <div className="cleaners-list">
          {cleaners.length === 0 ? (
            <p>No se encontraron limpiadores en la zona.</p>
          ) : (
            cleaners.map(cleaner => (
              <CleanerCard key={cleaner.id} cleaner={cleaner} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NearbyCleaners;
