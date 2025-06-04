import apiClient from './client';

const UserService = {
  getProfile: async () => {
    try {
      const { data } = await apiClient.get('/users/me');
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },

  updateProfile: async (userData) => {
    try {
      const { data } = await apiClient.put('/users/me', userData);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },
  becomeCleaner: async () => {
    const response = await apiClient.put('/users/become-cleaner');
    return response.data;
  },

  changePassword: async (passwords) => {
    try {
      return await apiClient.put('/users/me/password', passwords);
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default UserService;
