<template>
  <div class="brand">
    <router-link :to="{name: 'home'}">Charlotte Nicoli</router-link>
  </div>
</template>
<style scoped>
.brand{
  font-size: 2rem;
  font-weight: bold;
  padding: 3rem 0rem 1.5rem 0rem;
}
@media only screen and (max-width: 600px) {
  .brand{
    padding: 3rem 0rem 1.5rem 0rem;
    text-align: center;
  }
}
</style>
