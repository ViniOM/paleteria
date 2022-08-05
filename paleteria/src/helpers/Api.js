const paletaContext = {
    paletaEndpoint: () => `${Api.baseUrl}/paletas`,
    paletaLista: () => `${paletaContext.paletaEndpoint()}/all-paletas`,
    paletaById: (id) => `${paletaContext.paletaEndpoint()}/one-paleta/${id}`,
    createPaleta: () => `${paletaContext.paletaEndpoint()}/create-paleta`,
    updatePaletaById: (id) => `${paletaContext.paletaEndpoint()}/update-paleta/${id}`,
    deletePaletaById: (id) => `${paletaContext.paletaEndpoint}/delete-paleta/${id}`,
};

export const Api = {
    baseUrl: "https://api-elgeladon.herokuapp.com",
    ...paletaContext,
};