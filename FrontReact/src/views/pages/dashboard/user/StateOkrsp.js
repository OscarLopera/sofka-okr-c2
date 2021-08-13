import React, {useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//Selectors
import { _getOkrProgress } from "../../../../application/selectors/dashboard/okrs";
//Acciones
import { getOkrProgress,getOkrId } from "../../../../application/actions/dashboard/index";


function StateOkrsp({getOkrProgress,getOkrId,okrs}) {

    const idUser = "61157aaca2605b535bfab3ab";
    const history = useHistory();

    const handleviewokr = id =>{
    //Prueba inicial solo redirijo
    history.push("/viewdashokr")
    getOkrId(id);
    }

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
              Mis OKRs
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/statedashokrs">
              OKRs completados
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/statedashokrsp">
              OKRs en progreso
            </Link>
          </li>
        </ul>
        <br />
        <h5 className="text-center">OKRs en progreso</h5>
        <hr/>
        <div className="row row-cols-1 row-cols-md-2 g-4 text-center">
          {(okrs.length > 0) ? 
          (okrs.map((kr) => (
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="card-title">{kr.title}</p>
                <CircularProgressbar value={kr.currentProgress}  text={`${kr.currentProgress}%`} />
              </div>
              <div 
                className="card-footer">
                <center>
                <button 
                  onClick={()=> handleviewokr(kr.id)}
                  className="btn btn-dark" style={{backgroundColor:"#0A0939"}}>Ver OKR</button>
                </center>
              </div>
            </div>
          </div>
          ))
        ) : <p>No tiene OKRs en progreso</p> }
          
          </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
    getOkrProgress,
    getOkrId
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

