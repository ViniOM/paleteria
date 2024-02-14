import "./PaletaLista.css";
import { PaletaService } from "services/PaletaService";
import { useState, useEffect, useCallback } from "react";
import PaletaListaItem from "../PaletaListaItem/PaletaListaItem";
import PaletaDetalhesModal from "../PaletaDetalhesModal/PaletaDetalheModal";
import { matchByText } from "helpers/utils";

import { ActionMode } from "constants/index";
function PaletaLista({
  paletaCriada,
  mode,
  updatePaleta,
  deletePaleta,
  paletaEditada,
  paletaRemovida,
}) {
  const selecionadas = JSON.parse(localStorage.getItem("selecionadas")) ?? {};

  const [paletas, setPaletas] = useState([]);
  const [paletasFiltradas, setPaletasFiltradas] = useState([]);
  const [paletaSelecionada, setPaletasSelecionada] = useState(selecionadas);
  const [paletaModal, setPaletaModal] = useState(false);

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletasSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletasSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };

  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);

    const mapper = {
      [ActionMode.NORMAL]: () => setPaletaModal(response),
      [ActionMode.ATUALIZAR]: () => updatePaleta(response),
      [ActionMode.DELETAR]: () => deletePaleta(response),
    };

    mapper[mode]();
  };

  const adicionaPaletaNaLista = useCallback(
    (paleta) => {
      const lista = [...paletas, paleta];
      setPaletas(lista);
    },
    [paletas]
  );

  const filtroPorTitulo = ({ target }) => {
    const lista = [...paletas].filter(({ titulo }) =>
      matchByText(titulo, target.value)
    );
    setPaletasFiltradas(lista);
  };

  useEffect(() => {
    getLista();
  }, [paletaEditada, paletaRemovida]);

  useEffect(() => {
    if (
      paletaCriada &&
      !paletas.map(({ id }) => id).includes(paletaCriada.id)
    ) {
      adicionaPaletaNaLista(paletaCriada);
    }
    setPaletasFiltradas(paletas);
  }, [adicionaPaletaNaLista, paletaCriada, paletas]);

  return (
    <div className="PaletaLista-Wrapper">
      <input
        className="PaletaLista-filtro"
        onChange={filtroPorTitulo}
        placeholder="Busque uma paleta pelo nome"
      />

      <div className="PaletaLista">
        {paletasFiltradas.map((paleta, index) => (
          <PaletaListaItem
            mode={mode}
            key={`PaletaListaItem-${index}`}
            paleta={paleta}
            quantidadeSelecionada={paletaSelecionada[index]}
            index={index}
            onAdd={(index) => adicionarItem(index)}
            onRemove={(index) => removerItem(index)}
            clickItem={(paletaId) => getPaletaById(paletaId)}
          />
        ))}
        {paletaModal && (
          <PaletaDetalhesModal
            paleta={paletaModal}
            closeModal={() => setPaletaModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default PaletaLista;
