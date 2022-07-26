import "./Home.css";
import PaletaLista from "./PaletaLista";
import sacola from "../assets/icons/sacola.svg";
import logo from "../assets/logo.svg";

function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img className="Logo__icone" src={logo} width="70px" alt="" />
            <span className="Logo__titulo">El geladon </span>
          </div>

          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img
                className="Sacola__icone"
                src={sacola}
                width="40px"
                alt="Sacola de compras"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
