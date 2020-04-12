<template>
  <div>
    <div>
      <router-link :to="{name: 'biographie'}">BIO + CONTACT</router-link>
    </div>
    <div class="columns" v-for="columns in columnss">
      <div class="column is-one-quarter" v-for="card in columns">
        <router-link :to="{ name: 'projet', params: { uid: card.lien_vers_la_page.uid }}">
          <prismic-image :field="card.carteimage"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {columnsConstructor} from "../models/columnsConstructor";

export default {
  name: 'Home',
  data: () => {
    return {
      cartes: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          console.log(document.data.carte)
          this.cartes = document.data.carte;

      });
    }
  },
  computed: {
    columnss() {
      return columnsConstructor.ofFourCards(this.cartes);
    }
  },
  created () {
    this.getContent();
  }
}
</script>