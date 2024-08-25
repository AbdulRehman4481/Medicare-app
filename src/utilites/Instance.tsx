
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://medicare-app-ten.vercel.app/',
});

export default instance;
