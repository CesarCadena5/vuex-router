<template>
    <section>
        <h2>Pokemon List</h2>

        <div
            v-if="loading"
            class="loading">
            <Loading/>
        </div>
        <div 
            v-else
            class="pokemon-list"
        >
            <PokemonItem 
                v-for="pokemon in pokemons" 
                :key="pokemon.id" 
                :pokemon="pokemon"
            />
        </div>
    </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        PokemonItem: defineAsyncComponent(() => import("@/modules/pokemon/components/PokemonItem.vue")),
        Loading: defineAsyncComponent(() => import("@/modules/shared/components/Loading.vue"))
    },
    computed: {
        ...mapState('pokemon', ['pokemons', 'loading', 'error'])
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
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83vh;
}

h2{ 
    text-align: center;
}

.pokemon-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: .4rem;
    flex-wrap: wrap;
}
</style>
