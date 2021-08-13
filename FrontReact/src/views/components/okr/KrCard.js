import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Input, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { getUser } from "../../../application/selectors/administration/user";
import { connect } from "react-redux";
import { updateProgressKr , deleteKr} from "../../../application/actions/okr/KrAction";

const KrCard = ({ user, id, title, progress, updateProgressKr, deleteKr }) => {
  const [loadValue, setLoadValue] = useState("");

  const updateKrProgress = (event) => {
    event.preventDefault();
    const krUpdate = {
      progress: loadValue,
    };
    updateProgressKr(user.idMongo, id, krUpdate);
  };
  const deleteKrHandle = (event) => {
    event.preventDefault();
    deleteKr(user.idMongo, id);
  };
  

  return (
    <div className="d-flex justify-content-around p-5 my-5 border rounded shadow-sm">
      <div className="container">
        <h3 className="fw-bold text-uppercase text-wrap">{title}</h3>
        <ProgressBar
          variant="info"
          animated
          now={progress}
          label={`${progress}%`}
          style={{ height: "1.5rem" }}
        />
      </div>
      <div className="d-flex align-items-center">
        <Form className="d-flex align-items-center">
          <Input
            className="w-auto "
            type="number"
            name={loadValue}
            value={loadValue}
            min={1}
            max={100}
            id="loadValue"
            onChange={(event) => setLoadValue(event.target.valueAsNumber)}
            placeholder="Valor porcentual del KR"
          />
          <Button
            className="fs-2 text-decoration-none"
            color="link"
            data-tip
            onClick={updateKrProgress}
            data-for="update-progress-tip"
          >
            🎯
          </Button>
        </Form>
        <Button
            className="fs-2 text-decoration-none"
            color="link"
            data-tip
            onClick={deleteKrHandle}
            data-for="delete-kr-tip"
          >
            ❌
          </Button>

        <ReactTooltip id="delete-kr-tip" place="top" effect="solid">
          Eliminar KR
        </ReactTooltip>
        <ReactTooltip id="update-progress-tip" place="top" effect="solid">
          Actualizar Progreso
        </ReactTooltip>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateProgressKr,
      deleteKr,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(KrCard);
