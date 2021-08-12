import { useState, React, useEffect } from "react";
import { Form, FormGroup, Row, Col } from "reactstrap";
import { getOkrs } from '../../../application/selectors/okr/okr';
import { getKrs } from "../../../application/selectors/okr/kr";
import KrForm from "../../components/okr/KrForm";
import { getVerticals, getUser } from "../../../application/selectors/administration/user";
import { bindActionCreators } from "redux";
import { addOkrs, deleteOkrs } from "../../../application/actions/okr/okr";
import { loadingVerticals, loginUser } from "../../../application/actions/administration/user";
import { connect } from "react-redux";
import "../../assets/styles/okr/okr.css";

const CrearOkrPage = ({ addOkrs, history, loadingVerticals, user, vertical, loginUser }) => {

    useEffect(() => {
        loadingVerticals()
        loginUser()
    }, [loadingVerticals, loginUser])

    const [objective, setObjective] = useState("");
    const [title, setTitle] = useState("");
    const [managerId, setManagerId] = useState("");
    const [description, setDescription] = useState("");
    const [areaInCharge, setAreaInCharge] = useState("");
    const [KrVisible, setKrVisible] = useState(false)


    const okrCreateSubmit = (event) => {
        event.preventDefault();
        const okrObject = {
            objective: objective,
            title: title,
            managerId: managerId,
            description: description,
            verticalId: areaInCharge
        };
        addOkrs(okrObject);
        alert("Se agrego el OKR Correctamente");

    };

    return (
        <div className="container py-5">
            <div className="shadow form-floating p-5">
                <h1 className="text-center">Agregar OKR</h1>
                <Form onSubmit={okrCreateSubmit}>
                    <FormGroup className="d-flex flex-column my-3">
                        <label for="floatingInput" className={"m-3 text-center"} >Objetivo</label>
                        <input
                            type={"text"}
                            required="required"
                            minLength="5"
                            maxLength="50"
                            placeholder={"Ingresa tu objetivo"}
                            className={"form-control text-center"}
                            value={objective}
                            onChange={(event) => setObjective(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="d-flex flex-column my-3">
                        <label className={"m-3 text-center"}>Titulo</label>
                        <input
                            type={"text"}
                            required="required"
                            minLength="5"
                            maxLength="50"
                            placeholder={"Ingresa el titulo de tu Okr"}
                            className={"form-control text-center"}
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </FormGroup>



                    <FormGroup className="d-flex flex-column my-3">
                        <label className={"m-3 text-center"}>Descripcion</label>
                        <textarea name="description" className={"form-control text-center"} id="description" cols="58" placeholder={"Aqui puede agregar una descripcion mas detallada de su OKR"} rows="3" value={description} required="required" onChange={(event) => setDescription(event.target.value)} />
                    </FormGroup>
                    <Row className="row" form>
                        <Col md={6}>
                            <FormGroup className="d-flex flex-column my-3">



                                <label className={"m-3"}>Vertical</label>
                                <br />

                                <select className="custom-select"
                                    value={areaInCharge}
                                    onChange={(event => setAreaInCharge(event.target.value))}>
                                    {vertical.length &&
                                        vertical.map((usuario) => (

                                            <option key={usuario.id} value={usuario.verticalname}>{usuario.verticalname}</option>
                                        ))}

                                </select>

                            </FormGroup>

                        </Col>
                        <Col md={6}>

                            <FormGroup className="d-flex flex-column my-3">



                                <label className={"m-3"}>Encargado</label>
                                <br />


                                <select className="custom-select"
                                    value={managerId}
                                    onChange={(event => setManagerId(event.target.value))}>
                                    {vertical.length &&
                                        vertical.map((usuario) => (

                                            <option key={usuario.id} value={usuario.verticalname}>{usuario.verticalname}</option>
                                        ))}

                                </select>


                            </FormGroup>

                        </Col>
                    </Row>

                    {KrVisible ? (
                        <>
                          <div
                            onClick={() => {
                              setKrVisible(false);
                            }}
                          >
                            ❌
                          </div>
                          <KrForm />
                        </>
                      ) : (
                        <>
                          <div
                            className="border rounded p-2 btn btn-primary my-3"
                            onClick={() => {
                              setKrVisible(true);
                            }}
                          >
                            Añadir KR
                          </div>
                        </>
                      )}

                    <FormGroup className="d-flex flex-column my-3">
                        <div className="d-flex py-3">
                            <button type="submit"

                                className="sofka-color-btn py-2 px-4 fs-6 m-auto text-white">Agregar OKR
                            </button>
                        </div>
                    </FormGroup>
                </Form>

            </div>

            <div>

            </div>
        </div>
    );

                        }
const mapStateToProps = (state) => {
    return {
        okr: getOkrs(state),
        user: getUser(state),
        vertical: getVerticals(state),
        krs: getKrs(state),

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

        addOkrs,
        deleteOkrs,
        loadingVerticals,
        loginUser


    }, dispatch);
}


  

export default connect(mapStateToProps, mapDispatchToProps)(CrearOkrPage);
