import apiClient from './client';

const CleanerService = {
    getAllCleaners: async () => {
    const response = await apiClient.get('/cleaners');
    return response.data;
  },
  
  getTopCleaners: async () => {
    try {
      const { data } = await apiClient.get('/cleaners/top');
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getNearbyCleaners: async (lat, lon, radius) => {
    try {
      const { data } = await apiClient.get('/cleaners/nearby', {
        params: { lat, lon, radius }
      });
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },

  rateCleaner: async (cleanerId, rating) => {
    try {
      return await apiClient.post(`/cleaners/${cleanerId}/rate`, { rating });
    } catch (error) {
      throw error.response.data;
    }
  },
  searchCleaners: async (query) => {
    try {
        const { data } = await apiClient.get('/cleaners/search', { params: { q: query } });
        return data;
    } catch (error) {
        throw error.response.data;
    }
 }
};

export default CleanerService;
