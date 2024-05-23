<template>
    <aside v-if="!error">
        <h2>Detalle del Pokemon</h2>
        <aside
            v-if="ability.name" 
            class="ability">
            <h3>{{ ability.names[5].name }}</h3>
            <p>{{ descriptionAbility.flavor_text }}</p>    
            <h4>Algunos pokemones que poseen esta habilidad</h4>
            <div v-if="pokemons" class="pokemons-container">
                <PokemonItem 
                    v-for="pokemon in pokemons" 
                    :key="pokemon.id" 
                    :pokemon="pokemon"
                    sizeImage="50px 50px"
                    widthContainer="100px"
                />
            </div>
        </aside>
    </aside>
    <aside v-else>
        <h2>{{ error }}</h2>
    </aside>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    props: {
        nameAbility: {
            type: String,
            required: true
        }
    },
    components: {
        Loading: defineAsyncComponent(() => import("@/modules/shared/components/Loading.vue")),
        PokemonItem: defineAsyncComponent(() => import("./PokemonItem.vue"))
    },
    computed: {
        ...mapState('pokemon', ['ability', 'loading', 'pokemons', 'error']),
        descriptionAbility() {
            if (this.ability && this.ability.flavor_text_entries.length > 0) {
                const descriptionsAbilities = this.ability.flavor_text_entries;
                return descriptionsAbilities.find(desc => desc.language.name === "es");
            }
        },
        pokemonsUseAbility() {
            if (this.ability && this.ability.pokemon) {
                const pokemons = this.ability.pokemon.map(({pokemon}) => ({url: pokemon.url})).splice(0, 10);
                return pokemons;
            }
        }
    },
    methods: {
        ...mapActions('pokemon', ['getAbility', 'getPokemonAbility']),
        ...mapMutations('pokemon', ['setError'])
    },
    watch: {
        nameAbility(value) {
            this.getAbility(value);
        },
        pokemonsUseAbility(value) {
            if (value) {
                this.getPokemonAbility(value);
            }
        }
    },
    created() {
        this.getAbility(this.nameAbility);
    }
}
</script>

<style scoped>
.pokemons-container {
    display: flex;
    flex-wrap: wrap;
    gap: .2rem;
}
</style>