import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://192.168.1.4:8081/api/users/'; // Use environment variable for production

const register = async (userData) => {
  const response = await axios.post(`${API_URL}signup`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}signin`, userData);
  if (response.data.token) {
    localStorage.setItem('userToken', response.data.token);
  }
  return response.data;
};

export default {
  register,
  login,
};
