import { bindActionCreators } from "redux";
import {loginUser, logoutUser, closeWelcome} from "../../../application/actions/administration/user";
import { connect } from "react-redux";
import { getUser } from "../../../application/selectors/administration/user";

import { Modal, Button } from "react-bootstrap";

const HomePage = ({ loginUser, logoutUser, closeWelcome, user }) => {
  return (
    <div className="container text-center">
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
                <Button variant="secondary" onClick={closeWelcome}>Close</Button>
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
        odio quam, sed pretium elit facilisis sed. Nunc ac felis ante. Sed
        egestas massa non viverra tempor. Pellentesque et nulla nisi. Donec
        porta commodo est eu volutpat. Quisque quis euismod mi. Praesent eu eros
        vitae felis viverra facilisis.
      </p>
      <div>
        <img
          src="https://www.sofka.com.co/wp-content/uploads/2020/09/grupo7.png"
          alt="sofka-image"
        />
      </div>
      <button
        className={user ? "d-none" : "mt-5 btn btn-primary px-4"}
        onClick={loginUser}
      >
        <i className="bi bi-google" /> Iniciar sesion con Google
      </button>
      <button
        className={!user ? "d-none" : "mt-5 btn btn-primary px-4"}
        onClick={logoutUser}
      >
        <i className="bi bi-google" /> Salir
      </button>
    </div>
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
