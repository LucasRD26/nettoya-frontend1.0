import { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('La geolocalización no está soportada');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (err) => setError(err.message)
    );
  }, []);

  return { ...location, error };
};

export default useLocation;
