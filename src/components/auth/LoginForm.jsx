import React, { useState } from 'react';
import AuthService from '../api/auth'; // Ajusta la ruta según tu estructura
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await AuthService.login(form);
      navigate('/dashboard'); // O la ruta principal protegida
    } catch (err) {
      setError(err.message || 'Credenciales inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
