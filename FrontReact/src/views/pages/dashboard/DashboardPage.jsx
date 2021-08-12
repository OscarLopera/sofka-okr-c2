import "../../assets/styles/administration/App.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import React, { useEffect, useState } from "react";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//Selectors
import { getAllOkr } from "./../../../application/selectors/dashboard/okrs";
//Acciones
import { getAllOkrs } from "../../../application/actions/dashboard/index";
import UserOkr from "./general/UserOkr";
//Componentes

const DashboardPage = ({getAllOkr, getAllOkrs, okrs }) => {
  useEffect(() => {
    getAllOkrs();
  }, [getAllOkr])

  return (
    <div className="card-content d-flex"style={{ margin:"10px", justifyContent:"center", alignItems:"center"}}>
      <div className="justify"style={{ width:"90%" }}>
      {okrs.map((okr) => (<UserOkr okr={okr}/>))}
        
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllOkrs
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    okrs: getAllOkr(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);


