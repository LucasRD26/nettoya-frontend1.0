import React, { useEffect, useState } from 'react';
import UserService from '../../api/users';
import EditProfileForm from './EditProfileForm';
import Loader from '../layout/Loader';
import './UserProfile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await UserService.getProfile();
        setProfile(data);
      } catch (error) {
        alert('Error al cargar perfil');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleEdit = () => setEditing(true);
  const handleCancel = () => setEditing(false);

  const handleSave = async (updatedProfile) => {
    setLoading(true);
    try {
      const data = await UserService.updateProfile(updatedProfile);
      setProfile(data);
      setEditing(false);
    } catch (error) {
      alert('Error al guardar perfil');
    } finally {
      setLoading(false);
    }
  };

  const handleBecomeCleaner = async () => {
    if (!window.confirm('¿Seguro que quieres convertirte en limpiador?')) return;
    setLoading(true);
    try {
      const updatedProfile = await UserService.becomeCleaner();
      setProfile(updatedProfile);
      alert('¡Ahora eres limpiador! Actualiza tu perfil para agregar detalles profesionales.');
    } catch (err) {
      alert(err.message || 'Error al cambiar de rol');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (!profile) return <p>No se pudo cargar el perfil.</p>;

  return (
    <div className="user-profile">
      <h2>Mi Perfil</h2>
      {editing ? (
        <EditProfileForm profile={profile} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <div>
          <img
            src={profile.fotoUrl || '/default-avatar.png'}
            alt="Avatar"
            className="profile-avatar"
          />
          <p><strong>Nombre:</strong> {profile.nombre} {profile.apellido}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Edad:</strong> {profile.edad ?? 'N/A'}</p>
          <p><strong>Dirección:</strong> {profile.direccion ?? 'N/A'}</p>
          <p><strong>Descripción:</strong> {profile.descripcion ?? 'N/A'}</p>
          <p><strong>Rol:</strong> {profile.rol}</p>
          <p><strong>Rating:</strong> {profile.rating ?? 'N/A'}</p>
          
          <div className="profile-actions">
            <button onClick={handleEdit}>Editar Perfil</button>
            {profile.rol !== "CLEANER" && (
              <button 
                onClick={handleBecomeCleaner}
                className="become-cleaner-btn"
              >
                Quiero ser Limpiador
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

