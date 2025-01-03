import axios from 'axios';

const api = axios.create({
  baseURL: 'https://realwordapi.nouwillcode.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
