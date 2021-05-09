<template>
  <div>
    <nav-home></nav-home>
    <div class="columns" v-for="column in columns">
      <div class="column is-one-quarter" v-for="card in column">
        <router-link :to="{ name: 'projet', params: { uid: card.lien_vers_la_page.uid }}">
          <prismic-image :field="card.carteimage"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {rangDImage} from "../models/rangDImage";
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
          this.cartes = document.data.carte;

      });
    }
  },
  computed: {
    columns() {
      return rangDImage.de(4)(
          this.cartes.sort(trie.chronologiqueDécroissante)
      );
    }
  },
  created () {
    this.getContent();
  }
}
</script>