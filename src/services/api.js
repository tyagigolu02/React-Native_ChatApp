import axios from 'axios';
import { API_BASE_URL } from '../constants/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ye 'Interceptor' check karega ki agar user logged in hai, toh token bhej do
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Django JWT format
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;