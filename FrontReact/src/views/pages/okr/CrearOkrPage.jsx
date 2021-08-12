import { useState, React, useEffect } from "react";
import { Form, FormGroup, Row, Col } from "reactstrap";
import { getOkrs } from "../../../application/selectors/okr/okr";
import { getKrs } from "../../../application/selectors/okr/kr";
import KrForm from "../../components/okr/KrForm";
import { getVerticals } from "../../../application/selectors/administration/user";
import { bindActionCreators } from "redux";
import {
  loadOkrs,
  addOkrs,
  deleteOkrs,
} from "../../../application/actions/okr/okr";
import { loadingVerticals } from "../../../application/actions/administration/user";
import { connect } from "react-redux";
import "../../assets/styles/okr/okr.css";

const CrearOkrPage = ({
  addOkrs,
  loadOkrs,
  history,
  loadingVerticals,
  vertical,
  users,
  krs,
}) => {
  useEffect(() => {
    loadingVerticals();
    loadOkrs();
  }, [loadingVerticals, loadOkrs]);

  const [objective, setObjective] = useState("");
  const [title, setTitle] = useState("");
  const [managerId, setManagerId] = useState("");
  const [managerName, setManagerName] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [description, setDescription] = useState("");
  const [areaInCharge, setAreaInCharge] = useState("");
  const [KrVisible, setKrVisible] = useState(false);
  const [formState, setFormState] = useState("");

  const okrCreateSubmit = (event) => {
    event.preventDefault();
    const okrObject = {
      objective: objective,
      title: title,
      managerId: managerId,
      description: description,
      verticalId: areaInCharge,
    };
    const values = { okrObject, krs };
    if(selectedUser){
      addOkrs(values);
      alert("Se agrego el OKR Correctamente");
    }
    else{
    alert("selecciona un encargado");
    }
  };
  const handleChange = (valueName) => {
    console.log(valueName);
    const manager = users.find((user) => user.name === valueName);
    if(manager){
      setManagerId(manager.id)
      setSelectedUser(true)
    } else{
      setManagerId("")
      setSelectedUser(false)
    }
    loadOkrs(valueName)
    setManagerName(valueName);
  }

  const closeKrForm = () => {
    setKrVisible(false);
  };

  return (
    <div className="container py-5">
      <div className="shadow-lg rounded form-floating p-5 pb-2">
        <h1 className="text-center fw-bold">Agregar OKR</h1>
        <Form onSubmit={okrCreateSubmit}>
          <FormGroup className="formgroup">
            <label for="floatingInput" className={"my-3 "}>
              Objetivo
            </label>
            <input
              type={"text"}
              required="required"
              minLength="5"
              maxLength="50"
              placeholder={"Ingresa tu objetivo"}
              className={"form-control "}
              value={objective}
              onChange={(event) => setObjective(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <label className={"my-3 "}>Titulo</label>
            <input
              type={"text"}
              required="required"
              minLength="5"
              maxLength="50"
              placeholder={"Ingresa el titulo de tu Okr"}
              className={"form-control "}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <label className={"my-3 "}>Descripcion</label>
            <textarea
              name="description"
              className={"form-control "}
              id="description"
              cols="58"
              placeholder={
                "Aqui puede agregar una descripcion mas detallada de su OKR"
              }
              rows="3"
              value={description}
              required="required"
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormGroup>
          <Row className="row" form>
            <Col md={6}>
              <FormGroup className="formgroup">
                <label className={"my-3"}>Vertical</label>
                <br />
                <select
                  className="custom-select form-control"
                  value={areaInCharge}
                  onChange={(event) => setAreaInCharge(event.target.value)}
                >
                  {vertical.length &&
                    vertical.map((usuario) => (
                      <option key={usuario.id} value={usuario.verticalname}>
                        {usuario.verticalname}
                      </option>
                    ))}
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formgroup">
                <label className={"my-3"}>Encargado</label>
                <br />
                <input
                type={"text"}
                required="required"
                placeholder={"Ingresa el nombre"}
                className={"form-control"}
                value={managerName}
                onChange={(event) => handleChange(event.target.value)}
                list="data"  />
                <datalist id="data"  >
                  {users.map((item, key) =>
                    (<option key={key}  data-id={item.id} value={item.name}> {item.email} </option>)
                  )}
                </datalist>        
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <div className="shadow rounded p-5 mt-5">
              <h2 className="text-center fw-bold mb-3">KRs</h2>
              {krs.length !== 0 ? (
                <ul className=" rounded shadow-sm p-4 px-5 b-1 mb-4">
                  {krs.map((ele) => {
                    return (
                      <>
                        <li className="border-bottom pb-2 mb-3">
                          <h3>{ele.title}</h3>
                          <p>
                            {ele.startDate} - {ele.endDate}
                          </p>
                          <p>{ele.managerName}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              ) : (
                <></>
              )}
              {KrVisible ? (
                <div className="shadow rounded">
                  <div
                    className="btn p-4 pb-0"
                    onClick={() => {
                      closeKrForm();
                    }}
                  >
                    ❌
                  </div>
                  <KrForm close={closeKrForm} />
                </div>
              ) : (
                <>
                  <div className="d-flex">
                    <div
                      className="m-auto btn btn-primary p-2 my-3 mt-5"
                      onClick={() => {
                        setKrVisible(true);
                      }}
                    >
                      Añadir KR
                    </div>
                  </div>
                </>
              )}
            </div>
          </FormGroup>
          <FormGroup className="formgroup">
            <div className="d-flex py-3">
              <button
                type="submit"
                className="sofka-color-btn py-2 px-4 fs-6 m-auto text-white"
              >
                Agregar OKR
              </button>
            </div>
          </FormGroup>
        </Form>
      </div>

      <div></div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: getOkrs(state),
    vertical: getVerticals(state),
    krs: getKrs(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addOkrs,
      deleteOkrs,
      loadingVerticals,
      loadOkrs,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CrearOkrPage);
