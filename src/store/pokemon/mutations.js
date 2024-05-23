export const setPokemons = (state, pokemons) => {
    state.pokemons = pokemons;
    state.error = '';
}

export const setPokemonSelected = (state, pokemon) => {
    state.pokemonSelected = pokemon;
}

export const setLoading = (state, value) => {
    state.loading = value;
}

export const setAbilities = (state, ability) => {
    state.ability = ability;
}

export const setError = (state, error) => {
    state.error = error;
}