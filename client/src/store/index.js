import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import home from './modules/home'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: home,
    post: posts,
    login: login
  }
})
