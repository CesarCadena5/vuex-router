import { getDataApi } from "@/helpers/getDataApi";

export const getDbzCharacters = async ({ commit }, page = 1) => {
    commit('setLoading', true);
    try {
        const { items } = await getDataApi(`https://dragonball-api.com/api/characters?page=${page}&limit=10`);
        commit('setDbzCharacters', items);
    } catch (error) {
        commit('setError', 'No se pudieron obtener los personajes :/');
    } finally {
        commit('setLoading', false);
    }
}