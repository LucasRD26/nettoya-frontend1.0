import apiClient from './client';

const RatingService = {
  getCleanerRatings: async (cleanerId) => {
    try {
      const { data } = await apiClient.get(`/ratings/${cleanerId}`);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },

  submitRating: async (cleanerId, ratingData) => {
    try {
      return await apiClient.post(`/ratings/${cleanerId}`, ratingData);
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default RatingService;
