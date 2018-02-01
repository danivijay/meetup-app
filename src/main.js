import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import dateFilter from './filters/dateFilter'
import * as firebase from 'firebase'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog'

Vue.use(Vuetify, {
  theme: {
    primary: '#E64A19',
    secondary: '#FF5722',
    accent: '#FF9800',
    error: '#b71c1c'
  }
})

Vue.filter('dateFilter', dateFilter)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAdafitIAN_ptq5UoKT9v0Iu_5UT-dG5C0',
      authDomain: 'meetup-webapp.firebaseapp.com',
      databaseURL: 'https://meetup-webapp.firebaseio.com',
      projectId: 'meetup-webapp',
      storageBucket: 'meetup-webapp.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
