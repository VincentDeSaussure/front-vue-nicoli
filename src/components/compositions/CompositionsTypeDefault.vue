<template>
    <div>
        <div v-for="image in images">
            <prismic-image :field="image.image"></prismic-image>
        </div>
    </div>
</template>
<script>
export default {
    name: "compositionTypeDefault",
    props: ["images"]
}
</script>