<template>
    <div>
        Bloc image component type : {{ composition }}
        <div v-for="image in images">
            <p>{{ image.image.url }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "BlocImage",
    props: ["composition", "images"]
}
</script>