const KrRepository = require("../../../domain/okr/kr/KrRepository");
const krFakes = require("./fakes/krFakes");
const krServices = require("../../../application/okr/useCases/index");
const repository = new KrRepository();

describe("create-kr test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "createKr")
      .mockImplementation(() => krFakes.krId);
  });
  it("Happypath create kr succesfully", async () => {
    //arrange
    const newKr = {
      ...krFakes.createKrMock,
      description: "esto es una descripcion opcional",
      currentProgress: 50,
    };
    //act
    const createdKrId = await krServices.createKrUseCase(newKr, repository);
    //assert}
    expect(repository.createKr).toHaveBeenCalled();
    expect(createdKrId).toBe(krFakes.krId);
  });
  it("Happypath create kr without description succesfully", async () => {
    const newKr = krFakes.createKrMock;

    const createdKrId = await krServices.createKrUseCase(newKr, repository);
    //assert}
    expect(repository.createKr).toHaveBeenCalled();
    expect(createdKrId).toBe(krFakes.krId);
  });
  it("Sadpath create kr with objective Errors (null)", async () => {
    const badKr = krFakes.badCreateKrMock;
    await krServices
      .createKrUseCase({ ...badKr, objective: null }, repository)
      .then((id) => expect(repository.createOkr).not.toHaveBeenCalled())
      .catch((e) => expect(e).toEqual(new Error("Debe contener un Id")));
  });
  it("Sadpath create kr with objective Errors (number)", async () => {
    const badKr = krFakes.badCreateKrMock;
    await krServices
      .createKrUseCase({ ...badKr, objective: 5 }, repository)
      .then((id) => expect(repository.createKr).not.toHaveBeenCalled())
      .catch((e) =>
        expect(e).toEqual(new Error("Debe contener un Id"))
      );
  });
  it("Sadpath create kr with ids Errors (null)", async () => {
    const badKr = krFakes.badCreateKrMock;
    await krServices
      .createKrUseCase({ ...badKr, managerId: null }, repository)
      .then((id) => expect(repository.createKr).not.toHaveBeenCalled())
      .catch((e) => expect(e).toEqual(new Error("Debe contener un Id")));
  });
  it("Sadpath create kr with ids Errors (number)", async () => {
    const badKr = krFakes.badCreateKrMock;
    await krServices
      .createKrUseCase({ ...badKr, managerId: 5 }, repository)
      .then((id) => expect(repository.createKr).not.toHaveBeenCalled())
      .catch((e) =>
        expect(e).toEqual(new Error("Debe contener un Id"))
      );
  });
});
