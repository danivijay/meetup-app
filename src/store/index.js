import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        title: 'DigitalOcean Kochi',
        imageSrc: 'http://images.financialexpress.com/2015/07/Kochi-info-park.jpg',
        id: 'asdsadsa',
        date: '2018-01-17',
        location: 'KOchi meetup',
        description: ''
      },
      {
        title: 'Barcamp Kerala',
        imageSrc: 'http://cms.technopark.org/zcmspg/zupload/media/web_media/5363/1447309670855_2.jpg',
        id: 'dasweasd',
        date: '2018-01-19',
        location: '',
        description: 'Tvm Meetup'
      }
    ],
    user: {
      id: 'dasdasdasd',
      registeredMeetups: ['asdsadsa']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageSrc: payload.imageSrc,
        description: payload.description,
        date: payload.date,
        id: 'qweqweas'
      }
      // Firebase Logic
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
