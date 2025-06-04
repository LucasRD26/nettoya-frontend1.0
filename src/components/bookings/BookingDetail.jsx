import React from 'react';
import './BookingDetail.css'; // Asegúrate de tener los estilos para el modal

const BookingDetail = ({ booking, onClose }) => {
console.log('Datos de la reserva:', booking); // <-- Agrega esto
  return (
    <div className="booking-detail-modal">
      <div className="booking-detail-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h3>Detalle de Reserva</h3>
        <p><strong>Fecha:</strong> {new Date(booking.fecha).toLocaleString()}</p>
        <p><strong>Dirección:</strong> {booking.direccion}</p>
        <p><strong>Notas:</strong> {booking.notas || 'N/A'}</p>
        <p>
          <strong>Limpiador:</strong> {booking.cleanerNombre} {booking.cleanerApellido}
        </p>
        <p><strong>Estado:</strong> {booking.estado}</p>
        {/* Puedes agregar más detalles según tu modelo */}
      </div>
    </div>
  );
};

export default BookingDetail;
