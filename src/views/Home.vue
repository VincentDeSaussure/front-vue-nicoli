<template>
  <div>
    <div>
      <router-link :to="{name: 'biographie'}">BIO + CONTACT</router-link>
    </div>
    <div class="card" v-for="card in cartes">
      <router-link :to="{ name: 'projet', params: { uid: card.lien_vers_la_page.uid }}">
        <prismic-image :field="card.carteimage"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      cartes: [],
      levels: 0
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          this.cartes = document.data.carte
      });
    }
  },
  created () {
    this.getContent();
  }
}
</script>
<style>
.card{
  margin: 20px
}
</style>