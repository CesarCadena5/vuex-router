<template>
  <section class="search-pokemon">
    <article>
        <FormSearch @nameSearch="submitForm"/>
    </article>
    <article
        v-if="pokemonExists && !error" 
        class="card-pokemon">
        <div
            v-if="loading"
            class="loading">
            <Loading/>
        </div>
        <PokemonItem 
            v-else
            :pokemon="pokemonSelected"
            sizeImage="300px 300px"
            widthContainer="400px"
        />
    </article>
    <article v-else>
        <h2>{{ error }}</h2>
    </article>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    components: {
        PokemonItem: defineAsyncComponent(() => import("@/modules/pokemon/components/PokemonItem.vue")),
        Loading: defineAsyncComponent(() => import('@/modules/shared/components/Loading.vue')),
        FormSearch: defineAsyncComponent(() => import("@/modules/shared/components/FormSearch.vue"))
    },
    computed: {
        ...mapState('pokemon', ['pokemonSelected', 'loading', 'error']),
        pokemonExists() {
            return Object.keys(this.pokemonSelected).length > 0;
        }
    },
    methods: {
        ...mapActions('pokemon', ['getPokemon']),
        ...mapMutations('pokemon', ['setPokemonSelected', 'setError']),
        submitForm(search) {
            this.setError('');
            const namePokemon = search.trim();
            this.getPokemon(namePokemon);
        }
    },
    created() {
        this.setPokemonSelected([]);
    }
}
</script>

<style scoped>
.search-pokemon {
    height: 92.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}

.card-pokemon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83vh;
}
</style>