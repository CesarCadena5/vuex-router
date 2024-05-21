<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("@/modules/shared/components/Navbar.vue")),
    PokemonLayout: defineAsyncComponent(() => import("@/modules/pokemon/layouts/PokemonLayout.vue")),
  }
}

</script>

<style>
html {
    box-sizing: border-box;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

body {
    margin: 0;
}
</style>
