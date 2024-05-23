<template>
    <nav class="navbar">
        <router-link :to="{name: 'list-pokemon'}">Lista de Pokemones</router-link>
        <router-link :to="{name: 'search-pokemon'}">Buscar Pokemón</router-link>
        <router-link :to="{name: 'dbz-list'}">Lista Dbz</router-link>
        <router-link :to="{name: 'dbz-search'}">Buscar Dbz</router-link>
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
    width: 100%;
    height: 50px;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    z-index: 10;
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

a.router-link-exact-active {
    color: #081ca1;
}
</style>