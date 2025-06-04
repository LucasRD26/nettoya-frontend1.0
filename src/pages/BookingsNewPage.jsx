import React from 'react';
import BookingForm from '../components/bookings/BookingForm';

const BookingsNewPage = () => (
  <div className="bookings-new-page">
    <div className="booking-card">
      <h2 className="booking-title">Reservar Limpieza</h2>
      <BookingForm />
    </div>
  </div>
);

export default BookingsNewPage;

