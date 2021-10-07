<template>
  <nav>
    <router-link :to="{name: 'home'}">BACK</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavProjet"
}
</script>
<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  margin-bottom: .5rem;
}
@media only screen and (max-width: 600px) {
  nav {
    display: block;
    text-align: right;
    margin-bottom: .5rem;
  }
}
</style>
