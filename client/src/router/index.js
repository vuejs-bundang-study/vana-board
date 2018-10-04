import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeComponent'
import Board from '@/components/board/BoardComponent'
import Login from '@/components/login/LoginComponent'
import MyPage from '@/components/mypage/MyPageComponent'
import Content from '@/components/layouts/ContentComponent'

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
      components: {
        default: Content,
        content: Board
      }
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
      components: {
        default: Content,
        content: MyPage
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
