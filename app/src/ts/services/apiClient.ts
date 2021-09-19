import axios, { AxiosInstance } from 'axios';
import { headers, baseURL } from './config';

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers,
  // withCredentials: true,
});
