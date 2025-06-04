import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="notfound-page">
    <h1>404</h1>
    <p>Página no encontrada.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

export default NotFoundPage;
