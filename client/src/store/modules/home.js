import homeApi from '../../api/home'
import * as types from '../mutation_type'

// initial state
const state = {
  user: []
}

// getters
const getters = {
  getUserName (state) {
    return state.user[0].userName
  }
}

// actions
const actions = {
  // 사용자 정보 가져오기
  getUser ({ commit }) {
    homeApi.getUser(user => {
      commit('setUser', user)
    })
  }
}

// mutations
const mutations = {
  [types.UID] (state, uid) {
    state.uid = uid
  },
  setUser (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
