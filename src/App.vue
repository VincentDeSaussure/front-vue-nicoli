<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import "bulma/css/bulma.css";
export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
@import "./assets/css/resetr.css";

html{
  font-size: 14px;
  padding: 4rem;
}

html *{
  font-family: "proxima-nova", "SansSerif";
}
</style>
