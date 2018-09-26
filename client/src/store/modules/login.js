import axios from 'axios'
const resourceHost = 'http://localhost:8080'

// initial state
const state = {
  accessToken: null
}

// getters
const getters = {}

// actions
const actions = {
  LOGIN ({ commit }, { email, password }) {
    return axios
      .post(`${resourceHost}/login`, { email, password })
      .then(({ data }) => commit('LOGIN', data))
  },
  LOGOUT ({ commit }) {
    commit('LOGOUT')
  }
}

// mutations
const mutations = {
  LOGIN (state, { accessToken }) {
    state.accessToken = accessToken
  },
  LOGOUT (state) {
    state.accessToken = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
