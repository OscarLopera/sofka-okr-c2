import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";

function UserOkrItems({ kr }) {
    console.log("prueba", kr)
    return (

        <div className="col-xl-3 col-sm-6 col-12">

            <div className="card">
                <div className="card-content">
                    <div className="card-body">
                        <p className="card-title">{kr.title}</p>
                        <CircularProgressbar value={kr?.currentProgress} text={`${kr?.currentProgress}%`} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-warning">Ver OKR</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default UserOkrItems
