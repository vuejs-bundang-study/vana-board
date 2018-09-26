import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: home,
    post: posts
  }
})
