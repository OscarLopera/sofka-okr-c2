import React, { useEffect, useState, Fragment } from "react";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Selectors
import {
  getOkrs,
  getOkr,
  _getOkrId,
} from "./../../../../application/selectors/dashboard/okrs";

//Acciones
import {
  loadingOKRid,
} from "../../../../application/actions/dashboard/index";
//Componentes
import Okruser from "./OkrsUser";
import Barchart from "./BarChart";
import PieChart from "./PieChart";

const ViewOKR = ({ loadingOKRid, okrs, okr, okrid }) => {
  //Por el momento quemo el id del usuario hasta que tenga el servicio de getUser ofrecido por admin
  //const idUser = "6110122d2bbf9c8b67ccab72";
  //const idlast = "6112ef6370e2131bb4730d1a";
  //const idUser = "611461004b98615d2dc035f2";
  //const idlast = "611461004b98615d2dc035f2";
  useEffect(() => {
       loadingOKRid(okrid);  
  }, [loadingOKRid]);

  //const handlerokrid = () => {
  //  loadingOKRid(idokr);
  //};

  return (
    <div>
      <div className="row">
        <center>
          <div className="col-2"></div>
          <div className="col-8">
            <div>
              {okrs === null || "" || undefined ? (
                "No hay datos"
              ) : (
                <Fragment>
                  <Okruser okr={okr} />
                  <br/>
                  <PieChart okr={okr} />
                  <br/>
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
      loadingOKRid,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    okrs: getOkrs(state),
    okr: getOkr(state),
    okrid: _getOkrId(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewOKR);
