import { getDataApi, traverseData } from "@/helpers/getDataApi";

export const getPokemons = async ({ commit }, offset = 0) => {
    commit('setLoading', true);

    try {
        const { results } = await getDataApi(`https://pokeapi.co/api/v2/pokemon?limit=20`);
        const data = await traverseData(results);
        commit('setPokemons', data);
    } catch (error) {
        commit('setError', 'Ocurrió un error al obtener los pokemones');
    } finally {
        commit('setLoading', false);
    }
};

export const getAbility = async ({ commit }, nameAbility) => {
    try {
        const ability = await getDataApi(`https://pokeapi.co/api/v2/ability/${nameAbility}/`);
        commit('setAbilities', ability);
    } catch (error) {
        commit('setError', 'Ocurrió un error al obtener la habilidad del Pokemon');
    }
}

export const getPokemonAbility = async ({ commit }, pokemonsUrl) => {
    try {
        const promises = pokemonsUrl.map(({ url }) => getDataApi(url));
        const pokemons = await Promise.all(promises);

        commit('setPokemons', pokemons);
    } catch (error) {
        commit('setError', 'Ocurrió un error al obtener el Pokemon');
    }
}