import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import { Link,useHistory } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getOkrId} from "../../../../application/actions/dashboard/index";

function UserOkrItems({ kr, getOkrId }) {
    const history = useHistory();
    const handleviewokr = id =>{
      //Prueba inicial solo redirijo
      history.push("/viewdashokr")
      getOkrId(id);
    }

    return (

        <div className="col-xl-3 col-sm-6 col-12">

            <div className="card">
                <div className="card-content">
                    <div className="card-body">
                        <p className="card-title">{kr.title}</p>
                        <CircularProgressbar value={kr?.currentProgress} text={`${kr?.currentProgress}%`} />
                    </div>
                    <div className="card-footer">
                        <button onClick={()=> handleviewokr(kr.id)}
                        className="btn btn-warning">Ver OKR</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
       getOkrId
      },
      dispatch
    );
  };

export default connect(null, mapDispatchToProps)(UserOkrItems);