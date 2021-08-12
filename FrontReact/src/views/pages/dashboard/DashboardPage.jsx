import React from "react";
import "../../assets/styles/administration/App.scss";
import { CircularProgressbar } from "react-circular-progressbar";

const DashboardPage = () => {
  return (

    <div className="grey-bg container-fluid mt-4"style={{ backgroundColor:"#050531", borderRadius:"10px" }} >
        <section id="minimal-statistics">
            <div class="row">
                <div className="col-12 mt-3 mb-1"style={{ color:"#f9f9f9"}}>
                    <h6 className="text-uppercase">Nombre Usuario:</h6>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                        <h6 className="black">Titulo:</h6>
                                        <h6 className="black">Descripción:</h6>
                                        <button type="button" className="btn btn-dark mb-2 float-right">
                                            Consultar
                                        </button>
                                    </div>
                                    <div className="align-self-center">
                                        <div style={{ width: "60%" }}>
                                            <CircularProgressbar 
                                            //   value={okr?.progress || 0}
                                            //   text={`${okr?.progress}%`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                        <h6 className="black">Titulo:</h6>
                                        <h6 className="black">Descripción:</h6>
                                        <button type="button" className="btn btn-dark mb-2 float-right">
                                            Consultar
                                        </button>
                                    </div>
                                    <div className="align-self-center">
                                    <div style={{ width: "60%"}}>
                                            <CircularProgressbar
                                            //   value={okr?.progress || 0}
                                            //   text={`${okr?.progress}%`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                        <h6 className="black">Titulo:</h6>
                                        <h6 className="black">Descripción:</h6>
                                        <button type="button" className="btn btn-dark mb-2 float-right">
                                            Consultar
                                        </button>
                                    </div>
                                    <div className="align-self-center">
                                    <div style={{ width: "60%" }}>
                                            <CircularProgressbar
                                            //   value={okr?.progress || 0}
                                            //   text={`${okr?.progress}%`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h6 className="black">Titulo:</h6>
                                        <h6 className="black">Descripción:</h6>
                                        <button type="button" className="btn btn-dark mb-2 float-right">
                                            Consultar
                                        </button>
                                    </div>
                                    <div class="align-self-center">
                                    <div style={{ width: "60%" }}>
                                            <CircularProgressbar
                                            //   value={okr?.progress || 0}
                                            //   text={`${okr?.progress}%`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>

)
};

export default DashboardPage;
