import React, { useEffect, useState, Fragment } from "react";
import {Link} from "react-router-dom";
import { getUser } from "../../../application/selectors/administration/user";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Selectors
import {
  getOkrs,
  getOkr,
} from "./../../../application/selectors/dashboard/okrs";

//Acciones
import {
  loadingOKR,
  loadingOKRid,
  getidOkrLast,
} from "./../../../application/actions/dashboard/index";

//Componentes
import Okruser from "./user/OkrsUser";
import Barchart from "./user/BarChart";
import PieChart from "./user/PieChart";

const DashboardUserPage = ({
  loadingOKR,
  getidOkrLast,
  okrs,
  loadingOKRid,
  okr,
  user,
}) => {
  const [idokr, setidokr] = useState("");
  //Por el momento quemo el id del usuario hasta que tenga el servicio de getUser ofrecido por admin
  // const idUser = "61164bfad5c39f3f2cade723";
  // const idlast = "61164bfad5c39f3f2cade723";
  //const idUser = "611461004b98615d2dc035f2";
  //const idlast = "611461004b98615d2dc035f2";
  useEffect(() => {
    loadingOKR(user.idMongo);
    getidOkrLast(user.idMongo);
  }, [loadingOKR]);

  const handlerokrid = () => {
    loadingOKRid(idokr);
  };

  return (
    <div>
      <div className="row">
        <h1>{okrs.title}hola</h1>
        <center>
          <div className="col-2"></div>
          <div className="col-8">
          <ul class="nav nav-tabs justify-content-center">
              <li class="nav-item">
                <Link class="nav-link" to="/userdash">
                  Mis OKRs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/statedashokrs">
                  OKRs completados
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/statedashokrs">
                OKRs en progreso
                </Link>
              </li>
            </ul>
            <select
              style={{
                width: "70%",
                height: "34px",
                marginTop: "11px",
                borderRadius: "5px"
              }}
              name="idokr"
              value={idokr}
              onChange={(e) => setidokr(e.target.value)}
            >
              {okrs === null || "" || undefined
                ? "No hay datos"
                : okrs.map((okr) => (
                    <option value={okr.id} key={okr.id}>
                      {okr.title}
                    </option>
                  ))}
            </select>
            <button
              className="btn btn-outline-warning"
              style={{ margin: "10px 3px", padding: "4px", color: "black", backgroundColor: "#DAE3FF" }}
              onClick={() => handlerokrid()}
            >
              Ver info
            </button>
            <div>
              {okrs === null || "" || undefined ? (
                "No hay datos"
              ) : (
                <Fragment>
                  <Okruser okr={okr} />
                  <br />
                  <br />
                  <PieChart okr={okr} />
                  <br />
                  <br />
                  <Barchart okr={okr} />                  
                </Fragment>
              )}
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
    user: getUser(state),
    okr: getOkr(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardUserPage);
