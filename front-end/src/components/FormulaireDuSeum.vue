<template>
  <div id ="formulaire-du-seum">
    <v-container fluid>
      <v-checkbox v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
      <v-checkbox v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FormulaireDuSeum',
  props: {
    msg: String
  },
  data: () => {
    return {
      checkbox1: true,
      checkbox2: true
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
