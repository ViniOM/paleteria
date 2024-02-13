const paletaContext = {
  paletaEndpoint: () => `${Api.baseUrl}`,
  paletaLista: () => `${paletaContext.paletaEndpoint()}/todas-paletas`,
  paletaById: (id) => `${paletaContext.paletaEndpoint()}/paleta/${id}`,
  createPaleta: () => `${paletaContext.paletaEndpoint()}/create`,
  updatePaletaById: (id) => `${paletaContext.paletaEndpoint()}/update/${id}`,
  deletePaletaById: (id) => `${paletaContext.paletaEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: "https://el-geladon-api.onrender.com",
  ...paletaContext,
};
