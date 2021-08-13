import React, { Fragment } from "react";
//Circular Progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function Okruser({ okr }) {
  //Valido que vengan los datos
  let title = "";
  let objective = "";
  let description = "";
  // let areaInCharge = "";
  //let progress = 0;
  let krs = "";
  if (okr !== null) {
    //progress = okr.progress;
    title = okr.title;
    description = okr.description;
    // areaInCharge = okr.areaInCharge;
    objective = okr.objective;
    krs = okr.krs;
  }
  

return (
<Fragment>
  {okr ? (
    <div>
    
      <div>
            <table >
              <thead>
                <tr className="table"style={{
                backgroundColor:"#050531", color:"#ffffff"}}>
                  <th style={{padding:"10px"}}scope="col">Titulo</th>
                  <th style={{padding:"10px"}}scope="col">Descripcion</th>
                  <th style={{padding:"10px"}} scope="col">objetivo</th>
                  <th style={{padding:"10px"}}scope="col">Progreso</th>
                </tr>
                <br/>
              </thead>
              <tbody>
                <tr style={{fontSize:"5px", margin:"5px"}}>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{objective}</td>
                   <td>
                      <div style={{ width: "50%" }}>
                        <CircularProgressbar
                          value={okr?.currentProgress || 0}
                          text={`${okr?.currentProgress}%`}
                        />
                      </div>
                    </td>
                   
                  
                </tr>
                <br/>
                <br/>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr style={{
                backgroundColor:"#050531", color:"#ffffff"}}>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripcion KR</th>
                  <th scope="col">Fecha  Inicio</th>
                  <th scope="col">Fecha Final</th>
                  <th scope="col">PesoOKR</th>
                  <th scope="col">Progreso</th>
                </tr>
              </thead>
              <tbody>
                {krs.map((kr) => (
                  <tr>
                    <td>{kr.title}</td>
                    <td>{kr.description}</td>
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
                        <div style={{ width: "70px", marginLeft:"50px"}}>
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