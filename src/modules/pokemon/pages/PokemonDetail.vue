<template>
    <article v-if="pokemonSelectedEmpty">
        <Loading v-if="loading"/>
        <div 
            v-else
            class="pokemon-container">
            <div class="pokemon-card">
                <div class="pokemon-img">
                    <img :src="pokemonSelected.sprites.other.dream_world.front_default" :alt="pokemonSelected.id">
                </div>
                <div class="pokemon-info">
                    <h1>{{ pokemonSelected.name }}</h1>
                    <h3>Habilidades</h3>
                    <ul>
                        <li v-for="{ ability } in pokemonSelected.abilities" :key="ability.name">
                            <router-link 
                                :to="{ name: 'pokemon-ability-name', params: { nameAbility: ability.name } }">
                                {{ ability.name }}
                            </router-link>
                        </li>
                    </ul>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from 'vuex';
export default {
    components: {
        PokemonItem: defineAsyncComponent(() => import("@/modules/pokemon/components/PokemonItem.vue")),
        Loading: defineAsyncComponent(() => import("@/modules/shared/components/Loading.vue"))
    },
    computed: {
        ...mapState('pokemon', ['pokemonSelected', 'loading']),
        pokemonSelectedEmpty() {
            return Object.keys(this.pokemonSelected).length > 0;
        }
    },
    created() {
        if(Object.keys(this.pokemonSelected).length === 0) {
            this.$router.push({name: 'list-pokemon'});
        }
    }    
}
</script>

<style scoped>
.pokemon-container {
    height: 92.8vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pokemon-card {
    width: 80%; 
    height: 80%;
    display: flex;
}

.pokemon-img, .pokemon-info {
    width: 50%;
    /* overflow: hidden; */
}

.pokemon-img {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pokemon-img img {
    width: 90%;
}

.pokemon-info ul {
    display: flex;
    gap:.5rem;
    padding: 0 0 0 0;
}

.pokemon-info ul li {
    list-style-type: none;
    background-color: steelblue;
    border-radius: .3rem;
    transition: all .4s linear;
}

.pokemon-info ul li:hover {
    color: slateblue;
    background-color: turquoise;
}

.pokemon-info ul li a {
    text-decoration: none;
    display: inline-block;
    font-weight: 900;
    color: white;
    padding: .6rem;
}
</style>