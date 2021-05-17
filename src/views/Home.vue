<template>
  <div>
    <nav-home></nav-home>
    <main>
      <div class="column" v-for="carte in cartes">
        <router-link :to="{ name: 'projet', params: { uid: carte.lien_vers_la_page.uid }}">
          <prismic-image :field="carte.carteimage"/>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import NavHome from '@/components/nav/NavHome'
import {trie} from '@/models/trie'

export default {
  name: 'Home',
  components: {NavHome},
  data: () => {
    return {
      cartes: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          this.cartes = document.data.carte.sort(trie.chronologiqueDécroissante);

      });
    }
  },
  created () {
    this.getContent();
  }
}
</script>

<style>
main{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px 10px;
}
main img {
  width: 100%;
}
</style>
