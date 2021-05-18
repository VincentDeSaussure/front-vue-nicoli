<template>
  <div id="app">
    <brand/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Brand from './components/Brand.vue'

@Component({components: {
    Brand
}})
export default class App extends Vue {
}
</script>

<style>
html{
  font-size: 14px;
  padding: 0rem 4rem;
}

html *{
  font-family: "proxima-nova", "SansSerif";
}

a{
  color: black;
  text-decoration: none;
}
</style>
