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
  padding: .5rem;
}
</style>