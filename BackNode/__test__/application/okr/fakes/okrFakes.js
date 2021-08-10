const createOkrMock = {
  title: "Titulo del Okr",
  managerId: "a1b2c3d",
  verticalId: "a1b2c3d",
  objective: "Vamos por ello",
};

const okrId = "6111e919787e790ca0f2fef5";

const badCreateOkrMock = {
  title: "Titulo del Okr",
  managerId: "a1b2c3d",
  verticalId: "a1b2c3d",
  objective: "onjetivo",
  currentProgress: 50,
};

module.exports = { createOkrMock, okrId, badCreateOkrMock };
