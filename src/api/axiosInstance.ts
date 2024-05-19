import axios from 'axios'

export const defaultAxios = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
})
