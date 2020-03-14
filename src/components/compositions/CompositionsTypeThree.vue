<template>
    <div class="columns">
        <div class="column is-one-third">
            <prismic-image :field="images[0].image"></prismic-image>
        </div>
        <div class="column is-one-third">
            <prismic-image :field="images[1].image"></prismic-image>
        </div>
        <div class="column is-one-third">
            <prismic-image :field="images[2].image"></prismic-image>
        </div>
    </div>
</template>
<script>
export default {
    name: "compositionTypeThree",
    props: ["images"]
}
</script>