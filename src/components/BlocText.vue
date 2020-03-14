<template>
    <div>
        <h3>{{ titre }}
            <span v-if="sousTitre !== null"> /</span>
        </h3>
        <h4>
            <span v-if="sousTitre !== null">{{ sousTitre }}, </span>
            {{ annee }}
        </h4>
        <p>{{ dimensions }}</p>
        <p>{{ description }}</p>
        <p>{{ materiaux }}</p>
    </div>
</template>
<script>
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
        getContent() {
            return this.$prismic.client.getByUID("bloc-texte", this.uid).then((document) => {
                this.annee = document.data.annee[0].text;
                this.dimensions = document.data.dimensions[0].text;
                this.description = document.data.description[0].text;
                this.materiaux = document.data.materiaux[0].text;
                this.titre = document.data.titre[0].text.toUpperCase();
                this.sousTitre = document.data["sous-titre"].length === 1 ? document.data["sous-titre"][0].text : null;
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
h3 {
    font-weight: bold;
    font-size: 1.1rem;
}
h4 {
    font-weight: bold;
}
</style>