import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    actions: {
      nuxtServerInit ({ commit }) {
        // Mutating from nuxtServerInit does not work either
        commit('simpleModule/mutate')
      }
    }
  })
}

export default createStore
