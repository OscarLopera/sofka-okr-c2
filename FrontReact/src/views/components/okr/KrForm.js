import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../assets/styles/okr/OkrPage.css";
import "../../assets/styles/okr/okr.css";



const KrForm = ({ idOkr, createKr }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loadValue, setLoadValue] = useState('');
  const [managerName, setManagerName] = useState('');
  const [managerEmail, setManagerEmail] = useState('');

  const handleSubmitCreateKr = (event) => {
    event.preventDefault();
    const KrObject = {
      idOkr: idOkr,
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      loadValue: loadValue,
      managerName: managerName,
      managerEmail: managerEmail
    }
    createKr(KrObject)
    alert('KR creado correctamente')
  }

  return (
    <>
      <div className="container">
        <div className="card text-center shadow">
          <div className="create text-center form-floating mb-3">
            <Form>
              <FormGroup>
                <Label for="title-kr">Título</Label>
                <Input
                  type="text"
                  name="title"
                  value={title}
                  id="title-kr"
                  onChange={event => setTitle(event.target.value)}
                  placeholder="Título KR"
                  required={true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description-kr">Descripción</Label>
                <Input
                  type="textarea"
                  name="description"
                  value={description}
                  id="description"
                  onChange={event => setDescription(event.target.value)}
                  placeholder="Descripción de KR"
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="startDate">Fecha inicial</Label>
                    <Input
                      type="date"
                      name="startDate"
                      value={startDate}
                      id="startDate"
                      onChange={event => setStartDate(event.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="endDate">Fecha final</Label>
                    <Input
                      type="date"
                      name="endDate"
                      value={endDate}
                      id="endDate"
                      onChange={event => setEndDate(event.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="loadValue">Valor porcentual</Label>
                <Input
                  type="number"
                  name="loadValue"
                  value={loadValue}
                  id="loadValue"
                  onChange={event => setLoadValue(event.target.value)}
                  placeholder="Valor porcentual del KR"
                />
              </FormGroup>
              <FormGroup>
                <Label for="managerName">Nombre encargado</Label>
                <Input
                  type="text"
                  name="managerName"
                  value={managerName}
                  id="managerName"
                  onChange={event => setManagerName(event.target.value)}
                  placeholder="Nombre encargado"
                />
              </FormGroup>
              <FormGroup>
                <Label for="managerEmail">Email encargado</Label>
                <Input
                  type="email"
                  name="managerEmail"
                  value={managerEmail}
                  id="managerEmail"
                  onChange={event => setManagerEmail(event.target.value)}
                  placeholder="name@example.com"
                />
              </FormGroup>
              <Button onClick={handleSubmitCreateKr} className="sofka-color-btn py-2 px-4 fs-6">Agregar KR</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default KrForm;
