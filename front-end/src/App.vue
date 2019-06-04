<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Nicoli</span>
        <span class="font-weight-light"> Charlotte</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link tag="li" to="/cv">
        <v-img src="assets/img/icone_cv.svg" aspect-ratio="1"></v-img>
      </router-link>
      <router-link tag="li" to="/work">
        <v-img></v-img>
      </router-link>
      <li>
        <a :href="URL.espacePotentielDeVie" target="_blank">espace potentiel de vie</a>
      </li>
    </v-toolbar>

    <v-content>
      <formulaire-du-seum></formulaire-du-seum>
    </v-content>
  </v-app>
</template>

<script>
import URL from "./models/urlDeRedirection"
import FormulaireDuSeum from "./components/FormulaireDuSeum"


export default {
  name: 'App',
  components: {
    FormulaireDuSeum
  },
  data () {
    return {
      URL
    }
  }
}
</script>
