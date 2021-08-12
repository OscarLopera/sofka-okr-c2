import "../../assets/styles/administration/App.scss";
import React, { useEffect} from "react";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//Selectors
import { getAllOkr } from "./../../../application/selectors/dashboard/okrs";
import { getUser } from "../../../application/selectors/administration/user";
//Acciones
import { getAllOkrs } from "../../../application/actions/dashboard/index";
import { closeWelcome } from "../../../application/actions/administration/user";

import UserOkr from "./general/UserOkr";
//Componentes

//Modal de bienvenida:
import Modal from "../../components/administration/Modal";
import LogoSofka from "../../assets/static/administration/sofka-icono2.png";




const DashboardPage = ({ getAllOkr, getAllOkrs, closeWelcome, okrs, user }) => {
  useEffect(() => {
    getAllOkrs();
  }, [getAllOkr]);

  // Acciones Modal de bienvenida.
  const [active, setActive] = useState(true);
  // const toggle = () => {
  //   setActive(!active);
  // };

  return (
    <div
      className="card-content d-flex"
      style={{ margin: "10px", justifyContent: "center", alignItems: "center" }}
    >
      {user ? (
        user.firstTime ? (
          <div>
            {/* Modal de Bienvenida al usuario */}
            <Modal active={active} closeWelcome={closeWelcome}>
              <div>
                <img src={LogoSofka} alt="logo" />
                <span>
                  <h1 className="text-white">¡Bienvenid@ {user.userName} !</h1>
                </span>
              </div>
              <p className="text-white">
                Estamos felices de tenerte como nuevo integrante. Esperamos
                poder aprender mucho de tus aportes.
              </p>
            </Modal>
            {/*  */}
          </div>
        ) : null
      ) : null}

      <div className="justify" style={{ width: "90%" }}>
        {okrs.map((okr) => (
          <UserOkr okr={okr} />
        ))}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllOkrs, closeWelcome
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    okrs: getAllOkr(state),
    user: getUser(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
