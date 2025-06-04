import React, { useEffect, useState } from 'react';
import NotificationService from '../../api/notifications';
import Loader from '../layout/Loader';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await NotificationService.getNotifications();
        setNotifications(data);
      } catch (error) {
        alert('Error al cargar notificaciones');
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="notification-list">
      <h2>Notificaciones</h2>
      {notifications.length === 0 ? (
        <p>No tienes notificaciones.</p>
      ) : (
        <ul>
          {notifications.map((n) => (
            <li key={n.id} className={n.read ? 'read' : 'unread'}>
              <strong>{n.title}</strong>
              <div>{n.message}</div>
              <span className="date">{new Date(n.timestamp).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
