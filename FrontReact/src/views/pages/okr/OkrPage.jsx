import EmptyMessage from "../../components/okr/EmptyMessage";
import OkrCard from "../../components/okr/OkrCard";
import { Link } from "react-router-dom";
import OkrBtn from "../../components/okr/OkrBtn";
import { getOkrs } from "../../../application/selectors/dashboard/okrs";
import { loadingOKR } from "../../../application/actions/dashboard";
import { useEffect } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

const OkrPage = ({okr, loadingOKR}) => {

  const id = "61106133609d16f1740ddf34";

  useEffect (() => {
    loadingOKR(id)
    
}, [loadingOKR])


  const okrs = [
    {
      _id: {
        $oid: "6111e28451a68e1a989edf13",
      },
      historicalProgress: [],
      objective: "Vamos por ello",
      title: "Un Okr mas",
      managerId: "611010fd2bbf9c8b67ccab70",
      description: "esto es una descripcion opcional",
      verticalId: "abcd",
      currentProgress: {
        $numberInt: "100",
      },
    },
    {
      _id: {
        $oid: "6111e919787e790ca0f2fef5",
      },
      historicalProgress: [],
      objective: "Vamos por ello",
      title: "Otro Okr mas",
      managerId: "611010fd2bbf9c8b67ccab70",
      description: "esto es una descripcion opcional",
      verticalId: "abcd",
      currentProgress: {
        $numberInt: "15",
      },
    },
    {
      _id: {
        $oid: "61129e32b132d408fb47ecf0",
      },
      historicalProgress: [],
      objective: "Vamos por ello 2",
      title: "Otro Okr mas",
      managerId: "611010fd2bbf9c8b67ccab70",
      description: "Sin descripción",
      verticalId: "abcde",
      currentProgress: {
        $numberInt: "30",
      },
    },
    {
      _id: {
        $oid: "6112cddee333e9079849e11a",
      },
      historicalProgress: [],
      objective: "Vamos por ello",
      title: "Epa Okr",
      managerId: "abcd",
      description: "esto es una descripcion opcional",
      verticalId: "abcd",
      currentProgress: {
        $numberInt: "70",
      },
    },
    {
      _id: {
        $oid: "6112cff2e31df41cbcd22739",
      },
      historicalProgress: [],
      objective: "Vamos por ello 3",
      title: "Otro Okr mas",
      managerId: "abcde",
      description: "Sin descripción",
      verticalId: "abcde",
      currentProgress: {
        $numberInt: "100",
      },
    },
    {
      _id: {
        $oid: "6112d66b39dded0015eefea4",
      },
      historicalProgress: [],
      objective: "Vamos por ello 3",
      title: "Otro Okr mas",
      managerId: "abcde",
      description: "Sin descripción",
      verticalId: "abcde",
      currentProgress: {
        $numberInt: "0",
      },
    },
    {
      _id: {
        $oid: "6112e78c87796a0015e63f52",
      },
      historicalProgress: [],
      objective: "Prueba QA",
      title: "Otro Okr mas",
      managerId: "abcde",
      description: "Sin descripción",
      verticalId: "abcde",
      currentProgress: {
        $numberInt: "0",
      },
    },
  ];

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
                    <OkrCard
                      title={elem.objective}
                      progress={elem.title}
                    />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      loadingOKR
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (OkrPage);
