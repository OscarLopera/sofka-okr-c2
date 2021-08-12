import React, { useEffect, useState } from "react";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Selectors
import {
  getOkrs,
  getOkr,
} from "./../../../application/selectors/dashboard/okrs";

//Acciones
import { loadingOKR,loadingOKRid,getidOkrLast } from './../../../application/actions/dashboard/index';

//Componentes
import Okruser from './user/OkrsUser';
import Barchart from './user/BarChart';
import PieChart from "./user/PieChart";

const DashboardUserPage = ({ loadingOKR,getidOkrLast,okrs,loadingOKRid, okr }) => {
  const [idokr, setidokr] = useState("");
 //Por el momento quemo el id del usuario hasta que tenga el servicio de getUser ofrecido por admin
  const idUser = "6112ef6370e2131bb4730d1a";
  const idlast = "6112ef6370e2131bb4730d1a";
  //const idUser = "611461004b98615d2dc035f2";
  //const idlast = "611461004b98615d2dc035f2";
  useEffect(() => {
    loadingOKR(idUser);
    getidOkrLast(idlast); 
  }, [loadingOKR])


  const handlerokrid = () => {
    loadingOKRid(idokr);
  };

  return (
    <div>
      <div className="row">
        <center>
          <div className="col-2"></div>
          <div className="col-8">
            {/* <h1>Mis OKRs</h1> */}
            <select
              style={{
                width: "70%",
                height: "34px",
                marginTop: "11px",
                borderRadius: "5px",
              }}
              name="idokr"
              value={idokr}
              onChange={(e) => setidokr(e.target.value)}
            >
              {okrs.map((okr) => (
                <option value={okr.id} key={okr.id}>
                  {okr.title}
                </option>
              ))}
            </select>
            <button
              className="btn btn-outline-warning"
              style={{ margin: "10px 3px", padding: "4px" }}
              onClick={() => handlerokrid()}
            >
              Ver info
            </button>
            <div>
              <Okruser okr={okr} />
              <div className="row">
                <div className="col-xl-12 col-sm-6">
                  <div className="media d-flex">
                      <Barchart okr={okr} />
                      <PieChart okr={okr} />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 "></div>
        </center>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loadingOKR,
      getidOkrLast,
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
