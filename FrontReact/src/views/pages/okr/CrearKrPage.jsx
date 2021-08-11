import React from "react";
import KrForm from "../../components/okr/KrForm";
import { createKr } from "../../../application/actions/okr/KrAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CrearKrPage = ({ idOkr, createKr }) => {
  return (
    <div>
      <KrForm createKr={createKr} idOkr={idOkr}/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createKr,
    },
    dispatch
  );
};

export default connect(mapDispatchToProps)(CrearKrPage);
