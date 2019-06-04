<template>
  <div id ="formulaire-du-seum">
    <v-container fluid v-if="hasFormulaireDuSeum">
      <v-checkbox v-for="(entree, index) in formulaireDuSeum"
                  :key="entree.nom + index"
                  v-model="entree.value"
                  :label="entree.nom">
      </v-checkbox>
      <v-btn color="success">
        Envoyer
      </v-btn>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
