import React from "react";
import "../../assets/styles/administration/App.scss";

const AdministrationPage = () => {
  return (
    <center className="mx-3 my-3">
      <h1>
        ¿Tienes dudas sobre esta aplicación? ¡No te preocupes! Acá abajo podrás
        encontrar solución a tus dudas 👇👇
      </h1>
      <br />

      <div className="accordion" id="accordionExample">
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Tengo un mal lider 😩
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Pásate al equipo de administración y notarás la diferencia :V.
            </div>
          </div>
        </div>

        
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Debo hacer la parte de cerrar sesión aútomaticamente solo. 😨
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              No debiste asignarte esa tarea 🥺
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Siento que me va a coger el día con los test 😩
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              !A trabajar papu! ⌚🏃
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default AdministrationPage;
