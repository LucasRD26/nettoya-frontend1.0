// api/client.js - Configuración base de Axios
import axios from 'axios';
import AuthService from './auth'; // Ruta correcta a tu servicio de autenticación

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Cambiar en producción
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// Interceptor para JWT
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para refrescar token
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await AuthService.refreshToken();
        localStorage.setItem('accessToken', data.accessToken);
        return apiClient(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
