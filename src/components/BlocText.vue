<template>
    <div>
        <h3>{{ titre }}
            <span v-if="sousTitre !== ''"> /</span>
        </h3>
        <h4>
            <span v-if="aSousTitre && !aHyperlien">{{ sousTitre }}, </span>
            <span v-else-if="aSousTitre && aHyperlien"><a :href="sousTitreHyperlien" target="_blank">{{ sousTitre }}</a></span>
            {{ annee }}
        </h4>
        <p class="bold">{{ materiaux }}</p>
        <p>{{ dimensions }}</p>
        <p>{{ description }}</p>
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
h3 {
    font-weight: bold;
    font-size: 1.1rem;
}
h4 {
    font-weight: bold;
}
.bold{
  font-weight: bolder;
}
</style>