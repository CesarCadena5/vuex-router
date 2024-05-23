<template>
    <div 
        @click="redirectPokemonDetail"
        :style="{width: widthContainer}"
        class="pokemon-item"
    >
        <img 
            :style="{height: heightImage}"
            :src="computedImage" 
            :alt="pokemon.id"
        >
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
        },
        heightImage: {
            type: String,
            default: '300px'
        },
        widthContainer: {
            type: String,
            default: '250px'
        }
    },
    computed: {
        computedImage() {
            return this.pokemon.sprites.other.dream_world.front_default || 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_640.png';
        }
    },  
    methods: {
        ...mapMutations('pokemon', ['setPokemonSelected', 'setLoading']),
        redirectPokemonDetail() {
            this.setLoading(true);
            this.$router.push({name: 'pokemon-detail', params: {id: this.pokemon.id}});
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
    border-radius: .3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: .3rem;
    margin-bottom: .6rem;
}

.pokemon-item img {
    width: 100%;
    object-fit: contain;
}
</style>