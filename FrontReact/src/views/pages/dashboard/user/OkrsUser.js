import React, { Fragment } from "react";
//Circular Progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function Okruser({ okr }) {
  //Valido que vengan los datos
  let title = "";
  let objective = "";
  let description = "";
  let areaInCharge = "";
  //let progress = 0;
  let krs = "";
  if (okr !== null) {
    //progress = okr.progress;
    title = okr.title;
    description = okr.description;
    areaInCharge = okr.areaInCharge;
    objective = okr.objective;
    krs = okr.krs;
  }
  

return (
<Fragment>
  {okr ? (
    <div>
      {/*
      <div style={{ width: "16%" }}>
        <CircularProgressbar value={progress} text={`${progress}%`} />
      </div>
        */}
      <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">objetivo</th>
                  <th scope="col">Progreso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{objective}</td>
                   <td>
                      <div style={{ width: "60%" }}>
                        <CircularProgressbar
                          value={okr?.currentProgress || 0}
                          text={`${okr?.currentProgress}%`}
                        />
                      </div>
                    </td>
                  
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripcion KR</th>
                  <th scope="col">Fecha de Inicio</th>
                  <th scope="col">Fecha Final</th>
                  <th scope="col">Porcentaje OKR</th>
                  <th scope="col">Progreso</th>
                </tr>
              </thead>
              <tbody>
                {krs.map((kr) => (
                  <tr>
                    <td>{kr.titleKr}</td>
                    <td>{kr.description.value}</td>
                    <td>{kr.startDate}</td>
                    <td>{kr.endDate}</td>
                    <td>
                       {kr.loadValue}%
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: `${kr.loadValue}%`}}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                        </div>
                      </div>
                    </td>
                  
                      <td>
                        <div style={{ width: "35%" }}>
                          <CircularProgressbar
                            value={kr.progress}
                            text={`${kr.progress}%`}
                          />
                        </div>
                      </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h6>Seleccione un OKR</h6>
      )}
    </Fragment>
  );
}

export default Okruser;