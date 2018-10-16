import loginApi from '../../api/login'
import { IS_AUTH, ERROR_MESSAGE } from '../mutation_type'

// initial state
const state = {
  accessToken: null
}

// getters
const getters = {}

let setIsAuth = ({ commit }, data) => commit(IS_AUTH, data)
let setErrorMessage = ({ commit }, data) => commit(ERROR_MESSAGE, data)

// actions
const actions = {
  login (store, { email, password }) {
    let param = { email: email, password: password }
    loginApi.doLogin(param).then(({ data }) => {
      if (data.success) {
        loginApi.setAccessToken(data.accessToken)
      }
      setIsAuth(store, data.success)
      setErrorMessage(store, data.message)
      return data.success
    })
  },
  LOGOUT ({ commit }) {
    commit('LOGOUT')
  }
}

// mutations
const mutations = {
  [IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  },
  [ERROR_MESSAGE] (state, errorMessage) {
    state.errorMessage = errorMessage
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
