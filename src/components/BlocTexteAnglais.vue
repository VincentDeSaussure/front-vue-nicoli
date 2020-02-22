<template>
    <div>
        Bloc texte anglais component
        <div>
            {{ title }}
        </div>
    </div>
</template>
<script>
export default {
    name: "BlocTexteAnglais",
    props: ["id"],
    data:() => {
        return {
            title: null
        }
    },
    methods: {
        getContent() {
            return this.$prismic.client.getByID(this.id).then((document) => {
                this.title = document.data.title[0].text;
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