import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  drawer: null
}

const mutations = {
  [types.MENU_DRAWER] (state) {
    state.drawer = !state.drawer
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
