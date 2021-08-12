import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createKr } from "../../../application/actions/okr/KrAction";
import "../../assets/styles/okr/OkrPage.css";

const KrForm = ({ createKr }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loadValue, setLoadValue] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");

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
    createKr(KrObject);
    alert("KR creado correctamente");
  };

  return (
    <>
      <div className="container py-5">
        <div className="shadow form-floating p-5">
        <h1 className="text-center">Agregar KR</h1>
          <Form>
            <FormGroup className="d-flex flex-column my-3">
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
                required={true}
              />
            </FormGroup>
            <FormGroup className="d-flex flex-column my-3">
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
              />
            </FormGroup>
            <Row className="row" form>
              <Col md={6}>
                <FormGroup className="d-flex flex-column my-3">
                  <Label className="my-2" for="startDate">
                    Fecha inicial
                  </Label>
                  <Input
                    type="date"
                    name="startDate"
                    value={startDate}
                    id="startDate"
                    onChange={(event) => setStartDate(event.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="d-flex flex-column my-3">
                  <Label className="my-2" for="endDate">
                    Fecha final
                  </Label>
                  <Input
                    type="date"
                    name="endDate"
                    value={endDate}
                    id="endDate"
                    onChange={(event) => setEndDate(event.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className="d-flex flex-column my-3">
              <Label className="my-2" for="loadValue">
                Valor porcentual
              </Label>
              <Input
                type="number"
                name={loadValue}
                value={loadValue}
                id="loadValue"

                onChange={(event) => setLoadValue(event.target.valueAsNumber)}
                placeholder="Valor porcentual del KR"
              />
            </FormGroup>
            <FormGroup className="d-flex flex-column my-3">
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
              />
            </FormGroup>
            <FormGroup className="d-flex flex-column my-3">
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
              />
            </FormGroup>
            <FormGroup>
              <div className="d-flex py-3">
                <Button
                  onClick={handleSubmitCreateKr}
                  className="sofka-color-btn py-2 px-4 fs-6 m-auto"
                >
                  Agregar KR
                </Button>
              </div>
            </FormGroup>
          </Form>
        </div>
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
