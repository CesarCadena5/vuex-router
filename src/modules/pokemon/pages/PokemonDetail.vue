<template>
    <article>
        <h2>Pokemon Detail</h2>
        <div v-if="loading">
            <Loading/>
        </div>
        <div v-else>
            {{ pokemonSelected.name }}
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
        ...mapState('pokemon', ['pokemonSelected', 'loading'])
    }    
}
</script>

<style scoped>

</style>