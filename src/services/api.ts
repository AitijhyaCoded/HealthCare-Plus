import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Appointments
  createAppointment: async (appointmentData: any) => {
    const response = await axios.post(`${API_URL}/appointments`, appointmentData);
    return response.data;
  },
  
  getPatientAppointments: async (email: string) => {
    const response = await axios.get(`${API_URL}/appointments/patient/${email}`);
    return response.data;
  },
  
  // Doctors
  getDoctors: async () => {
    const response = await axios.get(`${API_URL}/doctors`);
    return response.data;
  },
  
  getDoctorAvailability: async (doctorId: string) => {
    const response = await axios.get(`${API_URL}/doctors/${doctorId}/availability`);
    return response.data;
  },
  
  // Payments
  createPaymentIntent: async (appointmentId: string) => {
    const response = await axios.post(`${API_URL}/payments/create-payment-intent`, {
      appointmentId
    });
    return response.data;
  }
};