import apiClient from './client';

const NotificationService = {
  getNotifications: async () => {
    try {
      const { data } = await apiClient.get('/notifications');
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default NotificationService;
