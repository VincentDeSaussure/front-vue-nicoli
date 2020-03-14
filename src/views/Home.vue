<template>
  <div>
    <div>
      <router-link :to="{name: 'biographie'}">BIO + CONTACT</router-link>
    </div>
    <div class="columns">
      <div class="column is-one-quarter" v-for="card in cartes">
        <router-link :to="{ name: 'projet', params: { uid: card.lien_vers_la_page.uid }}">
          <prismic-image :field="card.carteimage"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
          this.cartes = document.data.carte;

      });
    }
  },
  created () {
    this.getContent();
  }
}
</script>