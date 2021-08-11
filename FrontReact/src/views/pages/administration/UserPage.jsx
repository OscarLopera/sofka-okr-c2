import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUser, getVerticals } from "../../../application/selectors/administration/user";
import { loadingVerticals } from "../../../application/actions/administration/user";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const UserPage = ({ user, getVerticals, verticals, loadingVerticals }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.vertical)
  };

  useEffect(() => {
    loadingVerticals();
  }, []);

  return (
    <center>
      <h1>Información Usuario</h1>
      <img src={user.userImage} alt="fotousuario" />
      <h4>{user.userName}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="verticales">¿ A qué vertical Perteneces?</label>
          <br />
          <div>
            <select {...register("vertical")} id="vertical">
            {verticals != null &&
              verticals.map((vertical) => {
                return (
                      <option key={vertical.id} value={vertical.id}>{vertical.verticalname}</option>
                );
              })}
              </select>
 
          </div>
          {/* <select {...register("vertical")} id="vertical">
            <option value="DEV">DEV</option>
            <option value="QA">QA</option>
            <option value="INFRASTRUCTURE">INFRASTRUCTURE</option>
            <option value="TALENTO HUMANO">TALENTO HUMANO</option>
          </select> */}
        </div>
        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
      <h4>Tipo de Usuario: Super Usuario</h4>
      <NavLink to="/dashboard" className="btn btn-danger">
        Volver al Dasboard
      </NavLink>


    </center>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadingVerticals }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    verticals: getVerticals(state)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
