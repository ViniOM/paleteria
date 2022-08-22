const paletaContext = {
    paletaEndpoint: () => `${Api.baseUrl}/paletas`,
    paletaLista: () => `${paletaContext.paletaEndpoint()}/all-paletas`,
    paletaById: (id) => `${paletaContext.paletaEndpoint()}/one-paleta/${id}`,
    createPaleta: () => `${paletaContext.paletaEndpoint()}/create-paleta`,
    updatePaletaById: (id) => `${paletaContext.paletaEndpoint()}/update-paleta/${id}`,
    deletePaletaById: (id) => `${paletaContext.paletaEndpoint()}/delete-paleta/${id}`,
};

const sacolaContext = {
    getSacola: () => `${paletaContext.paletaEndpoint()}/all-carrinho`,
    createSacola: () => `${paletaContext.paletaEndpoint()}/create-carrinho`,
    purchase: () => `${paletaContext.paletaEndpoint()}/finish-carrinho`,
}

export const Api = {
    baseUrl: "https://api-elgeladon.herokuapp.com",
    ...paletaContext,
    ...sacolaContext,
};