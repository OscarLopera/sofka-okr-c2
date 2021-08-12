import { useState, React } from "react";
import { Form, FormGroup} from "reactstrap";
import {getOkrs} from '../../../application/selectors/okr/okr';
import {bindActionCreators} from "redux";
import { addOkrs, deleteOkrs } from "../../../application/actions/okr/okr";
import {connect} from "react-redux";
import "../../assets/styles/okr/okr.css";

const CrearOkrPage = ({ addOkrs, history }) => {

  const [objective, setObjective] = useState("");
  const [title, setTitle] = useState("");
  const [managerId, setManagerId] = useState("");
  const [description, setDescription] = useState("");
  const [areaInCharge, setAreaInCharge] = useState("");
  

  const okrCreateSubmit = (event) => {
    event.preventDefault();
    const okrObject = {
      objective: objective,
      title: title,
      managerId: managerId,
      description: description,
      verticalId: areaInCharge
    };
    const values = {okrObject}
    addOkrs(values);
    alert("add publication success");
    
  };

  return (
    <div className="container">
      <div className="card text-center shadow">
        <div className="create text-center form-floating mb-3">
          <h1>Agregar OKR</h1>
          <Form onSubmit={okrCreateSubmit}>
            <FormGroup>
              <label for="floatingInput" className={"m-3"}>Objetivo</label>
              <input
                type={"text"}
                required="required"
                minLength="2"
                maxLength="20"
                placeholder={"Ingresa tu objetivo"}
                className={"form-control text-center"}
                value={objective}
                onChange={(event) => setObjective(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label className={"m-3"}>Titulo</label>
              <input
                type={"text"}
                required="required"
                minLength="4"
                maxLength="20"
                placeholder={"Ingresa el titulo de tu Okr"}
                className={"form-control text-center"}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </FormGroup>
           
            <FormGroup>
              <label className={"m-3"}>Descripcion</label>
              <textarea name="description" className={"form-control text-center"} id="description" cols="58" placeholder={"Aqui puede agregar una descripcion mas detallada de su OKR"} rows="3" value={description}  required="required" onChange={(event) => setDescription(event.target.value)}/>
              {/*<input
                type={"text"}
                required="required"
                minLength="4"
                maxLength="20"
                placeholder={"Descripcion"}
                className={"form-control text-center"}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />*/}
            </FormGroup>
            <FormGroup>
              <label className={"m-3"}>Area Encargada</label>
            {  /*<input
                type={"text"}
                required="required"
                minLength="4"
                maxLength="20"
                placeholder={"Area Encargada"}
                className={"form-control text-center"}
                value={areaInCharge}
                onChange={(event) => setAreaInCharge(event.target.value)}
  />*/}
  
  
  <select className="custom-select"
  value={areaInCharge}
  onChange={(event => setAreaInCharge(event.target.value))}>
  <option selected>Debes seleccionar un area de la lista</option>
<option value="Recursos Humanos">Recursos Humanos</option>
<option value="Desarrollo">Desarrollo</option>
<option value="Calidad">Calidad</option>
<option value="Gestion Ambiental">Gestion Ambiental</option>
</select>

            </FormGroup>

            <FormGroup>
            <label className={"m-3"}>Manager</label>
           {/* <input
              type={"text"}
              required="required"
              minLength="4"
              maxLength="20"
              placeholder={"Manger"}
              className={"form-control text-center"}
              value={managerId}
              onChange={(event) => setManagerId(event.target.value)}
           />*/}
           
           <select className="custom-select"
                      value={managerId}
                      onChange={(event => setManagerId(event.target.value))}>
                      <option selected>Seleccionar un encargado de la lista</option>
                      <option value="Jesus">Jesus</option>
                  <option value="Brian">Brian</option>
                  <option value="Nicolas">Nicolas</option>
                  <option value="Nixon">Nixon</option>
              </select>

          </FormGroup>
            
            <FormGroup>
              <button type="submit"
                
                className="btn sofka-color-btn py-1 px-4 fs-4 text-white"
              >
                Añadir OKR <i className="bi bi-plus-square" />
              </button>
            </FormGroup>
          </Form>
        </div>
      </div>

      <div>
      
      </div>
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
     
      addOkrs,      
      deleteOkrs,
     
     
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (CrearOkrPage);

