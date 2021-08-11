import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { loadingQuestions } from "../../../application/actions/administration/user";
import { connect } from "react-redux";
import { getQuestions } from "../../../application/selectors/administration/user";

const AdministrationPage = ({ loadingQuestions, questions }) => {

  useEffect(() => {
    loadingQuestions();
  }, []);

  return (
    <center className="mx-3 my-3">
      <h1>
        ¿Tienes dudas sobre esta aplicación? ¡No te preocupes! Acá abajo podrás
        encontrar solución a tus dudas 👇👇
      </h1>
      <br />

      <div className="accordion" id="accordionExample">
        
        <div className="accordion-item">
          {questions != null &&
            questions.map((question,index) => {
              return (
              <>
                <h2 className="accordion-header" id={"heading"+index}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse"+index}
                    aria-expanded="true"
                    aria-controls={"collapse"+index}
                  >
                    {question.pregunta}
                  </button>
                </h2>
                <div
                  id={"collapse"+index}
                  className="accordion-collapse collapse show"
                  aria-labelledby={"heading"+index}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  {question.respuesta}
                  </div>
                </div>
                </>
              );
            })}
        </div>
      </div>
      
    </center>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadingQuestions }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    questions: getQuestions(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdministrationPage);
