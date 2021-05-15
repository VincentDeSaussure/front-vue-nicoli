<template>
  <div>
    <nav-projet></nav-projet>
    <main>
      <section>
        <h2>{{ this.contact }}</h2>
      </section>
      <section>
        <article v-for="section in sections">
          <h2>{{ section.titre }}</h2>
          <ol>
            <li v-for="ligne in section.lignes">
              <time>{{ ligne.année }}</time>
              <div>
                <p v-for="description in ligne.descriptions">{{ description }}</p>
              </div>
            </li>
          </ol>
        </article>
      </section>
    </main>
  </div>
</template>
<script>
import NavProjet from '@/components/nav/NavProjet'
import {prepareCVFrom} from '@/models/prepareCVFromPrismicData'

export default {
  name: 'Biographie',
  components: { NavProjet },
  data: () => {
    return {
      contact: '',
      telephone: '',
      email: '',
      sections: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('cvbio')
          .then((document) => {
            this.contact = document.data.contact[0].text
            this.telephone = document.data.telephone[0]
            this.email = document.data.email[0]
            this.sections = prepareCVFrom(document.data)
          });
    }
  },
  created () {
    this.getContent();
  }
}
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 150px;
}
h2 {
  font-weight: bold;
  font-size: 1.2rem;
}
h3 {
  font-weight: bold;
  font-size: 1.1rem;
}
li {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 30px;
}
</style>