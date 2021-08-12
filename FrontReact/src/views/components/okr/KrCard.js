import React from 'react';
import ReactTooltip from 'react-tooltip';
import ProgressBar from 'react-bootstrap/ProgressBar'

const KrCard = ({ title, progress }) => {
    return (
        <div className="d-flex justify-content-between p-5 my-5 border rounded shadow-sm">
            <div className="container">
                <h3 className="fw-bold text-uppercase text-wrap">{title}</h3>
                <ProgressBar variant="info" animated now={progress} label={`${progress}%`} style={{ height: "1.5rem" }} />
            </div>
            <div className="d-flex">
                <div className="fs-2 mx-2" data-tip data-for="delete-kr-tip">❌</div>
                <div className="fs-2 mx-2" data-tip data-for="edit-kr-tip">✏️</div>
                <div className="fs-2 mx-2" data-tip data-for="update-progress-tip">🎯</div>

                <ReactTooltip id="delete-kr-tip" place="top" effect="solid">
                    Eliminar KR
                </ReactTooltip>
                <ReactTooltip id="edit-kr-tip" place="top" effect="solid">
                    Editar KR
                </ReactTooltip>
                <ReactTooltip id="update-progress-tip" place="top" effect="solid">
                    Actualizar Progreso
                </ReactTooltip>
            </div>
        </div >
    );
}

export default KrCard;
