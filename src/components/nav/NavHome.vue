<template>
  <nav>
    <router-link :to="{name: 'biographie'}">BIO + CONTACT</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavHome"
}
</script>
<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
  margin-bottom: .5rem;
}
</style>
