import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Asegúrate de tener los estilos

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <h2>Nettoya</h2>
    </div>
    <nav className="sidebar-nav">
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            Mi Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings" className={({ isActive }) => isActive ? "active" : ""}>
            Reservas
          </NavLink>
        </li>
        <li>
          <NavLink to="/cleaners" className={({ isActive }) => isActive ? "active" : ""}>
            Limpiadores
          </NavLink>
        </li>
        <li>
          <NavLink to="/ratings" className={({ isActive }) => isActive ? "active" : ""}>
            Calificaciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? "active" : ""}>
            Notificaciones
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

