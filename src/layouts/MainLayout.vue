<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-black text-white">
      <q-toolbar>
        <q-btn
         dense
          flat
          round
         icon="menu"
         size="20px"
        @click="left = !left" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <div class="column q-ma-lg">
      <q-btn
       class="q-ma-md"
       rounded
       label="Personagens"
       to="people"
       />
      <q-btn
       class="q-ma-md"
       rounded
       label="Filmes"
       to="films"/>
      <q-btn
       class="q-ma-md"
       rounded
       label="Planetas"
       to="planets"/>
       <q-btn
       class="q-ma-md bg-black"
       color="white"
       rounded
       label="Home"
       to="/"/>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
