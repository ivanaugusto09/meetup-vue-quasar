import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function ( /* { ssrContext } */ ) {
  const store = new Vuex.Store({
    state: {
      loadedMeetups: [{
          q: 'first',
          imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
          id: '1',
          title: 'Dykh-Tau',
          subtitle: 'Russia',
          date: '16-09-2019'
        },
        {
          q: 'second',
          imgUrl: 'https://cdn.quasar.dev/img/parallax1.jpg',
          id: '2',
          title: 'Veneza',
          subtitle: 'Itália',
          date: '10-09-2019'
        },
        {
          q: 'third',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
          id: '3',
          title: 'Golden Gate',
          subtitle: 'San Fracisco',
          date: '05-09-2019'
        }
      ],
      user: {
        id: 'ajaldslfalsk12',
        registeredMeetups: ['ajaldslfalsk12']

      }
    },
    mutations: {},
    actions: {},
    getters: {
      loadedMeetups(state) {
        return state.loadedMeetups.sort((meetupA, meetupB) => {
          return meetupA.date > meetupB.date
        })
      },
      featuredMeetups(state, getters) {
        return getters.loadedMeetups.slice(0, 5)
      },
      loadedMeetup(state) {
        return (meetupId) => {
          return state.loadedMeetups.find((meetup) => {
            return meetup.id === meetupId
          })
        }
      },
    },

  })
  return store
}
