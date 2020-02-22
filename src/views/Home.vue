<template>
  <div>
    <p>Home</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      all: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          this.all = document.data;
        })
    }
  },
  created () {
    this.getContent();
  }
}
</script>
