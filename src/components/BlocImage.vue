<template>
    <div>
        <component :is="selectComposition" v-bind:images="images"></component>
    </div>
</template>
<script>
import CompositionTypeOne from "./compositions/CompositionsTypeOne"
import CompositionTypeTwo from "./compositions/CompositionsTypeTwo"
import CompositionTypeThree from "./compositions/CompositionsTypeThree"
import CompositionTypeDefault from "./compositions/CompositionsTypeDefault"
import { compositions } from "../models/compositions";

export default {
name: "BlocImage",
    components: {
        CompositionTypeOne,
        CompositionTypeTwo,
        CompositionTypeThree,
        CompositionTypeDefault
    },
    props: ["composition", "images"],
    data:() => {
        return {
            typeDeCompositions: [
                {
                    type: compositions.GROUPE_1,
                    component: CompositionTypeOne
                },
                {
                    type: compositions.GROUPE_2,
                    component: CompositionTypeTwo
                },
                {
                    type: compositions.GROUPE_3,
                    component: CompositionTypeThree
                }
            ],
            defaultComposition: {
                type: "default",
                component: CompositionTypeDefault
            }
        }
    },
    computed: {
        selectComposition() {
            const composition = this.typeDeCompositions.find(el => el.type === this.composition);
            return composition ? composition.component : this.defaultComposition.component;
        }
    }
}
</script>