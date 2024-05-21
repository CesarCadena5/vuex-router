export const getDataApi = async (URL) => {
    const resp = await fetch(URL);
    const json = await resp.json();

    return json;
};

export const traverseData = async (data = []) => {
    const promises = data.map(async ({ url }) => {
        const fetch = await getDataApi(url);
        return fetch;
    });

    try {
        const results = await Promise.all(promises);
        return results
    } catch (error) {
        throw 'Ocurrió un error al obtener los datos';
    }
};