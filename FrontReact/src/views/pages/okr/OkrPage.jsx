import EmptyMessage from "../../components/okr/EmptyMessage";
import OkrCard from "../../components/okr/OkrCard";
import { Link } from "react-router-dom";
import OkrBtn from "../../components/okr/OkrBtn";
import { getOkrs } from "../../../application/selectors/dashboard/okrs";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAllOkrUser} from '../../../application/actions/okr/okr'

const OkrPage = ({ okr, getAllOkrUser }) => {
  

  useEffect(() => {
    getAllOkrUser("611573c2a2605b535bfab39a");
  }, [getAllOkrUser]);

  
  return (
    <div className="container d-flex flex-column align-items-center py-5">
      {okr.length === 0 ? (
        <>
          <EmptyMessage />
          <Link to="/okr/create-okr">
            <OkrBtn text="Crear OKR" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/okr/create-okr">
            <OkrBtn text="Crear OKR" />
          </Link>
          <div className="container">
            <ul className="list-unstyled">
              {okr.map((elem) => {
                return (
                  <li key={elem.id}>
                    <OkrCard okr={okr} title={elem.objective} progress={elem.title} />
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    okr: getOkrs(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllOkrUser,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OkrPage);
