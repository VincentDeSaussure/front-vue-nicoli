<template>
  <div>
    <nav-projet></nav-projet>
    <main>
      <section>
        <bloc-text class="bloc" :uid="blocTextUid"></bloc-text>
        <bloc-texte-anglais class="bloc" :uid="blocTexteAnglaisUid"></bloc-texte-anglais>
      </section>
      <section>
        <composition :groupeType="compositionType" :uid="compositionUid"></composition>
        <copyrigth :text="copyright"></copyrigth>
      </section>
    </main>
  </div>
</template>
<script>
import BlocText from "../components/BlocText.vue";
import Copyrigth from "../components/Copyright";
import BlocTexteAnglais from "../components/BlocTexteAnglais";
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
        getContent(uid) {
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