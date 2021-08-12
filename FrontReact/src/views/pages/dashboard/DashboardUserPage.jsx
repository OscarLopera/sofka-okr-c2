import React, {useEffect, useState}from "react";
//Redux
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//Selectors
import { getOkrs } from './../../../application/selectors/dashboard/okrs';
//Acciones
import { loadingOKR,getidOkrLast } from './../../../application/actions/dashboard/index';

const DashboardUserPage = ({loadingOKR,getidOkrLast,okrs}) => {
  //Para sacar el id del elemento
  const [idokr,setidokr] = useState("");
  //Por el momento quemo el id del usuario hasta que tenga el servicio de getUser ofrecido por admin
  const idUser = "61106133609d16f1740ddf34";
  const idlast = "6112ef6370e2131bb4730d1a";

  useEffect(() => {
    loadingOKR(idUser);
    getidOkrLast(idlast);  
  }, [loadingOKR])


     
  return (
    <div>
      <center>
      <h1>Mis OKrs</h1>
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
            <button style={{padding:"4px",margin:"3px"}}>Ver info</button>
      </center>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loadingOKR,
      getidOkrLast,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    okrs: getOkrs(state)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardUserPage);
