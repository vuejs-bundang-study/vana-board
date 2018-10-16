import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://49.247.204.250:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

// initial state
const state = {
  accessToken: null
}

// getters
const getters = {}

// actions
const actions = {
  LOGIN ({ commit }, data) {
    return instance
      .post(`/auth/login`, { email: data.id, password: data.password })
      .then(({ data }) => commit('LOGIN', data))
      .catch((error) => {
        console.log(error)
      })
  },
  LOGOUT ({ commit }) {
    commit('LOGOUT')
  }
}

// mutations
const mutations = {
  LOGIN (state, { accessToken }) {
    state.accessToken = accessToken
    if (state.accessToken != null) {
      alert('로그인성공')
      this.$router.push({path: `/`})
    }
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
