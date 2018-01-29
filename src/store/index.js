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
        date: '2018-01-17'
      },
      {
        title: 'Barcamp Kerala',
        imageSrc: 'http://cms.technopark.org/zcmspg/zupload/media/web_media/5363/1447309670855_2.jpg',
        id: 'dasweasd',
        date: '2018-01-19'
      }
    ],
    user: {
      id: 'dasdasdasd',
      registeredMeetups: ['asdsadsa']
    }
  },
  mutations: {},
  actions: {},
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
