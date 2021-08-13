import React from "react";
import renderer from "react-test-renderer";
import Modal from "./../../components/administration/Modal";;

it("renders correctly", () => {
  const dummyActive = {
    active: true,
  };

  const dummyUser = {
    usernName: "Diego Urrego",
  };

  const dummyText = {
    p: "Estamos felices de tenerte como nuevo integrante. Esperamos poder aprender mucho de tus aportes.",
  };

  const dummyImage = {
    image:
      "https://www.sofka.com.co/wp-content/uploads/2020/08/sofka-logo-gradient-white.png",
  };

  const closeWelcome = jest.fn();

  const tree = renderer
    .create(
      <Modal active={dummyActive.active} closeWelcome={closeWelcome}>
        <div>
          <img src={dummyImage.image} alt="logo" />
          <span>
            <h1 className="text-white">¡Bienvenid@ {dummyUser.userName} !</h1>
          </span>
        </div>
        <p className="text-white">
          {dummyText.p}
        </p>
      </Modal>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
