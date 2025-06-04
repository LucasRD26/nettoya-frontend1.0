import React, { useEffect, useState } from 'react';
import CleanerService from '../../api/cleaners';
import CleanerCard from './CleanerCard';
import Loader from '../layout/Loader';
import './CleanersList.css'; // Asegúrate de tener estilos para la lista

const CleanersList = () => {
  const [cleaners, setCleaners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCleaners = async () => {
      try {
        const data = await CleanerService.getAllCleaners(); // O getAllCleaners()
        setCleaners(data);
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    };
    fetchCleaners();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="cleaners-list">
      {cleaners.length === 0 ? (
        <p>No tienes limpiadores favoritos aún.</p>
      ) : (
        cleaners.map(cleaner => (
          <CleanerCard key={cleaner.id} cleaner={cleaner} />
        ))
      )}
    </div>
  );
};

export default CleanersList;
