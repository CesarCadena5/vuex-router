<template>
    <section v-if="!error">
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

            <button
                @click="getMorePokemons" 
                class="btn-add-pokemons">
                + Pokemones
            </button>
        </div>
    </section>
    <section v-else>
        <h2>{{ error }}</h2>
    </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    components: {
        PokemonItem: defineAsyncComponent(() => import("@/modules/pokemon/components/PokemonItem.vue")),
        Loading: defineAsyncComponent(() => import("@/modules/shared/components/Loading.vue"))
    },
    data() {
        return {
            offset: 0
        }
    },  
    computed: {
        ...mapState('pokemon', ['pokemons', 'loading', 'error'])
    },
    methods: {
        ...mapActions('pokemon', ['getPokemons']),
        ...mapMutations('pokemon', ['setError']),
        getMorePokemons() {
            this.offset += 10;
        }
    },
    watch: {
        offset(value) {
            this.getPokemons(value);
        }
    },
    created() {
        this.setError('');
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
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    /* position: relative; */
}

.btn-add-pokemons {
    border-radius: .3rem;
    position: fixed;
    top: 4rem;
    right: 1rem;
    padding: .3rem;
    border: 1px solid greenyellow;
    background-color: steelblue;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
}
</style>
