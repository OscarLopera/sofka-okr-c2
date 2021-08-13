// import React from "react";
// import Okruser from "./../../pages/dashboard/Okruser";
import AdministrationPage from "./../../pages/administration/AdministrationPage";
// import {eventsDummy} from "./CalendarComponent.test";
import { render } from "@testing-library/react";

describe("test support page", () => {
  test("testing support page", () => {
    const questionsDummy = {
      id: "6113516023b4da30102139d6",
      pregunta: "¿ Que es un OKR?",
      respuesta:
        "OkR son las siglas en ingles de Objectic and key results,Podemos definirlo como un método de trabajo interno que, mediante la fijación de objetivos y de sus correspondientes resultados clave, permite organizar el trabajo de la empresa, definir grupos de trabajo y realizar un seguimiento del progreso de cada empleado.",
    };
    const questions = questionsDummy;
    const loadingQuestions = jest.fn();
    const { } = render(
      <AdministrationPage
        questions={questions}
        loadingQuestions={loadingQuestions}
      />
    );

    expect(loadingQuestions).toHaveBeenCalledWith(
      questionsDummy.id,
      questionsDummy.pregunta,
      questionsDummy.respuesta
    );
  });
});
