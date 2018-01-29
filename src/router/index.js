import Vue from 'vue'
import Router from 'vue-router'

import AppHome from '@/components/AppHome.vue'

import MeetupHome from '@/components/meetup/MeetupHome.vue'
import MeetupAdd from '@/components/meetup/MeetupAdd.vue'

import UserProfile from '@/components/user/UserProfile.vue'
import UserLogin from '@/components/user/UserLogin.vue'
import UserSignup from '@/components/user/UserSignup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: MeetupHome
    },
    {
      path: '/add',
      name: 'add',
      component: MeetupAdd
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/signup',
      name: 'signup',
      component: UserSignup
    }
  ]
})
