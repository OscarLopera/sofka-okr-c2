import {useState, React} from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../assets/styles/okr/okr.css';



const OkrFormCreate = ({addOkrs}) => {

    
    const [objective, setObjective] = useState('');
    const [title, setTitle] = useState('');
    const [managerId, setManagerId] = useState('');
    const [description, setDescription] = useState('');
    const [areaInCharge, setAreaInCharge] = useState('');
    const [progress, setProgress] = useState('');

    const okrCreateSubmit = (event) => {
        event.preventDefault();
        const okrObject = {
            objective: objective,
            title: title,
            managerId: managerId,
            description: description,
            areaInCharge: areaInCharge,
            progress: progress,
        }
        addOkrs(okrObject)
        alert.success("add publication success")
    }

    return (
        <div className="container">
        <div className="card text-center">
        <div className="create text-center">
        <h1>Agregar OKR</h1>
      <Form>
        <FormGroup>
        <label className={"m-3"}>Objetivo</label>
        <input type={"text"}
               placeholder={"Objetivo"}
               className={"form-control text-center"}
               value={objective}
               onChange={event => setObjective(event.target.value)}/>
        </FormGroup>
        <FormGroup>
        <label className={"m-3"}>Titulo</label>
        <input type={"text"}
        placeholder={"Titulo"}
        className={"form-control text-center"}
        value={title}
        onChange={event => setTitle(event.target.value)}/>
        </FormGroup>
        <FormGroup>
        <label className={"m-3"}>Manager</label>
        <input type={"text"}
               placeholder={"Manger"}
               className={"form-control text-center"}
               value={managerId}
               onChange={event => setManagerId(event.target.value)}/>
        </FormGroup>
        <FormGroup>
        <label className={"m-3"}>Descripcion</label>
        <input type={"text"}
               placeholder={"Descripcion"}
               className={"form-control text-center"}
               value={description}
               onChange={event => setDescription(event.target.value)}/>
        </FormGroup>
        <FormGroup>
        <label className={"m-3"}>Area Encargada</label>
        <input type={"text"}
               placeholder={"Area Encargada"}
               className={"form-control text-center"}
               value={areaInCharge}
               onChange={event => setAreaInCharge(event.target.value)}/>
        </FormGroup>
        <FormGroup>
        <label className={"m-3"}>Progreso</label>
        <input type={"text"}
               placeholder={"Progreso"}
               className={"form-control text-center"}
               value={progress}
               onChange={event => setProgress(event.target.value)}/>
        </FormGroup>
        <FormGroup>
        <button onClick={okrCreateSubmit} className="btn btn-success px-5 mt-4 ">Add <i
                        className="bi bi-plus-square"/>
                    </button>

        </FormGroup>       
          
      </Form>      
      </div>
      </div>
      </div>
      
    );
  }
  
  export default OkrFormCreate;