<template>
  <div>
    <nav-projet></nav-projet>
    <main>
      <section>
        <h1>{{ this.contact }}</h1>
      </section>
      <section>
        <h1>CV</h1>
        <ol>
          <li v-for="section in sections">
            <p><span>{{ section.titre }}</span></p>
          </li>
        </ol>
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