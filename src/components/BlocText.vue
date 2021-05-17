<template>
    <div>
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
import {assureLAttribut} from '@/models/assureLesAttributsPrismic'

export default {
    name: "BlocText",
    props: ["uid"],
    data:() => {
        return {
            annee: null,
            dimensions: null,
            description: null,
            materiaux: null,
            titre: null,
            sousTitre: '',
            sousTitreHyperlien: ''
        }
    },
    methods: {
        async getContent() {
          const { data } = await this.$prismic.client.getByUID("bloc-texte", this.uid)
          this.annee = assureLAttribut(data.annee);
          this.dimensions = assureLAttribut(data.dimensions);
          this.description = assureLAttribut(data.description);
          this.materiaux = assureLAttribut(data.materiaux);
          this.titre = assureLAttribut(data.titre).toUpperCase();
          this.sousTitre = assureLAttribut(data["sous-titre"]);
          this.sousTitreHyperlien = assureLAttribut(data["sous-titre-hyperlien"]);
        }
    },
    computed: {
        aSousTitre() {
          return this.sousTitre !== ''
        },
        aHyperlien() {
          return this.sousTitreHyperlien !== ''
        }
    },
    watch: {
        uid() {
            this.getContent()
        }
    }
}
</script>
<style>
h1{
    font-weight: bold;
    font-size: 1.1rem;
}
h2 {
    font-weight: bold;
}
.bold{
  font-weight: bold;
}
</style>
