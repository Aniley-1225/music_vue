import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8080'
})
request.interceptors.request.use(
  config => {
    const { user } = store.state
    if (user) {
      config.headers.Authorization = 'Bearer ' + user
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
export default request
