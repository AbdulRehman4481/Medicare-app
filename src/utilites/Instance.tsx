
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'medicare-app-ten.vercel.app',
});

export default instance;
