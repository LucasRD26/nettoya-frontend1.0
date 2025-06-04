import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Opcional: cargar perfil al iniciar si hay token
    const fetchProfile = async () => {
      if (token) {
        try {
          // Puedes traer el perfil desde UserService si lo deseas
          setUser({}); // O setUser(await UserService.getProfile());
        } catch {
          handleLogout();
        }
      }
      setLoading(false);
    };
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  const handleLogin = (data) => {
    setToken(data.accessToken);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    setUser(data.user || {}); // Si tu backend devuelve datos de usuario
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
