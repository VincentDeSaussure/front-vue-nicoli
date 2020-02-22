<template>
    <div>
        <projet-title :title="title"></projet-title>
        <br>
        <bloc-text :id="blocTextId"></bloc-text>
        <br>
        <bloc-texte-anglais :id="blocTexteAnglaisId"></bloc-texte-anglais>
        <br>
        <bloc-image :composition="composition" :images="images"></bloc-image>
        <br>
        <copyrigth :text="copyright"></copyrigth>
    </div>
</template>
<script>
import ProjetTitle from "../components/ProjetTitle.vue"
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
        ProjetTitle,
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