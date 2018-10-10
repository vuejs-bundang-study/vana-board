import Vue from 'vue'
import Router from 'vue-router'

// components
import Home from '@/components/HomeComponent'
import Board from '@/components/board/BoardComponent'
import Login from '@/components/login/LoginComponent'
import MyPage from '@/components/mypage/MyPageComponent'
import DashBoard from '@/components/board/BoardListComponent'
import BoardList from '@/components/board/BoardListTempComponent'
import BoardInfo from '@/components/board/BoardInfoTempComponent'
import BoardView from '@/components/board/BoardViewComponent'

Vue.use(Router)

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
            }
          ]
        },
        {
          path: '/mypage',
          component: MyPage
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
