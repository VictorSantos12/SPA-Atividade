<template>
  <q-page class="">
    <q-item-label class="q-pa-lg text-h1">
     Personagens
    </q-item-label>
    <div
      id="app"
       class="q-ma-lg"
       v-for="person in people"
        v-bind:key="person">
      <h3>{{person.name}}</h3>
    </div>
  </q-page>
</template>

<script>
import Axios from 'axios'
const url = 'https://swapi.dev/api/people/'
export default {
  name: 'people',
  data () {
    return {
      people: []
    }
  },
  methods: {
    loadPeople () {
      Axios.get(url)
        .then((response) => {
          this.people = response.data.results
        })
    }
  },
  mounted () {
    this.loadPeople()
  }
}
</script>
