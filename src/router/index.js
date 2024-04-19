import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from '../auth/authGuard';

import Home from '../view/Home.vue'
import Profile from '../view/Profile.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard
    }
  ]
})

export default router
