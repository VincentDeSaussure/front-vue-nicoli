<template>
  <div :class="{ italic: italic }">
    <h1>{{ titre }}</h1>
    <h2>
      <strong v-if="aSousTitre && !aHyperlien">{{ sousTitre }}, </strong>
      <strong v-else-if="aSousTitre && aHyperlien" ><a :href="sousTitreHyperlien" target="_blank">{{ sousTitre }}</a></strong>
      {{ annee }}
    </h2>
    <p class="bold">{{ materiaux }}</p>
    <p>{{ dimensions }}</p>
    <h3>{{ description }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    italic: {
      default: false,
      type: Boolean
    },
    annee: {
      default: '',
      type: String
    },
    dimensions: {
      default: '',
      type: String
    },
    description: {
      default: '',
      type: String
    },
    materiaux: {
      default: '',
      type: String
    },
    titre: {
      default: '',
      type: String
    },
    sousTitre: {
      default: '',
      type: String
    },
    sousTitreHyperlien: {
      default: '',
      type: String
    },
  },
  computed: {
    aSousTitre() {
      return this.sousTitre !== ''
    },
    aHyperlien() {
      return this.sousTitreHyperlien !== ''
    }
  }
}
</script>
<style>
h1{
  font-size: 1.1rem;
}
h2 {
  font-size: 1rem;
}
h3{
  font-size: 1rem;
  font-weight: normal;
}
.bold{
  font-weight: bold;
}
.italic{
  font-style: italic;
}
</style>
