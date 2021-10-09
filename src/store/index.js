import Vue from 'vue'
import Vuex from 'vuex'
import { setItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem('tokenKey'),
    userId: sessionStorage.getItem('userId'),
    userInfo: {
      email: 'null',
      follow: 0,
      follower: 0,
      id: 0,
      nickname: 'null',
      user_pic: 'null',
      username: 'null'
    }
  },
  mutations: {
    setUser (state, data) {
      state.user = data.token
      state.userId = data.id
      setItem('tokenKey', state.user)
      setItem('userId', state.userId)
    },
    getUserInfo (state, data) {
      state.userInfo = data
      setItem('userInfo', data)
    }
  },
  actions: {},
  modules: {}
})
