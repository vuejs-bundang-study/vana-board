const resourceHost = 'http://localhost:8080'

// initial state
const state = {
  accessToken: null,
  test: 'test stete'
}

// getters
const getters = {}

// actions
const actions = {
  LOGIN ({ commit }, { email, password }) {
    return this.$http
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
  },
  TEST (state, str) {
    console.log('str : ' + str)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
