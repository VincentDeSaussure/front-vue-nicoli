<template>
  <div class="composition">
    <div v-for="image in images">
      <prismic-image :field="image"></prismic-image>
    </div>
  </div>
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
<style scoped>
.composition{
  display: flex;
  flex-wrap: wrap;
}
.composition img{
  margin: 2px 4px;
}
@media only screen and (max-width: 1180px) {
  .composition {
    display: block;
  }
  .composition img{
    width: 100%;
  }
}
</style>
