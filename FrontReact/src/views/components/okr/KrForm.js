import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createKr } from "../../../application/actions/okr/KrAction";
import "../../assets/styles/okr/OkrPage.css";

const KrForm = ({ createKr, close }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loadValue, setLoadValue] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmitCreateKr = (event) => {
    event.preventDefault();
    const KrObject = {
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      loadValue: loadValue,
      managerName: managerName,
      managerEmail: managerEmail,
      progress: 5,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    createKr(KrObject);
    close();
    alert("KR creado correctamente");
  };

  return (
    <>
      <div className="form-floating p-5 pt-0 pb-1">
        <Form>
          <FormGroup className="formgroup">
            <h2 className="text-center text-uppercase fw-bold mb-4">
              Añadir KR
            </h2>
            <Label className="my-2" for="title-kr">
              Título
            </Label>
            <Input
              type="text"
              name="title"
              value={title}
              id="title-kr"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Título KR"
              required="required"
              minLength="5"
              maxLength="50"
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <Label className="my-2" for="description-kr">
              Descripción
            </Label>
            <Input
              type="textarea"
              name="description"
              value={description}
              id="description"
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Descripción de KR"
              required="required"
              minLength="5"
              maxLength="50"
            />
          </FormGroup>
          <Row className="row" form>
            <Col md={6}>
              <FormGroup className="formgroup">
                <Label className="my-2" for="startDate">
                  Fecha inicial
                </Label>
                <Input
                  type="date"
                  required="required"
                  name="startDate"
                  value={startDate}
                  id="startDate"
                  onChange={(event) => setStartDate(event.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formgroup">
                <Label className="my-2" for="endDate">
                  Fecha final
                </Label>
                <Input
                  required="required"
                  type="date"
                  name="endDate"
                  value={endDate}
                  id="endDate"
                  onChange={(event) => setEndDate(event.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="formgroup">
            <Label className="my-2" for="loadValue">
              Valor porcentual
            </Label>
            <Input
              type="number"
              name={loadValue}
              value={loadValue}
              id="loadValue"
              required="required"
              minLength="5"
              maxLength="50"
              onChange={(event) => setLoadValue(event.target.valueAsNumber)}
              placeholder="Valor porcentual del KR"
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <Label className="my-2" for="managerName">
              Nombre encargado
            </Label>
            <Input
              type="text"
              name="managerName"
              value={managerName}
              id="managerName"
              onChange={(event) => setManagerName(event.target.value)}
              placeholder="Nombre encargado"
              required="required"
              minLength="5"
              maxLength="50"
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <Label className="my-2" for="managerEmail">
              Email encargado
            </Label>
            <Input
              type="email"
              name="managerEmail"
              value={managerEmail}
              id="managerEmail"
              onChange={(event) => setManagerEmail(event.target.value)}
              placeholder="name@example.com"
              required="required"
              minLength="5"
              maxLength="50"
            />
          </FormGroup>
          <FormGroup>
            <div className="d-flex py-3">
              <Button
                type="button"
                className="sofka-color-btn py-2 px-4 fs-6 m-auto"
                onClick={handleSubmitCreateKr}
              >
                Agregar KR
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createKr,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(KrForm);
