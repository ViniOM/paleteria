import "./PaletaLista.css";
import { PaletaService } from "services/PaletaService";
import React, { useState, useEffect } from "react";
import PaletaListaItem from "../components/PaletaListaItem/PaletaListaItem";
import PaletaDetalhesModal from "../components/PaletaDetalhesModal/PaletaDetalheModal";

function PaletaLista() {
  const [paletas, setPaletas] = useState([]);

  const [paletaSelecionada, setPaletasSelecionada] = useState({});

  const [paletaModal, setPaletaModal] = useState(false);

  const paleta = {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number[paletaSelecionada[paletaIndex] || 0] - 1,
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

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(paletaId) => setPaletaModal(paleta)}
        />
      ))}
      {paletaModal && (
        <PaletaDetalhesModal
          paleta={paletaModal}
          closeModal={() => setPaletaModal(false)}
        />
      )}
    </div>
  );
}

export default PaletaLista;
