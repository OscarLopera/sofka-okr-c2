import React from 'react';
import KrCard from './KrCard';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ReactTooltip from 'react-tooltip';
import { deleteOkrs } from '../../../application/actions/okr/okr';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUser } from "../../../application/selectors/administration/user";

const OkrCard = ({ user, okr, deleteOkrs }) => {

  const handleDeleteOkr = (event) => {
    event.preventDefault();
    deleteOkrs(user.idMongo, okr.okr._id)
  }

  return (
    <div className="d-flex flex-column p-5 my-5 border rounded shadow">
      <div className="d-flex justify-content-between">
        <div className="container flex-column">
          <h3 className="fw-bold text-uppercase text-wrap">{okr.okr.title}</h3>
          <ProgressBar variant="success" animated now={okr.okr.currentProgress} label={`${okr.okr.currentProgress}%`} style={{ height: "1.5rem" }} />
        </div>
        <div className="d-flex align-items-center">
          <div className="fs-2 mx-3 btn" data-tip data-for="delete-okr-tip" onClick={handleDeleteOkr}>❌</div>

          <ReactTooltip id="delete-okr-tip" place="top" effect="solid">
            Eliminar OKR
          </ReactTooltip>
        </div>
      </div>
      <div>
        <ul className="list-unstyled">
          {okr.krs.map(elem => {
            return (
              <li key={elem._id}>
                <KrCard id={elem._id} title={elem.title} progress={elem.progress} />
              </li>)
          })}
        </ul>
      </div>
    </div>

  );
}
const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteOkrs,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OkrCard);