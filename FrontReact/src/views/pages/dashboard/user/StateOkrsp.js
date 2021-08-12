import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//Selectors
import { _getOkrProgress } from "../../../../application/selectors/dashboard/okrs";
//Acciones
import { getOkrProgress } from "../../../../application/actions/dashboard/index";


function StateOkrsp({getOkrProgress,okrs}) {

    const idUser = "61157aaca2605b535bfab3ab";

    useEffect(() => {
    getOkrProgress(idUser);
  }, [getOkrProgress]);

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item">
            <Link class="nav-link" to="/userdash">
              Mis Okrs
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/statedashokrs">
              Completados
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/statedashokrsp">
              En progreso
            </Link>
          </li>
        </ul>
        <br />
        <h5 className="text-center">Okrs en Progreso</h5>
        <hr/>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {(okrs.length > 0) ? 
          (okrs.map((kr) => (
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="card-title">{kr.title}</p>
                <CircularProgressbar value={kr.currentProgress}  text={`${kr.currentProgress}%`} />
              </div>
              <div className="card-footer">
                <button className="btn btn-dark">Ver OKR</button>
              </div>
            </div>
          </div>
          ))
        ) : <p>No tiene Okrs en Progreso</p> }
          
          </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
    getOkrProgress
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    okrs: _getOkrProgress(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StateOkrsp);

