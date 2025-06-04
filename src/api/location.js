import apiClient from './client';

const LocationService = {
  updateLocation: async (locationData) => {
    try {
      return await apiClient.put('/location', locationData);
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default LocationService;
