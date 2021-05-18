<template>
    <div>
      <bloc-texte
        :annee="annee"
        :dimensions="dimensions"
        :description="description"
        :materiaux="materiaux"
        :titre="titre"
        :sousTitre="sousTitre"
        :sousTitreHyperlien="sousTitreHyperlien"
      ></bloc-texte>
    </div>
</template>
<script>
import {assureLAttribut} from '@/models/assureLesAttributsPrismic'
import BlocTexte from './BlocTexte'

export default {
  components: {BlocTexte},
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
    watch: {
        uid() {
            this.getContent()
        }
    }
}
</script>

