<template>
    <div>
        Bloc text component
        <div>
            {{ titre }}
        </div>
    </div>
</template>
<script>
export default {
    name: "BlocText",
    props: ["id"],
    data:() => {
        return {
            titre: null
        }
    },
    methods: {
        getContent() {
            return this.$prismic.client.getByID(this.id).then((document) => {
                this.titre = document.data.titre[0].text;
            })
        }
    },
    watch: {
        id() {
            this.getContent()
        }
    }
}
</script>