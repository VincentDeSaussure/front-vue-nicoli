<template>
  <div>
    <nav-projet></nav-projet>
    <main>
      <section>
        <h1>Contact</h1>
      </section>
      <section>
        <h1>CV</h1>
      </section>
    </main>
  </div>
</template>
<script>
import NavProjet from '@/components/nav/NavProjet'

function prepareCVFrom(data) {
  console.log(data)
}

export default {
  name: 'Biographie',
  components: { NavProjet },
  data: () => {
    return {
      sections: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('cvbio')
          .then((document) => {
            prepareCVFrom(document.data)
          });
    }
  },
  created () {
    this.getContent();
  }
}
</script>