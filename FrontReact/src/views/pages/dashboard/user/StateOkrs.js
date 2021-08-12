import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

function StateOkrs() {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
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
        <h1 className="text-center">Okrs Completados | Progreso</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://miro.medium.com/max/735/1*6PNh95LDUuIzyj5MlY5L7Q.jpeg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <p className="card-title">Titulo de Okrs</p>
                <CircularProgressbar value="60" text="60%" />
              </div>
              <div class="card-footer">
                <button class="btn btn-dark">Ver OKR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default StateOkrs;
