import React from 'react';

const OkrCard = ({ id, title }) => {
    return (
        <div>
            <div className="d-flex justify-content-between p-5 my-5 border rounded shadow">
                <h3 className="fw-bold text-uppercase text-wrap">{title}</h3>
                <div className="d-flex">
                    <div className="fs-2 mx-4">🖊</div>
                    <div className="fs-2">🧺</div>
                </div>
            </div>
        </div>
    );
}

export default OkrCard;