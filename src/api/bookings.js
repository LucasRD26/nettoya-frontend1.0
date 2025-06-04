import apiClient from './client';

const BookingService = {
  createBooking: async (bookingData) => {
    try {
      const { data } = await apiClient.post('/bookings', bookingData);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getUserBookings: async () => {
    try {
      const { data } = await apiClient.get('/bookings');
      return data;
    } catch (error) {
      throw error.response.data;
    }
  },

  cancelBooking: async (bookingId) => {
    try {
      return await apiClient.delete(`/bookings/${bookingId}`);
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default BookingService;
