<template>
    <div class="lang-en">
        <h3>{{ title }}
            <span v-if="subtitle !== ''"> /</span>
        </h3>
        <h4>
            <span v-if="subtitle !== ''">{{ subtitle }}, </span>
            {{ year }}
        </h4>
        <p>{{ dimension }}</p>
        <p>{{ description }}</p>
        <p>{{ materials }}</p>
    </div>
</template>
<script>
import {assureLesAttributs} from '@/models/assureLesAttributsPrismic'

export default {
    name: "BlocTexteAnglais",
    props: ["uid"],
    data:() => {
        return {
            year: null,
            dimension: null,
            description: null,
            materials: null,
            subtitle: null,
            title: null
        }
    },
    methods: {
        async getContent() {
            const { data } = await this.$prismic.client.getByUID("bloc-texte-anglais", this.uid)
            this.year = assureLesAttributs(data.year);
            this.dimension = assureLesAttributs(data.dimension);
            this.description = assureLesAttributs(data.description);
            this.materials = assureLesAttributs(data.materials);
            this.title = assureLesAttributs(data.title).toUpperCase();
            this.subtitle = assureLesAttributs(data.subtitle)
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
</style>