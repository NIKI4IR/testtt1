import axios from 'axios'
import { useNuxtApp, useRequestURL } from 'nuxt/app'

const getBaseUrl = () => {
    const url = useRequestURL()
    const domain = url.hostname.split('.').slice(-2).join('.')
    return `https://api.${domain}`
    // return `http://localhost:8080`
}

export const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens or other headers here
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle common errors here
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

// Re-export the api instance for convenience
export const useApi = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$api
}
