import axios, { AxiosRequestConfig } from 'axios';
import { useUserStore } from '../store/store';
import { END_POINT } from '../constants/endPoint';

export const defaultAxios = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
    withCredentials: true,
});

export const axiosAuth = axios.create({
  baseURL: '/',
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosAccess = axios.create({
  baseURL: '/',
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 일반적으로 인증이 필요한 API 요청을 처리 => 요청 시 Authorization 헤더를 설정하며, 토큰이 만료되었을 때 토큰을 재발급
axiosAuth.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("Access-Token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const refreshToken = async (req: AxiosRequestConfig) => {
  const updateUser = useUserStore.getState().updateUser;
  try {
    const res = await axiosAccess.post(`${END_POINT.AUTH.REFRESH_TOKEN}`);
    const newACToken = res.headers["access-token"];
    localStorage.setItem("Access-Token", newACToken);
    
   // headers가 undefined인 경우 초기화  
    if (!req.headers) {
      req.headers = {};
    }
    req.headers.Authorization = `Bearer ${newACToken}`;
    return await axiosAuth(req);
  } catch (err) {
    updateUser({ isLogin: false });
    alert("로그인을 다시 진행해주세요.");
    window.location.replace("/sign-in");
    throw err;
  }
};

// access-token 만료시 refresh-token 사용해서 재발급
axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    const errorCode = error.response.data.errorCode;

    const req = error.config;

    if (errorCode === "ACCESS_TOKEN_EXPIRED") {
      return refreshToken(req);
    }
    return Promise.reject(error);
  }
);

// 주로 토큰 재발급 요청 처리 => 요청 시 Access-Token 헤더를 설정하며, 토큰이 만료되었을 때 새로운 토큰
axiosAccess.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('Access-Token')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axiosAccess.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    const errorCode = error.response.data.errorCode;

    const req = error.config;

    if (errorCode === "ACCESS_TOKEN_EXPIRED") {
      return refreshToken(req);
    }
    return Promise.reject(error);
  }
);
