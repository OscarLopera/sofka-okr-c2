import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

function UserOkrItems({ kr }) {
    console.log("prueba", kr)
    return (

        <div className="col-xl-3 col-sm-6 col-12">

            <div className="card">
                <div className="card-content">
                    <div className="card-body">
<<<<<<< HEAD
                        <div className="media d-flex">
                            <div className="media-body text-left">
                                <h6 className="black">{kr?.title}</h6>
                                <Link type="button" className="btn btn-dark mb-1 float-right" style={{ margin: "10px", justifyContent: "center", alignItems:"center", margin:"5px", padding: "10px", fontSize:"0.6em" }} to="/viewdashokr">
                                    Consultar
                                </Link>
                            </div>
                            <div className="align-self-center">
                                <div style={{ width: "100%" }}>
                                    <CircularProgressbar
                                       value={kr?.currentProgress || 0}
                                       text={`${kr?.currentProgress}%`}
                                    />
                                </div>
                            </div>
                        </div>
=======
                        <p className="card-title">{kr.title}</p>
                        <CircularProgressbar value={kr?.currentProgress} text={`${kr?.currentProgress}%`} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-warning">Ver OKR</button>
>>>>>>> bdd37ad64cb734f4629a1c5a115b66179ced2613
                    </div>
                </div>
            </div>

        </div>

    )
}

export default UserOkrItems
