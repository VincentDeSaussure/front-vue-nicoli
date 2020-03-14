<template>
    <div class="columns">
        <div class="column">
            <prismic-image :field="images[0].image"></prismic-image>
        </div>
    </div>
</template>
<script>
    export default {
        name: "compositionTypeOne",
        props: ["images"]
    }
</script>