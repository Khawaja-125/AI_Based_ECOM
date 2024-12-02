import axios from 'axios';

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: 'http://localhost:5000' });

// Function to send a signup request
export const signup = async (userData) => {
  try {
    const response = await API.post('/api/signup', userData);
    return response.data; // Return the success message or any data sent from the server
  } catch (error) {
    // Handle and re-throw errors to the caller
    throw error.response ? error.response.data : { error: 'Server error' };
  }
};
