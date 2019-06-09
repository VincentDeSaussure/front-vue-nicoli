<template>
  <div id ="formulaire-du-seum">
    <v-container fluid v-if="hasFormulaireDuSeum">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>

          <p>En attendant la fin de la construction du site, vous pouvez remplir le formulaire du seul ci-dessous. À bientôt !</p>
          <v-form>
            <v-checkbox v-for="(entree, index) in formulaireDuSeum"
                        :key="entree.nom + index"
                        v-model="entree.value"
                        :label="entree.nom">
            </v-checkbox>
            <v-btn color="info" @submit="submitFormulaireDuSeum" @click="submitFormulaireDuSeum">
              Envoyer
            </v-btn>
          </v-form>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FormulaireDuSeum',
  props: {
    msg: String
  },
  created() {
    this.$store.dispatch("fetchSeums")
  },
  data: () => {
    return {
      newEntree: ""
    }
  },
  computed: {
    hasFormulaireDuSeum() {
      return this.formulaireDuSeum && this.formulaireDuSeum.length;
    },
    formulaireDuSeum() {
      return this.$store.state.formulaireDuSeum;
    }
  },
  methods: {
    addEntreeToFormulaireDuSeum(newEntree) {
      const item = {
        nom: newEntree
      }
      return this.$store.actions.push(item);
    },
    submitFormulaireDuSeum() {
      console.log(this.formulaireDuSeum)
      return;
    }
  }
}
</script>
<style>
  .v-label{
    font-size: 14px;
  }
  .v-input--selection-controls{
    margin: -5px 5px -5px;
    padding: 0;
  }
</style>

