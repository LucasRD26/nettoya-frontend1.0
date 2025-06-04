import React, { useState } from 'react';
import AuthService from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../contexts/NotificationContext';

const RegisterPage = () => {
  const [form, setForm] = useState({ nombre: '', apellido: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await AuthService.register(form);
      addNotification('success', '¡Registro exitoso! Ahora puedes iniciar sesión.');
      navigate('/login');
    } catch (err) {
      addNotification('error', err.message || 'Error al registrar usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input type="text" name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" required />
        <button type="submit" disabled={loading}>{loading ? 'Registrando...' : 'Registrarse'}</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
    </div>
  );
};

export default RegisterPage;
