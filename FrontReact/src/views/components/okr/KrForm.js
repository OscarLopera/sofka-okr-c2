import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const KrForm = (props) => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="title-kr">Título</Label>
          <Input
            type="text"
            name="title"
            id="title-kr"
            placeholder="Título KR"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description-kr">Descripción</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
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
                id="startDate"
                placeholder="<Fecha"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="endDate">Fecha final</Label>
              <Input
                type="date"
                name="endDate"
                id="endDate"
                placeholder="Fecha"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="loadValue">Valor porcentual</Label>
          <Input
            type="number"
            name="loadValue"
            id="loadValue"
            placeholder="Valor porcentual del KR"
          />
        </FormGroup>
        <FormGroup>
          <Label for="managerName">Nombre encargado</Label>
          <Input
            type="text"
            name="managerName"
            id="managerName"
            placeholder="Nombre encargado"
          />
        </FormGroup>
        <FormGroup>
          <Label for="managerEmail">Email encargado</Label>
          <Input
            type="email"
            name="managerEmail"
            id="managerEmail"
            placeholder="name@example.com"
          />
        </FormGroup>
        <Button>Agregar KR</Button>
      </Form>
    </>
  );
};

export default KrForm;
