<template>
  <PokemonLayout/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    PokemonLayout: defineAsyncComponent(() => import("@/modules/pokemon/layouts/PokemonLayout.vue"))
  }
}

</script>

<style scoped>
</style>
