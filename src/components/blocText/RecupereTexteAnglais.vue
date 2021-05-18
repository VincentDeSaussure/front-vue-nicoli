<template>
    <div>
      <bloc-texte
        :italic="true"
        :annee="year"
        :dimensions="dimension"
        :description="description"
        :materiaux="materials"
        :titre="title"
        :sousTitre="subtitle"
        :sousTitreHyperlien="subtitleHyperlink"
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
        year: null,
        dimension: null,
        description: null,
        materials: null,
        subtitle: '',
        subtitleHyperlink: '',
        title: null
    }
  },
  methods: {
      async getContent() {
          const { data } = await this.$prismic.client.getByUID("bloc-texte-anglais", this.uid)
          this.year = assureLAttribut(data.year);
          this.dimension = assureLAttribut(data.dimension);
          this.description = assureLAttribut(data.description);
          this.materials = assureLAttribut(data.materials);
          this.title = assureLAttribut(data.title).toUpperCase();
          this.subtitle = assureLAttribut(data.subtitle)
          this.subtitleHyperlink = assureLAttribut(data["subtitle-hyperlink"]);
      }
  },
  watch: {
      uid() {
          this.getContent()
      }
  }
}
</script>
