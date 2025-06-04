import React, { useEffect, useState } from 'react';
import BookingService from '../../api/bookings';
import BookingDetail from './BookingDetail';
import Loader from '../layout/Loader';
import './BookingList.css';


const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await BookingService.getUserBookings();
        setBookings(data);
      } catch (error) {
        alert('Error al cargar reservas');
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleSelect = (booking) => setSelectedBooking(booking);

  const handleCloseDetail = () => setSelectedBooking(null);

  if (loading) return <Loader />;

  return (
    <div>
      <h2>Mis Reservas</h2>
      {bookings.length === 0 ? (
        <p>No tienes reservas.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking.id} onClick={() => handleSelect(booking)}>
              <strong>Fecha:</strong> {new Date(booking.fecha).toLocaleString()}<br />
              <strong>Limpiador:</strong> {booking.cleanerNombre} {booking.cleanerApellido}
            </li>
          ))}
        </ul>
      )}
      {selectedBooking && (
        <BookingDetail booking={selectedBooking} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default BookingList;
