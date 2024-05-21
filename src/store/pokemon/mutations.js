export const setPokemons = (state, pokemons) => {
    state.pokemons = pokemons;
    state.error = '';
}

export const setLoading = (state, value) => {
    state.loading = value;
}

export const setError = (state, error) => {
    state.error = error;
}