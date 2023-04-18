import { QueryClient } from 'react-query';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getCookie } from '../common/functions/cookie';

export type T_JWTDecodeToken = {
  exp: number;
  iat: number;
  loginType: string;
  roles: string;
  sub: string;
  userEmail: string;
  userIp: string;
  userName: string;
  userNo: number;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
});

export const api = axios.create({
  baseURL: '/api/v1',
  // paramsSerializer: {
  //   serialize: (paramObj) => {
  //     const params = new URLSearchParams();
  //     for (const key in paramObj) {
  //       if (Object.prototype.hasOwnProperty.call(paramObj, key)) {
  //         if (Array.isArray(paramObj[key]))
  //           for (const value of paramObj[key]) params.append(key, value);
  //         else params.append(key, paramObj[key]);
  //       }
  //     }

  //     return params.toString();
  //   },
  // },
});

api.interceptors.request.use((config) => {
  const cookie = getCookie('accessToken');
  if (!cookie || typeof cookie !== 'string') return config;

  const { exp }: T_JWTDecodeToken = jwtDecode(cookie as string);
  const newConfig = { ...config };
  /** (만료 시점 - 5분 전) 새 API 호출이 있다면 refreshToken을 보내 새로운 accessToken을 받아온다.  */
  const tokenTime = exp * 1000 - 60 * 5 * 1000;

  const nowTime = new Date().getTime();

  if (nowTime > tokenTime) {
    const refreshToken = getCookie('refreshToken');

    if (newConfig && newConfig['headers'] && refreshToken) newConfig['headers']['refresh-token'] = refreshToken;
  }

  return newConfig;
});
