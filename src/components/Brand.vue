<template>
  <div>
    <h1><router-link :to="{name: 'home'}">Charlotte Nicoli</router-link></h1>
  </div>
</template>
<script>
export default {
    name: 'Brand'
}
</script>
<style scoped>
h1{
  font-size: 2rem;
  font-weight: bold;
  padding: 3rem 0rem 1rem 0rem;
}
</style>