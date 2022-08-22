import sacola from "assets/icons/sacola.svg";
import deletar from "assets/icons/deletar.svg";
import logo from "assets/logo.svg";
import { ActionMode } from "constants/index";
import "./Navbar.css"

function Navbar({ createPaleta, updatePaleta, deletePaleta, mode, openBag }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> El Geladon </span>
        </div>
    
        <div className="Header__opcoes Opcoes">

        <button
            type="button"
            className={`Opcoes__paleta Paleta ${mode === ActionMode.DELETAR && 'Paleta--deletar'}`}
            onClick={() => deletePaleta()}>

            <img src={deletar} width="40px" className="Paleta__icone" alt="Deletar paleta" />
        </button>
          
        <button type="button" className={`Opcoes__paleta Paleta ${mode === ActionMode.ATUALIZAR && "Paleta--ativa"}`} onClick={() => updatePaleta() }>
          <p className="Paleta__icone">Editar</p>
        </button>

        <button type="button" className="Opcoes__paleta Paleta" onClick={() => createPaleta() }>
          <p className="Paleta__icone">Adicionar</p>
       </button>

          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
              onClick={openBag}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
