<template>
  <q-page class="">
    <q-item-label class="q-pa-lg text-h1">
     Planetas
    </q-item-label>
    <div
      id="app"
       class="q-ma-lg"
       v-for="globe in planets"
        v-bind:key="globe">
      <h3>{{globe.name}}</h3>
    </div>
  </q-page>
</template>

<script>
import Axios from 'axios'
const url = 'https://swapi.dev/api/planets/'
export default {
  name: 'planets',
  data () {
    return {
      planets: []
    }
  },
  methods: {
    loadPlanets () {
      Axios.get(url)
        .then((response) => {
          this.planets = response.data.results
        })
    }
  },
  mounted () {
    this.loadPlanets()
  }
}
</script>
