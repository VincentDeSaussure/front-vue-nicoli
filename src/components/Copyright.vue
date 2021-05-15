<template>
    <p>
        {{ text }}
    </p>
</template>
<script>
export default {
    name: "Copyrigth",
    props: ["text"]
}
</script>
<style scoped>
p{
  min-width: 300px;
}
</style>