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
            heightImage="300px"
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

.form {
    display: flex;
    gap: 1rem;
    padding: 1rem;
}

.form input {
    height: 1.6rem;
    outline: none;
    border: 1px solid steelblue;
    border-radius: .3rem;
    background-color: gainsboro;
    font-weight: 600;
    padding: .3rem;
}

.form button {
    padding: 0 1rem;
    border-radius: .3rem;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color .4s linear;
    background-color: slateblue;
    color: white;
}

.form button:hover {
    background-color: #10898b;
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