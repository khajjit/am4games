import Vue from 'vue'
import Router from 'vue-router'

import News from '@/components/News'
import Articles from '@/components/Articles'
import Trailers from '@/components/Trailers'
import Games from '@/components/Games'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   component: MainPage
    // },
    {
      path: '/news',
      component: News
    },
    {
      path: '/articles',
      component: Articles
    },
    {
      path: '/trailers',
      component: Trailers
    },
    {
      path: '/games',
      component: Games
    },
    {
      path: '/about',
      component: About
    }
  ]
})
