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
</style>
