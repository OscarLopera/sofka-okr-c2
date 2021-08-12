const OkrRepository = require("../../../domain/okr/okr/Okr-repository");
const okrFakes = require("./fakes/okrFakes");
const okrServices = require("../../../application/okr/useCases/index");
const repository = new OkrRepository();

describe("create-okr test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "createOkr")
      .mockImplementation(() => okrFakes.okrId);
  });
  it("Happypath create okr succesfully", async () => {
    //arrange
    const newOkr = {
      ...okrFakes.createOkrMock,
      description: "esto es una descripcion opcional",
      currentProgress: 50,
    };
    //act
    const createdOkrId = await okrServices.createOkrUseCase(newOkr, repository);
    //assert}
    expect(repository.createOkr).toHaveBeenCalled();
    expect(createdOkrId).toBe(okrFakes.okrId);
  });
  it("Happypath create okr without description succesfully", async () => {
    const newOkr = okrFakes.createOkrMock;

    const createdOkrId = await okrServices.createOkrUseCase(newOkr, repository);
    //assert}
    expect(repository.createOkr).toHaveBeenCalled();
    expect(createdOkrId).toBe(okrFakes.okrId);
  });
  it("Sadpath create okr with objective Errors (null)", async () => {
    const badOkr = okrFakes.badCreateOkrMock;
    await okrServices
      .createOkrUseCase({ ...badOkr, objective: null }, repository)
      .then((id) => expect(repository.createOkr).not.toHaveBeenCalled())
      .catch((e) => expect(e).toEqual(new Error("Debe contener un objetivo")));
  });
  it("Sadpath create okr with objective Errors (number)", async () => {
    const badOkr = okrFakes.badCreateOkrMock;
    await okrServices
      .createOkrUseCase({ ...badOkr, objective: 5 }, repository)
      .then((id) => expect(repository.createOkr).not.toHaveBeenCalled())
      .catch((e) =>
        expect(e).toEqual(new Error("El objetivo debe ser de tipo texto"))
      );
  });
  it("Sadpath create okr with ids Errors (null)", async () => {
    const badOkr = okrFakes.badCreateOkrMock;
    await okrServices
      .createOkrUseCase({ ...badOkr, managerId: null }, repository)
      .then((id) => expect(repository.createOkr).not.toHaveBeenCalled())
      .catch((e) => expect(e).toEqual(new Error("Debe contener un Id")));
  });
  it("Sadpath create okr with ids Errors (number)", async () => {
    const badOkr = okrFakes.badCreateOkrMock;
    await okrServices
      .createOkrUseCase({ ...badOkr, managerId: 5 }, repository)
      .then((id) => expect(repository.createOkr).not.toHaveBeenCalled())
      .catch((e) =>
        expect(e).toEqual(new Error("El id debe ser de tipo texto"))
      );
  });
});
