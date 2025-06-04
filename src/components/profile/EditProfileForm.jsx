import React, { useState } from 'react';
import './EditProfileForm.css'; // Asegúrate de tener los estilos para el formulario

const EditProfileForm = ({ profile, onSave, onCancel }) => {
  const [form, setForm] = useState({
    nombre: profile.nombre || '',
    apellido: profile.apellido || '',
    edad: profile.edad || '',
    direccion: profile.direccion || '',
    fotoUrl: profile.fotoUrl || '',
    descripcion: profile.descripcion || ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-profile-form">
      <h3>Editar Perfil</h3>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="apellido" value={form.apellido} onChange={handleChange} required />
      </div>
      <div>
        <label>Edad:</label>
        <input type="number" name="edad" value={form.edad} onChange={handleChange} min="0" />
      </div>
      <div>
        <label>Dirección:</label>
        <input type="text" name="direccion" value={form.direccion} onChange={handleChange} />
      </div>
      <div>
        <label>Foto URL:</label>
        <input type="text" name="fotoUrl" value={form.fotoUrl} onChange={handleChange} />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea name="descripcion" value={form.descripcion} onChange={handleChange} />
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: '1rem' }}>
        Cancelar
      </button>
    </form>
  );
};

export default EditProfileForm;
