<template>
  <div>
    <nav-projet></nav-projet>
    <main>
      <section>
        <bloc-text class="bloc" :uid="blocTextUid"></bloc-text>
        <bloc-texte-anglais class="bloc" :uid="blocTexteAnglaisUid"></bloc-texte-anglais>
      </section>
      <section>
        <composition v-if="compositionType" :groupeType="compositionType" :uid="compositionUid"></composition>
        <copyrigth :text="copyright"></copyrigth>
      </section>
    </main>
  </div>
</template>
<script>
import BlocText from "../components/blocText/RecupereTexte.vue";
import Copyrigth from "../components/Copyright";
import BlocTexteAnglais from "../components/blocText/RecupereTexteAnglais";
import Composition from "../components/Composition";
import NavProjet from '@/components/nav/NavProjet'

export default {
    name: "Projet",
    components: {
      NavProjet,
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
        async getContent(uid) {
            const { data } = await this.$prismic.client.getByUID("page", uid)
            this.blocTextUid = data.bloc_text.uid;
            this.blocTexteAnglaisUid = data.bloc_texte_anglais.uid;
            this.compositionType = data.composition.type;
            this.compositionUid = data.composition.uid;
            this.copyright = data.copyright[0].text;
        }
    },
    created () {
        this.getContent(this.$route.params.uid);
    }
}
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 150px;
}
@media only screen and (max-width: 600px) {
  main {
    display: block;
  }
}
.bloc{
    margin-bottom: 2rem;
    min-width: 300px;
    max-width: 300px;
}
</style>
