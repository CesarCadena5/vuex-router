<template>
    <div>
        <h2>Pokemon</h2>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState('pokemon', ['pokemons'])
    },
    methods: {
        ...mapActions('pokemon', ['getPokemons'])
    },
    created() {
        this.getPokemons();
    }
}
</script>

<style scoped>

</style>
