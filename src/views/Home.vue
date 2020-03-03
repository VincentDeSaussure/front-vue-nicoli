<template>
  <div>
    <div class="card" v-for="card in cartes">
      <router-link :to="{ name: 'projet', params: { uid: card.lien_vers_la_page.uid }}">
        <prismic-image :field="card.carteimage"/>
        <!--<img src="card.carteimage.url"/>-->
      </router-link>
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
          console.log(document.data.carte[0].carteimage.url)
        })
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