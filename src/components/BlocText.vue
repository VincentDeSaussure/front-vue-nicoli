<template>
    <div>
        <h3>{{ titre }}
            <span v-if="sousTitre !== ''"> /</span>
        </h3>
        <h4>
            <span v-if="sousTitre !== ''">{{ sousTitre }}, </span>
            {{ annee }}
        </h4>
        <p>{{ dimensions }}</p>
        <p>{{ description }}</p>
        <p>{{ materiaux }}</p>
    </div>
</template>
<script>
import {assureLesAttributs} from '@/models/assureLesAttributsPrismic'

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
            sousTitre: null
        }
    },
    methods: {
        async getContent() {
          const { data } = await this.$prismic.client.getByUID("bloc-texte", this.uid)
          this.annee = assureLesAttributs(data.annee);
          this.dimensions = assureLesAttributs(data.dimensions);
          this.description = assureLesAttributs(data.description);
          this.materiaux = assureLesAttributs(data.materiaux);
          this.titre = assureLesAttributs(data.titre).toUpperCase();
          this.sousTitre = assureLesAttributs(data["sous-titre"]);
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
</style>