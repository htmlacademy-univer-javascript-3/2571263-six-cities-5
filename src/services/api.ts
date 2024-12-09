import axios, {AxiosInstance} from 'axios';
import {getToken} from './token.ts';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;
const TOKEN_HEADER_NAME = 'X-Token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers[TOKEN_HEADER_NAME] = token;
      }

      return config;
    }
  );

  return api;
};

