import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeComponent'
import Board from '@/components/board/BoardComponent'
import Login from '@/components/login/LoginComponent'
import MyPage from '@/components/mypage/MyPageComponent'

Vue.use(Router)

export default new Router({
  routes: [
    // main
    {
      path: '/',
      name: 'Home',
      component: Home
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
    // mypage
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
