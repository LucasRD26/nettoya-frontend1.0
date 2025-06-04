import React from 'react';
import TopCleaners from '../components/cleaners/TopCleaners';
import NearbyCleaners from '../components/cleaners/NearbyCleaners';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Bienvenido a Nettoya</h1>
      <button onClick={() => navigate('/bookings/new')}>Reservar Limpieza</button>
      <section>
        <TopCleaners />
      </section>
      <section>
        <NearbyCleaners />
      </section>
    </div>
  );
};

export default HomePage;
