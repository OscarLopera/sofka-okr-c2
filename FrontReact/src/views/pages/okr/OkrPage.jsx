import EmptyMessage from "../../components/okr/EmptyMessage";
import OkrCard from "../../components/okr/OkrCard";
import { Link } from "react-router-dom";
import OkrBtn from "../../components/okr/OkrBtn";
import { getOkrs } from "../../../application/selectors/dashboard/okrs";
import { loadingOKR } from "../../../application/actions/dashboard";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const OkrPage = ({ okr, loadingOKR }) => {
  

  useEffect(() => {
    loadingOKR(okr.managerId);
  }, [loadingOKR]);

  
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
      loadingOKR,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OkrPage);
