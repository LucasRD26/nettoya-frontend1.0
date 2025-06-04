import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingService from '../../api/bookings';
import CleanerService from '../../api/cleaners';
import Loader from '../layout/Loader';
import './BookingForm.css';

const BookingForm = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fecha: '',
    direccion: '',
    notas: '',
    cleanerId: '' // Nuevo campo para selección de limpiador
  });
  const [cleaners, setCleaners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCleaners, setLoadingCleaners] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Cargar limpiadores al montar el componente
  useEffect(() => {
    const fetchCleaners = async () => {
      try {
        const data = await CleanerService.getAllCleaners();
        setCleaners(data);
      } catch (err) {
        setError('Error al cargar los limpiadores');
      } finally {
        setLoadingCleaners(false);
      }
    };
    fetchCleaners();
  }, []);

  const handleChange = (e) => {
    setForm({ 
      ...form, 
      [e.target.name]: e.target.type === 'select-one' ? 
        parseInt(e.target.value) : e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (!form.cleanerId) {
      setError('Debes seleccionar un limpiador');
      return;
    }

    setLoading(true);
    try {
      await BookingService.createBooking(form);
      setSuccess(true);
      setForm({ fecha: '', direccion: '', notas: '', cleanerId: '' });
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/bookings');
      }
    } catch (err) {
      setError(err.message || 'Error al crear la reserva');
    } finally {
      setLoading(false);
    }
  };

  if (loadingCleaners) return <Loader />;

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Reservar Limpieza</h3>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">¡Reserva creada con éxito!</div>}

      <div className="form-group">
        <label>Limpiador:</label>
        <select
          name="cleanerId"
          value={form.cleanerId}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un limpiador</option>
          {cleaners.map(cleaner => (
            <option key={cleaner.id} value={cleaner.id}>
              {cleaner.nombre} {cleaner.apellido} - ${cleaner.precioHora}/hora
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Fecha y hora:</label>
        <input
          type="datetime-local"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Dirección:</label>
        <input
          type="text"
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Notas adicionales:</label>
        <textarea
          name="notas"
          value={form.notas}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? <Loader small /> : 'Confirmar Reserva'}
      </button>
    </form>
  );
};

export default BookingForm;
