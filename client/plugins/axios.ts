import axios from 'axios'
import { useRequestURL } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const url = useRequestURL()
  const domain = url.hostname.split('.').slice(-2).join('.')
  const defaultUrl = `https://api.${domain}`
  // const defaultUrl = `http://localhost:8080`

  const api = axios.create({
    baseURL: defaultUrl,
    timeout: 10000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  api.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // Handle unauthorized
            break
          case 403:
            // Handle forbidden
            break
          case 404:
            // Handle not found
            break
          case 500:
            // Handle server error
            break
        }
      }
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      api: api
    }
  }
})
