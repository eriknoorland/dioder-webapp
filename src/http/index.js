import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  timeout: 1000,
  headers: {},
});

export default http;
