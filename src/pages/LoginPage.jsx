import React, { useState } from 'react';
import AuthService from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../contexts/NotificationContext';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await AuthService.login(form);
      addNotification('success', '¡Bienvenido!');
      navigate('/dashboard');
    } catch (err) {
      addNotification('error', err.message || 'Credenciales inválidas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" required />
        <button type="submit" disabled={loading}>{loading ? 'Ingresando...' : 'Ingresar'}</button>
      </form>
      <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
    </div>
  );
};

export default LoginPage;
