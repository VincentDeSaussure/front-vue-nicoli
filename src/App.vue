<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
  html{
    font-size: 14px;
    padding: 4rem;
  }
</style>
