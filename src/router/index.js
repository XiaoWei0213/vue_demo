/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'

export default new VueRouter({
  routes:[
    {
      path:'/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/home/news',
          component: News
        },
        {
          path: 'message', //简化写法
          component: Message
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
