<template>
    <nav class="navbar">
        <router-link :to="{name: 'list-pokemon'}">Lista de Pokemones</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    left: 0;
    background-color: steelblue;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
    font-size: 1.1rem;
    color: white;
    transition: all .5s linear;
}

a:hover {
    color: greenyellow;
}
</style>