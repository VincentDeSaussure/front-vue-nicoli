<template>
    <div class="lang-en">
        <h1>{{ title }}
        </h1>
        <h4>
            <span v-if="hasSubtitle && !hasHyperlink">{{ subtitle }}, </span>
            <span v-else-if="hasSubtitle && hasHyperlink"><a :href="subtitleHyperlink" target="_blank">{{ subtitle }}</a></span>
            {{ year }}
        </h4>
        <p class="bold">{{ materials }}</p>
        <p>{{ dimension }}</p>
        <p>{{ description }}</p>
    </div>
</template>
<script>
import {assureLAttribut} from '@/models/assureLesAttributsPrismic'

export default {
    name: "BlocTexteAnglais",
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
    computed: {
      hasSubtitle() {
        return this.sousTitre !== ''
      },
      hasHyperlink() {
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
.lang-en{
    font-style: italic;
}
.bold{
  font-weight: bolder;
}
</style>
