<template>
    <div 
        @click="redirectPokemonDetail"
        class="pokemon-item"
    >
        <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.id">
        <h3>{{ pokemon.name }}</h3>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapMutations('pokemon', ['setPokemonSelected', 'setLoading']),
        redirectPokemonDetail() {
            this.setLoading(true);
            this.$router.push(`detail/${this.pokemon.id}`);
            this.setPokemonSelected(this.pokemon);
            this.setLoading(false);
        }
    }
}
</script>

<style scoped>
.pokemon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    min-height: 300px;
    max-height: 400px;
    border-radius: .3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: .3rem;
    margin-bottom: .6rem;
}

.pokemon-item img {
    height: 300px;
    width: 100%;
    object-fit: contain;
}
</style>