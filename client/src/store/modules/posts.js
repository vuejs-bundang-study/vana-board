import boardApi from '../../api/board'

// initial state
const state = {
  posts: []
}

// getters
const getters = {
  getPostAllData (state) {
    return state.posts
  }
}

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
    state.posts = posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
