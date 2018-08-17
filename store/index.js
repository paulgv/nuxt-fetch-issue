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
        console.log('nuxtServerInit')
        commit('simpleModule/mutate')
      }
    }
  })
}

export default createStore
