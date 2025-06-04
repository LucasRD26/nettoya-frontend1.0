import React from 'react';
import './Loader.css'; // Asegúrate de tener los estilos para el loader

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
    <span>Cargando...</span>
  </div>
);

export default Loader;
