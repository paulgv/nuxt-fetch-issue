<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        fetch() issue
      </h1>
      <hr>
      <h2 class="subtitle">{{ mutateMe }}</h2>

      <div>
        Value above should be <b>mutated</b> on page refresh.
      </div>

      <hr>

      <div>
        Mutating the store via a client-side method works properly
      </div>
      <button type="button" @click.prevent="onClick">Mutate</button>

      <hr>

      <div>
        Likewise, navigating to another page then back here results in the store being properly updated
      </div>
      <div class="links">
        <nuxt-link class="button--green" to="/somepage">Go to somepage</nuxt-link>
      </div>

      <hr>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  fetch ({ store }) {
    // After page refresh, mutating state works for project "main store"...
    store.commit('increment');
    // ...but not for installed modules' store modules...
    store.commit('simpleModule/mutate')
    // The commit actually DOES happen server-side but is immediately reverted client-side
    // No problem if you navigate to another page then back to this one
  },
  computed: {
    ...mapState('simpleModule', ['mutateMe'])
  },
  methods: {
    onClick () {
      // No problem if the mutation is called from a client-side method
      this.$store.commit('simpleModule/mutate')
    }
  },
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
hr {
  margin: 15px 0;
}
</style>
