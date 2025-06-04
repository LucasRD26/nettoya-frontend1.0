import React, { useEffect, useState } from 'react';
import CleanerService from '../../api/cleaners';
import Loader from '../layout/Loader';

const CleanerProfile = ({ cleanerId }) => {
  const [cleaner, setCleaner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCleaner = async () => {
      try {
        const data = await CleanerService.getCleanerById(cleanerId);
        setCleaner(data);
      } catch (error) {
        alert('Error al cargar el perfil del limpiador');
      } finally {
        setLoading(false);
      }
    };
    fetchCleaner();
  }, [cleanerId]);

  if (loading) return <Loader />;
  if (!cleaner) return <p>No se pudo cargar el perfil del limpiador.</p>;

  return (
    <div className="cleaner-profile">
      <h2>Perfil del Limpiador</h2>
      <img
        src={cleaner.fotoUrl || '/default-avatar.png'}
        alt="Avatar"
        className="profile-avatar"
      />
      <p><strong>Nombre:</strong> {cleaner.nombre} {cleaner.apellido}</p>
      <p><strong>Email:</strong> {cleaner.email}</p>
      <p><strong>Rating:</strong> {cleaner.rating ?? 'N/A'}</p>
      <p><strong>Precio/hora:</strong> ${cleaner.precioHora?.toFixed(2) ?? 'N/A'}</p>
      <p><strong>Disponibilidad:</strong> {cleaner.disponibilidad ?? 'N/A'}</p>
      <p><strong>Descripción:</strong> {cleaner.descripcion ?? 'N/A'}</p>
      {/* Puedes agregar más campos según tu modelo */}
    </div>
  );
};

export default CleanerProfile;
