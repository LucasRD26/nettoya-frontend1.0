import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import './Navbar.css'; // Asegúrate de tener estilos para la clase navbar--hidden

const Navbar = () => {
  const { token, handleLogout } = useAuthContext();
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
        setShow(false); // Scroll down, hide
      } else {
        setShow(true); // Scroll up, show
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onLogout = async () => {
    await handleLogout();
    navigate('/login');
  };

  return (
    <header className={`navbar premium-navbar ${show ? '' : 'navbar--hidden'}`}>
      <div className="navbar-brand">
        <Link to="/">Nettoya</Link>
      </div>
      <nav>
        {token ? (
          <button className="logout-btn" onClick={onLogout}>
            Cerrar Sesión
          </button>
        ) : (
          <div className="navbar-auth">
            <Link to="/register" className="btn-link">Registrarse</Link>
            <Link to="/login" className="btn-link">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;


