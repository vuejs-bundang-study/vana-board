import Vue from 'vue'
import Router from 'vue-router'

// components
import Home from '@/components/HomeComponent'
import Board from '@/components/board/BoardComponent'
import Login from '@/components/login/LoginComponent'
import MyPage from '@/components/mypage/MyPageComponent'
import DashBoard from '@/components/board/BoardListComponent'
import BoardList from '@/components/board/BoardListTempComponent'
import BoardView from '@/components/board/BoardViewComponent'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  const isAuthenticated = false
  if (isAuthenticated) return next()
  next('/login?returnPath=me')
}

export default new Router({
  routes: [
    // main
    {
      path: '/',
      component: Home,
      redirect: '/board',
      children: [
        {
          path: '/board',
          component: Board,
          children: [
            {
              path: '/',
              component: DashBoard
            },
            {
              path: 'list',
              component: BoardList
            },
            {
              path: 'info/:key/:id',
              component: BoardView
            },
            {
              path: 'add/:categoryId',
              // component: Board,
              beforeEnter: requireAuth
            }
          ]
        },
        {
          path: '/mypage',
          component: MyPage,
          beforeEnter: requireAuth
        }
      ]
    },
    // login
    {
      path: '/login',
      component: Login
      // ,
      // beforeEnter: function (to, from, next) {
      //   // 인증 값 검증 로직 추가
      // }
    },
    {
      path: '*',
      redirect: '/board'
    }
  ]
})
