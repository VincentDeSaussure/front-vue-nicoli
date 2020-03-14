<template>
    <div class="navbar">
        <div class="navbar-brand">
            <h1>Charlotte Nicoli</h1>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <router-link :to="{name: 'home'}">BACK</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'navBar'
}
</script>
<style>
.navbar{
    display: flex;
    justify-content: space-between;
    height: 130px;
}
.navbar .navbar-brand{
    font-size: 2rem;
    font-weight: bold;
}
.navbar .navbar-end{
    margin-top: 1rem;
}
</style>