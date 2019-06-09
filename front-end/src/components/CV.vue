<template>
  <div id ="cv">
    <v-container fluid>
      <section v-for="(section, index) in CV" :key="'entete' + index">
        <liste-du-cv :title="index" :listDItem="section"></liste-du-cv>
        <v-divider></v-divider>
      </section>
    </v-container>
  </div>
</template>

<script>
import listeDuCv from "./listeDuCv"
import CV from "../models/CV"

export default {
  name: 'CV',
  components: {
    listeDuCv
  },
  props: {
    msg: String
  },
  data: () => {
    return {
      CV
    }
  }
}
</script>
