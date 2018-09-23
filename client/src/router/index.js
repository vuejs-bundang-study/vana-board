import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoardComponent'
import Board from '@/components/board/BoardComponent'
import Login from '@/components/login/LoginComponent'

Vue.use(Router)

export default new Router({
  routes: [
    // main
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    // board
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    // login
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
