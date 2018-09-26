import boardApi from '../../api/board'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  // 모든 게시물 가져오기
  getAllPosts ({ commit }) {
    boardApi.getPosts(posts => {
      commit('setPosts', posts)
    })
  }
}

// mutations
const mutations = {
  setPosts (state, posts) {
    state.all = posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
