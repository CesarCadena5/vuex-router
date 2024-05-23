import { createStore } from "vuex";
import pokemonStore from "./pokemon";
import dbzStore from "./dbz";

export default createStore({
    modules: {
        pokemon: pokemonStore,
        dbz: dbzStore
    }
});