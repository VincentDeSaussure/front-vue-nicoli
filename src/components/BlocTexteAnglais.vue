<template>
    <div>
        Bloc texte anglais component
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
                this.year = document.data.year;
                this.dimension = document.data.dimension;
                this.description = document.data.description;
                this.materials = document.data.materials;
                this.subtitle = document.data.subtitle;
                this.title = document.data.title;
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