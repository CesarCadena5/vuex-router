<template>
    <section v-if="!error">
        <div
            v-if="loading"
            class="loading">
            <Loading/>
        </div>
        <article 
            class="characters-container"
            v-else>
            <button
                @click="getMoreDbzCharacters" 
                class="btn-add-pokemons fs-2">
                + Personajes
            </button>
            <DbzCharacter 
                v-for="character in dbzCharacters" 
                :key="character.id"
                :character="character"
            />
        </article>
    </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            page: 1
        }
    },
    components: {
        Loading: defineAsyncComponent(() => import("@/modules/shared/components/Loading.vue")),
        DbzCharacter: defineAsyncComponent(() => import("@/modules/dbz/components/DbzCharacter.vue"))
    },  
    computed: {
        ...mapState('dbz', ['dbzCharacters', 'loading', 'error'])
    },
    methods: {
        ...mapActions('dbz', ['getDbzCharacters']),
        getMoreDbzCharacters() {
            this.page += 1;
        }
    },
    watch: {
        page(value) {
            if (value < 7) {
                this.getDbzCharacters(value);
            }
        }
    },
    created() {
        this.getDbzCharacters(this.page);
    }
}
</script>

<style scoped>
.characters-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.btn-add-pokemons {
    border-radius: .3rem;
    position: fixed;
    z-index: 20;
    top: 4rem;
    right: 1rem;
    padding: .3rem;
    border: 1px solid #f7f799;
    background-color: steelblue;
    color: white;
    cursor: pointer;
    transition: all .4s linear;
}

.btn-add-pokemons:hover {
    background-color: #dce0e6;
    color: #2b4c7e;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83vh;
}
</style>