<template>
    <div>
        Bloc text component
    </div>
</template>
<script>
export default {
    name: "BlocText",
    props: ["uid"],
    data:() => {
        return {
            content: null,
            annee: null,
            dimensions: null,
            description: null,
            materiaux: null,
            "sous-titre": null,
            titre: null
        }
    },
    methods: {
        getContent() {
            return this.$prismic.client.getByUID("bloc-texte", this.uid).then((document) => {
                this.content = document.data;
                this.annee = document.data.annee;
                this.dimensions = document.data.dimensions;
                this.description = document.data.description;
                this.materiaux = document.data.materiaux;
                this["sous-titre"] = document.data["sous-titre"];
                this.titre = document.data.titre;
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