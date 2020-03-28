<template>
    <div>
        <div>
            <prismic-image :field="image1"></prismic-image>
        </div>
        <div>
            <prismic-image :field="image2"></prismic-image>
        </div>
        <div>
            <prismic-image :field="image3"></prismic-image>
        </div>
        <div>
            <prismic-image :field="image4"></prismic-image>
        </div>
    </div>
</template>
<script>
export default {
    name: "compositionTypeDefault",
    props: ["uid"],
    mounted() {
        this.getContent();
    },
    data: () => {
        return {
            image1: null,
            image2: null,
            image3: null,
            image4: null
        }
    },
    methods: {
        getContent() {
            return this.$prismic.client.getByUID("groupe-4", this.uid).then(document => {
                this.image1 = document.data.image1;
                this.image2 = document.data.image2;
                this.image3 = document.data.image3;
                this.image4 = document.data.image4;
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