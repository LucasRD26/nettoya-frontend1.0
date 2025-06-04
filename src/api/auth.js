import apiClient from './client';

const AuthService = {
  login: async (credentials) => {
    try {
      const { data } = await apiClient.post('/auth/login', credentials);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },

  register: async (userData) => {
    try {
      return await apiClient.post('/auth/register', userData);
    } catch (error) {
      throw error.response.data;
    }
  },

  logout: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!refreshToken) {
      throw new Error("No hay sesión activa");
    }

    try {
      await apiClient.post('/auth/logout', { refreshToken }); // Envía el refresh token
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  },

  refreshToken: async () => {
    try {
      return await apiClient.post('/auth/refresh', {
        refreshToken: localStorage.getItem('refreshToken')
      });
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default AuthService;
