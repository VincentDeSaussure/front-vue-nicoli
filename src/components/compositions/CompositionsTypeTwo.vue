<template>
    <div class="columns is-variable is-2">
        <div class="column is-narrow">
            <prismic-image :field="image1"></prismic-image>
        </div>
        <div class="column is-narrow">
            <prismic-image :field="image2"></prismic-image>
        </div>
    </div>
</template>
<script>
export default {
    name: "compositionTypeTwo",
    props: ["uid"],
    mounted() {
      this.getContent();
    },
    data: () => {
        return {
            image1: null,
            image2: null
        }
    },
    methods: {
        getContent() {
            console.log(this.uid);
            return this.$prismic.client.getByUID("groupe-2", this.uid).then((document) => {
                this.image1 = document.data.image1;
                this.image2 = document.data.image2;
            })
        }
    },
    watch: {
        uid() {
            this.getContent();
        }
    }
}
</script>