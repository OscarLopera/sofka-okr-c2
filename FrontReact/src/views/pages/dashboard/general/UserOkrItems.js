import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";

function UserOkrItems() {
    return (
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
        </div>
    )
}

export default UserOkrItems
