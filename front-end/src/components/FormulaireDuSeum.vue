<template>
  <div id ="formulaire-du-seum">
    <v-container fluid v-if="hasFormulaireDuSeum">
      <v-checkbox v-for="(entree, index) in formulaireDuSeum" :key="entree.msg + index" v-model="entree.value" :label="entree.msg"></v-checkbox>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex
                xs12
                md4
        >
          <v-text-field
                  v-model="newEntree"
                  label="ajouter votre seum personnel"
          ></v-text-field>
          <v-btn
                  color="success"
                  @click="addEntreeToFormulaireDuSeum(newEntree)"
          >Valider
          </v-btn>
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
    this.$store.dispatch("FETCH_SEUMS")
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
        msg: newEntree,
        value: false
      }
      return this.$store.state.formulaireDuSeum.push(item);
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
