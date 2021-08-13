import NotFoundPage from "../../pages/administration/NotFoundPage";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

describe("test NotFoundPage", () => {
  test("aparece titulo de pagina no encontrada", () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    expect(getByText("Oops! Página No Encontrada").textContent).toEqual(
      "Oops! Página No Encontrada"
    );
  });

  test("aparece cuerpo de página", () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    expect(getByText("Lo sentimos, la página que estás buscando no existe. Por suerte puedes volver.").textContent).toEqual(
      "Lo sentimos, la página que estás buscando no existe. Por suerte puedes volver."
    );
  });
});
