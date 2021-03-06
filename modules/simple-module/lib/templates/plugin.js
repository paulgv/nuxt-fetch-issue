export default async function ({ router, store }) {

  store.registerModule('simpleModule', {
      namespaced: true,
      state: () => ({
        mutateMe: 'not mutated',
      }),
      actions: {
        mutate ({ commit }) {
          commit('mutate')
        }
      },
      mutations: {
        mutate (state) {
          state.mutateMe = 'mutated';
        }
      }
    })

}
