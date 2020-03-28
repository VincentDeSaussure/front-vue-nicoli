<template>
    <div class="columns">
        <div class="column">
            <prismic-image :field="image1"></prismic-image>
        </div>
    </div>
</template>
<script>
export default {
    name: "compositionTypeOne",
    props: ["uid"],
    mounted() {
        this.getContent();
    },
    data: () => {
       return {
           image1: null
       }
    },
    methods: {
        getContent() {
            return this.$prismic.client.getByUID("groupe-1", this.uid).then(document => {
                this.image1 = document.data.image1;
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