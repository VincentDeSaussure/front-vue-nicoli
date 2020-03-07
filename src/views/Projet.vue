<template>
    <div class="container">
        <div class="description-content">
            <bloc-text class="bloc-texte" :id="blocTextId"></bloc-text>
            <bloc-texte-anglais class="bloc-texte" :id="blocTexteAnglaisId"></bloc-texte-anglais>
        </div>
        <div class="composition-content">
            <bloc-image :composition="composition" :images="images"></bloc-image>
            <copyrigth :text="copyright"></copyrigth>
        </div>
    </div>
</template>
<script>
import BlocText from "../components/BlocText.vue"
import BlocImage from "../components/BlocImage";
import Copyrigth from "../components/Copyright";
import BlocTexteAnglais from "../components/BlocTexteAnglais";
export default {
    name: "Projet",
    components: {
        BlocTexteAnglais,
        Copyrigth,
        BlocImage,
        BlocText,
    },
    data:() => {
        return {
            title: null,
            blocTextId: null,
            blocTexteAnglaisId: null,
            composition: null,
            images: [],
            copyright: null
        }
    },
    methods: {
        getContent(uid) {
            this.$prismic.client.getByUID("page", uid).then((document) => {
                this.title = document.data.projet[0].text;
                this.blocTextId = document.data.bloc_text.id;
                this.blocTexteAnglaisId = document.data.bloc_texte_anglais.id;
                this.composition = document.data["composition-visuelle"];
                this.images = document.data["bloc-image"];
                this.copyright = document.data.copyright[0].text;
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
<style>
.container{
    display: flex;
}
.container .description-content{
    flex: 3;
    border: 1px solid blue;
}
.container .composition-content{
    flex: 9;
    border: 1px solid red;
}
.bloc-texte{
    margin-bottom: 1rem;
}
</style>