import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/Film'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import Detail from '@/views/Detail'
import NowPlaying from '@/views/Film/NowPlaying'
import ComingSoon from '@/views/Film/ComingSoon'
import Login from '@/views/Login'
import City from '@/views/city';



Vue.use(Router)
const auth = {
  isLogin() {
    return true;
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: '',
          redirect: '/film/nowplaying'
        },
        {
          path: 'nowplaying',
          component: NowPlaying
        },
        {
          path: 'comingsoon',
          component: ComingSoon
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/login',
      component: Login
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'ccDetail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/city'
    },
    {
      path: '/city',
      component: City
    },
  ]
})
export default router

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   if (to.path === '/center') {
//     if (auth.isLogin()) {
//       next();
//     } else {
//       console.log("未登录，请先登录");
//       next("/login");
//     }
//   } else {
//     next();
//   }
// })