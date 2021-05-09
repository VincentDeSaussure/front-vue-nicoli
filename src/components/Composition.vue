<template>
  <section>
    <div v-for="image in images">
      <prismic-image :field="image"></prismic-image>
    </div>
  </section>
</template>
<script>
import {imageNumberKeyFromPrismicDataToArray} from '@/models/imageNumberKeyFromPrismicDataToArray'

export default {
    name: "composition",
    props: ["uid", "groupeType"],
    mounted() {
        this.getContent();
    },
    data: () => {
        return {
            images: null
        }
    },
    methods: {
        getContent() {
            return this.$prismic.client.getByUID(this.groupeType, this.uid).then(document => {
                this.images = imageNumberKeyFromPrismicDataToArray(document.data);
            })
        }
    },
    watch: {
        uid() {
            this.getContent()
        }
    }
}
</script>
<style>
section{
  display: flex;
  flex-wrap: wrap;
}
section img{
  margin: 2px 4px;
}
</style>