import Vue from 'vue'
import Router from 'vue-router'

import AppHome from '@/components/AppHome.vue'

import MeetupHome from '@/components/meetup/MeetupHome.vue'
import MeetupAdd from '@/components/meetup/MeetupAdd.vue'
import MeetupView from '@/components/meetup/MeetupView.vue'

import UserProfile from '@/components/user/UserProfile.vue'
import UserLogin from '@/components/user/UserLogin.vue'
import UserSignup from '@/components/user/UserSignup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: MeetupHome
    },
    {
      path: '/meetup/new',
      name: 'MeetupAdd',
      component: MeetupAdd
    },
    {
      path: '/meetups/:id',
      name: 'MeetupView',
      component: MeetupView
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/signup',
      name: 'UserSignup',
      component: UserSignup
    }
  ]
})
