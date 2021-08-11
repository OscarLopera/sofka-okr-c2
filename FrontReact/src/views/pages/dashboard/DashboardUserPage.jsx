import React, {useEffect, useState}from "react";
//Redux
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//Selectors
import { getOkrs, getOkr } from './../../../application/selectors/dashboard/okrs';
//Acciones
import { loadingOKR,loadingOKRid } from './../../../application/actions/dashboard/index';
//Componentes
import Okruser from './user/OkrsUser';

const DashboardUserPage = ({ loadingOKR,okrs,loadingOKRid, okr }) => {
  const [idokr, setidokr] = useState("");
 //Por el momento quemo el id del usuario hasta que tenga el servicio de getUser ofrecido por admin
 const idUser = "6112ef6370e2131bb4730d1a";
  useEffect(() => {
    loadingOKR(idUser);
  }, [loadingOKR]);

  const handlerokrid = () =>{
    loadingOKRid(idokr)
  }

  return (
    <div>
      <div className="row">
        <center>
          <div className="col-2"></div>
          <div className="col-8">
            <h1>Mis OKRs</h1>
            <select
              style={{ width: "320px", height: "35px" }}
              name="idokr"
              value={idokr}
              onChange={(e) => setidokr(e.target.value) }
            >
              {okrs.map((okr) => (
                <option value={okr.id} key={okr.id}>
                  {okr.title}
                </option>
              ))}
            </select>
            <button className="btn btn-outline-warning" onClick={() => handlerokrid()}>Ver info</button>
            <Okruser okr={okr}/>
          </div>
          <div className="col-2"></div>
        </center>
      </div>
    </div>
  );
  
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loadingOKR,
      loadingOKRid,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    okrs: getOkrs(state),
    okr: getOkr(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardUserPage);
