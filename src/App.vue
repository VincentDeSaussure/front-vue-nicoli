<template>
  <div id="app">
    <brand/>
    <router-view/>
  </div>
</template>

<script>
import Brand from "./components/Brand";
import "bulma/css/bulma.css";
export default {
  name: 'App',
  components: {Brand}
}
</script>

<style>
@import "./assets/css/resetr.css";

html{
  font-size: 14px;
  padding: 0rem 4rem;
}

html *{
  font-family: "proxima-nova", "SansSerif";
}
</style>
