import { bindActionCreators } from "redux";
import {
  loginUser,
  logoutUser,
  closeWelcome,
} from "../../../application/actions/administration/user";
import { connect } from "react-redux";
import { getUser } from "../../../application/selectors/administration/user";

import { Modal, Button } from "react-bootstrap";

import "../../assets/styles/administration/HomePage.scss";
import GrupoSofka from "../../assets/static/administration/imagenes-sofka.png";

export const HomePage = ({ loginUser, logoutUser, closeWelcome, user }) => {
  return (
    <section className="login">
      <section className="login__container">
        <center className="container text-dark">
          {user ? (
            user.firstTime ? (
              <div>
                <Modal.Dialog show={user.firstTime}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeWelcome}>
                      Close
                    </Button>
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            ) : null
          ) : null}

          <img
            src="https://www.sofka.com.co/wp-content/uploads/2020/08/sofka-logo-gradient-white.png"
            alt="logo-sofka"
          />
          <h1>Sofka Okrs</h1>
          <p className="text-center">
            Nuestra Filosofía se basa en la mejora continua, compromiso y
            disciplina. Somos una compañía que desde sus inicios viene
            desarrollando el talento tanto técnico como humano, para estar a la
            vanguardia de la industria tecnológica generando soluciones de alto
            impacto para nuestros clientes con los que siempre trabajamos en
            equipo.
          </p>
          <div>
            <img src={GrupoSofka} alt="logo sofka" />
          </div>
          <button
            className={user ? "d-none" : "mt-5 btn sofka-color-btn px-4"}
            onClick={loginUser}
          >
            <img
              className="google-icon me-3"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
            />{" "}
            Iniciar sesión con Google
          </button>
        </center>
      </section>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginUser, logoutUser, closeWelcome }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
