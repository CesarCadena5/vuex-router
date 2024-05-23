<template>
    <div
        v-if="pokemon"
        @click="redirectPokemonDetail"
        :style="{width: widthContainer, height: widthContainer, backgroundImage: computedImage, backgroundSize: sizeImage}"
        class="pokemon-item"
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
        sizeImage: {
            type: String,
            default: '180px 180px'
        },
        widthContainer: {
            type: String,
            default: '250px'
        }
    },
    computed: {
        computedImage() {
            return `url(${this.pokemon.sprites.other.dream_world.front_default})` || `url(https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_640.png)`;
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
    justify-content: flex-end;
    border-radius: .3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: .6rem;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.pokemon-item h3 {
    position: absolute;
    bottom: -.7rem;
}

.pokemon-item::after {
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    position: absolute;
    filter: drop-shadow(3px 3px 10px #cde54e) blur(.8rem);
    z-index: -1;
}
</style>