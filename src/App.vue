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

h1,h2,h3,h4,h5,span,p{
  margin: .2rem;
}

.fs-2 {
  font-size: 1.2rem;
}

.fs-3 {
  font-size: 1.3rem;
}

.fs-4 {
  font-size: 2rem;
}

body {
  margin: 0;
  font-family: "VT323", monospace;
  letter-spacing: 2px;
  background-color: #2b4c7e;
  color: #dce0e6;
}

button {
  font-family: inherit;
}
</style>
