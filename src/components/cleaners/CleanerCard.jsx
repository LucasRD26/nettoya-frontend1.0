import React from 'react';
import './CleanerCard.css'; // Assuming you have a CSS file for styling
const CleanerCard = ({ cleaner, onSelect }) => (
  <div className="cleaner-card" onClick={() => onSelect?.(cleaner)}>
    <img
      src={cleaner.fotoUrl || '/default-avatar.png'}
      alt={cleaner.nombre}
      className="cleaner-avatar"
    />
    <div className="cleaner-info">
      <h3>{cleaner.nombre} {cleaner.apellido}</h3>
      <p>Rating: {cleaner.rating?.toFixed(1) ?? 'N/A'}</p>
      <p>Precio/hora: ${cleaner.precioHora?.toFixed(2) ?? 'N/A'}</p>
      <p>Disponibilidad: {cleaner.disponibilidad ?? 'N/A'}</p>
    </div>
  </div>
);

export default CleanerCard;
