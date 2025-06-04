import React, { useEffect, useState } from 'react';
import BookingService from '../../api/bookings';
import Loader from '../layout/Loader';
import './BookingsSummary.css'; // Asegúrate de tener estilos para la lista

const BookingsSummary = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await BookingService.getUserBookings();
        setBookings(data.filter(b => new Date(b.fecha) >= new Date()));
      } catch (error) {
        alert('Error al cargar tus próximas reservas');
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bookings-summary">
      {bookings.length === 0 ? (
        <p>No tienes reservas próximas.</p>
      ) : (
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              <strong>Fecha:</strong> {new Date(booking.fecha).toLocaleString()}<br />
              <strong>Limpiador:</strong> {booking.cleanerNombre} {booking.cleanerApellido}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingsSummary;
