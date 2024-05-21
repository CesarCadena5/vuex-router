import { getDataApi, traverseData } from "@/helpers/getDataApi";

export const getPokemons = async ({ commit }, offset = 0) => {
    commit('setLoading', true);

    try {
        const { results } = await getDataApi(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        if (results.length > 0) {
            const data = await traverseData(results);
            commit('setPokemons', data);
        }
    } catch (error) {
        commit('setError', 'Ocurrió un error al obtener los pokemones');
    } finally {
        commit('setLoading', false);
    }
};