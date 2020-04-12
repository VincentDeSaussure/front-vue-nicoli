<template>
    <div class="columns is-8 is-variable">
        <div class="column is-one-quarter">
            <bloc-text class="bloc" :uid="blocTextUid"></bloc-text>
            <bloc-texte-anglais class="bloc" :uid="blocTexteAnglaisUid"></bloc-texte-anglais>
        </div>
        <div class="column is-three-quarters">
            <component :is="composition.component" v-bind:uid="compositionUid"></component>
            <copyrigth :text="copyright"></copyrigth>
        </div>
    </div>
</template>
<script>
import BlocText from "../components/BlocText.vue";
import Copyrigth from "../components/Copyright";
import BlocTexteAnglais from "../components/BlocTexteAnglais";
import CompositionTypeOne from "../components/compositions/CompositionsTypeOne";
import CompositionTypeTwo from "../components/compositions/CompositionsTypeTwo";
import CompositionTypeThree from "../components/compositions/CompositionsTypeThree";
import CompositionsTypeDefault from "../components/compositions/CompositionsTypeDefault";
import CompositionTypeFour from "../components/compositions/CompositionTypeFour";
import { typeDeCompositions } from "../models/type-de-compositions";

export default {
    name: "Projet",
    components: {
        BlocTexteAnglais,
        Copyrigth,
        BlocText,
        CompositionTypeOne,
        CompositionTypeTwo,
        CompositionTypeThree,
        CompositionTypeFour,
        CompositionsTypeDefault
    },
    data:() => {
        return {
            blocTextUid: null,
            blocTexteAnglaisUid: null,
            composition: {
                type: null,
                component: CompositionsTypeDefault
            },
            compositionUid: null,
            copyright: null,
            typeDeCompositions: [
                {
                    type: typeDeCompositions.GROUPE_1,
                    component: CompositionTypeOne
                },
                {
                    type: typeDeCompositions.GROUPE_2,
                    component: CompositionTypeTwo
                },
                {
                    type: typeDeCompositions.GROUPE_3,
                    component: CompositionTypeThree
                },
                {
                    type: typeDeCompositions.GROUPE_4,
                    component: CompositionTypeFour
                }
            ]
        }
    },
    methods: {
        getContent(uid) {
            console.log(uid);
            this.$prismic.client.getByUID("page", uid).then((document) => {
                this.blocTextUid = document.data.bloc_text.uid;
                this.blocTexteAnglaisUid = document.data.bloc_texte_anglais.uid;
                this.composition = this.typeDeCompositions.find(el => el.type === document.data.composition.type);
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