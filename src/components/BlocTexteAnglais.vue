<template>
    <div class="lang-en">
        <h3>{{ title }}
            <span v-if="subtitle !== null"> /</span>
        </h3>
        <h4>
            <span v-if="subtitle !== null">{{ subtitle }}, </span>
            {{ year }}
        </h4>
        <p>{{ dimension }}</p>
        <p>{{ description }}</p>
        <p>{{ materials }}</p>
    </div>
</template>
<script>
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
        getContent() {
            return this.$prismic.client.getByUID("bloc-texte-anglais", this.uid).then((document) => {
                this.year = document.data.year[0].text;
                this.dimension = document.data.dimension[0].text;
                this.description = document.data.description[0].text;
                this.materials = document.data.materials[0].text;
                this.title = document.data.title[0].text.toUpperCase();
                this.subtitle = document.data.subtitle.length === 1 ? document.data.subtitle[0].text : null;
            })
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