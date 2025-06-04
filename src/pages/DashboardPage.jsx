import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import CleanersList from '../components/cleaners/CleanersList';
import BookingsSummary from '../components/bookings/BookingsSummary';

const DashboardPage = () => {
  const { user } = useAuthContext();

  return (
    <div className="dashboard-page">
      <h1>Bienvenido, {user?.nombre}</h1>
      <div className="dashboard-grid">
        <section className="cleaners-section">
          <h2>Tus Limpiadores Favoritos</h2>
          <CleanersList />
        </section>
        
        <section className="bookings-section">
          <h2>Próximas Reservas</h2>
          <BookingsSummary />
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
