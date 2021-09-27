import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://192.168.8.156:8080'
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
