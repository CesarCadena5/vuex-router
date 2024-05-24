<template>
  <section class="search-dbz">
    <article>
      <FormSearch @nameSearch="submitForm" placeholder="Goku, Vegeta..."/>
    </article>
    <article
        class="card-dbz"
        v-if="characterExists && !error"
        >
        <div
            v-if="loading"
            class="loading">
            <Loading/>
        </div>
        <DbzCharacter v-else :character="characterSearch"/>
    </article>
    <article v-else>
        <h2>{{error}}</h2>
    </article>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  components: {
    Loading: defineAsyncComponent(() => import('@/modules/shared/components/Loading.vue')),
    FormSearch: defineAsyncComponent(() => import("@/modules/shared/components/FormSearch.vue")),
    DbzCharacter: defineAsyncComponent(() => import("@/modules/dbz/components/DbzCharacter.vue"))
  },
  computed: {
    ...mapState('dbz', ['dbzCharacter', 'loading', 'error']),
    characterSearch() {
        return this.dbzCharacter[0];
    },
    characterExists() {
        return this.dbzCharacter.length > 0;
    }
  },
  methods: {
    ...mapActions('dbz', ['getDbzCharacter']),
    ...mapMutations('dbz', ['setError']),
    submitForm(search) {
        this.setError('');
        const nameSearch = search.trim();
        this.getDbzCharacter(`?name=${nameSearch}`);        
    }
  }
}
</script>

<style scoped>
.search-dbz {
    height: 92.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}

.card-dbz {
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
    height: 92.8vh;
}
</style>