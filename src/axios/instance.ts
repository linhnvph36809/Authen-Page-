import TokenManager from 'brainless-token-manager';
import axios from 'axios';
import { handlerSetLocal,handlerDeleteLocal,handlerGetLocal } from '../local';

const tokenManager = new TokenManager({
  getAccessToken: async () => {
    const token = handlerGetLocal('accessToken');
    return token ? token : '';
  },
  getRefreshToken: async () => {
    const refreshToken = handlerGetLocal('refreshToken');
    return refreshToken ? refreshToken : '';
  },
  onInvalidRefreshToken: () => {
    handlerDeleteLocal('accessToken');
    handlerDeleteLocal('refreshToken');
  },

  executeRefreshToken: async () => {
    const refreshToken = handlerGetLocal('refreshToken');

    if (!refreshToken) {
      return {
        token: '',
        refresh_token: '',
      };
    }

    const response = await axiosInstant.post('/auth/refresh-token', {
      refreshToken,
    });
    const { accessToken: accessTokenNew, refreshToken: refreshTokenNew } =
      response.data;

    return {
      token: accessTokenNew,
      refresh_token: refreshTokenNew,
    };
  },
  onRefreshTokenSuccess: ({ token, refresh_token }) => {
    if (token && refresh_token) {
      handlerSetLocal('accessToken', token);
      handlerSetLocal('refreshToken', refresh_token);
    }
  },
});

export const VITE_APP_API = 'https://api-test-web.agiletech.vn';

export const axiosInstant = axios.create({
  baseURL: VITE_APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const tokenManagerInstance = async (
  suffixUrl: string,
  configs: any = {}
) => {
  const token = configs?.token || (await tokenManager.getToken());

  const updatedConfig = {
    ...configs,
    headers: {
      ...configs.headers,
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstant(suffixUrl, updatedConfig);
};
