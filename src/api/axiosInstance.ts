import axios from 'axios'

// NOTICE: 예시 인스턴스 후에 바꿔야함
export const axiosInstance = axios.create({
  baseURL: '',
  withCredentials: true,
})
