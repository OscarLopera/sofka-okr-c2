import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import DashboardUserPage from './../../pages/dashboard/DashboardUserPage';

//Redux
import {createStore} from "redux";
import {Provier} from "react-redux";
import {render,fireEvent,cleanup} from "@testing-library/react"

describe('Prueba del componente DashboardUserPage', () =>{
  /*
    //Se crean dummys para poder simular
  const okrs = [
    {
      id: "61109c8ea304d0a23abc3484",
      objective:
        "Optimizar la planeación del proyecto final del Ciclo 2 - Training - Cristian",
      title:
        "Plan de optimización de la planeación del proyecto final del Ciclo 2 - Training - Cristian",
      managerId: "61106133609d16f1740ddf34",
      description:
        "Se buscará la organización e implementación de una serie de actividades para la optimización de la planeación del proyecto final - Cristian",
      areaInCharge: "Agile Services",
      progress: 100,
      krs: [],
    },
    {
      id: "61109c8ea304d0a23abc3485",
      objective:
        "Optimizar el desarrollo del proyecto final del Ciclo 2 - Training - Cristian",
      title:
        "Plan de optimización del desarrollo del proyecto final del Ciclo 2 - Training - Cristian",
      managerId: "61106133609d16f1740ddf34",
      description:
        "Se buscará la organización e implementación de una serie de actividades para la optimización del desarrollo del proyecto final - Cristian",
      areaInCharge: "Agile Services",
      progress: 15,
      krs: [],
    },
  ];
  const loadingOKR = jest.fn();
    //Se crea un snapshot
     const tree = renderer
    .create(<DashboardUserPage loadingOKR={loadingOKR} okrs={okrs}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  */

  it("renders with redux", () =>{
    console.log("Prueba con redux");
    //const {getByTestId, getByText} = render(<DashboardUserPage/>)
  })

})

