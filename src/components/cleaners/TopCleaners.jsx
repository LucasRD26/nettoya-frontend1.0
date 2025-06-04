import React, { useEffect, useState } from 'react';
import CleanerService from '../../api/cleaners';
import CleanerCard from './CleanerCard';
import Loader from '../layout/Loader';
import './TopCleaners.css'; // Assuming you have some styles for the top cleaners component

const TopCleaners = () => {
  const [cleaners, setCleaners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopCleaners = async () => {
      try {
        const data = await CleanerService.getTopCleaners();
        setCleaners(data);
      } catch (error) {
        alert('Error al cargar los mejores limpiadores');
      } finally {
        setLoading(false);
      }
    };
    fetchTopCleaners();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h2>Top Limpiadores</h2>
      <div className="cleaners-list">
        {cleaners.map(cleaner => (
          <CleanerCard key={cleaner.id} cleaner={cleaner} />
        ))}
      </div>
    </div>
  );
};

export default TopCleaners;
