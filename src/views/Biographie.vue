<template>
  <div>
    <nav-projet></nav-projet>
    <main>
      <aside>
        <p>{{ this.email }}</p>
        <p>{{ this.bio }}</p>
      </aside>
      <section>
        <article v-for="section in sections">
          <h3>{{ section.titre }}</h3>
          <ol>
            <li v-for="ligne in section.lignes">
              <time :datetime="ligne.datetime">{{ ligne.annee }}</time>
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
import {PrepareCV} from '@/models/prepareCV'

export default {
  name: 'Biographie',
  components: { NavProjet },
  data: () => {
    return {
      contact: '',
      telephone: '',
      email: '',
      bio: '',
      sections: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('cvbio')
          .then((document) => {
            this.contact = document.data.contact[0].text
            this.email = document.data.email[0].text
            this.bio = document.data.bio[0].text
            this.sections = PrepareCV.from(document.data)
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
  display: flex;
}
@media only screen and (max-width: 600px) {
  main {
    display: block;
  }
}
aside{
  min-width: 300px;
  margin-bottom: 1rem;
}
h2 {
  font-weight: bold;
  font-size: 1.2rem;
}
h3 {
  font-weight: bold;
}
article{
  width: 100%;
  margin-bottom: 1rem;
}
li {
  list-style: none;
  display: flex;
}
li time{
  width: 100px;
}
</style>
