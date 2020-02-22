<template>
    <div>
        <projet-title :title="title"></projet-title>
    </div>
</template>
<script>
import ProjetTitle from "../components/ProjetTitle.vue"
export default {
    name: "Projet",
    components: {
        ProjetTitle
    },
    data:() => {
        return {
            title: null
        }
    },
    methods: {
        getContent(uid) {
            this.$prismic.client.getByUID("page", uid).then((document) => {
                this.title = document.data.projet[0].text;
            });
        }
    },
    created () {
        this.getContent(this.$route.params.uid);
    },
    beforeRouteUpdate (to, from, next) {
        this.getContent(to.params.uid);
        next();
    }
}
</script>