import api from './axiosInstance';

export const login = async (email: string, password: string) => {
  const response = await api.post('/users/login', { user: { email, password } });
  return response.data;
};

export const register = async (username: string, email: string, password: string) => {
  const response = await api.post('/users', { user: { username, email, password } });
  return response.data;
};
