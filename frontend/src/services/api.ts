import axios from 'axios'

// All API calls go to our FastAPI backend
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'

// Create a single axios instance shared across the whole app
// Think of this like a typed HttpClient in C#
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor — automatically attaches the JWT token to every request
// so we don't have to add it manually on every call
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor — if the server returns 401 (Unauthorised),
// clear the token and redirect to login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
