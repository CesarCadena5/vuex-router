<template>
    <section
        v-if="!error">
        <DbzCard :character="dbzCharacter"/>
    </section>
    <section v-else>
        <h2>{{ error }}</h2>
    </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        DbzCard: defineAsyncComponent(() => import("@/modules/dbz/components/DbzCard.vue"))
    },
    computed: {
        ...mapState('dbz', ['dbzCharacter', 'loading', 'error'])
    },
    methods: {
        ...mapActions('dbz', ['getDbzCharacter'])
    },  
    watch: {
        id(value) {
            this.getDbzCharacter(`/${value}`);
        }
    },  
    created() {
        this.getDbzCharacter(`/${this.id}`);
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
}
</style>