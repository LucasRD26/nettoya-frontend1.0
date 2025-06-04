import React, { useState } from 'react';
import AuthService from '../api/auth';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await AuthService.register(form);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.message || 'Error al registrar usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">¡Registro exitoso! Redirigiendo...</div>}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          required
        />
      </div>
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
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
