import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

function StateOkrs() {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-7">
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item">
            <Link class="nav-link" to="/userdash">
              Mis Okrs
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/statedashokrs">
              Completados
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/statedashokrs">
              En progreso
            </Link>
          </li>
        </ul>
        <br />
        <h1>Okrs Completados | Progreso</h1>
        <div className="card-group">
           <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo del Okr</h5>
            <CircularProgressbar value="60" text="60%" />
            <button className="btn btn-warning">
              Ver info
            </button>
          </div>
            </div>
                       <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo del Okr</h5>
            <CircularProgressbar value="50" text="60%" />
            <button className="btn btn-warning">
              Ver info
            </button>
          </div>
            </div>
                       <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo del Okr</h5>
            <CircularProgressbar value="50" text="60%" />
            <button className="btn btn-danger">
              Ver info
            </button>
          </div>
            </div>
        </div>
        </div>
      <div className="col-2"></div>
    </div>
  );
}

export default StateOkrs;
