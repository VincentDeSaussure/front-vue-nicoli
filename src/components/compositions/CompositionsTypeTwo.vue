<template>
    <div class="columns">
        <div class="column is-three-quarters">
            <prismic-image :field="images[0].image"></prismic-image>
        </div>
        <div class="column is-one-quarter">
            <prismic-image :field="images[1].image"></prismic-image>
        </div>
    </div>
</template>
<script>
export default {
    name: "compositionTypeTwo",
    props: ["images"]
}
</script>