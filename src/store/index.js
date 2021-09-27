import Vue from 'vue'
import Vuex from 'vuex'
import { setItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem('tokenKey'),
    userId: sessionStorage.getItem('userId'),
    userInfo: {}
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
    }
  },
  actions: {},
  modules: {}
})
