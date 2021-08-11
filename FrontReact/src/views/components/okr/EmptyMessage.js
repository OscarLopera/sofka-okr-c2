import React from 'react';
import questionMark from '../../assets/static/okr/question-mark.png';

const EmptyMessage = () => {

    return (

        <div className="container align-items-center d-flex flex-column py-5 my-5 fst-italic text-center ">
            <img src={questionMark} className="img-fluid my-5" style={{ width: "15rem" }} alt="question-mark" />
            <h2 >No tienes OKRs</h2>
            <h3 className="fw-bold ">¿ Por que no creas uno ?</h3>
        </div>
    );
}

export default EmptyMessage;