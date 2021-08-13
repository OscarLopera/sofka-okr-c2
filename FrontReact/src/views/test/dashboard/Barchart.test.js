import React from "react";
import renderer from "react-test-renderer";
import BarChart from "./../../pages/dashboard/user/BarChart";

test("Renders correctly", () => {
  const okr = {
  "id": "611580f7f5c150ef764a17ef",
  "objective": "Optimizar el desarrollo del proyecto final del Ciclo 2 - Training - Óscar",
  "title": "Optimización del desarrollo del proyecto final - Óscar",
  "managerId": "61157aaca2605b535bfab3ab",
  "description": "Se buscará la organización e implementación de una serie de actividades para la optimización del desarrollo del proyecto final - Óscar",
  "verticalId": "e2131bb473",
  "currentProgress": 70.0,
  "historicalProgress": [
    {
      "date": "2021/08/05",
      "progress": 30.0
    },
    {
      "date": "2021/08/06",
      "progress": 60.0
    },
    {
      "date": "2021/08/07",
      "progress": 80.0
    },
    {
      "date": "2021/08/08",
      "progress": 100.0
    }
  ],
  "krs": [
    {
      "id": "611581a1f5c150ef764a17f6",
      "idOkr": "611580f7f5c150ef764a17ef",
      "title": "OKR1 de Desarrollo - Óscar",
      "description": "Establecer horas contínuas de reunión con los líderes de grupo - Desarrollo Óscar",
      "managerName": "Óscar Lopera",
      "managerEmail": "oscarlopera@sofka.com.co",
      "startDate": "2021/08/14",
      "endDate": "2021/08/16",
      "loadValue": 80.0,
      "progress": 100.0
    },
    {
      "id": "611581a1f5c150ef764a17f7",
      "idOkr": "611580f7f5c150ef764a17ef",
      "title": "OKR2 de Desarrollo - Óscar",
      "description": "Verificación el avance en el progreso del alcance del proyecto con relación al tiempo - Desarrollo Óscar",
      "managerName": "Óscar Lopera",
      "managerEmail": "oscarlopera@sofka.com.co",
      "startDate": "2021/08/10",
      "endDate": "2021/08/12",
      "loadValue": 20.0,
      "progress": 30.0
    }
  ]
};
  const tree = renderer.create(<BarChart okr={okr} />).toJSON();
  expect(tree).toMatchSnapshot();
});
