import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getUser,
  getVerticals,
} from "../../../application/selectors/administration/user";
import {
  loadingVerticals,
  updateUser,
} from "../../../application/actions/administration/user";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import "../../assets/styles/administration/UserPage.scss";

const UserPage = ({
  user,
  /*getVerticals NOVA*/ verticals,
  loadingVerticals,
  updateUser,
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const userInState = user;
    userInState.userVerticalId = data.vertical;
    updateUser(userInState);
  };

  useEffect(() => {
    loadingVerticals();
  }, []);

  return (
    <section className="user">
      <section className="user__container">
        <center>
          <h1 className="user-title">Información del Usuario:</h1>
          <img src={user.userImage} alt="fotousuario" />
          <h4 className="user-text">{user.userName}</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="user__container--form"
          >
            <div>
              <label htmlFor="verticales" className="user-text">
                ¿ A qué vertical Perteneces?
              </label>
              <br />
              <div>
                <select {...register("vertical")} id="vertical">
                  {verticals != null &&
                    verticals.map((vertical) => {
                      return (
                        <option key={vertical.id} value={vertical.id}>
                          {vertical.verticalname}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <button type="submit" className="sofka-color-btn mt-2">
              Enviar
            </button>
          </form>
          <h4 className="user-text">Tipo de Usuario: {user.userRol} </h4>
          <NavLink to="/dashboard" className="btn btn-danger">
            Volver al Dasboard
          </NavLink>
        </center>
      </section>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadingVerticals, updateUser }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    verticals: getVerticals(state),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
