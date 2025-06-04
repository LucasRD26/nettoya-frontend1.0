import React, { useState } from 'react';
import CleanerService from '../../api/cleaners';
import CleanerCard from './CleanerCard';
import Loader from '../layout/Loader';
import './CleanerSearch.css'; // Assuming you have some styles for the search component

const CleanerSearch = () => {
  const [query, setQuery] = useState('');
  const [cleaners, setCleaners] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await CleanerService.searchCleaners(query);
      setCleaners(data);
    } catch (error) {
      alert('Error al buscar limpiadores');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Buscar Limpiador</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Nombre, apellido o email"
          required
        />
        <button type="submit">Buscar</button>
      </form>
      {loading ? (
        <Loader />
      ) : (
        <div className="cleaners-list">
          {cleaners.length === 0 ? (
            <p>No se encontraron resultados.</p>
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

export default CleanerSearch;
