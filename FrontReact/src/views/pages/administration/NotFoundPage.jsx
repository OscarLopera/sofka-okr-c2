import React from "react";
import {Link} from "react-router-dom"
import "../../assets/styles/administration/NotFound.css"

const NotFoundPage = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>
            4<span></span>4
          </h1>
        </div>
        <h2>Oops! Página No Encontrada</h2>
        <p>
            Lo sentimos, la página que estás buscando no existe. Por suerte puedes volver.
        </p>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
