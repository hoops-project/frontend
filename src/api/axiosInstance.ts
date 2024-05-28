import axios, { AxiosRequestConfig } from 'axios'
import { END_POINT } from '../constants/endPoint'

const BASE_URL = import.meta.env.VITE_HOOPS_API_URL

export const defaultAxios = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const axiosAuth = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const axiosAccess = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const axiosRequest = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

const refreshToken = async (req: AxiosRequestConfig) => {
  try {
    const refreshToken = localStorage.getItem('Refresh-Token')
    if (!refreshToken) {
      throw new Error('Refresh token not available')
    }

    const res = await axiosRequest.post(`${END_POINT.AUTH.REFRESH_TOKEN}`)

    const authorizationHeader = res.headers['authorization']
    const authorizationBody = res.data.refreshToken
    const newACToken = authorizationHeader
    const newRefreshToken = authorizationBody

    localStorage.setItem('Access-Token', newACToken)
    localStorage.setItem('Refresh-Token', newRefreshToken)

    if (!req.headers) {
      req.headers = {}
    }
    req.headers.Authorization = `Bearer ${newACToken}`

    return await axios(req)
  } catch (err) {
    alert('로그인을 다시 진행해주세요!')
    window.location.replace('/sign-in')
    localStorage.removeItem('Access-Token')
    localStorage.removeItem('Refresh-Token')
    throw err
  }
}

// 일반적으로 인증이 필요한 API 요청을 처리 => 요청 시 Authorization 헤더를 설정
axiosAuth.interceptors.request.use(
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

// access-token 만료시 refresh-token 사용해서 재발급
axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error)
    const errorCode = error.response.data.errorCode
    const req = error.config

    if (errorCode === 'EXPIRED_TOKEN') {
      return refreshToken(req)
    }
    return Promise.reject(error)
  }
)

// 주로 토큰 재발급 요청 처리 => 요청 시 Access-Token 헤더를 설정하며, 토큰이 만료되었을 때 새로운 토큰
// 인증 인가에 토큰을 2개를 필요로 하는 API요청에 사용!

axiosAccess.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('Access-Token')
    const refreshToken = localStorage.getItem('Refresh-Token')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
      config.headers.refreshToken = `${refreshToken}`
    }
    return config
  },
  (error) => {
    console.log(error('ACCESS 리퀘스트 에러'))
    return Promise.reject(error)
  }
)

axiosAccess.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error)
    const errorCode = error.response.data.errorCode
    const req = error.config

    if (errorCode === 'EXPIRED_TOKEN') {
      return refreshToken(req)
    }
    return Promise.reject(error('ACCESS 리스폰스 에러'))
  }
)

axiosRequest.interceptors.request.use(
  (config) => {
    const refreshToken = localStorage.getItem('Refresh-Token')
    if (refreshToken) {
      config.headers.Authorization = `Bearer ${refreshToken}`
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axiosRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error)
    const errorCode = error.response.data.errorCode
    const req = error.config

    if (errorCode === 'EXPIRED_TOKEN') {
      return console.log(error)
    }
    return Promise.reject(error)
  }
)
