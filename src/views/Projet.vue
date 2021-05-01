<template>
    <div class="columns is-8 is-variable">
        <div class="column is-one-quarter">
            <bloc-text class="bloc" :uid="blocTextUid"></bloc-text>
            <bloc-texte-anglais class="bloc" :uid="blocTexteAnglaisUid"></bloc-texte-anglais>
        </div>
        <div class="column is-three-quarters">
            <composition :groupeType="compositionType" :uid="compositionUid"></composition>
            <copyrigth :text="copyright"></copyrigth>
        </div>
    </div>
</template>
<script>
import BlocText from "../components/BlocText.vue";
import Copyrigth from "../components/Copyright";
import BlocTexteAnglais from "../components/BlocTexteAnglais";
import Composition from "../components/Composition";

export default {
    name: "Projet",
    components: {
        BlocTexteAnglais,
        Copyrigth,
        BlocText,
        Composition
    },
    data:() => {
        return {
            blocTextUid: null,
            blocTexteAnglaisUid: null,
            compositionUid: null,
            compositionType: null,
            copyright: null,
        }
    },
    methods: {
        getContent(uid) {
            console.log(uid);
            this.$prismic.client.getByUID("page", uid).then((document) => {
                this.blocTextUid = document.data.bloc_text.uid;
                this.blocTexteAnglaisUid = document.data.bloc_texte_anglais.uid;
                this.compositionType = document.data.composition.type;
                this.compositionUid = document.data.composition.uid;
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
.bloc{
    margin-bottom: 2rem;
    max-width: 300px;
}
</style>