<template>
  <q-page class="">
    <q-item-label class="q-pa-lg text-h1">
     Filmes
    </q-item-label>
    <div
      id="app"
       class="q-ma-lg"
       v-for="movie in films"
        v-bind:key="movie">
      <h3>{{movie.title}}</h3>
    </div>
  </q-page>
</template>

<script>
import Axios from 'axios'
const url = 'https://swapi.dev/api/films/'
export default {
  name: 'films',
  data () {
    return {
      films: []
    }
  },
  methods: {
    loadFilms () {
      Axios.get(url)
        .then((response) => {
          this.films = response.data.results
        })
    }
  },
  mounted () {
    this.loadFilms()
  }
}
</script>
