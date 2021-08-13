import { HomePage } from "../../pages/administration/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

describe("test HomePage", () => {
  test("aparece Descripción Sofka", () => {
    const { getByText } = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(
      getByText(
        "Nuestra Filosofía se basa en la mejora continua, compromiso y disciplina. Somos una compañía que desde sus inicios viene desarrollando el talento tanto técnico como humano, para estar a la vanguardia de la industria tecnológica generando soluciones de alto impacto para nuestros clientes con los que siempre trabajamos en equipo."
      ).textContent
    ).toEqual(
      "Nuestra Filosofía se basa en la mejora continua, compromiso y disciplina. Somos una compañía que desde sus inicios viene desarrollando el talento tanto técnico como humano, para estar a la vanguardia de la industria tecnológica generando soluciones de alto impacto para nuestros clientes con los que siempre trabajamos en equipo."
    );
  });
});
