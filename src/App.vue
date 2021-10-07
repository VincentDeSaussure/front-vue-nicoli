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
@media only screen and (max-width: 600px) {
  html{
    font-size: 12px;
    padding: 0rem 0.5rem;
  }
}

html *{
  color: rgb(74, 74, 74);
  font-family: 'Montserrat', sans-serif;
}
a{
  text-decoration: none;
}
p, h1, h2, h3, h4, h5, a{
  color: rgb(74, 74, 74);
  margin: 0;
  line-height: 1.5rem;
}
</style>
