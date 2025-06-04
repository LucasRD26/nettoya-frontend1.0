import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), type, message }
    ]);
    // Opcional: auto-remover después de X segundos
    setTimeout(() => {
      setNotifications((prev) => prev.slice(1));
    }, 4000);
  };

  const clearNotifications = () => setNotifications([]);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, clearNotifications }}>
      {children}
      {/* Renderizado de notificaciones */}
      <div className="notification-container">
        {notifications.map((n) => (
          <div key={n.id} className={`notification ${n.type}`}>
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
